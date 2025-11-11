import { ScrollFade } from '../scroll-fade';

interface CourseModule {
  number: string;
  title: string;
  description: string;
  slideDeckPath?: string;
}

export class Course {
  private container: HTMLElement | null = null;
  
  private modules: CourseModule[] = [
    {
      number: '1',
      title: 'Before we get started',
      description: 'Introduction to the course concept and how it will be structured.',
      slideDeckPath: '/01 Build AI Platforms from Scratch - Slide Deck/index.html'
    },
    {
      number: '2',
      title: 'Setting Up Your Platform Prereqs',
      description: 'Developing the framework to iterate on your platforms, selecting a tech & productivity stack.'
    },
    {
      number: '3',
      title: 'Prompt Engineering',
      description: 'Learn effective prompt engineering techniques for building AI platforms.'
      // slideDeckPath will be added when available
    },
    {
      number: '4',
      title: 'Multilayered Architectures',
      description: 'Explore complex system architectures with multiple layers for building robust AI platforms.'
    }
  ];

  public mount(container: HTMLElement, courseSlug: string, moduleNumber: number = 1): void {
    this.container = container;
    
    const currentModule = this.modules.find(m => m.number === moduleNumber.toString()) || this.modules[0];
    
    const section = document.createElement('section');
    section.className = 'min-h-screen py-8 px-6 fade-in-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out';
    section.innerHTML = `
      <!-- Sticky Back Button -->
      <div class="sticky top-0 z-50 bg-background/80 mb-6 -mx-6 px-6 py-4">
        <div class="max-w-7xl mx-auto">
          <button 
            id="back-to-courses-btn"
            class="w-8 h-8 rounded-full bg-card-bg border border-text-secondary/20 flex items-center justify-center hover:border-accent/30 hover:bg-primary/10 transition-all duration-300 text-text-secondary hover:text-text text-sm">
            <i class="fas fa-arrow-left"></i>
          </button>
        </div>
      </div>
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 md:gap-8">
        <!-- Left Navigation Column -->
        <aside class="w-full md:w-48 lg:w-56 flex-shrink-0 md:sticky md:top-24 md:self-start">
          <div class="mb-6 md:mb-0">
            <h2 class="text-lg md:text-xl font-heading text-text mb-4 md:mb-6 hidden md:block">Modules</h2>
            <nav class="flex md:flex-col gap-3 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
              ${this.modules.map(module => {
                const isActive = module.number === currentModule.number;
                return `
                <a 
                  href="/course/${courseSlug}/module/${module.number}"
                  class="md:bg-card-bg md:border border-text-secondary/20 rounded-xl p-3 md:p-4 cursor-pointer group flex-shrink-0 w-20 md:w-auto md:hover:border-accent/30 hover:shadow-lg transition-all duration-300 ${isActive ? 'md:border-accent/50 md:bg-primary/5' : ''} md:flex md:flex-col" style="height: 220px;">
                  <div class="text-sm md:text-base text-secondary font-medium mb-1 md:mb-2 text-center md:text-left">${module.number}</div>
                  <h3 class="text-xs md:text-sm lg:text-base font-heading text-text mb-1 md:mb-2 hidden md:block group-hover:text-accent transition-colors duration-300">${module.title}</h3>
                  <p class="text-xs md:text-sm text-text-secondary leading-relaxed hidden md:block flex-grow">${module.description}</p>
                </a>
              `;
              }).join('')}
            </nav>
          </div>
        </aside>

        <!-- Main Content Area -->
        <main class="flex-1 w-full md:max-w-4xl">
          <!-- Video Section -->
          <div class="mb-8 md:mb-12">
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-heading text-text mb-3 md:mb-4">${moduleNumber === 1 ? 'Build AI Platforms from Scratch' : currentModule.title}</h1>
            <p class="text-base sm:text-lg text-text-secondary mb-4 md:mb-6">${moduleNumber === 1 ? 'Learn to build powerful AI-powered applications and platforms from scratch. This course focuses on design, architecture, and engineering, NOT coding.' : currentModule.description}</p>
            
            <div class="aspect-video bg-card-bg border border-text-secondary/20 rounded-xl overflow-hidden mt-6">
              <div id="youtube-embed" class="w-full h-full flex items-center justify-center">
                <!-- YouTube embed will be inserted here -->
                <p class="text-text-secondary">YouTube video embed placeholder</p>
              </div>
            </div>
          </div>

          <!-- Slideshow Section -->
          <div>
            <div class="flex items-center justify-between mb-4 md:mb-6">
              <h2 class="text-xl sm:text-2xl font-heading text-text">Course Slides</h2>
              <button 
                id="fullscreen-btn"
                class="inline-flex items-center gap-2 px-4 py-2 bg-card-bg border border-text-secondary/20 rounded-full hover:border-accent/30 hover:bg-primary/10 transition-all duration-300 text-text-secondary hover:text-text text-sm">
                <i class="fas fa-expand"></i>
                <span class="hidden sm:inline">Fullscreen</span>
              </button>
            </div>
            <div id="slideshow-container" class="relative">
              ${currentModule.slideDeckPath ? `
                <iframe 
                  id="slideshow-iframe"
                  src="${currentModule.slideDeckPath}" 
                  class="w-full aspect-video rounded-lg border border-text-secondary/20 bg-black"
                  frameborder="0"
                  allowfullscreen>
                </iframe>
              ` : `
                <div class="w-full aspect-video rounded-lg border border-text-secondary/20 bg-card-bg flex items-center justify-center">
                  <p class="text-text-secondary">Slides coming soon</p>
                </div>
              `}
            </div>
          </div>

          <!-- External Resources Section -->
          <div class="mt-12">
            <h2 class="text-xl sm:text-2xl font-heading text-text mb-6">External Resources</h2>
            <div class="space-y-4">
              <div class="max-w-md">
                <a 
                  href="https://github.com/goldsteinnicholas/build-ai-platforms-from-scratch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-text hover:text-accent transition-colors duration-300 inline-flex items-center gap-2">
                  <span class="font-medium">Repo w/ Common Code Patterns</span>
                  <i class="fas fa-external-link-alt text-xs text-text-secondary/50"></i>
                </a>
                <p class="text-sm text-text-secondary mt-1">Common code patterns and examples from the course.</p>
              </div>
              <div class="max-w-md">
                <a 
                  href="https://emstrata.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-text hover:text-accent transition-colors duration-300 inline-flex items-center gap-2">
                  <span class="font-medium">Emstrata</span>
                  <i class="fas fa-external-link-alt text-xs text-text-secondary/50"></i>
                </a>
                <p class="text-sm text-text-secondary mt-1">A platform for creating immersive narrative experiences using AI to generate emergent storylines.</p>
              </div>
              <div class="max-w-md">
                <a 
                  href="https://plato5.us" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-text hover:text-accent transition-colors duration-300 inline-flex items-center gap-2">
                  <span class="font-medium">PLATO5</span>
                  <i class="fas fa-external-link-alt text-xs text-text-secondary/50"></i>
                </a>
                <p class="text-sm text-text-secondary mt-1">A social engine designed to turn online connections into real-world friendships, with AI integration to facilitate conversations.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    `;
    
    this.container.appendChild(section);
    this.setupBackButton();
    this.setupModuleLinks(courseSlug);
    this.setupYouTubeEmbed();
    this.setupSlideshow();
    ScrollFade.init();
  }

