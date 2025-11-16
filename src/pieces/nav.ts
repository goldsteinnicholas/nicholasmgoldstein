export class Navigation {
  private container: HTMLElement | null = null;

  public mount(container: HTMLElement): void {
    this.container = container;
    
    const header = document.createElement('header');
    header.className = 'py-4 bg-card-bg/60 backdrop-blur-sm sticky top-0 z-50 rounded-2xl shadow-sm';
    header.innerHTML = `
      <nav class="flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 md:gap-0 px-6 md:px-8 max-w-7xl mx-auto">
        <div class="flex items-center">
          <h1 class="text-lg md:text-xl font-heading text-text/80 hover:text-text transition-colors duration-300 cursor-pointer">
            Nick Goldstein
          </h1>
        </div>
        <div class="flex items-center gap-2">
          <a href="/articles" 
             class="px-3 py-1.5 rounded-xl text-text/70 hover:text-text hover:bg-primary/10 transition-all duration-300 text-sm">
             Articles
          </a>
          <a href="/courses" 
             class="px-3 py-1.5 rounded-xl text-text/70 hover:text-text hover:bg-primary/10 transition-all duration-300 text-sm">
             Courses
          </a>
        </div>
      </nav>
    `;
    
    this.container.appendChild(header);
    this.setupNavigation();
  }

  private setupNavigation(): void {
    // Setup name click to go home
    const nameElement = this.container?.querySelector('h1');
    if (nameElement) {
      nameElement.addEventListener('click', () => {
        // Add shake animation class
        nameElement.classList.add('animate-shake');
        
        // Navigate to home
        window.history.pushState({}, '', '/');
        window.dispatchEvent(new PopStateEvent('popstate'));
        
        // Remove animation class after it completes
        setTimeout(() => {
          nameElement.classList.remove('animate-shake');
        }, 500);
      });
    }

    // Setup articles link
    const articlesLink = this.container?.querySelector('a[href="/articles"]');
    if (articlesLink) {
      articlesLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.history.pushState({}, '', '/articles');
        window.dispatchEvent(new PopStateEvent('popstate'));
      });
    }

    // Setup courses link
    const coursesLink = this.container?.querySelector('a[href="/courses"]');
    if (coursesLink) {
      coursesLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.history.pushState({}, '', '/courses');
        window.dispatchEvent(new PopStateEvent('popstate'));
      });
    }
  }
}