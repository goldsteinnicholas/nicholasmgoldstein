import { ScrollFade } from '../scroll-fade';

interface Episode {
  slug: string;
  title: string;
  description: string;
  date: string;
  duration?: string;
  audioUrl?: string; // Cloudinary URL for the MP3 file (e.g., https://res.cloudinary.com/.../audio.mp3)
  audioSize?: number; // File size in bytes for RSS feed
  audioType?: string; // MIME type, e.g., 'audio/mpeg'
  episodeNumber?: number;
}

export class Podcast {
  private container: HTMLElement | null = null;
  
  private episodes: Episode[] = [
    // Episodes will be added here when available
  ];

  public mount(container: HTMLElement): void {
    this.container = container;
    
    const section = document.createElement('section');
    section.className = 'py-16 px-6 fade-in-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out';
    section.innerHTML = `
      <span data-route="/countercultural-tech" style="display: none;"></span>
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-heading text-text mb-6">
            <span class="gradient-text">Countercultural Tech</span>
          </h1>
          <p class="text-xl text-text-secondary max-w-2xl mx-auto mb-4">
            A podcast exploring the countercultural perspectives on technology, startups, AI, and the future of innovation.
          </p>
          <p class="text-text-secondary max-w-2xl mx-auto">
            Hosted by Nick Goldstein
          </p>
          <div class="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
            <a 
              href="/countercultural-tech/rss.xml" 
              class="px-6 py-3 bg-gradient-to-r from-accent to-green-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fas fa-rss"></i>
              Subscribe via RSS
            </a>
          </div>
        </div>

        <!-- Episodes List -->
        <div class="mt-16">
          <h2 class="text-2xl font-heading text-text mb-8">Episodes</h2>
          ${this.episodes.length > 0 ? `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="episodes-grid">
              ${this.episodes.map(episode => this.renderEpisodeCard(episode)).join('')}
            </div>
          ` : `
            <div class="text-center py-16">
              <p class="text-text-secondary text-lg mb-4">Episodes coming soon!</p>
              <p class="text-text-secondary">Check back soon for the first episode of Countercultural Tech.</p>
            </div>
          `}
        </div>
      </div>
    `;
    
    this.container.appendChild(section);
    ScrollFade.init();
    
    // Trigger fade-in for main section immediately on load
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        section.classList.remove('opacity-0', 'translate-y-8');
        section.classList.add('opacity-100', 'translate-y-0');
      });
    });
    
    window.scrollTo(0, 0);
    
    // Update metadata
    document.title = 'Countercultural Tech - Podcast by Nick Goldstein';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Countercultural Tech: A podcast exploring countercultural perspectives on technology, startups, AI, and the future of innovation. Hosted by Nick Goldstein.');
    }
  }

  private renderEpisodeCard(episode: Episode): string {
    return `
      <div class="bg-card-bg border border-text-secondary/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 cursor-pointer group h-full flex flex-col">
        ${episode.episodeNumber ? `
          <div class="mb-4">
            <span class="px-3 py-1 bg-card-bg text-text-secondary text-sm font-medium rounded-full border border-text-secondary/20">
              Episode ${episode.episodeNumber}
            </span>
          </div>
        ` : ''}
        <h3 class="text-xl font-heading font-bold text-text mb-3 group-hover:text-accent transition-colors duration-300">
          ${episode.title}
        </h3>
        <p class="text-text-secondary leading-relaxed mb-4 flex-grow">
          ${episode.description}
        </p>
        <div class="flex items-center justify-between mt-auto">
          <div class="flex flex-col">
            <span class="text-text-secondary text-sm">${episode.date}</span>
            ${episode.duration ? `
            <span class="text-text-secondary text-xs">${episode.duration}</span>
            ` : ''}
          </div>
          ${episode.audioUrl ? `
          <a 
            href="${episode.audioUrl}" 
            class="text-accent group-hover:text-green-400 transition-colors duration-300 text-sm font-medium inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fas fa-play"></i>
            Listen
          </a>
          ` : ''}
        </div>
      </div>
    `;
  }

  public getEpisodes(): Episode[] {
    return this.episodes;
  }
}
