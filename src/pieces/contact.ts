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
        <h2 class="text-3xl font-heading text-text text-center mb-8">Connect</h2>
        
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-secondary/20 to-blue-600/20 p-8 rounded-xl border border-secondary/30 shadow-lg">
            <span class="text-lg text-text-secondary block mb-4 text-center">Professional</span>
            <div class="flex justify-center gap-8">
              <a href="https://github.com/goldsteinnicholas" target="_blank"
                 class="text-text-secondary hover:text-secondary transition-colors duration-300 hover:scale-110 transform">
                <i class="fab fa-github text-3xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/nicholas-goldstein-362a13179" target="_blank"
                 class="text-text-secondary hover:text-secondary transition-colors duration-300 hover:scale-110 transform">
                <i class="fab fa-linkedin text-3xl"></i>
              </a>
            </div>
          </div>

          <div class="bg-gradient-to-r from-purple/20 to-purple-600/20 p-8 rounded-xl border border-purple/30 shadow-lg">
            <span class="text-lg text-text-secondary block mb-4 text-center">Social</span>
            <div class="flex justify-center gap-8">
              <a href="https://x.com/goldsteinnichol" target="_blank"
                 class="text-text-secondary hover:text-purple transition-colors duration-300 hover:scale-110 transform">
                <i class="fab fa-x-twitter text-3xl"></i>
              </a>
              <a href="https://www.instagram.com/goldsteinnick" target="_blank"
                 class="text-text-secondary hover:text-purple transition-colors duration-300 hover:scale-110 transform">
                <i class="fab fa-instagram text-3xl"></i>
              </a>
              <a href="https://www.tiktok.com/@goldsteinnick" target="_blank"
                 class="text-text-secondary hover:text-purple transition-colors duration-300 hover:scale-110 transform">
                <i class="fab fa-tiktok text-3xl"></i>
              </a>
              <a href="https://www.youtube.com/@goldsteinnick" target="_blank"
                 class="text-text-secondary hover:text-purple transition-colors duration-300 hover:scale-110 transform">
                <i class="fab fa-youtube text-3xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    
    this.container.appendChild(section);
    ScrollFade.init();
  }
}
