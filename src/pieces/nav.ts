export class Navigation {
  private container: HTMLElement | null = null;
  private navPanel: HTMLElement | null = null;
  private isOpen: boolean = false;

  public mount(container: HTMLElement): void {
    this.container = container;
    
    const header = document.createElement('header');
    header.className = 'py-4 bg-card-bg/60 backdrop-blur-sm sticky top-0 z-50 rounded-2xl shadow-sm';
    header.innerHTML = `
      <nav class="flex items-center gap-4 px-6 md:px-8 max-w-7xl mx-auto">
        <button 
          id="nav-menu-button"
          class="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          style="background: linear-gradient(135deg, rgba(42, 42, 58, 0.6) 0%, rgba(42, 42, 58, 0.4) 100%); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);"
          aria-label="Open navigation menu"
        >
          <i class="fas fa-ellipsis-h text-text/80 group-hover:text-text transition-colors duration-300 text-sm"></i>
        </button>
        <h1 class="text-lg md:text-xl font-heading text-text/80 hover:text-text transition-colors duration-300 cursor-pointer">
          Nick Goldstein
        </h1>
      </nav>
    `;
    
    // Create slide-out navigation panel
    const navPanel = document.createElement('div');
    navPanel.id = 'nav-panel';
    navPanel.className = 'fixed top-0 left-0 h-full w-80 transform -translate-x-full transition-transform duration-300 ease-out z-50';
    navPanel.setAttribute('style', 'background: linear-gradient(135deg, rgba(10, 10, 15, 0.95) 0%, rgba(0, 0, 0, 0.98) 100%); backdrop-filter: blur(20px); border-right: 1px solid rgba(255, 255, 255, 0.05); box-shadow: 8px 0 32px rgba(0, 0, 0, 0.5);');
    navPanel.innerHTML = `
      <div class="flex flex-col h-full p-8">
        <div class="flex items-center justify-end mb-16">
          <button 
            id="nav-close-button"
            class="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            aria-label="Close navigation menu"
          >
            <i class="fas fa-times text-text/50 group-hover:text-text/70 transition-colors duration-300 text-sm"></i>
          </button>
        </div>
        <nav class="flex flex-col gap-3">
          <a 
            href="/" 
            class="nav-link text-text/60 hover:text-text/90 transition-all duration-300 text-base font-medium py-3"
            data-path="/"
          >
            About Me
          </a>
          <a 
            href="/articles" 
            class="nav-link text-text/60 hover:text-text/90 transition-all duration-300 text-base font-medium py-3"
            data-path="/articles"
          >
            Articles by Me
          </a>
          <a 
            href="/courses" 
            class="nav-link text-text/60 hover:text-text/90 transition-all duration-300 text-base font-medium py-3"
            data-path="/courses"
          >
            Courses by Me
          </a>
          <a 
            href="/countercultural-tech" 
            class="nav-link text-text/60 hover:text-text/90 transition-all duration-300 text-base font-medium py-3"
            data-path="/countercultural-tech"
          >
            Countercultural Tech Podcast
          </a>
          <a 
            href="https://www.youtube.com/@goldsteinnick" 
            target="_blank"
            rel="noopener noreferrer"
            class="nav-link text-text/60 hover:text-text/90 transition-all duration-300 text-base font-medium py-3"
          >
            My YouTube Channel
          </a>
          <a 
            href="https://emstrata.com/try" 
            target="_blank"
            rel="noopener noreferrer"
            class="nav-link text-text/60 hover:text-text/90 transition-all duration-300 text-base font-medium py-3"
          >
            Try Emstrata
          </a>
        </nav>
      </div>
    `;
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'nav-overlay';
    overlay.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300 z-40';
    
    this.container.appendChild(header);
    document.body.appendChild(navPanel);
    document.body.appendChild(overlay);
    this.navPanel = navPanel;
    
    this.updateNavVisibility();
    this.setupNavigation();
  }

  private updateNavVisibility(): void {
    if (!this.navPanel) return;
    
    const currentPath = window.location.pathname;
    const navLinks = this.navPanel.querySelectorAll('.nav-link[data-path]');
    
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('data-path');
      if (linkPath === currentPath) {
        (link as HTMLElement).style.display = 'none';
      } else {
        (link as HTMLElement).style.display = '';
      }
    });
  }

  public reinitializeListeners(): void {
    // Reinitialize listeners for prerendered content
    // First, find the container if it exists
    if (!this.container) {
      this.container = document.querySelector('#app') as HTMLElement;
    }
    
    // Find nav panel if it exists
    if (!this.navPanel) {
      const existingPanel = document.querySelector('#nav-panel');
      if (existingPanel) {
        this.navPanel = existingPanel as HTMLElement;
      } else if (this.container) {
        // Nav panel doesn't exist, need to mount
        this.mount(this.container);
        return;
      }
    }
    
    this.setupNavigation();
    this.updateNavVisibility();
  }

  private setupNavigation(): void {
    // Setup name click to go home
    const nameElement = this.container?.querySelector('h1');
    if (nameElement && !(nameElement as any).__navListenerAttached) {
      nameElement.addEventListener('click', () => {
        // Add shake animation class
        nameElement.classList.add('animate-shake');
        
        // Close nav if open
        if (this.isOpen) {
          this.closeNav();
        }
        
        // Navigate to home
        window.history.pushState({}, '', '/');
        window.dispatchEvent(new PopStateEvent('popstate'));
        
        // Remove animation class after it completes
        setTimeout(() => {
          nameElement.classList.remove('animate-shake');
        }, 500);
      });
      (nameElement as any).__navListenerAttached = true;
    }

    // Setup menu button
    const menuButton = this.container?.querySelector('#nav-menu-button');
    if (menuButton && !(menuButton as any).__navListenerAttached) {
      menuButton.addEventListener('click', () => {
        this.toggleNav();
      });
      (menuButton as any).__navListenerAttached = true;
    }

    // Setup close button using event delegation for reliability
    if (this.navPanel && !(this.navPanel as any).__navListenerAttached) {
      this.navPanel.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const closeButton = target.closest('#nav-close-button');
        if (closeButton) {
          e.preventDefault();
          e.stopPropagation();
          this.closeNav();
        }
      });
      (this.navPanel as any).__navListenerAttached = true;
    }

    // Setup overlay click to close
    const overlay = document.querySelector('#nav-overlay');
    if (overlay && !(overlay as any).__navListenerAttached) {
      overlay.addEventListener('click', () => {
        this.closeNav();
      });
      (overlay as any).__navListenerAttached = true;
    }

    // Setup navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      if (!(link as any).__navListenerAttached) {
        link.addEventListener('click', (e) => {
          const href = (link as HTMLAnchorElement).getAttribute('href');
          if (href && href.startsWith('/')) {
            e.preventDefault();
            this.closeNav();
            window.history.pushState({}, '', href);
            window.dispatchEvent(new PopStateEvent('popstate'));
            this.updateNavVisibility();
          }
        });
        (link as any).__navListenerAttached = true;
      }
    });
  }

  private toggleNav(): void {
    if (this.isOpen) {
      this.closeNav();
    } else {
      this.openNav();
    }
  }

  private openNav(): void {
    if (!this.navPanel) return;
    this.isOpen = true;
    this.navPanel.classList.remove('-translate-x-full');
    this.navPanel.classList.add('translate-x-0');
    
    const overlay = document.querySelector('#nav-overlay');
    if (overlay) {
      overlay.classList.remove('opacity-0', 'pointer-events-none');
      overlay.classList.add('opacity-100', 'pointer-events-auto');
    }
    
    document.body.style.overflow = 'hidden';
  }

  private closeNav(): void {
    if (!this.navPanel) return;
    this.isOpen = false;
    this.navPanel.classList.remove('translate-x-0');
    this.navPanel.classList.add('-translate-x-full');
    
    const overlay = document.querySelector('#nav-overlay');
    if (overlay) {
      overlay.classList.remove('opacity-100', 'pointer-events-auto');
      overlay.classList.add('opacity-0', 'pointer-events-none');
    }
    
    document.body.style.overflow = '';
  }
}