  private setupModuleLinks(courseSlug: string): void {
    const moduleLinks = this.container?.querySelectorAll(`a[href^="/course/${courseSlug}/module/"]`);
    moduleLinks?.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (link as HTMLAnchorElement).getAttribute('href');
        if (href) {
          window.history.pushState({}, '', href);
          window.dispatchEvent(new PopStateEvent('popstate'));
        }
      });
    });
  }

  private setupBackButton(): void {
    const backBtn = this.container?.querySelector('#back-to-courses-btn');
    if (!backBtn) return;

    backBtn.addEventListener('click', () => {
      window.history.pushState({}, '', '/courses');
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
  }

  private setupYouTubeEmbed(): void {
    const embedContainer = this.container?.querySelector('#youtube-embed');
    if (!embedContainer) return;

    // Placeholder - replace with actual YouTube video ID
    const videoId = 'dQw4w9WgXcQ'; // Replace with actual video ID
    
    embedContainer.innerHTML = `
      <iframe 
        class="w-full h-full" 
        src="https://www.youtube.com/embed/${videoId}" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
    `;
  }

  private setupSlideshow(): void {
    const fullscreenBtn = this.container?.querySelector('#fullscreen-btn');
    const slideshowContainer = this.container?.querySelector('#slideshow-container');
    
    if (!fullscreenBtn || !slideshowContainer) return;

    fullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        slideshowContainer.requestFullscreen().then(() => {
          const icon = fullscreenBtn.querySelector('i');
          const text = fullscreenBtn.querySelector('span');
          if (icon) icon.className = 'fas fa-compress';
          if (text) text.textContent = 'Exit Fullscreen';
        }).catch(err => {
          console.error('Error attempting to enable fullscreen:', err);
        });
      } else {
        document.exitFullscreen().then(() => {
          const icon = fullscreenBtn.querySelector('i');
          const text = fullscreenBtn.querySelector('span');
          if (icon) icon.className = 'fas fa-expand';
          if (text) text.textContent = 'Fullscreen';
        }).catch(err => {
          console.error('Error attempting to exit fullscreen:', err);
        });
      }
    });

    // Update button when fullscreen state changes
    document.addEventListener('fullscreenchange', () => {
      const icon = fullscreenBtn.querySelector('i');
      const text = fullscreenBtn.querySelector('span');
      if (document.fullscreenElement) {
        if (icon) icon.className = 'fas fa-compress';
        if (text) text.textContent = 'Exit Fullscreen';
      } else {
        if (icon) icon.className = 'fas fa-expand';
        if (text) text.textContent = 'Fullscreen';
      }
    });
  }
}

