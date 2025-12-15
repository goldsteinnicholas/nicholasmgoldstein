# Static HTML Prerendering for SPAs: A Complete Guide

A comprehensive guide to implementing static HTML prerendering for Single Page Applications, making them crawlable by search engines and AI scrapers.

## The Problem

Single Page Applications (SPAs) render content client-side using JavaScript. Search engines and lightweight AI scrapers often don't execute JavaScript, so they see empty pages instead of your content. This hurts SEO and prevents AI tools from accessing your content.

## The Solution: Puppeteer Prerendering

Implement a build-time prerendering system using Puppeteer that:
1. Visits each route in a headless browser
2. Waits for content to fully render
3. Saves the complete HTML to static files
4. Deploys those files so crawlers get fully rendered HTML

## Quick Implementation Checklist

Follow these steps in order:

- [ ] **Step 1**: Install Puppeteer (`npm install --save-dev puppeteer`)
- [ ] **Step 2**: Create `scripts/prerender.js` (copy template, customize route list and verification)
- [ ] **Step 3**: Update `package.json` scripts (add `prerender` and `build:deploy`)
- [ ] **Step 4**: Create `scripts/build-deploy.sh` (copy exact script)
- [ ] **Step 5**: Update router to detect prerendered content (copy detection pattern)
- [ ] **Step 6**: Add event listener management (copy event delegation pattern)
- [ ] **Step 7**: Update `.gitignore` (add exceptions for prerendered HTML files)
- [ ] **Step 8**: Create `public/_redirects` (customize routes for your app)
- [ ] **Step 9**: Create `public/_headers` (customize routes for your app)
- [ ] **Step 10**: Test locally (`npm run build:deploy`)
- [ ] **Step 11**: Deploy and verify (`curl https://yoursite.com/your-route`)

**Customization Required:**
- Route list in prerender script (Step 2)
- Content verification checks (Step 2) - customize for your route structure
- Router detection selectors (Step 5) - adjust `#app` or `main` selector
- Route-specific verification in router (Step 5)
- Cloudflare redirects (Step 8) - update with your routes
- Cloudflare headers (Step 9) - update with your routes

## Implementation Steps

### 1. Install Dependencies

```bash
npm install --save-dev puppeteer
```

### 2. Create Prerender Script

Create `scripts/prerender.js` with **complete content verification**:

