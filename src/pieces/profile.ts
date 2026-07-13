export class Profile {
  public mount(container: HTMLElement): void {
    const panel = document.createElement('section');
    panel.id = 'intro';
    panel.className = 'homepage-panel';
    panel.dataset.panelIndex = '0';
    panel.innerHTML = `
      <div class="panel-split panel-split--intro">
        <div class="panel-col panel-col--left intro-visual panel-rise panel-rise--delay-1">
          <img
            src="/about-pic.jpeg"
            alt="Nick Goldstein"
            class="profile-photo rounded-full object-cover"
          />
          <span class="profile-tagline">
            Federal Oracle Health Patient Accounting Consultant
          </span>
          <a
            href="/Nicholas_Goldstein_Resume_NoPersonalInfo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="panel-cta inline-flex items-center gap-2.5 px-6 py-2.5 text-base bg-gradient-to-r from-secondary to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 w-fit"
          >
            <i class="far fa-file-pdf"></i>
            View Resume
          </a>
        </div>

        <div class="panel-col panel-col--right intro-content panel-rise panel-rise--delay-2">
          <div class="intro-header">
            <h1 class="profile-name font-heading text-text">Nick Goldstein</h1>
            <p class="intro-role">Healthcare IT Consultant</p>
            <p class="intro-location text-text-secondary">Oracle Health &middot; Austin, TX</p>
          </div>
          <p class="panel-text">
            I work with Federal Healthcare clients on Cerner Patient Accounting and Contract Management through
            implementation and client communications. Most of my day is billing, charge capture, claims, and
            accounts receivable, plus helping people make sense of systems that do not always line up cleanly.
          </p>
          <button
            type="button"
            class="intro-read-story"
            data-action="read-story"
            aria-label="Read the story"
          >
            <span class="intro-read-story-text">Read the story</span>
            <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
        <div class="intro-jump panel-rise panel-rise--delay-3">
          <p class="intro-jump-label">Jump to section</p>
          <div class="intro-jump-links">
            <button
              type="button"
              class="intro-jump-link intro-jump-link--tech"
              data-panel-index="1"
              aria-label="Jump to Getting started in tech"
            >
              <i class="fa-solid fa-code" aria-hidden="true"></i>
              <span>Getting started in tech</span>
            </button>
            <button
              type="button"
              class="intro-jump-link intro-jump-link--education"
              data-panel-index="2"
              aria-label="Jump to Education"
            >
              <i class="fa-solid fa-graduation-cap" aria-hidden="true"></i>
              <span>Education</span>
            </button>
            <button
              type="button"
              class="intro-jump-link intro-jump-link--work"
              data-panel-index="3"
              aria-label="Jump to Professional Experience"
            >
              <i class="fa-solid fa-briefcase-medical" aria-hidden="true"></i>
              <span>Professional Experience</span>
            </button>
            <button
              type="button"
              class="intro-jump-link intro-jump-link--connect"
              data-panel-index="5"
              aria-label="Go to connect slide"
            >
              <i class="fa-solid fa-handshake" aria-hidden="true"></i>
              <span>Connect</span>
            </button>
          </div>
        </div>
      </div>
    `;

    container.appendChild(panel);
  }

  public bindListeners(container: HTMLElement): void {
    const panel = container.querySelector('#intro');
    if (!panel) return;

    const scrollToPanel = (panelIndex: number) => {
      const target = container.querySelector(
        `.homepage-panel[data-panel-index="${panelIndex}"]`,
      ) as HTMLElement | null;
      if (!target) return;
      container.scrollTo({
        left: target.offsetLeft,
        behavior: 'smooth',
      });
    };

    panel.querySelectorAll('.intro-jump-link').forEach((button) => {
      button.addEventListener('click', () => {
        const panelIndex = Number((button as HTMLElement).dataset.panelIndex);
        if (!Number.isNaN(panelIndex)) scrollToPanel(panelIndex);
      });
    });

    panel.querySelector('[data-action="read-story"]')?.addEventListener('click', () => {
      scrollToPanel(1);
    });
  }
}
