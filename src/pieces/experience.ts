interface StoryChapter {
  marker: string;
  headline: string;
  bodyLeft: string;
  bodyRight?: string;
  icon: string;
  iconColor: string;
  aside?: string;
  showContactLinks?: boolean;
}

const CONTACT_LINKS_HTML = `
  <div class="connect-links">
    <p class="connect-label">Connect with me on:</p>
    <a
      href="https://www.linkedin.com/in/nicholas-goldstein-362a13179"
      target="_blank"
      rel="noopener noreferrer"
      class="panel-cta connect-btn connect-btn--primary inline-flex items-center gap-2.5 px-6 py-2.5 text-base bg-gradient-to-r from-secondary to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
    >
      <i class="fab fa-linkedin text-lg"></i>
      <span>LinkedIn</span>
    </a>
    <a
      href="https://github.com/goldsteinnicholas"
      target="_blank"
      rel="noopener noreferrer"
      class="connect-btn connect-btn--secondary inline-flex items-center gap-2.5 px-6 py-2.5 text-sm rounded-full font-medium"
    >
      <i class="fab fa-github text-lg"></i>
      <span>GitHub</span>
    </a>
  </div>
`;

export class Experience {
  private chapters: StoryChapter[] = [
    {
      marker: 'Coding',
      headline: 'At 17 I started learning to build web apps',
      icon: 'fa-solid fa-code',
      iconColor: '#6366f1',
      bodyLeft:
        'Starting out, it was a creative outlet and a great opportunity to learn something new, but over time my interest in the technical aspects of building web apps grew and became the start of my technical journey.',
      bodyRight:
        'Building, designing, debugging, and rebuilding applications is what inevitably made me want a job in the tech industry. To this day, I work on things that I find interesting and read up on the newest technologies and trends surrounding app development.',
      aside:
        'I also built my own projects along the way. PLATO5 was a social platform I built around personality-based matching and pushing connection into real life; it is no longer in operation. My most recent project is <a href="https://emstrata.com/try" target="_blank" rel="noopener noreferrer" class="panel-link">Emstrata</a>, an AI world-building platform where people and LLMs shape worlds that evolve with real continuity.',
    },
    {
      marker: 'University &middot; 2019-2022',
      headline: 'Later, I studied Business Economics',
      icon: 'fa-solid fa-graduation-cap',
      iconColor: '#10b981',
      bodyLeft:
        'I transferred to SUNY Oneonta and graduated with a BS in Business Economics, learning how organizations think, decide, and deliver. I\'ve always been interested in entrepreneurship and business, as well as the numbers that drive them, so this was a natural fit for me.',
      bodyRight:
        'I kept teaching myself technical skills outside class. Thinking up new startup ideas and trying them out was something I pursued a lot in college. Juggling classes, jobs, and self-directed learning helped me develop a strong work ethic and a knack for problem-solving.',
    },
    {
      marker: 'Oracle &middot; October 2022',
      headline: 'Then, Oracle Health offered me a job',
      icon: 'fa-solid fa-briefcase-medical',
      iconColor: '#ef4444',
      bodyLeft:
        'I joined as a Consultant and got my start in Transaction Services, independently leading client communications across engagements spanning EDI, claims editing, eligibility verification, Automated Messaging, and Payment Terminals/POS systems. I got a ton of experience with direct client contact and learned a lot about the technical and financial aspects of healthcare systems.',
      bodyRight:
        'Helping coordinate with third-party vendors and clients from all over the country gave me an understanding of the fundamentals of Consulting and the importance of clear communication and stakeholder management. My technical chops developed with more and more exposure to the complexities of implementation. Later on, I transitioned to the Federal Cerner Patient Accounting (CPA) team and crosstrained on Cerner Contract Management (CCM).',
    },
    {
      marker: 'Specialization &middot; 2022-Present',
      headline: 'Healthcare IT became the focus',
      icon: 'fa-solid fa-heart-pulse',
      iconColor: '#06b6d4',
      bodyLeft:
        'More and more I\'ve gotten comfortable with Healthcare IT being the path forward and a great niche in tech for me to inhabit. I still build interesting projects in my freetime, but I\'m dedicated to deepening my expertise in EHR systems and the technology that helps Healthcare organizations do their work.',
      bodyRight:
        'Under an active federal security clearance, I advise Government Healthcare clients on this work. Today I guide CPA and CCM delivery for a large Federal Healthcare client, including integration and validation of billing, charge capture, and claims/accounts receivable workflows, as well as Contract Management to support accurate reimbursement and revenue recovery.',
    },
    {
      marker: 'Now',
      headline: 'Deepening my knowledge',
      icon: 'fa-solid fa-cloud',
      iconColor: '#d946ef',
      bodyLeft:
        'I\u2019m pursuing my PMP while continuing to grow in cloud computing and AI, including AWS, Azure, OCI, and Azure AI Fundamentals. I plan to use my knowledge of Project Management, Cloud, AI, and more to bolster my Consulting skills and supplement my Healthcare IT experience.',
      showContactLinks: true,
    },
  ];

  public mount(container: HTMLElement): void {
    this.chapters.forEach((chapter, index) => {
      const panel = document.createElement('section');
      panel.id = index === 0 ? 'story' : `story-${index + 1}`;
      panel.className = 'homepage-panel';
      panel.dataset.panelIndex = String(index + 1);
      panel.innerHTML = `
        <div class="panel-split panel-split--story">
          <header class="story-header panel-rise panel-rise--delay-1">
            <span class="story-icon" style="--story-icon-color: ${chapter.iconColor}" aria-hidden="true">
              <i class="${chapter.icon}"></i>
            </span>
            <span class="story-marker text-text-secondary/70 tracking-[0.22em] uppercase font-medium">${chapter.marker}</span>
            <span class="story-headline font-heading text-text leading-snug">
              ${chapter.headline}
            </span>
          </header>
          <div class="panel-col panel-col--left panel-rise panel-rise--delay-2">
            <p class="panel-text">${chapter.bodyLeft}</p>
          </div>
          <div class="panel-col panel-col--right${chapter.showContactLinks ? ' panel-col--connect' : ''} panel-rise panel-rise--delay-3">
            ${chapter.showContactLinks ? CONTACT_LINKS_HTML : `<p class="panel-text">${chapter.bodyRight}</p>`}
          </div>
          ${chapter.aside ? `<p class="panel-aside panel-rise panel-rise--delay-4">${chapter.aside}</p>` : ''}
        </div>
      `;
      container.appendChild(panel);
    });
  }

  public reinitializeListeners(): void {
    // Story panels have no interactive listeners
  }
}