```javascript
import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync, readFileSync, unlinkSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// OPTION 1: Static route list
function getAllRoutes() {
  return [
    '/',
    '/about',
    '/blog',
    '/blog/article-1',
    // ... all your public routes
  ].map(route => {
    // Normalize routes (remove trailing slashes except root)
    if (route !== '/' && route.endsWith('/')) {
      return route.slice(0, -1);
    }
    return route;
  });
}

// OPTION 2: Dynamic route extraction (example for extracting from source files)
function extractRoutesFromSource() {
  // Example: Extract blog slugs from a source file
  const sourcePath = join(rootDir, 'src', 'data', 'blog.ts');
  const content = readFileSync(sourcePath, 'utf-8');
  
  // Extract slug values (adjust regex for your format)
  const slugMatches = content.matchAll(/slug:\s*['"]([^'"]+)['"]/g);
  const slugs = Array.from(slugMatches, match => match[1]);
  
  const routes = ['/blog'];
  slugs.forEach(slug => {
    routes.push(`/blog/${slug}`);
  });
  
  return routes.map(route => {
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
  
  // Try multiple ports - Vite uses 4173 by default, falls back to 4174
  const portsToTry = process.env.PREVIEW_PORT 
    ? [process.env.PREVIEW_PORT]
    : [4173, 4174];
  
  // Wait for preview server to be ready (check both ports)
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
        // Port not ready, try next
      }
    }
    if (baseUrl) break;
    await new Promise(r => setTimeout(r, 1000));
  }
  if (!baseUrl) {
    throw new Error('Preview server did not become ready after 30 seconds');
  }
  
  // Get all routes to prerender
  const routes = getAllRoutes(); // or extractRoutesFromSource()
  console.log(`Found ${routes.length} routes to prerender:`, routes);
  
  for (const route of routes) {
    try {
      console.log(`\nPrerendering: ${route}`);
      
      // Navigate to the route
      await page.goto(`${baseUrl}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });
      
      // Wait for the app container
      await page.waitForSelector('#app', { timeout: 10000 });
      
      // CRITICAL: Wait for router to handle route and verify content matches route
      // This prevents saving wrong content (e.g., homepage HTML for /blog routes)
      try {
        await page.evaluate((route) => {
          return new Promise((resolve, reject) => {
            let attempts = 0;
            const maxAttempts = 100; // 10 seconds max (100 * 100ms)
            
            const checkRoute = () => {
              attempts++;
              const path = window.location.pathname;
              const app = document.querySelector('#app');
              
              if (!app) {
                if (attempts < maxAttempts) {
                  setTimeout(checkRoute, 100);
                  return;
                }
                reject(new Error(`Timeout: No app container found for ${route}`));
                return;
              }
              
              const textContent = app.textContent || '';
              
              // ⚠️ CUSTOMIZE: Route-specific content verification
              // Replace these checks with your actual route structure and content markers
              
              if (path.startsWith('/blog')) {
                const hasArticle = app.querySelector('article');
                const hasBlogText = textContent.includes('Blog') || 
                                   textContent.includes('Article');
                const hasWrongContent = textContent.includes('Home') || 
                                       textContent.includes('About');
                
                if ((hasArticle || hasBlogText) && !hasWrongContent) {
                  resolve();
                  return;
                }
              }
              
              if (path === '/about') {
                const hasAboutText = textContent.includes('About') || 
                                   textContent.includes('About Us');
                const hasWrongContent = textContent.includes('Blog') || 
                                       textContent.includes('Home');
                
                if (hasAboutText && !hasWrongContent) {
                  resolve();
                  return;
                }
              }
              
              if (path === '/') {
                const hasLandingContent = app.children.length > 0;
                const hasWrongContent = textContent.includes('Blog') || 
                                       textContent.includes('About');
                
                if (hasLandingContent && !hasWrongContent) {
                  resolve();
                  return;
                }
              }
              
              // Retry after a short delay
              if (attempts < maxAttempts) {
                setTimeout(checkRoute, 100);
              } else {
                reject(new Error(`Timeout: Content for ${route} (path: ${path}) did not match. Text preview: ${textContent.substring(0, 100)}...`));
              }
            };
            
            // Start checking after router initializes
            setTimeout(checkRoute, 1000);
          });
        }, route);
      } catch (contentError) {
        console.error(`✗ Content verification failed for ${route}:`, contentError.message);
        console.error(`  Wrong content was rendered. Skipping this route.`);
        continue; // Skip this route, don't save wrong content
      }
      
      // Wait for content selectors (adjust for your app)
      try {
        await Promise.race([
          page.waitForSelector('section', { timeout: 5000 }).catch(() => null),
          page.waitForSelector('article', { timeout: 5000 }).catch(() => null),
          page.waitForSelector('[data-content]', { timeout: 5000 }).catch(() => null)
        ]);
      } catch (e) {
        // Content might already be loaded, continue
      }
      
      // Extra wait for animations or lazy-loaded content
      await new Promise(r => setTimeout(r, 2000));
      
      // Get the full HTML
      const html = await page.content();
      
      // Determine file path
      const pathParts = route.split('/').filter(Boolean);
      const filePath = pathParts.length > 0
        ? join(distDir, ...pathParts, 'index.html')
        : join(distDir, 'index.html');
      
      // Create directory structure
      const dirPath = pathParts.length > 0
        ? join(distDir, ...pathParts)
        : distDir;
      mkdirSync(dirPath, { recursive: true });
      
      // Write the prerendered HTML
      writeFileSync(filePath, html);
      
      // CRITICAL: Verify saved file contains correct content
      const savedHtml = readFileSync(filePath, 'utf-8');
      const savedText = savedHtml.replace(/<[^>]*>/g, ' '); // Strip HTML tags
      
      let verificationPassed = false;
      let verificationError = '';
      
      // ⚠️ CUSTOMIZE: File verification checks
      // Replace these with your actual route structure and content markers
      if (route.startsWith('/blog')) {
        const hasBlogContent = savedHtml.includes('<article') ||
                              savedText.includes('Blog') ||
                              savedText.includes('Article');
        const hasWrongContent = savedText.includes('Home') ||
                               savedText.includes('About');
        
        if (hasBlogContent && !hasWrongContent) {
          verificationPassed = true;
        } else {
          verificationError = `Expected /blog content but found: ${hasWrongContent ? 'wrong page' : 'no blog content'}`;
        }
      } else if (route === '/about') {
        const hasAboutContent = savedText.includes('About');
        const hasWrongContent = savedText.includes('Blog') ||
                               savedText.includes('Home');
        
        if (hasAboutContent && !hasWrongContent) {
          verificationPassed = true;
        } else {
          verificationError = `Expected /about content but found: ${hasWrongContent ? 'wrong page' : 'no about content'}`;
        }
      } else if (route === '/') {
        const hasLandingContent = savedHtml.includes('<div') || 
                                 savedHtml.includes('<section');
        const hasWrongContent = savedText.includes('Blog') ||
                               savedText.includes('About');
        
        if (hasLandingContent && !hasWrongContent) {
          verificationPassed = true;
        } else {
          verificationError = `Expected / content but found: ${hasWrongContent ? 'wrong page' : 'no landing content'}`;
        }
      } else {
        // For other routes, just check that it's not empty
        verificationPassed = savedText.trim().length > 200;
        if (!verificationPassed) {
          verificationError = 'File appears to be empty or too short';
        }
      }
      
      if (verificationPassed) {
        console.log(`✓ Saved and verified: ${filePath}`);
      } else {
        console.error(`✗ VERIFICATION FAILED for ${route}: ${verificationError}`);
        console.error(`  File saved but content is incorrect: ${filePath}`);
        // Delete the incorrect file
        try {
          unlinkSync(filePath);
          console.error(`  Deleted incorrect file: ${filePath}`);
        } catch (e) {
          console.error(`  Could not delete file: ${e.message}`);
        }
      }
      
    } catch (error) {
      console.error(`✗ Failed to prerender ${route}:`, error.message);
      // Continue with other routes even if one fails
    }
  }
  
  await browser.close();
  console.log('\n✅ Prerender complete!');
}

