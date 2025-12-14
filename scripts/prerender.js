import puppeteer from 'puppeteer';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const routes = [
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
];

async function prerender() {
  console.log('Starting prerender...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const distDir = join(rootDir, 'dist');
  const baseUrl = 'http://localhost:4173'; // Vite preview port (use 5173 for dev)
  
  for (const route of routes) {
    try {
      console.log(`Prerendering: ${route}`);
      await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
      await page.waitForSelector('#app', { timeout: 10000 });
      await new Promise(r => setTimeout(r, 1000)); // Wait for animations
      
      const html = await page.content();
      const pathParts = route.split('/').filter(Boolean);
      const filePath = pathParts.length > 0 
        ? join(distDir, ...pathParts, 'index.html')
        : join(distDir, 'index.html');
      
      // Create directory structure for the file
      const dirPath = pathParts.length > 0 
        ? join(distDir, ...pathParts)
        : distDir;
      mkdirSync(dirPath, { recursive: true });
      writeFileSync(filePath, html);
      console.log(`✓ ${filePath}`);
    } catch (error) {
      console.error(`✗ Failed ${route}:`, error.message);
    }
  }
  
  await browser.close();
  console.log('Prerender complete!');
}

prerender();

