export class Hero {
  private container: HTMLElement | null = null;

  private projects = [
    {
      id: 'plato5',
      name: 'PLATO5',
      description: 'A social engine that turns online connections into real-life friendships. Every 24 hours, you get matched with three compatible people for a groupchat, where our AI coach Zen helps conversations flourish and suggests local events to attend together.',
      icon: '/plato5.png',
      color: 'purple',
      status: 'Being Rebuilt',
      link: 'https://plato5.us',
      ctaText: 'Check Out'
    },
    {
      id: 'emstrata',
      name: 'Emstrata',
      description: 'An AI-driven text-based simulation platform that creates immersive narrative experiences through collaborative storytelling. Users participate in real-time simulations where both humans and AI contribute to evolving storylines with logical consistency.',
      icon: '/emstrata.png',
      color: 'blue',
      status: 'Live',
      link: 'https://emstrata.com',
      ctaText: 'Check Out'
    },
    {
      id: 'mhs',
      name: 'my human stats',
      description: 'A personalized productivity tool that builds on the power of spreadsheets without requiring coding knowledge. Track and analyze your life in a deeply customized way - diet, habits, mood, productivity, or anything important to you.',
      icon: '/mhs_logo.png',
      color: 'teal',
      status: 'Coming Soon',
      link: 'https://myhumanstats.com',
      ctaText: 'Coming to myhumanstats.com'
    }
  ];

  public mount(container: HTMLElement): void {
    this.container = container;
    
    const section = document.createElement('section');
    section.className = 'relative py-20 px-6 overflow-hidden';
    section.innerHTML = `
      <div class="max-w-7xl mx-auto">
        <!-- Projects Grid -->
        <div class="mb-20">
          <h2 class="text-3xl md:text-4xl font-heading text-center mb-16">
            <span class="gradient-text">Current Projects</span>
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-16" id="projects-grid">
            ${this.projects.map(project => this.renderProjectCard(project)).join('')}
          </div>
        </div>
      </div>

      <!-- Background Elements -->
      <div class="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float" style="animation-delay: -2s;"></div>
      <div class="absolute bottom-20 left-1/4 w-20 h-20 bg-purple/10 rounded-full blur-2xl animate-float" style="animation-delay: -4s;"></div>
    `;
    
    this.container.appendChild(section);
    this.setupProjectCardInteractions();
  }

  private renderProjectCard(project: any): string {
    const statusColors: Record<string, string> = {
      'Live': 'text-accent',
      'Coming Soon': 'text-secondary',
      'Being Rebuilt': 'text-secondary'
    };

    const iconColors: Record<string, string> = {
      'purple': 'group-hover:shadow-purple-500/20',
      'blue': 'group-hover:shadow-blue-500/20',
      'teal': 'group-hover:shadow-[#14b8a6]/20'
    };

    const buttonGradients: Record<string, string> = {
      'purple': 'bg-gradient-to-r from-[#d946ef] to-[#c026d3] hover:from-[#c026d3] hover:to-[#a21caf]',
      'blue': 'bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8]',
      'teal': 'bg-gradient-to-r from-[#14b8a6] to-[#0d9488] hover:from-[#0d9488] hover:to-[#0f766e]'
    };

    return `
      <div class="group text-center project-card">
        <!-- Prominent Icon -->
        <div class="mb-8 flex justify-center">
          <div class="w-32 h-32 rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl ${iconColors[project.color]} flex items-center justify-center overflow-hidden">
            <img src="${project.icon}" alt="${project.name}" class="w-full h-full object-cover object-center">
          </div>
        </div>
        
        <!-- Title and Status -->
        <div class="mb-4">
          <h3 class="text-2xl font-heading font-bold text-text mb-2">${project.name}</h3>
          <span class="px-4 py-2 ${statusColors[project.status]} text-sm font-medium rounded-full shadow-lg flex items-center gap-2 justify-center w-fit mx-auto">
            <i class="fas ${project.status === 'Live' ? 'fa-solid fa-star-of-life' : project.status === 'Being Rebuilt' ? 'fa-hammer' : 'fa-clock'} animate-pulse"></i>
            ${project.status}
          </span>
        </div>
        
        <!-- Description -->
        <p class="text-text-secondary leading-relaxed mb-6 text-left">
          ${project.description}
        </p>

        <!-- Pill Button -->
        ${project.status === 'Coming Soon' ? `
          <button 
             class="inline-flex items-center gap-2 px-8 py-4 bg-card-bg text-text-secondary rounded-full font-semibold cursor-not-allowed border border-text-secondary/20">
            <span>Coming Soon</span>
            <i class="fas fa-clock text-sm"></i>
          </button>
        ` : `
          <a href="${project.link}" 
             target="_blank" 
             rel="noopener noreferrer"
             class="inline-flex items-center gap-2 px-8 py-4 ${buttonGradients[project.color]} text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            <span>${project.ctaText || 'Check Out'}</span>
            <i class="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
          </a>
        `}
      </div>
    `;
  }

  private setupProjectCardInteractions(): void {
    const cards = this.container?.querySelectorAll('#projects-grid > div');
    cards?.forEach((card, index) => {
      // Add staggered animation delay
      (card as HTMLElement).style.animationDelay = `${index * 0.1}s`;
    });
  }
} 