prerender().catch(error => {
  console.error('Prerender failed:', error);
  process.exit(1);
});
```

**Key features of this script:**
- **Multi-port server detection** - Tries multiple ports (4173, 4174) for preview server
- **Content verification in browser** - Waits for route-specific content before saving
- **File verification after saving** - Double-checks saved HTML is correct
- **Deletes incorrect files** - Removes files with wrong content automatically
- **Route normalization** - Handles trailing slashes consistently
- **Error handling** - Continues with other routes if one fails

### 3. Update package.json

```json
{
  "scripts": {
    "build": "tsc && vite build",
    "preview": "vite preview",
    "prerender": "node scripts/prerender.js",
    "build:deploy": "bash scripts/build-deploy.sh"
  },
  "devDependencies": {
    "puppeteer": "^23.11.1"
  }
}
```

**Note:** The `build:deploy` script uses the `build-deploy.sh` script which properly handles the preview server lifecycle. For local testing, you can use `build:prerender` if you prefer, but the bash script is more reliable for CI/CD.

### 4. Router Detection Pattern

In your router:

```typescript
// Generic router detection for prerendered content
function checkPrerenderedContent(): boolean {
  // ⚠️ CUSTOMIZE: Adjust selector to match your app container
  const app = document.querySelector('#app') || document.querySelector('main');
  if (!app) return false;
  
  // Check for prerendered content indicators
  const hasMultipleChildren = app.children.length > 2;
  const hasSubstantialText = app.textContent && app.textContent.trim().length > 200;
  const hasVisibleContent = app.querySelectorAll('[data-prerendered]').length > 0 ||
                           app.querySelectorAll('.fade-in.opacity-100').length > 0;
  
  const hasContent = hasMultipleChildren || hasSubstantialText || hasVisibleContent;
  
  if (!hasContent) return false;
  
  // Verify content matches current route
  const currentPath = window.location.pathname;
  const textContent = app.textContent || '';
  
  // ⚠️ CUSTOMIZE: Add route-specific verification for your routes
  if (currentPath.startsWith('/blog')) {
    const hasBlogContent = app.querySelector('article') || 
                          textContent.includes('blog') ||
                          textContent.includes('article');
    const hasWrongContent = textContent.includes('404') ||
                           textContent.includes('homepage');
    return hasBlogContent && !hasWrongContent;
  }
  
  // Default: content exists and seems valid
  return true;
}

// In your router initialization
export function initializeRouter() {
  // Normalize path (remove trailing slashes)
  let initialPath = window.location.pathname;
  if (initialPath !== '/' && initialPath.endsWith('/')) {
    history.replaceState({}, '', initialPath.slice(0, -1));
    initialPath = initialPath.slice(0, -1);
  }
  
  const hasPrerenderedContent = checkPrerenderedContent();
  const isLoggedIn = !!localStorage.getItem('userId'); // Adjust for your auth
  
  if (!hasPrerenderedContent) {
    // No prerendered content - render normally
    handleRoute();
  } else {
    if (isLoggedIn) {
      // User logged in - replace with logged-in version
      handleRoute();
    } else {
      // User not logged in - preserve prerendered content
      setupPrerenderedEventListeners();
    }
  }
}
```

### 5. Event Listener Management

```typescript
// Store handler reference for proper cleanup
let prerenderedLinkHandler: ((e: Event) => void) | null = null;

