import { Navigation } from './pieces/nav';
import { Hero } from './pieces/hero';
import { Profile } from './pieces/profile';
import { Experience } from './pieces/experience';
import { Contact } from './pieces/contact';
import { Articles } from './pieces/articles';
import { Article } from './pieces/article';
import { Courses } from './pieces/courses';
import { Course } from './pieces/course';
import { CourseReader } from './pieces/course-reader';
import { SystemPromptGenerator } from './pieces/system-prompt-generator';
import { ScrollFade } from './scroll-fade';

class HomeScreen {
  private container: HTMLElement | null = null;
  private navigation: Navigation;
  private hero: Hero;
  private profile: Profile;
  private experience: Experience;
  private contact: Contact;
  private articles: Articles;
  private article: Article;
  private courses: Courses;
  private course: Course;
  private courseReader: CourseReader;
  private systemPromptGenerator: SystemPromptGenerator;

  constructor() {
    this.navigation = new Navigation();
    this.hero = new Hero();
    this.profile = new Profile();
    this.experience = new Experience();
    this.contact = new Contact();
    this.articles = new Articles();
    this.article = new Article();
    this.courses = new Courses();
    this.course = new Course();
    this.courseReader = new CourseReader();
    this.systemPromptGenerator = new SystemPromptGenerator();
  }

  public mount(container: HTMLElement) {
    this.container = container;
    
    // Normalize path (remove trailing slash except for root)
    let path = window.location.pathname;
    if (path !== '/' && path.endsWith('/')) {
      path = path.slice(0, -1);
      // Update URL without trailing slash
      window.history.replaceState({}, '', path);
    }
    
    // Check if prerendered content exists and matches current URL
    const hasPrerenderedContent = this.checkPrerenderedContent();
    const pathMatches = hasPrerenderedContent && this.verifyPathMatchesContent(path);
    
    if (!pathMatches) {
      // No prerendered content or content doesn't match URL - clear and route normally
      this.container.innerHTML = ''; // Clear existing content
      
      // Check current path and route accordingly
    
    if (path === '/articles') {
      this.showArticlesPage();
    } else if (path.startsWith('/articles/')) {
      const slug = path.split('/articles/')[1];
      if (slug && slug.trim()) {
        this.showArticlePage(slug);
      } else {
        // Empty slug, redirect to articles list
        window.history.replaceState({}, '', '/articles');
        this.showArticlesPage();
      }
    } else if (path === '/courses') {
      this.showCoursesPage();
    } else if (path.startsWith('/course/')) {
      const coursePath = path.split('/course/')[1];
        // Check if it's a reader route: /course/{slug}/reader/module/{number}
        if (coursePath.includes('/reader/module/')) {
          const [courseSlug, modulePart] = coursePath.split('/reader/module/');
          const moduleNumber = modulePart ? parseInt(modulePart, 10) : 1;
          this.showCourseReaderPage(courseSlug, moduleNumber);
        } else if (coursePath.includes('/module/')) {
      // Check if it's a module route: /course/{slug}/module/{number}
        const [courseSlug, modulePart] = coursePath.split('/module/');
        const moduleNumber = modulePart ? parseInt(modulePart, 10) : 1;
        this.showCoursePage(courseSlug, moduleNumber);
      } else {
        // Redirect to module 1 if no module specified
        window.history.replaceState({}, '', `/course/${coursePath}/module/1`);
        this.showCoursePage(coursePath, 1);
      }
    } else if (path === '/system-prompt-generator') {
      this.showSystemPromptGeneratorPage();
    } else if (path === '/') {
      this.showHomePage();
    } else if (path === '/unknown-route') {
      this.showNotFoundPage();
    } else {
      window.history.replaceState({}, '', '/unknown-route');
      this.showNotFoundPage();
      }
    } else {
      // Prerendered content exists and matches URL - preserve it and set up navigation handlers
      this.setupPrerenderedEventListeners();
      
      // Initialize fade-in animations for homepage when prerendered content is preserved
      if (path === '/') {
        ScrollFade.init();
        // Immediately fade in elements that are already in viewport
        const fadeElements = document.querySelectorAll('.fade-in-scroll');
        fadeElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
          if (isInViewport) {
            el.classList.remove('opacity-0', 'translate-y-8');
            el.classList.add('opacity-100', 'translate-y-0');
          }
        });
        // Reinitialize experience timeline filter listeners
        setTimeout(() => {
          this.experience.reinitializeListeners();
        }, 100);
      }
      
