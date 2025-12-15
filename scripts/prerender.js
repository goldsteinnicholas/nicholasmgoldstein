import puppeteer from 'puppeteer';
import { readFileSync, writeFileSync, mkdirSync, unlinkSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

function getAllRoutes() {
  return [
    '/',
    '/articles',
    '/courses',
    '/system-prompt-generator',
    '/articles/no-were-not-trying-to-replace-dungeon-masters-with-ai',
    '/articles/the-dystopian-future-of-ai-girlfriends',
    '/articles/learning-german-through-ai-simulations-part-i',
    '/articles/can-emstrata-dethrone-chatgpt-in-storytelling',
    '/articles/building-to-build-what-should-exist',
    '/articles/corrosive-convenience',
    '/articles/why-plato5-matters',
    '/articles/either-paradise-or-paralysis',
    '/articles/my-big-play',
    '/articles/zero-to-five',
    '/course/build-ai-platforms/module/1',
    '/course/build-ai-platforms/module/2',
    '/course/build-ai-platforms/module/3',
    '/course/build-ai-platforms/reader/module/1',
    '/course/build-ai-platforms/reader/module/2',
    '/course/build-ai-platforms/reader/module/3',
  ].map(route => {
    if (route !== '/' && route.endsWith('/')) {
      return route.slice(0, -1);
    }
    return route;
  });
}

async function prerender() {
  console.log('Starting prerender...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  const distDir = join(rootDir, 'dist');
  
  // Try multiple ports
  const portsToTry = process.env.PREVIEW_PORT ? [process.env.PREVIEW_PORT] : [4173, 4174];
  
  console.log('Waiting for preview server to be ready...');
  let baseUrl = null;
  for (let i = 0; i < 30; i++) {
    for (const port of portsToTry) {
      try {
        const url = `http://localhost:${port}`;
        const response = await fetch(url);
        if (response.ok) {
          baseUrl = url;
          console.log(`Preview server is ready on port ${port}!`);
          break;
        }
      } catch (e) {
        // Port not ready
      }
    }
    if (baseUrl) break;
    await new Promise(r => setTimeout(r, 1000));
  }
  
  if (!baseUrl) {
    throw new Error('Preview server did not become ready after 30 seconds');
  }
  
  const routes = getAllRoutes();
  console.log(`Found ${routes.length} routes to prerender\n`);
  
  for (const route of routes) {
    try {
      console.log(`Prerendering: ${route}`);
      
      await page.goto(`${baseUrl}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });
      
      await page.waitForSelector('#app', { timeout: 10000 });
      
      // Wait for router to handle route and verify content matches
      try {
        await page.evaluate((route) => {
          return new Promise((resolve, reject) => {
            let attempts = 0;
            const maxAttempts = 100;
            
            const checkRoute = () => {
              attempts++;
              const path = window.location.pathname;
              const app = document.querySelector('#app');
              
              if (!app) {
                if (attempts < maxAttempts) {
                  setTimeout(checkRoute, 100);
                  return;
                }
                reject(new Error(`No app container found for ${route}`));
                return;
              }
              
              const textContent = app.textContent || '';
              
              // Route-specific content verification
              if (path.startsWith('/articles/')) {
                const hasArticle = app.querySelector('article') || 
                                  textContent.length > 500;
                const hasWrongContent = textContent.includes('404') || 
                                       (path !== '/' && textContent.includes('Home'));
                if (hasArticle && !hasWrongContent) {
                  resolve();
                  return;
                }
              } else if (path === '/articles') {
                const hasArticlesList = textContent.includes('Articles') || 
                                      app.querySelector('a[href^="/articles/"]');
                const hasWrongContent = textContent.includes('404');
                if (hasArticlesList && !hasWrongContent) {
                  resolve();
                  return;
                }
              } else if (path.startsWith('/course/')) {
                const hasCourseContent = textContent.length > 300;
                const hasWrongContent = textContent.includes('404');
                if (hasCourseContent && !hasWrongContent) {
                  resolve();
                  return;
                }
              } else if (path === '/courses') {
                const hasCoursesList = textContent.includes('Courses') || 
                                     app.querySelector('a[href^="/course/"]');
                const hasWrongContent = textContent.includes('404');
                if (hasCoursesList && !hasWrongContent) {
                  resolve();
                  return;
                }
              } else if (path === '/system-prompt-generator') {
                const hasGenerator = textContent.includes('System Prompt') || 
                                   app.querySelector('[id*="prompt"]');
                const hasWrongContent = textContent.includes('404');
                if (hasGenerator && !hasWrongContent) {
                  resolve();
                  return;
                }
              } else if (path === '/') {
                const hasLandingContent = app.children.length > 0;
                const hasWrongContent = textContent.includes('404');
                if (hasLandingContent && !hasWrongContent) {
                  resolve();
                  return;
                }
              }
              
              if (attempts < maxAttempts) {
                setTimeout(checkRoute, 100);
              } else {
                reject(new Error(`Content for ${route} (path: ${path}) did not match. Preview: ${textContent.substring(0, 100)}...`));
              }
            };
            
            setTimeout(checkRoute, 1000);
          });
        }, route);
      } catch (contentError) {
        console.error(`✗ Content verification failed for ${route}:`, contentError.message);
        continue;
      }
      
      // Wait for content selectors
      try {
        await Promise.race([
          page.waitForSelector('section', { timeout: 5000 }).catch(() => null),
          page.waitForSelector('article', { timeout: 5000 }).catch(() => null),
          page.waitForSelector('main', { timeout: 5000 }).catch(() => null)
        ]);
      } catch (e) {
        // Content might already be loaded
      }
      
      // Extra wait for animations
      await new Promise(r => setTimeout(r, 2000));
      
      const html = await page.content();
      
      const pathParts = route.split('/').filter(Boolean);
      const filePath = pathParts.length > 0
        ? join(distDir, ...pathParts, 'index.html')
        : join(distDir, 'index.html');
      
      const dirPath = pathParts.length > 0
        ? join(distDir, ...pathParts)
        : distDir;
      mkdirSync(dirPath, { recursive: true });
      
      writeFileSync(filePath, html);
      
      // Verify saved file
      const savedHtml = readFileSync(filePath, 'utf-8');
      const savedText = savedHtml.replace(/<[^>]*>/g, ' ');
      
      let verificationPassed = false;
      let verificationError = '';
      
      if (route.startsWith('/articles/')) {
        const hasArticleContent = savedHtml.includes('<article') ||
                                 savedText.includes('article') ||
                                 savedText.length > 500;
        const hasWrongContent = savedText.includes('404') ||
                               (route !== '/' && savedText.includes('Home'));
        if (hasArticleContent && !hasWrongContent) {
          verificationPassed = true;
        } else {
          verificationError = `Expected article content but found: ${hasWrongContent ? 'wrong page' : 'no article content'}`;
        }
      } else if (route === '/articles') {
        const hasArticlesList = savedText.includes('Articles') ||
                               savedHtml.includes('href="/articles/');
        const hasWrongContent = savedText.includes('404');
        if (hasArticlesList && !hasWrongContent) {
          verificationPassed = true;
        } else {
          verificationError = `Expected articles list but found: ${hasWrongContent ? 'wrong page' : 'no articles list'}`;
        }
      } else if (route.startsWith('/course/')) {
        const hasCourseContent = savedText.length > 300;
        const hasWrongContent = savedText.includes('404');
        if (hasCourseContent && !hasWrongContent) {
          verificationPassed = true;
        } else {
          verificationError = `Expected course content but found: ${hasWrongContent ? 'wrong page' : 'no course content'}`;
        }
      } else if (route === '/courses') {
        const hasCoursesList = savedText.includes('Courses') ||
                              savedHtml.includes('href="/course/');
        const hasWrongContent = savedText.includes('404');
        if (hasCoursesList && !hasWrongContent) {
          verificationPassed = true;
        } else {
          verificationError = `Expected courses list but found: ${hasWrongContent ? 'wrong page' : 'no courses list'}`;
        }
      } else if (route === '/system-prompt-generator') {
        const hasGenerator = savedText.includes('System Prompt') ||
                            savedHtml.includes('prompt');
        const hasWrongContent = savedText.includes('404');
        if (hasGenerator && !hasWrongContent) {
          verificationPassed = true;
        } else {
          verificationError = `Expected generator content but found: ${hasWrongContent ? 'wrong page' : 'no generator content'}`;
        }
      } else if (route === '/') {
        const hasLandingContent = savedHtml.includes('<div') || 
                                 savedHtml.includes('<section');
        const hasWrongContent = savedText.includes('404');
        if (hasLandingContent && !hasWrongContent) {
          verificationPassed = true;
        } else {
          verificationError = `Expected landing content but found: ${hasWrongContent ? 'wrong page' : 'no landing content'}`;
        }
      } else {
        verificationPassed = savedText.trim().length > 200;
        if (!verificationPassed) {
          verificationError = 'File appears to be empty or too short';
        }
      }
      
      if (verificationPassed) {
        console.log(`✓ Saved and verified: ${filePath}`);
      } else {
        console.error(`✗ VERIFICATION FAILED for ${route}: ${verificationError}`);
        try {
          unlinkSync(filePath);
          console.error(`  Deleted incorrect file: ${filePath}`);
        } catch (e) {
          console.error(`  Could not delete file: ${e.message}`);
        }
      }
      
    } catch (error) {
      console.error(`✗ Failed to prerender ${route}:`, error.message);
    }
  }
  
  await browser.close();
  console.log('\n✅ Prerender complete!');
}

prerender().catch(error => {
  console.error('Prerender failed:', error);
  process.exit(1);
});
