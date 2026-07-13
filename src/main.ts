import { Navigation } from './pieces/nav';
import { Profile } from './pieces/profile';
import { Experience } from './pieces/experience';
import { HomepageTimeline } from './pieces/homepage-timeline';
// import { Articles } from './pieces/articles';
// import { Article } from './pieces/article';
// import { Courses } from './pieces/courses';
// import { Course } from './pieces/course';
// import { CourseReader } from './pieces/course-reader';
// import { SystemPromptGenerator } from './pieces/system-prompt-generator';
// import { Podcast } from './pieces/podcast';
import { ScrollFade, PanelReveal } from './scroll-fade';

/** When true, the home route (`/`) omits the global header and slide-out nav. Other routes are unchanged. */
const portfolioMode = true;

/** When true, only the homepage is served; all other routes redirect to `/`. */
const homepageOnlyMode = true;

class HomeScreen {
  private container: HTMLElement | null = null;
  private navigation: Navigation;
  private profile: Profile;
  private experience: Experience;
  private homepageTimeline: HomepageTimeline;
  // private articles: Articles;
  // private article: Article;
  // private courses: Courses;
  // private course: Course;
  // private courseReader: CourseReader;
  // private systemPromptGenerator: SystemPromptGenerator;
  // private podcast: Podcast;
  private horizontalWheelHandler: EventListener | null = null;
  private horizontalScrollContainer: HTMLElement | null = null;

  constructor() {
    this.navigation = new Navigation();
    this.profile = new Profile();
    this.experience = new Experience();
    this.homepageTimeline = new HomepageTimeline();
    // this.articles = new Articles();
    // this.article = new Article();
    // this.courses = new Courses();
    // this.course = new Course();
    // this.courseReader = new CourseReader();
    // this.systemPromptGenerator = new SystemPromptGenerator();
    // this.podcast = new Podcast();
  }

  private isStaticFile(path: string): boolean {
    const staticExtensions = ['.pdf', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.webp', '.css', '.js', '.json', '.xml', '.txt'];
    return staticExtensions.some(ext => path.toLowerCase().endsWith(ext));
  }

  public mount(container: HTMLElement) {
    this.container = container;
    
    // Normalize path (remove trailing slash except for root)
    let path = window.location.pathname;
    if (path !== '/' && path.endsWith('/')) {
      path = path.slice(0, -1);
      window.history.replaceState({}, '', path);
    }
    
    // Don't handle static files - let the browser handle them naturally
    if (this.isStaticFile(path)) {
      return;
    }

    if (homepageOnlyMode && path !== '/') {
      window.history.replaceState({}, '', '/');
      path = '/';
    }
    
    // Check if prerendered content exists and matches current URL
    const hasPrerenderedContent = this.checkPrerenderedContent();
    const pathMatches = hasPrerenderedContent && this.verifyPathMatchesContent(path);
    
    if (!pathMatches) {
      this.container.innerHTML = '';
      this.routeTo(path);
    } else {
      if (!(portfolioMode && path === '/')) {
        this.setupPrerenderedEventListeners();
      }
      
      if (!(portfolioMode && path === '/')) {
        setTimeout(() => {
          this.navigation.reinitializeListeners();
        }, 100);
      } else {
        this.container.querySelector('header:has(#nav-menu-button)')?.remove();
        document.getElementById('nav-panel')?.remove();
        document.getElementById('nav-overlay')?.remove();
      }
      
      if (path === '/') {
        const scrollContainer = this.container?.querySelector(
          '.homepage-horizontal-scroll',
        ) as HTMLElement | null;
        if (scrollContainer) {
          this.initializeHomepage(scrollContainer);
        } else {
          this.showHomePage();
        }
      }
    }

    window.addEventListener('popstate', () => {
      this.navigation.closeNav();
      
      let newPath = window.location.pathname;
      if (newPath !== '/' && newPath.endsWith('/')) {
        newPath = newPath.slice(0, -1);
        window.history.replaceState({}, '', newPath);
      }
      
      if (this.isStaticFile(newPath)) {
        return;
      }

      if (homepageOnlyMode && newPath !== '/') {
        window.history.replaceState({}, '', '/');
        newPath = '/';
      }

      this.routeTo(newPath);
    });
  }

  private routeTo(path: string): void {
    if (path === '/') {
      this.showHomePage();
    } else {
      // Non-home routes disabled in homepageOnlyMode; redirect handled before this is called
      window.history.replaceState({}, '', '/');
      this.showHomePage();
    }

    /* Disabled routes — uncomment to restore articles, courses, podcast, etc.
    if (path === '/articles') {
      this.showArticlesPage();
    } else if (path.startsWith('/articles/')) {
      const slug = path.split('/articles/')[1];
      if (slug && slug.trim()) {
        this.showArticlePage(slug);
      } else {
        window.history.replaceState({}, '', '/articles');
        this.showArticlesPage();
      }
    } else if (path === '/courses') {
      this.showCoursesPage();
    } else if (path.startsWith('/course/')) {
      const coursePath = path.split('/course/')[1];
      if (coursePath.includes('/reader/module/')) {
        const [courseSlug, modulePart] = coursePath.split('/reader/module/');
        const moduleNumber = modulePart ? parseInt(modulePart, 10) : 1;
        this.showCourseReaderPage(courseSlug, moduleNumber);
      } else if (coursePath.includes('/module/')) {
        const [courseSlug, modulePart] = coursePath.split('/module/');
        const moduleNumber = modulePart ? parseInt(modulePart, 10) : 1;
        this.showCoursePage(courseSlug, moduleNumber);
      } else {
        window.history.replaceState({}, '', `/course/${coursePath}/module/1`);
        this.showCoursePage(coursePath, 1);
      }
    } else if (path === '/system-prompt-generator') {
      this.showSystemPromptGeneratorPage();
    } else if (path === '/countercultural-tech') {
      this.showPodcastPage();
    } else if (path === '/unknown-route') {
      this.showNotFoundPage();
    } else {
      window.history.replaceState({}, '', '/unknown-route');
      this.showNotFoundPage();
    }
    */
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
    const routeSpan = app.querySelector(`span[data-route="${path}"]`);
    
    if (routeSpan) {
      return true;
    }
    
    const textContent = app.textContent || '';
    const hasWrongContent = textContent.includes('404') || 
                           textContent.includes('Page not found');
    
    if (hasWrongContent) {
      return false;
    }

    if (path === '/') {
      const scrollContainer = app.querySelector('.homepage-horizontal-scroll');
      const panelCount = app.querySelectorAll('.homepage-panel').length;
      return scrollContainer !== null && panelCount >= 6;
    }
    
    return false;
  }

  private prerenderedLinkHandler: ((e: Event) => void) | null = null;

  private setupPrerenderedEventListeners(): void {
    if (this.prerenderedLinkHandler) {
      document.removeEventListener('click', this.prerenderedLinkHandler, true);
      this.prerenderedLinkHandler = null;
    }
    
    this.prerenderedLinkHandler = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="/"]') as HTMLAnchorElement;
      
      if (link && link.href) {
        const href = link.getAttribute('href');
        if (href && href.startsWith('/') && !href.startsWith('//')) {
          const path = href.split('?')[0].split('#')[0];
          if (this.isStaticFile(path)) {
            return;
          }

          e.preventDefault();
          e.stopPropagation();
          
          this.navigation.closeNav();
          
          let normalizedRoute = href;
          if (normalizedRoute !== '/' && normalizedRoute.endsWith('/')) {
            normalizedRoute = normalizedRoute.slice(0, -1);
          }

          if (homepageOnlyMode && normalizedRoute !== '/') {
            normalizedRoute = '/';
          }
          
          setTimeout(() => {
            window.history.pushState({}, '', normalizedRoute);
            window.dispatchEvent(new PopStateEvent('popstate'));
          }, 100);
        }
      }
    };
    
