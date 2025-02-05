export class Navigation {
  private container: HTMLElement | null = null;
  private typingSpeed = 100; // milliseconds per character

  public mount(container: HTMLElement): void {
    this.container = container;
    
    const header = document.createElement('header');
    header.className = 'py-6 bg-white/90 backdrop-blur sticky top-0 z-50 shadow-sm';
    header.innerHTML = `
      <nav class="flex flex-col md:flex-row justify-between items-center px-6 md:px-8 max-w-7xl mx-auto gap-4 md:gap-0">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 rounded-full shadow-md flex items-center justify-center bg-white">
            <img 
              src="/nicholasmgoldstein-favicon.png" 
              alt="Logo" 
              class="w-full h-full object-cover rounded-full"
            />
          </div>
          <h1 class="text-2xl md:text-3xl font-heading text-text hover:text-primary transition-colors duration-300 cursor-pointer">
            <span class="typing-text"></span><span class="typing-cursor">|</span>
          </h1>
        </div>
        <ul class="flex flex-wrap justify-center gap-4 md:gap-8">
          <li>
            <a href="#about" 
               class="px-4 py-2 rounded-full text-text hover:bg-primary/80 hover:text-text/80 transition-all duration-300 text-sm md:text-base">
               About
            </a>
          </li>
          <li class="relative group">
            <a href="https://plato5.us/" 
               class="px-4 py-2 rounded-full text-text hover:bg-primary/80 hover:text-text/80 transition-all duration-300 text-sm md:text-base">
               PLATO5
               <i class="fas fa-chevron-down text-xs transition-transform group-hover:rotate-180"></i>
            </a>
            <div class="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div class="bg-white rounded-lg shadow-lg border border-text/10 overflow-hidden min-w-[160px]">
                <a href="https://plato5.us/" class="flex items-center gap-2 px-4 py-2 hover:bg-primary/10 transition-colors">
                  <i class="fas fa-external-link-alt text-xs"></i>
                  <span>Visit Site</span>
                </a>
                <div class="flex items-center gap-2 px-4 py-2 text-text/40 cursor-not-allowed border-t border-text/5">
                  <i class="fas fa-chart-line text-xs"></i>
                  <span>View Stats</span>
                  <span class="text-[10px] ml-auto uppercase tracking-wider">Coming Soon</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#experience" 
               class="px-4 py-2 rounded-full text-text hover:bg-primary/80 hover:text-text/80 transition-all duration-300 text-sm md:text-base">
               Experience
            </a>
          </li>
          <li>
            <a href="#connect" 
               class="px-4 py-2 rounded-full text-text hover:bg-primary/80 hover:text-text/80 transition-all duration-300 text-sm md:text-base">
               Connect
            </a>
          </li>
        </ul>
      </nav>
    `;
    
    this.container.appendChild(header);
    this.startTypingAnimation();
    this.setupNameClickAnimation();
  }

  private startTypingAnimation(): void {
    const text = "Nicholas M. Goldstein";
    const typingElement = this.container?.querySelector('.typing-text');
    const cursorElement = this.container?.querySelector('.typing-cursor');
    
    if (!typingElement || !cursorElement) return;

    let charIndex = 0;
    
    // Add blinking cursor animation
    cursorElement.classList.add('animate-blink');

    const typeNextChar = () => {
      if (charIndex < text.length) {
        typingElement.textContent += text[charIndex];
        charIndex++;
        setTimeout(typeNextChar, this.typingSpeed);
      } else {
        // Keep cursor blinking after typing is done
        cursorElement.classList.add('text-primary');
      }
    };

    typeNextChar();
  }

  private setupNameClickAnimation(): void {
    const nameElement = this.container?.querySelector('h1');
    if (!nameElement) return;

    nameElement.addEventListener('click', () => {
      // Add shake animation class
      nameElement.classList.add('animate-shake');
      
      // Remove animation class after it completes
      setTimeout(() => {
        nameElement.classList.remove('animate-shake');
      }, 500);
    });
  }
}