      // Initialize quiz for Module 5 reader pages even with prerendered content
      if (path.startsWith('/course/') && path.includes('/reader/module/')) {
        const coursePath = path.split('/course/')[1];
        if (coursePath.includes('/reader/module/')) {
          const modulePart = coursePath.split('/reader/module/')[1];
          const moduleNumber = modulePart ? parseInt(modulePart, 10) : 1;
          // Wait for DOM to be ready, then initialize quiz
          setTimeout(() => {
            this.courseReader.initializeQuizIfNeeded(moduleNumber);
          }, 100);
        }
      }
    }

    // Listen for navigation changes (always set up, works for both prerendered and normal)
    window.addEventListener('popstate', () => {
      // Normalize path (remove trailing slash except for root)
      let newPath = window.location.pathname;
      if (newPath !== '/' && newPath.endsWith('/')) {
        newPath = newPath.slice(0, -1);
        // Update URL without trailing slash
        window.history.replaceState({}, '', newPath);
      }
      
      // On navigation (client-side or back/forward), always remount
      // Prerendered content is only preserved on initial page load, not on navigation
      // This ensures the page always updates when the URL changes
      if (newPath === '/articles') {
        this.showArticlesPage();
      } else if (newPath.startsWith('/articles/')) {
        const slug = newPath.split('/articles/')[1];
        if (slug && slug.trim()) {
          this.showArticlePage(slug);
        } else {
          // Empty slug, redirect to articles list
          window.history.replaceState({}, '', '/articles');
          this.showArticlesPage();
        }
      } else if (newPath === '/courses') {
        this.showCoursesPage();
      } else if (newPath.startsWith('/course/')) {
        const coursePath = newPath.split('/course/')[1];
        // Check if it's a reader route: /course/{slug}/reader/module/{number}
        if (coursePath.includes('/reader/module/')) {
          const [courseSlug, modulePart] = coursePath.split('/reader/module/');
          const moduleNumber = modulePart ? parseInt(modulePart, 10) : 1;
          this.showCourseReaderPage(courseSlug, moduleNumber);
        } else if (coursePath.includes('/module/')) {
        // Check if it's a module route: /course/{slug}/module/{number}
          const [courseSlug, modulePart] = coursePath.split('/module/');
          const moduleNumber = modulePart ? parseInt(modulePart, 10) : 1;
          this.showCoursePage(courseSlug, moduleNumber);
        } else {
          // Redirect to module 1 if no module specified
          window.history.replaceState({}, '', `/course/${coursePath}/module/1`);
          this.showCoursePage(coursePath, 1);
        }
      } else if (newPath === '/system-prompt-generator') {
        this.showSystemPromptGeneratorPage();
      } else if (newPath === '/') {
        this.showHomePage();
      } else if (newPath === '/unknown-route') {
        this.showNotFoundPage();
      } else {
        window.history.replaceState({}, '', '/unknown-route');
        this.showNotFoundPage();
      }
    });
  }

  private checkPrerenderedContent(): boolean {
    if (!this.container) return false;
    
    const app = this.container;
    const hasMultipleChildren = app.children.length > 2;
    const hasSubstantialText = app.textContent && app.textContent.trim().length > 200;
    const hasVisibleContent = app.querySelectorAll('header, nav, section, article').length > 0;
    
    return hasMultipleChildren || hasSubstantialText || hasVisibleContent;
  }

  private verifyPathMatchesContent(path: string): boolean {
    if (!this.container) return false;
    
    const app = this.container;
    
    // Simple check: look for the data-route attribute that matches the current path
    const routeSpan = app.querySelector(`span[data-route="${path}"]`);
    
    if (routeSpan) {
      return true; // Found matching route identifier
    }
    
    // Fallback: check for wrong content markers
    const textContent = app.textContent || '';
    const hasWrongContent = textContent.includes('404') || 
                           textContent.includes('Page not found');
    
    if (hasWrongContent) {
      return false;
    }
    
    // Route-specific content checks as fallback
    if (path === '/system-prompt-generator') {
      const hasGeneratorContent = textContent.includes('System Prompt Generator') ||
                                 textContent.includes('Core Identity Module') ||
                                 app.querySelector('[id*="prompt"]') ||
                                 app.querySelector('form[id*="prompt"]') ||
                                 app.querySelector('#prompt-generator-form');
      if (hasGeneratorContent && !hasWrongContent) {
        return true;
      }
    }
    
    if (path === '/articles') {
      const hasArticlesList = textContent.includes('Articles') && 
                             (app.querySelector('a[href^="/articles/"]') || 
                              textContent.includes('All Articles') ||
                              textContent.includes('Latest'));
      const hasArticleContent = app.querySelector('article'); // Individual article page
      if (hasArticlesList && !hasArticleContent && !hasWrongContent) {
        return true;
      }
    }
    
    // For unknown routes, don't preserve content
    return false;
  }

  private prerenderedLinkHandler: ((e: Event) => void) | null = null;

  private setupPrerenderedEventListeners(): void {
    // Remove existing listener first
    if (this.prerenderedLinkHandler) {
      document.removeEventListener('click', this.prerenderedLinkHandler, true);
      this.prerenderedLinkHandler = null;
    }
    
    // Create new handler with event delegation
    this.prerenderedLinkHandler = (e: Event) => {
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
          
          // Always navigate - let popstate handler decide if prerendered content should be preserved
          window.history.pushState({}, '', normalizedRoute);
          window.dispatchEvent(new PopStateEvent('popstate'));
        }
      }
    };
    
    // Add with capture to catch events early
    document.addEventListener('click', this.prerenderedLinkHandler, true);
  }

  private showHomePage(): void {
    if (!this.container) return;
    
    this.container.innerHTML = ''; // Clear existing content
    
    // Update metadata
    document.title = 'Nick Goldstein';
    
    // Mount components in order with new dark theme layout
    this.navigation.mount(this.container);
    this.hero.mount(this.container);
    this.profile.mount(this.container);
    this.experience.mount(this.container);
    this.contact.mount(this.container);

    ScrollFade.init();
    window.scrollTo(0, 0);
  }

  private showArticlesPage(): void {
    if (!this.container) return;
    
    this.container.innerHTML = ''; // Clear existing content
    
    // Update metadata
    document.title = 'Articles by Nick Goldstein';
    
    // Mount navigation and articles
    this.navigation.mount(this.container);
    this.articles.mount(this.container);

    ScrollFade.init();
    window.scrollTo(0, 0);
  }

  private showArticlePage(slug: string): void {
    if (!this.container) return;
    
    this.container.innerHTML = ''; // Clear existing content
    
    // Mount navigation and article
    this.navigation.mount(this.container);
    this.article.mount(this.container, slug);

    ScrollFade.init();
    window.scrollTo(0, 0);
  }

  private showCoursesPage(): void {
    if (!this.container) return;
    
    this.container.innerHTML = ''; // Clear existing content
    
    // Update metadata
    document.title = 'Courses by Nick Goldstein';
    
    // Mount navigation and courses
    this.navigation.mount(this.container);
    this.courses.mount(this.container);

    ScrollFade.init();
    window.scrollTo(0, 0);
  }

  private showCoursePage(courseSlug: string, moduleNumber?: number): void {
    if (!this.container) return;
    
    this.container.innerHTML = ''; // Clear existing content
    
    // Mount navigation and course
    this.navigation.mount(this.container);
    this.course.mount(this.container, courseSlug, moduleNumber);

    ScrollFade.init();
    window.scrollTo(0, 0);
  }

  private showCourseReaderPage(courseSlug: string, moduleNumber?: number): void {
    if (!this.container) return;
    
    this.container.innerHTML = ''; // Clear existing content
    
    // Mount navigation and course reader
    this.navigation.mount(this.container);
    this.courseReader.mount(this.container, courseSlug, moduleNumber);

    ScrollFade.init();
    window.scrollTo(0, 0);
  }

  private showSystemPromptGeneratorPage(): void {
    if (!this.container) return;
    
    this.container.innerHTML = ''; // Clear existing content
    
    // Update metadata
    const description = 'Build production-ready system prompts for Claude, GPT-4, and other AI platforms with our free modular prompt engineering tool. The System Prompt Generator helps developers, AI engineers, and businesses create structured, maintainable AI instructions using industry best practices.';
    const fullDescription = 'Build production-ready system prompts for Claude, GPT-4, and other AI platforms with our free modular prompt engineering tool. The System Prompt Generator helps developers, AI engineers, and businesses create structured, maintainable AI instructions using industry best practices. Design custom AI assistants, chatbots, and automation tools with clearly defined modules for identity, platform context, quality standards, request parsing, and response formatting. Features dynamic function builders, key-value mapping tools, and quality check processes. Perfect for enterprise AI deployment, custom GPT development, conversational AI applications, and AI-powered workflow automation. Export professional-grade system prompts that ensure consistent AI behavior, accurate response formatting, and scalable architecture. No prompt engineering expertise required - our intuitive interface guides you through creating effective AI instructions with modular components that can be updated, tested, and reused across projects.';
    
    document.title = 'System Prompt Generator - Professional AI Instruction Design Tool | Nick Goldstein';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = fullDescription;
    
    // Update Open Graph tags
    this.updateMetaTag('property', 'og:type', 'website');
    this.updateMetaTag('property', 'og:url', 'https://nicholasmgoldstein.com/system-prompt-generator');
    this.updateMetaTag('property', 'og:title', 'System Prompt Generator - Professional AI Instruction Design Tool');
    this.updateMetaTag('property', 'og:description', description);
    
    // Update Twitter tags
    this.updateMetaTag('property', 'twitter:card', 'summary_large_image');
    this.updateMetaTag('property', 'twitter:url', 'https://nicholasmgoldstein.com/system-prompt-generator');
    this.updateMetaTag('property', 'twitter:title', 'System Prompt Generator - Professional AI Instruction Design Tool');
    this.updateMetaTag('property', 'twitter:description', description);
    
    // Mount navigation and system prompt generator
    this.navigation.mount(this.container);
    this.systemPromptGenerator.mount(this.container);

    ScrollFade.init();
    window.scrollTo(0, 0);
  }

  private updateMetaTag(attribute: string, name: string, content: string): void {
    let metaTag = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute(attribute, name);
      document.head.appendChild(metaTag);
    }
    metaTag.content = content;
  }

  private showNotFoundPage(): void {
    if (!this.container) return;
    
    this.container.innerHTML = ''; // Clear existing content
    
    // Mount navigation
    this.navigation.mount(this.container);
    
    const section = document.createElement('section');
    section.className = 'min-h-screen py-16 px-6 fade-in-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out flex items-center justify-center';
    section.innerHTML = `
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-7xl md:text-8xl lg:text-9xl font-heading text-text mb-6">404</h1>
        <p class="text-2xl md:text-3xl lg:text-4xl text-text-secondary mb-8">Page not found</p>
        <p class="text-lg md:text-xl text-text-secondary mb-8">The page you're looking for doesn't exist.</p>
        <a 
          href="/"
          class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
          <i class="fas fa-arrow-left"></i>
          Go Home
        </a>
      </div>
    `;
    
    this.container.appendChild(section);
    
    // Setup home link
    const homeLink = section.querySelector('a[href="/"]');
    homeLink?.addEventListener('click', (e) => {
      e.preventDefault();
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
    
    ScrollFade.init();
    window.scrollTo(0, 0);
  }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.querySelector('#app') as HTMLElement;
  if (!appContainer) {
    throw new Error('App container not found');
  }

  const homeScreen = new HomeScreen();
  homeScreen.mount(appContainer);
});