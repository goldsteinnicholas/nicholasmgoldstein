import { ScrollFade } from '../scroll-fade';

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  featured?: boolean;
}

export class Articles {
  private container: HTMLElement | null = null;
  
  private articles: Article[] = [
    {
      slug: 'building-to-build-what-should-exist',
      title: 'Building to Build What Should Exist',
      excerpt: 'I became enamored by the world of startups after seeing The Social Network in Highschool. I had previously wanted to become a music producer and chase the dream of being an artist. Something was activated in me by that movie...',
      date: 'July 18, 2025',
      category: 'Startups'
    },
    {
      slug: 'corrosive-convenience',
      title: 'Corrosive Convenience',
      excerpt: 'Convenience Apps: Applications that deconstruct an errand or process that would normally take time away from your day and minimize those errand\'s impact on your schedule and remove them from your immediate attention...',
      date: 'February 27, 2025',
      category: 'Technology'
    },
    {
      slug: 'why-plato5-matters',
      title: 'Why PLATO5 Matters',
      excerpt: 'PLATO5 stands for platonic relationships based on the Big 5 personality traits. It\'s a clever app with transformative potential. Its modus operandi zooms in on the pipeline from online connection to IRL friendship...',
      date: 'February 21, 2025',
      category: 'PLATO5'
    },
    {
      slug: 'either-paradise-or-paralysis',
      title: 'Either Paradise or Paralysis: A Musing on Disruptionist Tech',
      excerpt: 'The internet revolutionized many industries and fundamentally uprooted processes that we all depend on on a daily basis. Chief among these is distribution. Distribution of goods and services, distribution of communication, and distribution of information...',
      date: 'February 11, 2025',
      category: 'Technology'
    },
    {
      slug: 'my-big-play',
      title: 'My Big Play',
      excerpt: 'The greatest opportunity for ascension in the 2020s lies in AI integration and figuring out how AI will be used in the coming decades. AI models are experiencing extreme innovation, but the true profiteers of this time will be the people who find out how to use these models in the most useful manner.',
      date: 'February 7, 2025',
      category: 'Startups'
    },
    {
      slug: 'zero-to-five',
      title: 'Zero to Five: The Early Days of My Entrepreneurial Journey',
      excerpt: 'Besides the on-the-nose reference to Peter Thiel\'s Zero to One (one of my favorites), this blog post is mostly going to discuss my early experiences building PLATO5 and the challenges therein.',
      date: 'January 17, 2025',
      category: 'Early Career'
    }
  ];

  public mount(container: HTMLElement): void {
    this.container = container;
    
    const section = document.createElement('section');
    section.className = 'py-16 px-6 fade-in-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out';
    section.innerHTML = `
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-heading text-text mb-6">
            <span class="gradient-text">Articles</span>
          </h1>
          <p class="text-xl text-text-secondary max-w-2xl mx-auto">
            Thoughts on tech, startups, AI, project progress, and personal topics.
          </p>
        </div>

        <!-- Featured Article -->
        ${this.renderFeaturedArticle()}

        <!-- All Articles Grid -->
        <div class="mt-16">
          <h2 class="text-2xl font-heading text-text mb-8">All Articles</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="articles-grid">
            ${this.articles.slice(1).map(article => this.renderArticleCard(article)).join('')}
          </div>
          ${this.articles.length <= 1 ? '<p class="text-text-secondary text-center">More articles coming soon...</p>' : ''}
        </div>
      </div>
    `;
    
    this.container.appendChild(section);
    this.setupArticleLinks();
    ScrollFade.init();
  }

  private renderFeaturedArticle(): string {
    const latest = this.articles[0]; // Get the first (latest) article
    if (!latest) return '';

    return `
      <div class="mb-16">
        <h2 class="text-2xl font-heading text-text mb-8">Latest</h2>
        <a href="/articles/${latest.slug}" class="block">
          <div class="bg-gradient-to-r from-secondary/20 to-blue-600/20 border border-secondary/30 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
            <div class="mb-4">
              <span class="px-3 py-1 bg-card-bg text-text-secondary text-sm font-medium rounded-full border border-text-secondary/20">
                ${latest.category}
              </span>
            </div>
            <h3 class="text-2xl font-heading font-bold text-text mb-3 group-hover:text-accent transition-colors duration-300">
              ${latest.title}
            </h3>
            <p class="text-text-secondary leading-relaxed mb-4">
              ${latest.excerpt}
            </p>
            <div class="flex items-center justify-between">
              <span class="text-text-secondary text-sm">${latest.date}</span>
              <span class="text-accent group-hover:text-green-400 transition-colors duration-300 text-sm font-medium">
                Read Article →
              </span>
            </div>
          </div>
        </a>
      </div>
    `;
  }

  private renderArticleCard(article: Article): string {
    return `
      <a href="/articles/${article.slug}" class="block h-full">
        <div class="bg-card-bg border border-text-secondary/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 cursor-pointer group h-full flex flex-col">
          <div class="mb-4">
            <span class="px-3 py-1 bg-card-bg text-text-secondary text-sm font-medium rounded-full border border-text-secondary/20">
              ${article.category}
            </span>
          </div>
          <h3 class="text-xl font-heading font-bold text-text mb-3 group-hover:text-accent transition-colors duration-300">
            ${article.title}
          </h3>
          <p class="text-text-secondary leading-relaxed mb-4 flex-grow">
            ${article.excerpt}
          </p>
          <div class="flex items-center justify-between mt-auto">
            <span class="text-text-secondary text-sm">${article.date}</span>
            <span class="text-accent group-hover:text-green-400 transition-colors duration-300 text-sm font-medium">
              Read More →
            </span>
          </div>
        </div>
      </a>
    `;
  }

  private setupArticleLinks(): void {
    const links = this.container?.querySelectorAll('a[href^="/articles/"]');
    links?.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (link as HTMLAnchorElement).getAttribute('href');
        if (href) {
          window.history.pushState({}, '', href);
          window.dispatchEvent(new PopStateEvent('popstate'));
        }
      });
    });
  }
} 