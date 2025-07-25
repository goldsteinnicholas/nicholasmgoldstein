import { ScrollFade } from '../scroll-fade';

interface TimelineEntry {
  date: string;
  title: string;
  company?: string;
  description: string[];
  category: 'PROFESSIONAL' | 'PROJECT' | 'EDUCATION' | 'CERTIFICATION';
}

export class Experience {
  private container: HTMLElement | null = null;
  private activeFilter: 'ALL' | 'PROFESSIONAL' | 'PROJECT' | 'EDUCATION' | 'CERTIFICATION' = 'ALL';
  private entries: TimelineEntry[] = [
    {
      date: 'August 2025',
      title: 'Relaunched PLATO5',
      description: [
        'Decided to take down and rebuild PLATO5 to focus on optimizing the pipeline from online connection to real life friendships',
        'Refined the social engine approach with improved matching algorithms and user experience',
        'Integrated AI into every aspect of the platform to enhance user connections'
      ],
      category: 'PROJECT'
    },
    {
      date: 'November 2024',
      title: 'PLATO5 Web App Launch',
      description: [
        'Successfully launched social networking platform at plato5.us',
        'Web application release with mobile apps following shortly'
      ],
      category: 'PROJECT'
    },
    {
      date: 'March 2024',
      title: 'Microsoft Azure AI Fundamentals',
      company: 'Microsoft',
      description: ['Microsoft Certified: Azure AI Fundamentals'],
      category: 'CERTIFICATION'
    },
    {
      date: 'June 2023–Present',
      title: 'Developing PLATO5...',
      description: [
        'Developed a full-stack social networking platform using Flutter, TypeScript, PostgreSQL, and Go',
        'Implemented scalable backend architecture focusing on security and performance',
        'Integrated features promoting safe and positive user interactions'
      ],
      category: 'PROJECT'
    },
    {
      date: 'May 2023',
      title: 'Cloud Certifications',
      description: [
        'AWS Certified Cloud Practitioner',
        'Oracle Cloud Infrastructure 2023 Certified Foundations Associate'
      ],
      category: 'CERTIFICATION'
    },
    {
        date: '2022-2023',
        title: 'Oracle Cloud Infrastructure',
        description: ['OCI 2022 Foundations Associate'],
        category: 'CERTIFICATION'
      },
    {
      date: 'Oct. 2022–Present',
      title: 'IT Consultant',
      company: 'Oracle Health',
      description: [
        'Troubleshoot complex device and software issues, providing timely and effective solutions',
        'Navigate intricate professional scenarios, demonstrating strong problem-solving skills',
        'Maintain clear communication with clients throughout project lifecycles',
        'Collaborate with cross-functional teams to deliver comprehensive IT solutions'
      ],
      category: 'PROFESSIONAL'
    },
    {
      date: 'August 2022',
      title: 'Business Economics',
      company: 'SUNY Oneonta',
      description: [
        'Graduated with Bachelor\'s Degree',
        'Vice President of Fundraising for SUNY OnMark (Marketing Club)',
        'Led marketing initiatives and fundraising campaigns'
      ],
      category: 'EDUCATION'
    },
    {
      date: '2020',
      title: 'Jam\'s Lunch Website',
      description: [
        'Developed and deployed a restaurant website focusing on user experience and mobile responsiveness'
      ],
      category: 'PROJECT'
    },
    {
      date: '2019',
      title: 'SUNY Oneonta',
      description: ['Transferred to pursue Business Economics'],
      category: 'EDUCATION'
    },
    {
      date: '2015',
      title: 'Started Programming Journey',
      description: [
        'Began self-teaching programming fundamentals and web development'
      ],
      category: 'EDUCATION'
    }
  ];

