import { ScrollFade } from '../scroll-fade';

export class Contact {
  private container: HTMLElement | null = null;

  public mount(container: HTMLElement): void {
    this.container = container;
    
    const section = document.createElement('section');
    section.id = 'connect';
    section.className = 'py-16 fade-in-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out';
    section.innerHTML = `
      <div class="max-w-[800px] mx-auto px-8">
        <h2 class="text-3xl text-text text-center mb-8">Connect</h2>
        
        <div class="space-y-6">
          <div class="bg-orange-500/20 p-8 rounded-lg">
            <span class="text-lg text-text/70 block mb-4 text-center">Professional</span>
            <div class="flex justify-center gap-8">
              <a href="https://github.com/goldsteinnicholas" target="_blank"
                 class="text-text hover:text-orange-500 transition-colors">
                <i class="fab fa-github text-3xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/nicholas-goldstein-362a13179" target="_blank"
                 class="text-text hover:text-orange-500 transition-colors">
                <i class="fab fa-linkedin text-3xl"></i>
              </a>
            </div>
          </div>

          <!-- Social links temporarily removed
          <div class="bg-pink-500/20 p-8 rounded-lg">
            <span class="text-lg text-text/70 block mb-4 text-center">Social</span>
            <div class="flex justify-center gap-8">
              <a href="https://x.com/GoldsteinNichol" target="_blank"
                 class="text-text hover:text-pink-500 transition-colors">
                <i class="fab fa-x-twitter text-3xl"></i>
              </a>
              <a href="https://www.instagram.com/goldsteinnick/" target="_blank"
                 class="text-text hover:text-pink-500 transition-colors">
                <i class="fab fa-instagram text-3xl"></i>
              </a>
              <a href="https://www.tiktok.com/@goldsteinnicholas" target="_blank"
                 class="text-text hover:text-pink-500 transition-colors">
                <i class="fab fa-tiktok text-3xl"></i>
              </a>
            </div>
          </div>
          -->
        </div>
      </div>
    `;
    
    this.container.appendChild(section);
    ScrollFade.init();
  }
}
