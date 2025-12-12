import { ScrollFade } from '../scroll-fade';

interface CourseModule {
  number: string;
  chapter: number;
  title: string;
  description: string;
  slideDeckPath?: string;
  videoUrl?: string;
}

export class Course {
  private container: HTMLElement | null = null;
  
  private modules: CourseModule[] = [
    // Chapter 1: Foundations
    {
      number: '1',
      chapter: 1,
      title: 'Before we get started',
      description: 'Introduction to the course concept and how it will be structured.',
      slideDeckPath: '/01 Build AI Platforms from Scratch - Slide Deck/index.html',
      videoUrl: 'https://youtu.be/t033k5bSSkY?si=qvwgst_6UcnLDbJf'
    },
    {
      number: '2',
      chapter: 1,
      title: 'Setting Up Your Platform Prereqs',
      description: 'Developing the framework to iterate on your platforms, selecting a tech & productivity stack.',
      slideDeckPath: '/02 Build AI Platforms from Scratch - Slide Deck/index.html'
    },
    {
      number: '3',
      chapter: 1,
      title: 'Prompt Engineering',
      description: 'Learn effective prompt engineering techniques for building AI platforms.',
      slideDeckPath: '/03 Build AI Platforms from Scratch- Prompt Engineering/index.html'
    },
    {
      number: '4',
      chapter: 1,
      title: 'Multilayered Architectures',
      description: 'Explore complex system architectures with multiple layers for building robust AI platforms.'
    },
    {
      number: '5',
      chapter: 1,
      title: 'Recap: Modules 1-5',
      description: 'A comprehensive review of the foundational concepts: course introduction, platform prerequisites, prompt engineering, and multilayered architectures.'
    },
    // Chapter 2: Core Architecture & Data Operations
    {
      number: '6',
      chapter: 2,
      title: 'CRUD, Transformations, & Parsing',
      description: 'Understand data operations, transformations, and parsing techniques essential for AI platform development.'
    },
    {
      number: '7',
      chapter: 2,
      title: 'AI-Rep Architecture In-Depth',
      description: 'Deep dive into AI-Rep architecture patterns and how to implement them in your platforms.'
    },
    {
      number: '8',
      chapter: 2,
      title: 'Building Your Own Architecture / Compounding Transformations',
      description: 'Learn to design and build custom architectures by compounding transformations for complex AI systems.'
    },
    {
      number: '9',
      chapter: 2,
      title: 'Real-World Application: PLATO5 Planning',
      description: 'Apply learned concepts to a real-world case study: planning PLATO5\'s rebuild.'
    },
    {
      number: '10',
      chapter: 2,
      title: 'Recap: Modules 6-10',
      description: 'A comprehensive review of data operations, AI-Rep patterns, custom architectures, and PLATO5 planning.'
    },
    // Chapter 3: Real-World Applications & Design
    {
      number: '11',
      chapter: 3,
      title: 'In-Depth Look: Emstrata\'s Architecture',
      description: 'Explore the architecture behind Emstrata, a platform for creating immersive narrative experiences using AI to generate emergent storylines.'
    },
    {
      number: '12',
      chapter: 3,
      title: 'Architecting Lore Builder System for Emstrata',
      description: 'Learn how to design and build a lore builder system for narrative platforms, using Emstrata as a case study.'
    },
    {
      number: '13',
      chapter: 3,
      title: 'Notes on Platform Design & Design Language',
      description: 'Learn about platform design principles and developing a cohesive design language for AI-powered applications.'
    },
    {
      number: '14',
      chapter: 3,
      title: 'Considering Use-Cases, Demographics, & Markets',
      description: 'Explore how to identify use-cases, understand target demographics, and evaluate market opportunities for AI platforms.'
    },
    {
      number: '15',
      chapter: 3,
      title: 'Messaging About Novel Products/Services',
      description: 'Learn how to effectively communicate and market innovative AI products and services to your target audience.'
    },
    {
      number: '16',
      chapter: 3,
      title: 'Recap: Modules 11-16',
      description: 'A comprehensive review of real-world architectures, lore builder systems, platform design, market considerations, and messaging.'
    },
    // Chapter 4: Infrastructure & Integration
    {
      number: '17',
      chapter: 4,
      title: 'Deployment & Distribution - Web, Mobile, & API Hosting & Storage',
      description: 'Learn how to deploy and distribute your platform: hosting APIs, deploying web apps, publishing to app stores, and storing multimedia content.'
    },
    {
      number: '18',
      chapter: 4,
      title: 'Integrating Other AI Services',
      description: 'Learn how to integrate additional AI capabilities including TTS, image generation, video generation, and other AI algorithms into your platform.'
    },
    {
      number: '19',
      chapter: 4,
      title: 'Securing AI Pipelines Against Hallucination',
      description: 'Strategies and techniques for preventing, detecting, and handling AI hallucinations to ensure reliable and trustworthy outputs.'
    },
    {
      number: '20',
      chapter: 4,
      title: 'New Update on PLATO5\'s Rebuild',
      description: 'Latest progress update on the PLATO5 rebuild, covering recent developments, challenges overcome, and architectural refinements.'
    },
    {
      number: '21',
      chapter: 4,
      title: 'Recap: Modules 17-21',
      description: 'A comprehensive review of deployment, AI service integration, security, and PLATO5 rebuild progress.'
    },
    // Chapter 5: Ethics, Operations & Growth
    {
      number: '22',
      chapter: 5,
      title: 'Ethical AI Usage & Examples of Pitfalls',
      description: 'Learn about ethical considerations in AI development, including privacy concerns, disclosing AI usage, and common pitfalls to avoid when building AI platforms.'
    },
    {
      number: '23',
      chapter: 5,
      title: 'Retaining Your AI Outputs for Future Training',
      description: 'Strategies for storing and managing AI-generated outputs to enable future model training, fine-tuning, and continuous improvement of your platform.'
    },
    {
      number: '24',
      chapter: 5,
      title: 'Things that go Unconsidered',
      description: 'Critical but often overlooked aspects of platform development including Terms of Service, session logic, data retention policies, and other essential considerations.'
    },
    {
      number: '25',
      chapter: 5,
      title: 'Building An Audience for your platform',
      description: 'Strategies for growing and engaging an audience for your AI platform, from early adopters to broader market reach.'
    },
    {
      number: '26',
      chapter: 5,
      title: 'Recap: Modules 22-26',
      description: 'A comprehensive review of ethical AI usage, retaining outputs, overlooked considerations, and audience building.'
    },
    {
      number: '27',
      chapter: 5,
      title: 'Onboarding Users',
      description: 'Design effective user onboarding experiences that help users understand and successfully use your AI platform\'s capabilities.'
    },
    {
      number: '28',
      chapter: 5,
      title: 'Wrap-Up: Building AI Platforms from Scratch',
      description: 'Final thoughts and key takeaways from the course, summarizing the journey from foundational concepts to building complete AI platforms.'
    }
  ];

