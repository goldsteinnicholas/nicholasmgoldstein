import { Navigation } from './pieces/nav';
import { Profile } from './pieces/profile';
import { Experience } from './pieces/experience';
import { Contact } from './pieces/contact';
import { ScrollFade } from './scroll-fade';

class HomeScreen {
  private container: HTMLElement | null = null;
  private navigation: Navigation;
  private profile: Profile;
  private experience: Experience;
  private contact: Contact;

  constructor() {
    this.navigation = new Navigation();
    this.profile = new Profile();
    this.experience = new Experience();
    this.contact = new Contact();
  }

  public mount(container: HTMLElement) {
    this.container = container;
    this.container.innerHTML = ''; // Clear existing content
    
    // Add title section
    const titleSection = document.createElement('div');
    titleSection.className = 'relative bg-gradient-to-b from-primary/5 to-transparent';
    titleSection.innerHTML = `
      <div class="max-w-4xl mx-auto py-12 px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-heading text-text mb-3">
          My Living Record
        </h1>
        <p class="text-text/70 text-lg md:text-xl max-w-2xl mx-auto">
          A dynamic journey through my professional growth and technical achievements
        </p>
      </div>
    `;

    // Add blog section
    const blogSection = document.createElement('div');
    blogSection.className = 'max-w-4xl mx-auto px-6 py-16';
    blogSection.innerHTML = `
      <div class="relative border border-text/10 rounded-xl p-8 bg-white/50 backdrop-blur-sm">
        <span class="absolute -top-3 left-8 px-6 py-1.5 bg-background font-medium text-[11px] uppercase tracking-[0.2em] text-primary/90 rounded-full border-2 border-primary/30 shadow-sm">Coming Soon</span>
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-2xl font-heading text-text">Blog Posts</h2>
        </div>
        <p class="text-text/70 leading-relaxed">
          Some posts about my thoughts on startups, technological innovations, and more.
        </p>
      </div>
    `;
    
    // Add hero section with walking-away image
    const heroSection = document.createElement('div');
    heroSection.className = 'relative w-full h-[800px] my-24';
    heroSection.innerHTML = `
      <div class="absolute inset-0 rounded-3xl shadow-2xl overflow-hidden">
        <img 
          src="/walking-away.jpeg" 
          alt="Decorative background" 
          class="w-full h-full object-cover object-center-bottom"
          style="object-position: center 80%;"
        />
        <div class="absolute inset-0 bg-black/30"></div>
      </div>
    `;
    
    // Mount components in order
    this.navigation.mount(container);
    container.appendChild(titleSection);
    this.profile.mount(container);
    container.appendChild(blogSection);
    this.experience.mount(container);
    container.appendChild(heroSection);
    this.contact.mount(container);

    ScrollFade.init();
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