  public mount(container: HTMLElement): void {
    this.container = container;
    
    const section = document.createElement('section');
    section.id = 'experience';
    section.className = 'py-16 px-6 fade-in-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out';
    section.innerHTML = `
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-heading text-text text-center mb-8">Experience Timeline</h2>
        
        <!-- Category Filters -->
        <div class="flex flex-wrap justify-center gap-3 mb-16">
          <button class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-gradient-to-r from-secondary to-blue-600 text-white shadow-lg" data-filter="ALL">
            All
          </button>
          <button class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 text-text-secondary hover:text-text hover:bg-card-bg" data-filter="PROFESSIONAL">
            Professional
          </button>
          <button class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 text-text-secondary hover:text-text hover:bg-card-bg" data-filter="PROJECT">
            Projects
          </button>
          <button class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 text-text-secondary hover:text-text hover:bg-card-bg" data-filter="EDUCATION">
            Education
          </button>
          <button class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 text-text-secondary hover:text-text hover:bg-card-bg" data-filter="CERTIFICATION">
            Certifications
          </button>
        </div>

        <div class="relative">
          <!-- Timeline line with gradient -->
          <div class="absolute left-[22px] md:left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-secondary via-secondary to-secondary/30 rounded-full"></div>
          
          <!-- Timeline entries -->
          <div class="space-y-16" id="timeline-entries"></div>
        </div>
      </div>
    `;
    
    this.container.appendChild(section);
    this.setupFilterListeners();
    this.renderEntries();
    ScrollFade.init();
  }

  private setupFilterListeners(): void {
    const buttons = this.container?.querySelectorAll('button[data-filter]');
    buttons?.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        buttons.forEach(btn => {
          btn.classList.remove('bg-gradient-to-r', 'from-secondary', 'to-blue-600', 'text-white', 'shadow-lg');
          btn.classList.add('text-text-secondary', 'hover:text-text', 'hover:bg-card-bg');
        });
        
        // Add active class to clicked button
        button.classList.add('bg-gradient-to-r', 'from-secondary', 'to-blue-600', 'text-white', 'shadow-lg');
        button.classList.remove('text-text-secondary', 'hover:text-text', 'hover:bg-card-bg');
        
        // Update filter and re-render
        this.activeFilter = button.getAttribute('data-filter') as typeof this.activeFilter;
        this.renderEntries();
      });
    });
  }

  private renderEntries(): void {
    const entriesContainer = this.container?.querySelector('#timeline-entries');
    if (!entriesContainer) return;

    const categoryColors = {
      'PROFESSIONAL': 'bg-accent/30 border-accent',
      'PROJECT': 'bg-purple/30 border-purple',
      'EDUCATION': 'bg-secondary/30 border-secondary',
      'CERTIFICATION': 'bg-accent/30 border-accent'
    };

    const categoryBulletColors = {
      'PROFESSIONAL': 'text-accent',
      'PROJECT': 'text-purple',
      'EDUCATION': 'text-secondary',
      'CERTIFICATION': 'text-accent'
    };
        
    // Clear existing entries
    entriesContainer.innerHTML = '';

    // Filter entries
    const filteredEntries = this.activeFilter === 'ALL' 
      ? this.entries 
      : this.entries.filter(entry => entry.category === this.activeFilter);

    filteredEntries.forEach((entry, index) => {
      const entryElement = document.createElement('div');
      entryElement.className = `flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} gap-8 relative group`;
      
      entryElement.innerHTML = `
        <!-- Timeline dot with pulse effect -->
        <div class="absolute left-[22px] md:left-1/2 -translate-x-1/2">
          <div class="w-4 h-4 bg-secondary rounded-full mt-2 z-10 relative"></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-secondary/30 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
        </div>
        
        <!-- Timeline connector -->
        <div class="absolute left-[22px] md:left-1/2 top-[14px] w-8 h-0.5 bg-secondary/30 ${index % 2 === 0 ? 'md:-translate-x-full' : 'md:translate-x-0'}"></div>
        
        <!-- Date -->
        <div class="ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}">
          <span class="text-text-secondary text-sm font-medium bg-card-bg px-4 py-1 rounded-full shadow-sm border border-text-secondary/20">${entry.date}</span>
        </div>
        
        <!-- Content -->
        <div class="ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} relative">
          <div class="${categoryColors[entry.category]} rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:translate-x-0.5 animate-float border-2">
            <div class="flex items-start justify-between">
              <div>
                <h3 class="text-xl font-semibold text-text">${entry.title}</h3>
                ${entry.company ? `<div class="text-text-secondary font-medium mt-1">${entry.company}</div>` : ''}
              </div>
              <span class="hidden md:block px-3 py-1 bg-card-bg/50 rounded-full text-sm text-text-secondary border border-text-secondary/20">${entry.category}</span>
            </div>
            <ul class="mt-4 space-y-2">
              ${entry.description.map(desc => `
                <li class="flex gap-2 text-text-secondary">
                  <span class="${categoryBulletColors[entry.category]}">•</span>
                  <span>${desc}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      `;
      
      entriesContainer.appendChild(entryElement);
    });

  }
  
}