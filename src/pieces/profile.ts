import { Modal } from './modal';
import { ScrollFade } from '../scroll-fade';

export class Profile {
    private container: HTMLElement | null = null;
    private modal: Modal;
    private emstrataModal: Modal;
  
    constructor() {
      this.modal = new Modal('skills-modal');
      this.emstrataModal = new Modal('emstrata-features-modal');
    }
  
    public mount(container: HTMLElement): void {
      this.container = container;
      this.modal.mount(container);
      this.emstrataModal.mount(container);
  
      const section = document.createElement('section');
      section.id = 'about';
      section.className = 'fade-in-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out';
      section.innerHTML = `
        <div class="max-w-6xl mx-auto py-8 md:py-16 px-0 md:px-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-6 md:mb-8 relative">
            <!-- Connecting gradient line -->
            <div class="hidden md:block absolute top-[150px] left-1/2 w-px h-[300px] bg-gradient-to-b from-transparent via-secondary/20 to-transparent -translate-x-1/2"></div>
            
            <!-- Left Column: Professional -->
            <div class="group flex flex-col items-center relative rounded-2xl md:rounded-3xl p-6 md:p-10 overflow-hidden transition-all duration-500 md:hover:scale-[1.02] w-full"
                 style="background: linear-gradient(135deg, rgba(42, 42, 58, 0.4) 0%, rgba(42, 42, 58, 0.2) 100%); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);">
              <div class="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10 w-full">
                <div class="h-[200px] md:h-[300px] flex items-center justify-center mb-6 md:mb-8">
                  <div class="relative mx-auto">
                    <div class="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img 
                      src="/about-pic.jpeg" 
                      alt="Nick Goldstein" 
                      class="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full object-cover shadow-2xl hover:shadow-[0_20px_60px_rgba(59,130,246,0.4)] hover:scale-105 transition-all duration-500 mx-auto"
                    />
                  </div>
                </div>
                <h2 class="text-2xl md:text-3xl font-heading text-text text-center mb-4 md:mb-6">Nick Goldstein</h2>
                <p class="text-base md:text-lg text-text-secondary leading-relaxed text-center mb-4 md:mb-6">
                  IT Consultant at Oracle Health and self-taught fullstack developer. I build AI-powered platforms that 
                  create immersive narrative experiences, focusing on tools that enable meaningful human-AI collaboration 
                  and push the boundaries of interactive storytelling.
                </p>
                <div class="flex flex-wrap justify-center gap-1.5 md:gap-2 pt-4 border-t border-text-secondary/10">
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
            
            <!-- Right Column: Emstrata -->
            <div class="group flex flex-col items-center relative rounded-2xl md:rounded-3xl p-6 md:p-10 overflow-hidden transition-all duration-500 md:hover:scale-[1.02] w-full"
                 style="background: linear-gradient(135deg, rgba(42, 42, 58, 0.4) 0%, rgba(42, 42, 58, 0.2) 100%); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10 w-full">
                <div class="h-[200px] md:h-[300px] flex items-center justify-center mb-6 md:mb-8">
                  <a href="https://emstrata.com/try" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="block cursor-pointer relative group/icon mx-auto">
                    <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/30 to-blue-600/30 blur-2xl opacity-50 group-hover/icon:opacity-100 transition-opacity duration-500"></div>
                    <div class="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-3xl transition-all duration-500 hover:scale-110 flex items-center justify-center overflow-hidden mx-auto" 
                         style="box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 80px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2);">
                      <img src="/emstrata.png" alt="Emstrata" class="w-full h-full object-cover object-center">
                    </div>
                  </a>
                </div>
                <h2 class="text-2xl md:text-3xl font-heading text-text text-center mb-4 md:mb-6">Emstrata</h2>
                <p class="text-base md:text-lg text-text-secondary leading-relaxed text-center mb-4 md:mb-6">
                  An AI-driven text-based simulation platform that creates immersive narrative experiences through collaborative storytelling. Users participate in real-time simulations where both humans and AI contribute to evolving storylines with logical consistency.
                </p>
                <div class="flex flex-wrap justify-center gap-1.5 md:gap-2 pt-4 border-t border-text-secondary/10">
                  <button 
                    class="text-sm text-text-secondary hover:text-text transition-colors duration-300"
                    aria-label="View Build massive worlds feature"
                    data-feature="Build massive worlds"
                  >
                    Build massive worlds
                  </button>
                  <span class="text-text-secondary/30">•</span>
                  <button 
                    class="text-sm text-text-secondary hover:text-text transition-colors duration-300"
                    aria-label="View Near-perfect continuity feature"
                    data-feature="Near-perfect continuity"
                  >
                    Near-perfect continuity
                  </button>
                  <span class="text-text-secondary/30">•</span>
                  <button 
                    class="text-sm text-text-secondary hover:text-text transition-colors duration-300"
                    aria-label="View Reality maintaining AI feature"
                    data-feature="Reality maintaining AI"
                  >
                    Reality maintaining AI
                  </button>
                  <span class="text-text-secondary/30">•</span>
                  <button 
                    class="text-sm text-text-secondary hover:text-text transition-colors duration-300"
                    aria-label="View Multiparticipant collaboration feature"
                    data-feature="Multiparticipant collaboration"
                  >
                    Multiparticipant collaboration
                  </button>
                  <span class="text-text-secondary/30">•</span>
                  <button 
                    class="text-sm text-text-secondary hover:text-text transition-colors duration-300"
                    aria-label="View Human intervention techniques feature"
                    data-feature="Human intervention techniques"
                  >
                    Human intervention techniques
                  </button>
                  <span class="text-text-secondary/30">•</span>
                  <button 
                    class="text-sm text-text-secondary hover:text-text transition-colors duration-300"
                    aria-label="View Orchestrator Mode feature"
                    data-feature="Orchestrator Mode"
                  >
                    Orchestrator Mode
                  </button>
                  <span class="text-text-secondary/30">•</span>
                  <button 
                    class="text-sm text-text-secondary hover:text-text transition-colors duration-300"
                    aria-label="View Publish Stories feature"
                    data-feature="Publish Stories"
                  >
                    Publish Stories
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- CTAs Row -->
          <div class="flex flex-col md:flex-row flex-wrap justify-center gap-3 md:gap-4 mt-6 md:mt-8 w-full px-4 md:px-0">
            <a 
              href="/Nick_Goldstein_Resume.pdf" 
              target="_blank"
              class="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#a855f7] to-[#9333ea] hover:from-[#9333ea] hover:to-[#7e22ce] text-white rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:shadow-purple-500/60 hover:scale-105"
            >
              <i class="far fa-file-pdf"></i>
              View Resume
            </a>
            <a 
              href="https://emstrata.com/try" 
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              <i class="fas fa-book-open"></i>
              Check Out Emstrata
            </a>
            <a 
              href="#connect"
              class="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-accent to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              <i class="fas fa-link"></i>
              Connect
            </a>
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
  
      const featureDescriptions: { [key: string]: { description: string; videoId: string } } = {
        'Build massive worlds': {
          description: 'Create expansive, detailed worlds with rich histories, complex geography, and intricate social systems. Our world-building tools let you craft everything from sprawling fantasy realms to futuristic sci-fi civilizations with unlimited scope and depth.',
          videoId: 'dQw4w9WgXcQ'
        },
        'Near-perfect continuity': {
          description: 'Our AI maintains seamless narrative flow across all interactions, ensuring your story world remains consistent and believable. Every character, location, and event is tracked and referenced accurately throughout your entire simulation experience.',
          videoId: 'dQw4w9WgXcQ'
        },
        'Reality maintaining AI': {
          description: 'Advanced AI systems continuously monitor and adjust the simulation environment, keeping all story elements coherent and realistic. The AI acts as an invisible narrator, ensuring your world feels alive and responsive to every action.',
          videoId: 'dQw4w9WgXcQ'
        },
        'Multiparticipant collaboration': {
          description: 'Invite friends to join your simulation and collaborate in real-time. Each participant can take on different roles, make decisions, and contribute to the evolving narrative. Perfect for group storytelling, D&D campaigns, or collaborative world-building.',
          videoId: 'dQw4w9WgXcQ'
        },
        'Human intervention techniques': {
          description: 'The Invisible Hand lets you discretely introduce plot threads, character details, or environmental elements that the AI seamlessly weaves into the current scene. The Protest Function maintains story logic by triggering seamless corrections when the AI generates something that breaks established rules or contradicts previous events.',
          videoId: 'dQw4w9WgXcQ'
        },
        'Orchestrator Mode': {
          description: 'Stand between AI layers to edit, add to, or modify AI instructions before they\'re applied to the simulation. Change or delete probability results from the discovery layer, and add your own custom rules and logic on top of Emstrata\'s traditional architecture. Perfect for advanced users who want fine-grained control over AI behavior.',
          videoId: 'dQw4w9WgXcQ'
        },
        'Publish Stories': {
          description: 'Share your completed simulations with the world through our Collections feature. Publish your narratives as viewable transcripts that others can read, explore, and enjoy. Perfect for showcasing your storytelling skills, sharing your creative work, or building an audience for your narratives.',
          videoId: 'dQw4w9WgXcQ'
        }
      };

      const buttons = this.container?.querySelectorAll('button');
      buttons?.forEach(button => {
        button.addEventListener('click', () => {
          // Check if it's an Emstrata feature button
          const featureName = button.getAttribute('data-feature');
          if (featureName && featureDescriptions[featureName]) {
            const feature = featureDescriptions[featureName];
            const content = `
              <h3 class="text-2xl font-heading mb-4 text-text">${featureName}</h3>
              <p class="text-text-secondary leading-relaxed mb-4">
                ${feature.description}
              </p>
            `;
            this.emstrataModal.open(content);
            return;
          }
          
          // Otherwise check if it's a skill button
          const skill = button.textContent?.trim();
          if (skill && skillsContent[skill]) {
            this.modal.open(skillsContent[skill]);
          }
        });
      });
    }
  }