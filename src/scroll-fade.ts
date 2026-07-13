export class ScrollFade {
  private static observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15,
  };

  public static init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-x-8');
          entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
        }
      });
    }, this.observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-scroll');
    fadeElements.forEach((el) => {
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const isHorizontal = el.closest('.homepage-horizontal-scroll');
        const isInViewport = isHorizontal
          ? rect.left < window.innerWidth && rect.right > 0
          : rect.top < window.innerHeight && rect.bottom > 0;

        if (isInViewport) {
          el.classList.remove('opacity-0', 'translate-y-8', 'translate-x-8');
          el.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
        }

        observer.observe(el);
      });
    });
  }
}

export class PanelReveal {
  private static observer: IntersectionObserver | null = null;

  public static init(scrollContainer: HTMLElement): void {
    this.destroy();

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
            entry.target.classList.add('panel-revealed');
          }
        });
      },
      {
        root: scrollContainer,
        threshold: [0.45, 0.55, 0.65],
      },
    );

    scrollContainer.querySelectorAll('.homepage-panel').forEach((panel) => {
      if (this.isPanelActive(panel, scrollContainer)) {
        panel.classList.add('panel-revealed');
      }
      this.observer?.observe(panel);
    });
  }

  private static isPanelActive(panel: Element, scrollContainer: HTMLElement): boolean {
    const panelRect = panel.getBoundingClientRect();
    const containerRect = scrollContainer.getBoundingClientRect();
    const overlap =
      Math.min(panelRect.right, containerRect.right) - Math.max(panelRect.left, containerRect.left);
    return overlap >= panelRect.width * 0.45;
  }

  public static destroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}
