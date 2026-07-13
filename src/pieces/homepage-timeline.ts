const TIMELINE_THEMES = [
  { progress: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', dot: '#8b5cf6', label: 'Intro' },
  { progress: 'linear-gradient(90deg, #8b5cf6, #6366f1)', dot: '#6366f1', label: 'Coding' },
  { progress: 'linear-gradient(90deg, #6366f1, #10b981)', dot: '#10b981', label: 'University' },
  { progress: 'linear-gradient(90deg, #10b981, #ef4444)', dot: '#ef4444', label: 'Oracle' },
  { progress: 'linear-gradient(90deg, #ef4444, #06b6d4)', dot: '#06b6d4', label: 'Specialization' },
  { progress: 'linear-gradient(90deg, #06b6d4, #d946ef)', dot: '#d946ef', label: 'Now' },
];

export class HomepageTimeline {
  private timelineEl: HTMLElement | null = null;
  private progressEl: HTMLElement | null = null;
  private scrollHandler: (() => void) | null = null;
  private resizeHandler: (() => void) | null = null;
  private resizeTimer: number | null = null;
  private scrollContainer: HTMLElement | null = null;
  private panelCount = 0;

  public mount(appContainer: HTMLElement, scrollContainer: HTMLElement, panelCount: number): void {
    this.destroy();
    this.scrollContainer = scrollContainer;
    this.panelCount = panelCount;

    const timeline = document.createElement('div');
    timeline.id = 'homepage-timeline';
    timeline.className = 'homepage-timeline';
    timeline.setAttribute('aria-hidden', 'true');
    timeline.innerHTML = `
      <div class="homepage-timeline-inner">
        <div class="timeline-track">
          <div class="timeline-track-bg"></div>
          <div class="timeline-track-progress"></div>
        </div>
        <div class="timeline-markers"></div>
      </div>
    `;

    appContainer.appendChild(timeline);
    this.timelineEl = timeline;
    this.progressEl = timeline.querySelector('.timeline-track-progress');

    const markersContainer = timeline.querySelector('.timeline-markers') as HTMLElement;
    TIMELINE_THEMES.slice(0, panelCount).forEach((theme, index) => {
      const marker = document.createElement('button');
      marker.type = 'button';
      marker.className = 'timeline-marker';
      marker.dataset.index = String(index);
      marker.setAttribute('aria-label', `Go to ${theme.label}`);
      marker.innerHTML = `
        <span class="timeline-marker-dot"></span>
        <span class="timeline-marker-label">${theme.label}</span>
      `;
      marker.addEventListener('click', () => {
        const panelWidth = scrollContainer.clientWidth;
        scrollContainer.scrollTo({
          left: index * panelWidth,
          behavior: 'smooth',
        });
      });
      markersContainer.appendChild(marker);
    });

    this.scrollHandler = () => this.updateFromScroll();
    this.resizeHandler = () => {
      if (this.resizeTimer !== null) {
        window.clearTimeout(this.resizeTimer);
      }
      this.resizeTimer = window.setTimeout(() => this.snapToNearestPanel(), 150);
    };

    scrollContainer.addEventListener('scroll', this.scrollHandler, { passive: true });
    window.addEventListener('resize', this.resizeHandler);
    this.updateFromScroll();
  }

  private snapToNearestPanel(): void {
    if (!this.scrollContainer) return;

    const panelWidth = this.scrollContainer.clientWidth;
    if (panelWidth <= 0) return;

    const index = Math.round(this.scrollContainer.scrollLeft / panelWidth);
    this.scrollContainer.scrollTo({ left: index * panelWidth, behavior: 'auto' });
    this.updateFromScroll();
  }

  private updateFromScroll(): void {
    if (!this.scrollContainer || !this.timelineEl || !this.progressEl) return;

    const viewport = this.scrollContainer.clientWidth;
    const maxIndex = Math.max(this.panelCount - 1, 0);
    const rawIndex = viewport > 0 ? this.scrollContainer.scrollLeft / viewport : 0;
    const activeIndex = Math.min(Math.round(rawIndex), maxIndex);
    const progressRatio = maxIndex > 0 ? activeIndex / maxIndex : 1;
    const theme = TIMELINE_THEMES[activeIndex] ?? TIMELINE_THEMES[0];

    this.timelineEl.classList.toggle('homepage-timeline--hidden', activeIndex === 0);
    this.timelineEl.setAttribute('aria-hidden', activeIndex === 0 ? 'true' : 'false');

    this.progressEl.style.width = `${progressRatio * 100}%`;
    this.progressEl.style.background = theme.progress;
    this.timelineEl.style.setProperty('--timeline-glow', theme.dot);

    const markers = this.timelineEl.querySelectorAll('.timeline-marker');
    markers.forEach((marker, index) => {
      const isActive = index === activeIndex;
      const isPast = index < activeIndex;
      marker.classList.toggle('timeline-marker--active', isActive);
      marker.classList.toggle('timeline-marker--past', isPast);

      const dot = marker.querySelector('.timeline-marker-dot') as HTMLElement;
      if (dot) {
        const markerTheme = TIMELINE_THEMES[index];
        if (isActive) {
          dot.style.background = markerTheme.dot;
          dot.style.boxShadow = `0 0 16px ${markerTheme.dot}`;
        } else {
          dot.style.background = '';
          dot.style.boxShadow = '';
        }
      }
    });
  }

  public destroy(): void {
    if (this.scrollContainer && this.scrollHandler) {
      this.scrollContainer.removeEventListener('scroll', this.scrollHandler);
    }
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
      this.resizeHandler = null;
    }
    if (this.resizeTimer !== null) {
      window.clearTimeout(this.resizeTimer);
      this.resizeTimer = null;
    }
    this.scrollHandler = null;
    this.scrollContainer = null;
    document.getElementById('homepage-timeline')?.remove();
    this.timelineEl = null;
    this.progressEl = null;
  }
}