  public mount(container: HTMLElement, courseSlug: string, moduleNumber: number = 1): void {
    this.container = container;
    
    const currentModule = this.modules.find(m => m.number === moduleNumber.toString()) || this.modules[0];
    
    // Update metadata
    document.title = `${currentModule.title} - Module ${moduleNumber}`;
    
    const section = document.createElement('section');
    section.className = 'min-h-screen py-8 px-6 fade-in-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out';
    section.innerHTML = `
      <div class="max-w-7xl mx-auto">
        <!-- Back Navigation -->
        <div class="mb-8 flex items-center justify-between">
          <a 
            id="back-to-courses-btn"
            href="/courses" 
            class="inline-flex items-center gap-2 text-text-secondary hover:text-text transition-colors duration-300">
            <i class="fas fa-arrow-left"></i>
            Back to Courses
          </a>
          <a 
            id="view-reader-btn"
            href="/course/${courseSlug}/reader/module/${moduleNumber}" 
            class="inline-flex items-center gap-2 px-4 py-2 bg-card-bg border border-text-secondary/20 rounded-full hover:border-accent/30 hover:bg-primary/10 transition-all duration-300 text-text-secondary hover:text-text text-sm">
            <i class="fas fa-book"></i>
            <span>Read Instead</span>
          </a>
        </div>
      </div>
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 md:gap-8">
        <!-- Left Navigation Column -->
        <aside class="w-full md:w-48 lg:w-56 flex-shrink-0 md:sticky md:top-24 md:self-start">
          <div class="mb-6 md:mb-0">
            <h2 class="text-lg md:text-xl font-heading text-text mb-4 md:mb-6">Modules</h2>
            <nav class="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:overflow-x-visible md:max-h-[calc(100vh-8rem)] pb-2 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
              ${this.renderModulesByChapter(courseSlug, currentModule)}
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
              ${currentModule.videoUrl && this.extractYouTubeVideoId(currentModule.videoUrl) ? `
                <iframe 
                  src="https://www.youtube.com/embed/${this.extractYouTubeVideoId(currentModule.videoUrl)}" 
                  class="w-full h-full"
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
                </iframe>
              ` : `
                <div class="w-full h-full flex items-center justify-center">
                  <p class="text-text-secondary text-lg">Video Coming Soon...</p>
                </div>
              `}
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
                  href="/system-prompt-generator" 
                  class="text-text hover:text-accent transition-colors duration-300 inline-flex items-center gap-2">
                  <span class="font-medium">System Prompt Generator</span>
                  <i class="fas fa-arrow-right text-xs text-text-secondary/50"></i>
                </a>
                <p class="text-sm text-text-secondary mt-1">A tool for generating effective system prompts for AI platforms.</p>
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
    this.setupReaderButton(courseSlug, moduleNumber);
    this.setupModuleLinks(courseSlug);
    this.setupSystemPromptGeneratorLink();
    this.setupSlideshow();
    ScrollFade.init();
  }

  private renderModulesByChapter(courseSlug: string, currentModule: CourseModule): string {
    const chapterNames = [
      '', // 0-indexed, so chapter 1 is at index 1
      'Chapter 1: Foundations',
      'Chapter 2: Core Architecture & Data Operations',
      'Chapter 3: Real-World Applications, Design & Communication',
      'Chapter 4: Infrastructure & Integration',
      'Chapter 5: Ethics, Operations, Audience Building'
    ];

    let currentChapter = 0;
    let html = '';

    this.modules.forEach(module => {
      if (module.chapter !== currentChapter) {
        currentChapter = module.chapter;
        html += `
          <div class="hidden md:block mt-4 mb-2 first:mt-0">
            <h3 class="text-sm font-heading text-text-secondary/70 font-semibold uppercase tracking-wide">${chapterNames[currentChapter]}</h3>
          </div>
        `;
      }

      const isActive = module.number === currentModule.number;
      html += `
        <a 
          href="/course/${courseSlug}/module/${module.number}"
          class="md:bg-card-bg md:border border-text-secondary/20 rounded-full md:rounded-xl flex items-center justify-center md:items-start md:justify-start w-12 h-12 md:w-auto md:h-[280px] md:p-4 cursor-pointer group flex-shrink-0 md:hover:border-accent/30 hover:shadow-lg transition-all duration-300 ${isActive ? 'bg-primary/15 text-accent border-2 border-blue-500 md:border-accent/50 md:bg-primary/5' : 'text-text-secondary hover:text-text hover:bg-primary/10 border'} md:border-text-secondary/20 md:flex md:flex-col md:overflow-hidden">
          <!-- Mobile: Just the number -->
          <div class="md:hidden text-base text-secondary font-semibold">${module.number}</div>
          <!-- Desktop: Full content -->
          <div class="hidden md:flex md:flex-col md:w-full md:h-full">
            <div class="text-base text-secondary font-semibold md:font-medium md:mb-2 flex-shrink-0">${module.number}</div>
            <h3 class="text-xs md:text-sm lg:text-base font-heading text-text mb-1 md:mb-2 group-hover:text-accent transition-colors duration-300 break-words leading-tight" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">${module.title}</h3>
            <p class="text-xs md:text-sm text-text-secondary leading-relaxed flex-grow break-words" style="display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">${module.description}</p>
          </div>
        </a>
      `;
    });

    return html;
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

  private setupSystemPromptGeneratorLink(): void {
    const link = this.container?.querySelector('a[href="/system-prompt-generator"]');
    link?.addEventListener('click', (e) => {
      e.preventDefault();
      window.history.pushState({}, '', '/system-prompt-generator');
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
  }

  private setupBackButton(): void {
    const backBtn = this.container?.querySelector('#back-to-courses-btn');
    if (!backBtn) return;

    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.history.pushState({}, '', '/courses');
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
  }

  private setupReaderButton(courseSlug: string, moduleNumber: number): void {
    const readerBtn = this.container?.querySelector('#view-reader-btn');
    if (!readerBtn) return;

    readerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.history.pushState({}, '', `/course/${courseSlug}/reader/module/${moduleNumber}`);
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
  }

  private extractYouTubeVideoId(url: string): string | null {
    // Handle various YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/.*[?&]v=([^&\n?#]+)/
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }

    return null;
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


