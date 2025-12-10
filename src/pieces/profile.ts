import { Modal } from './modal';
import { ScrollFade } from '../scroll-fade';

export class Profile {
    private container: HTMLElement | null = null;
    private modal: Modal;
  
    constructor() {
      this.modal = new Modal('skills-modal');
    }
  
    public mount(container: HTMLElement): void {
      this.container = container;
      this.modal.mount(container);
  
      const section = document.createElement('section');
      section.id = 'about';
      section.className = 'fade-in-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out';
      section.innerHTML = `
        <div class="max-w-4xl mx-auto py-16 px-6">
          <div class="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <div class="flex-shrink-0">
              <img 
                src="/about-pic.jpeg" 
                alt="Nicholas M. Goldstein" 
                class="w-[300px] h-[300px] rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div class="flex-grow space-y-8 w-full">
              <div class="space-y-6">
                <h2 class="text-3xl font-heading text-text text-center md:text-left">Nicholas M. Goldstein</h2>
                <p class="text-lg text-text-secondary leading-relaxed text-center md:text-left">
                  IT Consultant at Oracle Health and self-taught fullstack developer. Currently building Emstrata, 
                  an emergent narrative cobuilder that enables human-AI collaborative storytelling, and PLATO5, 
                  a social networking platform focused on combating the growing loneliness epidemic. Unlike traditional 
                  social media, PLATO5 functions as a Social Engine, designed to facilitate real-world connections through 
                  personality-based matching and shared interests, encouraging users to meet offline and build meaningful relationships.
                  <a href="https://plato5.us/about/how-social-engines-can-solve-the-loneliness-epidemic" 
                     class="text-secondary hover:text-blue-400 transition-colors duration-300 ml-1"
                     target="_blank"
                     rel="noopener noreferrer">
                    Learn more →
                  </a>
                </p>
              </div>
              
              <div class="flex flex-wrap justify-center md:justify-start gap-3">
                <a 
                  href="/Nick_Goldstein_Resume.pdf" 
                  target="_blank"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <i class="far fa-file-pdf"></i>
                  View Resume
                </a>
                <a 
                  href="#connect"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <i class="fas fa-link"></i>
                  Connect
                </a>
              </div>

              <div class="flex flex-wrap justify-center md:justify-start gap-2">
                <button 
                  class="text-sm text-text-secondary hover:text-text transition-colors duration-300"
                  aria-label="View Consulting experience"
                >
                  Consulting
                </button>
                <span class="text-text-secondary/30">•</span>
                <button 
                  class="text-sm text-text-secondary hover:text-text transition-colors duration-300"
                  aria-label="View IT Troubleshooting experience"
                >
                  IT Troubleshooting
                </button>
                <span class="text-text-secondary/30">•</span>
                <button 
                  class="text-sm text-text-secondary hover:text-text transition-colors duration-300"
                  aria-label="View Flutter experience"
                >
                  Flutter
                </button>
                <span class="text-text-secondary/30">•</span>
                <button 
                  class="text-sm text-text-secondary hover:text-text transition-colors duration-300"
                  aria-label="View Go experience"
                >
                  Go
                </button>
                <span class="text-text-secondary/30">•</span>
                <button 
                  class="text-sm text-text-secondary hover:text-text transition-colors duration-300"
                  aria-label="View TypeScript experience"
                >
                  TypeScript
                </button>
                <span class="text-text-secondary/30">•</span>
                <button 
                  class="text-sm text-text-secondary hover:text-text transition-colors duration-300"
                  aria-label="View PostgreSQL experience"
                >
                  PostgreSQL
                </button>
                <span class="text-text-secondary/30">•</span>
                <button 
                  class="text-sm text-text-secondary hover:text-text transition-colors duration-300"
                  aria-label="View Cloud experience"
                >
                  Cloud
                </button>
                <span class="text-text-secondary/30">•</span>
                <button 
                  class="text-sm text-text-secondary hover:text-text transition-colors duration-300"
                  aria-label="View AI experience"
                >
                  AI
                </button>
                <span class="text-text-secondary/30">•</span>
                <button 
                  class="text-sm text-text-secondary hover:text-text transition-colors duration-300"
                  aria-label="View Marketing experience"
                >
                  Marketing
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
  
      this.container.appendChild(section);
      this.setupEventListeners();
      ScrollFade.init();
    }
  
    private setupEventListeners(): void {
      const skillsContent: Record<string, string> = {
        'Consulting': `
          <h3 class="text-2xl font-heading mb-4 text-text">Consulting Experience</h3>
          <p class="text-text-secondary leading-relaxed mb-4">
            Technical consultant at Oracle Health, specializing in resolving complex device and software challenges.
          </p>
          <ul class="space-y-2 text-text-secondary">
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>Expert navigation of complex technical scenarios with proven problem-solving abilities</span>
            </li>
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>Clear and effective client communication throughout project lifecycles</span>
            </li>
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>Collaborative work with cross-functional teams to deliver comprehensive IT solutions</span>
            </li>
          </ul>
        `,
        'IT Troubleshooting': `
          <h3 class="text-2xl font-heading mb-4 text-text">IT Troubleshooting</h3>
          <p class="text-text-secondary leading-relaxed mb-4">
            Experienced in diagnosing and resolving complex technical issues at Oracle Health, with a focus on device and software solutions.
          </p>
          <ul class="space-y-2 text-text-secondary">
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>Complex system diagnostics and resolution</span>
            </li>
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>Rapid problem identification and solution implementation</span>
            </li>
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>Technical documentation and knowledge sharing</span>
            </li>
          </ul>
        `,
        'Flutter': `
          <h3 class="text-2xl font-heading mb-4 text-text">Flutter Development</h3>
          <p class="text-text-secondary leading-relaxed mb-4">
            Cross-platform mobile development specialist, currently spearheading the PLATO5 Mobile app frontend development using Flutter's robust framework capabilities.
          </p>
          <ul class="space-y-2 text-text-secondary">
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>Mobile frontend architecture and implementation</span>
            </li>
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>Cross-platform development optimization</span>
            </li>
          </ul>
        `,
        'Go': `
          <h3 class="text-2xl font-heading mb-4 text-text">Go Development</h3>
          <p class="text-text-secondary leading-relaxed mb-4">
            Backend developer specializing in REST APIs using the Gin framework. Creator of PIMS (Personality Interest Match System), 
            an innovative matching algorithm that leverages Euclidean distance calculations to compare personality traits, combined with 
            interest alignment and geohash-based location data for precise social connections.
          </p>
          <ul class="space-y-2 text-text-secondary">
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>Advanced algorithm development for personality matching</span>
            </li>
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>High-performance REST API implementation</span>
            </li>
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>Complex data processing and analysis</span>
            </li>
          </ul>
        `,
        'TypeScript': `
          <h3 class="text-2xl font-heading mb-4 text-text">TypeScript Development</h3>
          <p class="text-text-secondary leading-relaxed mb-4">
            Frontend developer leveraging TypeScript for both simple and complex applications. This portfolio site demonstrates clean, vanilla TypeScript implementation, while PLATO5 showcases advanced TypeScript usage with dynamic content rendering and complex API integrations. Creator of 5mark, a custom hyperstylized markup language designed specifically for article rendering in PLATO5.
          </p>
          <ul class="space-y-2 text-text-secondary">
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>Custom markup language development and implementation</span>
            </li>
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>Dynamic content rendering and API integration</span>
            </li>
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>Complex frontend architecture implementation</span>
            </li>
          </ul>
        `,
        'PostgreSQL': `
          <h3 class="text-2xl font-heading mb-4 text-text">PostgreSQL</h3>
          <p class="text-text-secondary leading-relaxed mb-4">
            Database developer utilizing PostgreSQL for robust data storage and retrieval needs across various projects.
          </p>
          <ul class="space-y-2 text-text-secondary">
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>Database design and optimization</span>
            </li>
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>Data integrity and security implementation</span>
            </li>
          </ul>
        `,
        'Cloud': `
          <h3 class="text-2xl font-heading mb-4 text-text">Cloud Computing</h3>
          <p class="text-text-secondary leading-relaxed mb-4">
            Certified cloud practitioner with a strong interest in cloud computing technologies and services. Actively expanding knowledge in cloud infrastructure and service implementation.
          </p>
          <ul class="space-y-2 text-text-secondary">
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>AWS Certified Cloud Practitioner</span>
            </li>
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>Microsoft Azure Fundamentals certified</span>
            </li>
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>Oracle Cloud Infrastructure (OCI) certified</span>
            </li>
          </ul>
        `,
        'AI': `
          <h3 class="text-2xl font-heading mb-4 text-text">AI Integration</h3>
          <p class="text-text-secondary leading-relaxed mb-4">
            Microsoft Azure AI Fundamentals certified developer, currently implementing AI solutions in real-world applications.
          </p>
          <ul class="space-y-2 text-text-secondary">
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>Developing AI conversation assistant for PLATO5</span>
            </li>
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>Azure AI Fundamentals certified</span>
            </li>
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>Integration of AI services in web applications</span>
            </li>
          </ul>
        `,
        'Marketing': `
          <h3 class="text-2xl font-heading mb-4 text-text">Marketing Experience</h3>
          <p class="text-text-secondary leading-relaxed mb-4">
            Combining business education with practical marketing experience, from college leadership to current digital marketing initiatives.
          </p>
          <ul class="space-y-2 text-text-secondary">
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>VP of Fundraising for SUNY OnMark (Marketing Club)</span>
            </li>
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>Digital social media marketing strategy for PLATO5</span>
            </li>
            <li class="flex gap-2">
              <span class="text-secondary">•</span>
              <span>Content creation and brand development</span>
            </li>
          </ul>
        `
      };
  
      const buttons = this.container?.querySelectorAll('button');
      buttons?.forEach(button => {
        button.addEventListener('click', () => {
          const skill = button.textContent?.trim();
          if (skill && skillsContent[skill]) {
            this.modal.open(skillsContent[skill]);
          }
        });
      });
    }
  }