function setupPrerenderedEventListeners() {
  // Remove existing listener first
  if (prerenderedLinkHandler) {
    document.removeEventListener('click', prerenderedLinkHandler, true);
    prerenderedLinkHandler = null;
  }
  
  // Create new handler with event delegation
  prerenderedLinkHandler = (e: Event) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a[href^="/"]') as HTMLAnchorElement;
    
    if (link && link.href) {
      const href = link.getAttribute('href');
      if (href && href.startsWith('/') && !href.startsWith('//')) {
        e.preventDefault();
        e.stopPropagation();
        
        // Normalize route
        let normalizedRoute = href;
        if (normalizedRoute !== '/' && normalizedRoute.endsWith('/')) {
          normalizedRoute = normalizedRoute.slice(0, -1);
        }
        
        // Navigate using your router
        navigate(normalizedRoute);
      }
    }
  };
  
  // Add with capture to catch events early
  document.addEventListener('click', prerenderedLinkHandler, true);
}

function removePrerenderedEventListeners() {
  if (prerenderedLinkHandler) {
    document.removeEventListener('click', prerenderedLinkHandler, true);
    prerenderedLinkHandler = null;
  }
}

// Call this when mounting normal routes
function handleRoute() {
  // Remove prerendered listeners
  removePrerenderedEventListeners();
  
  // Unmount current screen/component
  if (currentScreen && typeof currentScreen.unmount === 'function') {
    currentScreen.unmount();
    currentScreen = null;
  }
  
  // Clear content
  // ⚠️ CUSTOMIZE: Adjust selector to match your app container
  const app = document.querySelector('#app') || document.querySelector('main');
  if (app) app.innerHTML = '';
  
  // Mount new route
  // ... your routing logic
}
```

### 6. Prevent Duplicate Mounting

```typescript
// Use a flag to prevent double-calling
let routeHandled = false;

function initializeRouter() {
  // ... prerendered content check ...
  
  if (hasPrerenderedContent && isLoggedIn) {
    const handleRouteOnce = () => {
      if (routeHandled) return;
      routeHandled = true;
      setTimeout(() => handleRoute(), 100);
    };
    
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      handleRouteOnce();
    } else {
      window.addEventListener('load', handleRouteOnce, { once: true });
    }
  }
}

// In components, remove existing elements before creating
function createNavigationButtons() {
  // Remove existing buttons
  const existing = document.getElementById('nav-button');
  if (existing) existing.remove();
  
  // Create new button
  const button = document.createElement('button');
  button.id = 'nav-button';
  // ... setup button
  document.body.appendChild(button);
}

// Always unmount before mounting
function mountComponent(container: HTMLElement) {
  // Unmount first
  this.unmount();
  
  // Clear container
  container.innerHTML = '';
  
  // Mount new content
  // ...
}
```

### 7. Animation Conflicts

If you have fade-in animations, only animate elements that start hidden:

```typescript
// In your animation utility
function initFadeAnimations() {
  // Only observe elements that are initially hidden
  const elements = document.querySelectorAll('.fade-in.opacity-0');
  
  elements.forEach(element => {
    // Set up intersection observer
    // Don't touch elements that are already visible (opacity-100)
  });
}
```

### 8. Build Script for CI/CD

Create `scripts/build-deploy.sh`:

```bash
#!/bin/bash
set -e

# Build the project
npm run build

# Run preview server and prerender in a subshell
# This isolates the background process from the main script's job control
(
  npm run preview &
  sleep 3
  npm run prerender || true
  pkill -f 'vite preview' || true
) &

# Wait for subshell to complete prerender
wait

