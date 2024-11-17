export class ScrollFade {
    private static observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    public static init() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      }, this.observerOptions);
  
      const fadeElements = document.querySelectorAll('.fade-in-scroll');
      fadeElements.forEach(el => observer.observe(el));
    }
  }