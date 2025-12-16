import { ScrollFade } from '../scroll-fade';

interface Course {
  slug: string;
  title: string;
  description: string;
  category?: string;
}

export class Courses {
  private container: HTMLElement | null = null;
  
  private courses: Course[] = [
    {
      slug: 'build-ai-platforms',
      title: 'Build AI Platforms from Scratch',
      description: 'Learn to build powerful AI-powered applications and platforms from the ground up. Master LLM integration, embeddings, and create production-ready AI applications.',
      category: 'AI Development'
    }
  ];

  public mount(container: HTMLElement): void {
    this.container = container;
    
    const section = document.createElement('section');
    section.className = 'py-16 px-6 fade-in-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out';
    section.innerHTML = `
      <span data-route="/courses" style="display: none;"></span>
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-heading text-text mb-6">
            <span class="gradient-text">Courses</span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto px-4 mb-6">
            Free courses to help you with everything from self-improvement to building AI platforms of your own.
          </p>
          <button 
            disabled
            class="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-text-secondary/20 text-text-secondary/50 rounded-full transition-all duration-300 font-medium cursor-not-allowed whitespace-nowrap text-sm sm:text-base opacity-60 border border-text-secondary/30">
            <i class="fas fa-heart"></i>
            <span>Donate</span>
            <span class="text-xs ml-1 opacity-75">(Coming Soon)</span>
          </button>
        </div>

        <!-- Courses Grid -->
        <div class="space-y-6" id="courses-grid">
          ${this.courses.map(course => this.renderCourseCard(course)).join('')}
        </div>
        ${this.courses.length === 0 ? '<p class="text-text-secondary text-center">More courses coming soon...</p>' : ''}
      </div>
    `;
    
    this.container.appendChild(section);
    this.setupCourseLinks();
    ScrollFade.init();
  }

  private renderCourseCard(course: Course): string {
    return `
      <a href="/course/${course.slug}/module/1" class="block h-full">
        <div class="bg-card-bg border border-text-secondary/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 cursor-pointer group h-full flex flex-col">
          ${course.category ? `
          <div class="mb-4">
            <span class="px-3 py-1 bg-card-bg text-text-secondary text-sm font-medium rounded-full border border-text-secondary/20">
              ${course.category}
            </span>
          </div>
          ` : ''}
          <h3 class="text-xl font-heading font-bold text-text mb-3 group-hover:text-accent transition-colors duration-300">
            ${course.title}
          </h3>
          <p class="text-text-secondary leading-relaxed mb-4 flex-grow">
            ${course.description}
          </p>
          <div class="flex items-center justify-end mt-auto">
            <span class="text-accent group-hover:text-green-400 transition-colors duration-300 text-sm font-medium">
              View Course →
            </span>
          </div>
        </div>
      </a>
    `;
  }

  private setupCourseLinks(): void {
    const links = this.container?.querySelectorAll('a[href^="/course/"]');
    links?.forEach(link => {
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
}

