import { Navigation } from './pieces/nav';
import { Hero } from './pieces/hero';
import { Profile } from './pieces/profile';
import { Experience } from './pieces/experience';
import { Contact } from './pieces/contact';
import { Articles } from './pieces/articles';
import { Article } from './pieces/article';
import { Courses } from './pieces/courses';
import { Course } from './pieces/course';
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
  }

  public mount(container: HTMLElement) {
    this.container = container;
    this.container.innerHTML = ''; // Clear existing content
    
    // Check current path and route accordingly
    const path = window.location.pathname;
    
    if (path === '/articles') {
      this.showArticlesPage();
    } else if (path.startsWith('/articles/')) {
      this.showArticlePage(path.split('/articles/')[1]);
    } else if (path === '/courses') {
      this.showCoursesPage();
    } else if (path.startsWith('/course/')) {
      const coursePath = path.split('/course/')[1];
      // Check if it's a module route: /course/{slug}/module/{number}
      if (coursePath.includes('/module/')) {
        const [courseSlug, modulePart] = coursePath.split('/module/');
        const moduleNumber = modulePart ? parseInt(modulePart, 10) : 1;
        this.showCoursePage(courseSlug, moduleNumber);
      } else {
        // Redirect to module 1 if no module specified
        window.history.replaceState({}, '', `/course/${coursePath}/module/1`);
        this.showCoursePage(coursePath, 1);
      }
    } else if (path === '/') {
      this.showHomePage();
    } else if (path === '/unknown-route') {
      this.showNotFoundPage();
    } else {
      window.history.replaceState({}, '', '/unknown-route');
      this.showNotFoundPage();
    }

    // Listen for navigation changes
    window.addEventListener('popstate', () => {
      const newPath = window.location.pathname;
      if (newPath === '/articles') {
        this.showArticlesPage();
      } else if (newPath.startsWith('/articles/')) {
        this.showArticlePage(newPath.split('/articles/')[1]);
      } else if (newPath === '/courses') {
        this.showCoursesPage();
      } else if (newPath.startsWith('/course/')) {
        const coursePath = newPath.split('/course/')[1];
        // Check if it's a module route: /course/{slug}/module/{number}
        if (coursePath.includes('/module/')) {
          const [courseSlug, modulePart] = coursePath.split('/module/');
          const moduleNumber = modulePart ? parseInt(modulePart, 10) : 1;
          this.showCoursePage(courseSlug, moduleNumber);
        } else {
          // Redirect to module 1 if no module specified
          window.history.replaceState({}, '', `/course/${coursePath}/module/1`);
          this.showCoursePage(coursePath, 1);
        }
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

  private showHomePage(): void {
    if (!this.container) return;
    
    this.container.innerHTML = ''; // Clear existing content
    
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
    
    // Mount navigation and courses
    this.navigation.mount(this.container);
    this.courses.mount(this.container);

    ScrollFade.init();
    window.scrollTo(0, 0);
  }

  private showCoursePage(courseSlug: string, moduleNumber?: number): void {
    if (!this.container) return;
    
    this.container.innerHTML = ''; // Clear existing content
    
    // Mount course (no navigation header, back button is in course component)
    this.course.mount(this.container, courseSlug, moduleNumber);

    ScrollFade.init();
    window.scrollTo(0, 0);
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