exit 0
```

**Why this structure is critical:**

1. **Subshell isolation `(...) &`**: 
   - The parentheses create a subshell that runs in the background
   - This isolates the background processes from the main script's job control
   - Without this, `pkill` signals can propagate to the main script, causing it to exit with code 143 (SIGTERM)
   - This was the root cause of build hangs in Cloudflare Pages CI/CD

2. **Background process `&`**:
   - `npm run preview &` starts the preview server in the background
   - The script continues immediately instead of blocking

3. **Sleep before prerender**:
   - `sleep 3` gives the preview server time to start
   - Without this, the prerender script might try to connect before the server is ready

4. **Error handling `|| true`**:
   - `npm run prerender || true` ensures the script continues even if prerender fails
   - `pkill -f 'vite preview' || true` ensures cleanup happens even if the process isn't found
   - This prevents the script from failing due to cleanup issues

5. **Wait for completion**:
   - `wait` ensures the subshell completes before the main script exits
   - Without this, the script might exit before prerendering finishes

6. **Process cleanup**:
   - `pkill -f 'vite preview'` kills the preview server after prerendering
   - Adjust the pattern to match your preview server command (e.g., `'next preview'`, `'npm run serve'`)

**Alternative (simpler, but less reliable in CI/CD):**
```bash
npm run build
npm run preview &
sleep 3
npm run prerender
pkill -f 'vite preview'
```
This can work locally but often hangs in CI/CD environments due to job control issues.

### 9. Git Configuration

Update `.gitignore` to include prerendered files:

```gitignore
# Ignore dist by default
dist

# But include prerendered HTML files
!dist/index.html
!dist/blog/
!dist/blog/**/index.html
!dist/about/
!dist/about/index.html
# Add exceptions for each prerendered route
```

### 10. Cloudflare Pages Configuration

#### Redirects File

Create `public/_redirects`:

```
# Serve prerendered static files when they exist
/blog /blog/index.html 200
/blog/* /blog/*/index.html 200
/about /about/index.html 200

# Fall back to SPA for all other routes
/* /index.html 200
```

**Note:** Cloudflare Pages serves `index.html` files from subdirectories automatically, but explicit redirects ensure correct routing.

#### Headers File

Create `public/_headers`:

```
/blog/*
  X-Robots-Tag: index, follow
  Cache-Control: public, max-age=3600

/about
  X-Robots-Tag: index, follow
  Cache-Control: public, max-age=3600
```

**Purpose:**
- `X-Robots-Tag: index, follow` tells search engines to index and follow links
- `Cache-Control` improves performance by caching prerendered content

## Key Principles

### 1. Always Verify Content
Don't trust that the prerender script saved the right thing. Verify both in the browser and after saving.

### 2. Normalize Routes Consistently
Handle trailing slashes everywhere - in prerender script, router, and navigation.

### 3. Clean Up Event Listeners
Store handler references so you can properly remove them. This prevents conflicts and memory leaks.

### 4. Unmount Before Mounting
Always cleanup components before remounting to prevent duplicates.

### 5. Check for Existing Elements
Remove DOM elements before creating new ones to prevent duplicates.

### 6. Handle Auth States
Prerendered pages are for crawlers (logged-out), but users need logged-in UI. Detect and handle both cases.

### 7. Isolate Build Processes
Use subshells for background processes in CI/CD to prevent hangs.

## Testing

After deployment, verify prerendering worked:

```bash
# Should return full HTML, not empty page
curl https://yoursite.com/blog/article-1

# View source in browser - should see article content
# Not just base index.html with empty #app div
```

## Performance Considerations

- **Build time**: Prerendering adds time (visiting each route)
- **Selective prerendering**: Only prerender public routes that need SEO
- **Incremental builds**: Consider only prerendering changed routes
- **Caching**: Use CDN caching for prerendered files

## Troubleshooting

### Wrong content being served
- Check content verification in prerender script
- Verify route normalization
- Check hosting redirect rules

### Duplicate components
- Ensure proper unmounting before mounting
- Remove existing DOM elements before creating
- Check for multiple event listeners

### Build hangs
- Use subshell isolation for background processes
- Add timeouts to prerender script
- Check for zombie processes

### Animations firing twice
- Only animate elements that start hidden
- Check for prerendered content before initializing animations

## Future Improvements

1. **Incremental prerendering** - Only prerender routes that changed
2. **Parallel prerendering** - Use multiple Puppeteer instances
3. **On-demand prerendering** - Prerender on first request (with caching)
4. **Better content verification** - Use semantic HTML checks
5. **Automated testing** - Verify prerendered content in CI/CD

## Conclusion

Prerendering SPAs for SEO is complex but achievable. The key is handling the transition between static HTML and dynamic JavaScript carefully, ensuring proper cleanup, and verifying everything works correctly. This guide provides a solid foundation for vanilla JavaScript/TypeScript SPAs.
