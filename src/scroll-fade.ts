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
      fadeElements.forEach(el => {
        // Use requestAnimationFrame to ensure DOM is ready
        requestAnimationFrame(() => {
          // Check if element is already in viewport on initial load
          const rect = el.getBoundingClientRect();
          const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
          
          if (isInViewport) {
            // Fade in immediately if already visible
            el.classList.remove('opacity-0', 'translate-y-8');
            el.classList.add('opacity-100', 'translate-y-0');
          }
          
          // Always observe (in case element scrolls out and back in)
          observer.observe(el);
        });
      });
    }
  }