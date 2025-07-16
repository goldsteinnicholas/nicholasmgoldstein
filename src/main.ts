import { Navigation } from './pieces/nav';
import { Hero } from './pieces/hero';
import { Profile } from './pieces/profile';
import { Experience } from './pieces/experience';
import { Contact } from './pieces/contact';
import { Articles } from './pieces/articles';
import { Article } from './pieces/article';
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

  constructor() {
    this.navigation = new Navigation();
    this.hero = new Hero();
    this.profile = new Profile();
    this.experience = new Experience();
    this.contact = new Contact();
    this.articles = new Articles();
    this.article = new Article();
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
    } else {
      this.showHomePage();
    }

    // Listen for navigation changes
    window.addEventListener('popstate', () => {
      const newPath = window.location.pathname;
      if (newPath === '/articles') {
        this.showArticlesPage();
      } else if (newPath.startsWith('/articles/')) {
        this.showArticlePage(newPath.split('/articles/')[1]);
      } else {
        this.showHomePage();
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