    document.addEventListener('click', this.prerenderedLinkHandler, true);
  }

  private initializeHomepage(scrollContainer: HTMLElement): void {
    if (!this.container) return;

    if (portfolioMode) {
      this.container.querySelector('header:has(#nav-menu-button)')?.remove();
      document.getElementById('nav-panel')?.remove();
      document.getElementById('nav-overlay')?.remove();
    }

    this.enableHomepageLayout();

    const panelCount = scrollContainer.querySelectorAll('.homepage-panel').length;
    this.homepageTimeline.mount(this.container, scrollContainer, panelCount);
    PanelReveal.init(scrollContainer);
    ScrollFade.init();
    this.profile.bindListeners(scrollContainer);
    this.experience.bindListeners(scrollContainer);
  }

  private enableHomepageLayout(): void {
    document.body.classList.add('homepage-mode');
    this.container?.classList.add('homepage-mode');

    const scrollContainer = this.container?.querySelector('.homepage-horizontal-scroll') as HTMLElement;
    if (scrollContainer) {
      this.setupHorizontalScroll(scrollContainer);
    }
  }

  private disableHomepageLayout(): void {
    document.body.classList.remove('homepage-mode');
    this.container?.classList.remove('homepage-mode');
    this.homepageTimeline.destroy();
    PanelReveal.destroy();

    if (this.horizontalWheelHandler) {
      document.removeEventListener('wheel', this.horizontalWheelHandler);
      this.horizontalWheelHandler = null;
    }
    this.horizontalScrollContainer = null;
  }

  private setupHorizontalScroll(scrollContainer: HTMLElement): void {
    if (this.horizontalWheelHandler) {
      document.removeEventListener('wheel', this.horizontalWheelHandler);
    }

    this.horizontalScrollContainer = scrollContainer;

    this.horizontalWheelHandler = (e: Event) => {
      if (!this.horizontalScrollContainer || !document.body.classList.contains('homepage-mode')) {
        return;
      }

      const wheelEvent = e as WheelEvent;
      if (Math.abs(wheelEvent.deltaY) > Math.abs(wheelEvent.deltaX)) {
        e.preventDefault();
        this.horizontalScrollContainer.scrollLeft += wheelEvent.deltaY;
      }
    };

    document.addEventListener('wheel', this.horizontalWheelHandler, { passive: false });
  }

  private showHomePage(): void {
    if (!this.container) return;
    
    this.disableHomepageLayout();
    this.container.innerHTML = '';
    
    document.title = 'Nick Goldstein';
    
    if (!portfolioMode) {
      this.navigation.mount(this.container);
    } else {
      document.getElementById('nav-panel')?.remove();
      document.getElementById('nav-overlay')?.remove();
    }

    const scrollContainer = document.createElement('div');
    scrollContainer.className = 'homepage-horizontal-scroll';
    scrollContainer.setAttribute('role', 'region');
    scrollContainer.setAttribute('aria-label', 'Nick Goldstein story');
    this.container.appendChild(scrollContainer);

    this.profile.mount(scrollContainer);
    this.experience.mount(scrollContainer);

    this.initializeHomepage(scrollContainer);
    scrollContainer.scrollLeft = 0;
  }

  /* Disabled page methods — uncomment alongside route handlers above to restore.

  private showArticlesPage(): void {
    if (!this.container) return;
    this.disableHomepageLayout();
    this.container.innerHTML = '';
    document.title = 'Articles by Nick Goldstein';
    this.navigation.mount(this.container);
    this.articles.mount(this.container);
    ScrollFade.init();
    window.scrollTo(0, 0);
  }

  private showArticlePage(slug: string): void {
    if (!this.container) return;
    this.disableHomepageLayout();
    this.container.innerHTML = '';
    this.navigation.mount(this.container);
    this.article.mount(this.container, slug);
    ScrollFade.init();
    window.scrollTo(0, 0);
  }

  private showCoursesPage(): void {
    if (!this.container) return;
    this.disableHomepageLayout();
    this.container.innerHTML = '';
    document.title = 'Courses by Nick Goldstein';
    this.navigation.mount(this.container);
    this.courses.mount(this.container);
    ScrollFade.init();
    window.scrollTo(0, 0);
  }

  private showCoursePage(courseSlug: string, moduleNumber?: number): void {
    if (!this.container) return;
    this.disableHomepageLayout();
    this.container.innerHTML = '';
    this.navigation.mount(this.container);
    this.course.mount(this.container, courseSlug, moduleNumber);
    ScrollFade.init();
    window.scrollTo(0, 0);
  }

  private showCourseReaderPage(courseSlug: string, moduleNumber?: number): void {
    if (!this.container) return;
    this.disableHomepageLayout();
    this.container.innerHTML = '';
    this.navigation.mount(this.container);
    this.courseReader.mount(this.container, courseSlug, moduleNumber);
    ScrollFade.init();
    window.scrollTo(0, 0);
  }

  private showSystemPromptGeneratorPage(): void {
    if (!this.container) return;
    this.disableHomepageLayout();
    this.container.innerHTML = '';
    const description = 'Build production-ready system prompts for Claude, GPT-4, and other AI platforms with our free modular prompt engineering tool.';
    const fullDescription = description;
    document.title = 'System Prompt Generator - Professional AI Instruction Design Tool | Nick Goldstein';
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = fullDescription;
    this.updateMetaTag('property', 'og:type', 'website');
    this.updateMetaTag('property', 'og:url', 'https://nicholasmgoldstein.com/system-prompt-generator');
    this.updateMetaTag('property', 'og:title', 'System Prompt Generator - Professional AI Instruction Design Tool');
    this.updateMetaTag('property', 'og:description', description);
    this.updateMetaTag('property', 'twitter:card', 'summary_large_image');
    this.updateMetaTag('property', 'twitter:url', 'https://nicholasmgoldstein.com/system-prompt-generator');
    this.updateMetaTag('property', 'twitter:title', 'System Prompt Generator - Professional AI Instruction Design Tool');
    this.updateMetaTag('property', 'twitter:description', description);
    this.navigation.mount(this.container);
    this.systemPromptGenerator.mount(this.container);
    ScrollFade.init();
    window.scrollTo(0, 0);
  }

  private showPodcastPage(): void {
    if (!this.container) return;
    this.disableHomepageLayout();
    this.container.innerHTML = '';
    document.title = 'Countercultural Tech - Podcast by Nick Goldstein';
    this.navigation.mount(this.container);
    this.podcast.mount(this.container);
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
    this.disableHomepageLayout();
    this.container.innerHTML = '';
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
    const homeLink = section.querySelector('a[href="/"]');
    homeLink?.addEventListener('click', (e) => {
      e.preventDefault();
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
    ScrollFade.init();
    window.scrollTo(0, 0);
  }
  */
}

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.querySelector('#app') as HTMLElement;
  if (!appContainer) {
    throw new Error('App container not found');
  }

  const homeScreen = new HomeScreen();
  homeScreen.mount(appContainer);
});
