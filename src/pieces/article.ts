import { ScrollFade } from '../scroll-fade';

interface ArticleContent {
  slug: string;
  title: string;
  content: string;
  date: string;
  category: string;
  note?: string;
}

export class Article {
  private container: HTMLElement | null = null;
  
  private articles: Record<string, ArticleContent> = {
    'building-to-build-what-should-exist': {
      slug: 'building-to-build-what-should-exist',
      title: 'Building to Build What Should Exist',
      content: `
        <p class="mb-8">I became enamored by the world of startups after seeing The Social Network in high school. I had previously wanted to become a music producer and chase the dream of being an artist. Something was activated in me by that movie. It was likely equal parts that I identified with the outsider, Zuck, and that building startups was an incredibly monetizable route for my creative ambitions. Shortly after, I taught myself to build. I experienced all the pitfalls that come along with self-teaching programming, and I eventually pulled myself from the depths of tutorial hell with my keyboard held high. It wasn't for another, at least, 5 years until I'd come up with the basic concept of PLATO5. I had other ideas. My earliest was a weirdly ambitious idea for a 17-year-old: A new way to monetize music for independent artists called MUSICORUM, that allowed users to purchase percentages of independent musicians' royalties and fund their careers. Now, obviously, I could sit here and poke holes in that today, but what I had at that time was an idea that sounds a lot like what Patreon became. Later I pivoted the idea to include crypto for funding and also a music video streaming app, but I wasn't ready to build anything close to that complex on my own, nor should I have. I slowly lost interest and I had other ideas, like Isle, a simple app that was a mix between productivity software and social media. You would create public occurrences that would display on a timeline that other people could check out. It was clean and simple, and also an early example of me trying to give people tools to meet each other for public events.</p>

        <p class="mb-8">The Silicon Valley of my late teens was one that I glamorized. I don't recognize it. The startup stories of today are largely that of little innovation and quick exits. Behemoth tech giant conglomerates eat competitors with their endless resources. Competition exists, but it exists between companies with pockets deeper than most countries and CEOs with net worths only matched by their arrogance. Perhaps I hold a misconception born of nostalgia, but I doubt it. Zuckerberg started Facebook in a dorm room and now he couldn't conceivably fall from the top of the subindustry of social media, without some sort of divine intervention. Plus, the social apps of today aren't even original. Snapchat introduces stories and the others copy, TikTok blows up and all of a sudden every app has a short-video feed. Even the outbreak ideas of our time have a short-lasting impact due to obvious mimicry. Perhaps I'm just lamenting the fact that it's much more difficult to shock the world with an app, but I don't quite think it's that either.</p>

        <p class="mb-8">Naturally, founders have adapted to this new world of copycats and acquisitions. People have begun to build for exits, bump up their engagement metrics, and learn all the buzzwords that VCs orgasm to upon utterance.</p>

        <p class="mb-8">If we go back further in time, we have Steve Wozniak and Jobs's idyllic tech landscape. A relative blank canvas from where we sit today. Unfathomable possibilities and unparalleled innovation. They sat on the precipice of a typhoon of consumer electronics that they would unleash on the world from a garage in California. It was a world with far fewer gatekeepers or hyper-entrenched players with checkbooks utilized as artillery. A place where an early sort of Countercultural Tech thrived and things were built because they should exist.</p>

        <p class="mb-8">This is gone. Maybe it exists in pockets, but from a bird's-eye view, it's nonexistent. Anti-competitive practices are simply the rules of the road on this highway and there's no clear upswell fighting against this. We will see less innovation, more pattycake between overpowered enterprises who have long forgotten what it was like to build what should exist and instead build what should pad their shareholders' pockets with buzzwords ready to fire at a moment's notice. They went from 'move fast and break things' to 'maintain market position and buy the competition'.</p>

        <p class="mb-8">Now, all hope is not lost. I guess hope is the one true human universal. There's always a chance to make things better, even in a face-off with entrenched powers with unbelievable resources. My proposal is a cultural one: Countercultural Tech. A philocultural path for bringing new ideas to bear under these circumstances, that maintains chiefly the aim of always building to build what should exist. A path that rejects VC orthodoxy and catering to people who want subpar or incremental creation because it's easier to sell. We want a tech that revolutionizes and inspires again.</p>

        <p class="mb-8">To build what should exist could be seen as ambiguous, so let me expound on how this relates to ethical and cultural considerations. As mentioned above, many ambitious, young founders have gone the route of building a company for a quick exit or to get noticed by a VC firm. This is the VC orthodoxy that has captured an entire generation of industrious entrepreneurs. To build counterculturally you must surgically remove that from your mind. You need to build to effectuate some ideal future, whether that means maximizing profit or not. And, to be clear, that doesn't mean that a hyper-profitable company can just paste on a slogan or two and be considered Countercultural Tech. It will be clear in how a business is run, whether they are trying to effectuate a better society or not.</p>

        <p class="mb-8">Let me be clear, I'm not begging for a change in this piece. This is a statement of intention. I aim to innovate at the level of the people I look up to and hope that's enough to break through the scaffolding and create something better on the other side. To find a place to build things that should exist.</p>
      `,
      date: 'July 18, 2025',
      category: 'Startups'
    },
    'corrosive-convenience': {
      slug: 'corrosive-convenience',
      title: 'Corrosive Convenience',
      content: `
        <p class="mb-8">Convenience Apps: Applications that deconstruct errands or processes that would normally take time away from your day, minimize their impact on your schedule, and remove them from your immediate attention.</p>

        <p class="mb-8">These convenience apps aren't bad at face-value. In fact, they are good for simplifying many processes and getting things done on the fly. The proliferation of these apps, however, has thrown the baby out with the bath water; The baby being happenstance social interactions.</p>

        <p class="mb-8">Nowadays, everything comes right to your door. A meal from the restaurant down the street, groceries, that appliance you saw scrolling through Amazon, images and videos of beautiful people, even the dopamine hit you get from socializing. The issue with this may or may not be obvious to you as an individual based on your personal experiences. Many have found themselves socially isolated and cocooned by these invisible forces. This isn't a subjective statement to be clear. It's been documented that loneliness has doubled since the 1980s, as has the depressive effect that social media has on the younger generations.</p>

        <p class="mb-8">Some highly extroverted individuals may navigate this landscape fine, but many are left out in the wilderness to fend for themselves.</p>

        <p class="mb-8">Without semi-mandated socializing, some people will do it very infrequently. With an acknowledgement of the risk of being hyperbolic, we're creating a generation of hermits and super-extroverts. This is bad for many reasons. One reason is the health issues that result from loneliness for extended periods of time. Another is the lack of introverted thought being proliferated in certain circles. Many extroverts are astounded by the differences between their less social compatriots and themselves. I would venture to guess that introverts are more reflective, but perhaps that's just my biased perception speaking. Regardless, some introverts have worthwhile ideas that are being shared exclusively in online introvert echo chambers, while the social class are only being exposed to those who 'touch grass'. Unfortunately, we'll see the implications of this in the years to come. Some have already started to rear their ugly head with an incredible political and societal disconnect between those who socialize and the internet dwellers who'd rather not. Incel subcultures, extremism on all sides of the political spectrum, and much much more seem to be early indications of a social system gone awry.</p>

        <p class="mb-8">Honorable mention to the exceedingly worrying economic inequality in the United States. This certainly isn't helping any of these issues either.</p>

        <p class="mb-8">PLATO5 is meant to be the antidote to this. Whether it works or not supposedly depends on me. Fun. PLATO5 is designed for the sole purpose of bringing people together in the real world. This makes it a tool for the younger generation to potentially reclaim their social autonomy and take proactive and reactive steps to improve the dire straits they may find themselves in. Of course, this depends on people's willingness to put themselves out there, but while I'm constantly preoccupied with reducing socially intimidating circumstances on the platform and minimizing friction in the process as much as possible, I cannot force people to use the service and meet someone new. I'm contented with building the tool that makes loneliness optional however.</p>

        <p class="mb-8">If I'm successful, we should see a measurable drop in loneliness. If we don't, then I guess I failed. To accomplish this we'll need a user base bigger than 15 people (which I'm working on). This mission is personal to me and I hope to make the aforementioned dent in those loneliness numbers and build something that sets a new standard for making friends in a more convenient age.</p>
      `,
      date: 'February 27, 2025',
      category: 'Technology'
    },
    'why-plato5-matters': {
      slug: 'why-plato5-matters',
      title: 'Why PLATO5 Matters',
      content: `
        <p class="mb-8">PLATO5 stands for platonic relationships based on the Big 5 personality traits. It's a clever app with transformative potential. Its modus operandi zooms in on the pipeline from online connection to IRL friendship, how these relationships form, and what foundations they're built upon. Call it self-destructive or perfectionist, but recently I took the web app down to rebuild the app from the ground up, refocusing exclusively on the aforementioned pipeline, integrating AI into everything, and molding PLATO5 into something with a much cleaner value proposition and directly addressing the loneliness epidemic that PLATO5 seeks to remedy.</p>

        <p class="mb-8">The pipeline from online connection to IRL friendships isn't only a descriptive slogan, but the vision for PLATO5 and the proposal that this project puts forward for helping alleviate the problems that Web 2.0 helped create, including, but not limited to, the loneliness epidemic that is significantly worse in the younger generations. PLATO5 has a simple system on face value: get a match of 4 people total based on personality, interest, and location, chat with them in an AI-integrated groupchat, and when the group feels a certain level of comfortability with each other, they can utilize the Nearby applet to find events to attend together virtual or IRL. Most social apps aren't this focused and many don't even have a direct path to finding new friends to share experiences with in the real world. If a social app does have a method to accomplish this aim, it's usually secondary, indirect, or not prioritized. Think of the social media apps of the past decade; they were primarily focused on continuous app usage to increase eyeballs on ads and not particularly worried about creating lifelong friendships despite their pontifications.</p>

        <p class="mb-8">Web 2.0 was not truly 'social'. It sought a large user base and perhaps had good intentions, but regardless, how can we claim victory when the social outcomes get worse and worse and 'social media' bred all sort of negative offshoots from incel subcultures to algorithmically-enhanced body dysmorphia and eating disorders. We are siloed, dependent on parasocial relationships, politically polarized, and alone in the world as a generation. 'Doomscrolling' is a term often used to describe the Infinite Jest circumstance many people find themselves in these days, with users being funneled into their own algorithmically constructed cultural tubes of content that many people become addicted to. Algorithms focused on engagement to help out advertisers and boost profits are an obvious culprit.</p>

        <p class="mb-8">I like to make a distinction between traditional 'social' media and my concept of a social engine. A social engine is more of a tool than a content platform. The only engagement we care about is engagement that provably leads to good, healthy relationships and positive social outcomes. Sounds over-optimistic? Look at the pipeline specifics I've laid out above. This isn't an opaque project or a front for another dystopian social app. This is a project designed to create online connections that are being effectively moved to the real world. That's what separates PLATO5 from social media. This pipeline and its effectiveness is the yardstick with which we measure the usefulness of our service. You might ask, 'Well how do you plan on monetizing this service? Surely advertisement is mixed in here somewhere?' And I don't deny that ads may be a necessity for profitability in the future, but our audience will be built on the effectiveness of the service and the ability of our service to send users through the pipeline laid out in the beginning of this article and the positive feedback loop that this generates, not algos that push engagement at all costs.</p>

        <p class="mb-8">To take a detour to explain the AI component here: the AI may seem like a disconnected or unnecessary factor in the description of the project that I laid out, but lend me your reading/listening faculties for a minute. Zen, the AI Chat Manager that I've built is a facilitator of connection and interaction embedded in the groupchat. In a way, Zen makes humans more human and helps them articulate themselves in an intimidating social environment. Groupchats also alleviate the intimidation factor of 1 on 1 matchmaking scenarios. Zen works passively and actively, meaning that anytime chats are sent, Zen will coach and help users organize their thoughts within their groupchats and with access to public user data, Zen will also field questions about discussion topics to introduce and, if prompted, write a chat in the voice of the requestor. Zen also dynamically organizes and tracks conversation branches and ensures that no one in the chat is excluded.</p>

        <p class="mb-8">With PLATO5 V2 (relaunching soon), we may actually be able to provide something good to a generation at the whims of social tech giants and facing massive challenges in the years ahead. I hope that's the case, as this issue is personal to me, and I foresee very little change being championed in a world where engagement is king and data is godly.</p>
      `,
      date: 'February 21, 2025',
      category: 'PLATO5'
    },
    'either-paradise-or-paralysis': {
      slug: 'either-paradise-or-paralysis',
      title: 'Either Paradise or Paralysis: A Musing on Disruptionist Tech',
      content: `
        <p class="mb-8">The internet revolutionized many industries and fundamentally uprooted processes that we all depend on on a daily basis. Chief among these is distribution. Distribution of goods and services, distribution of communication, and distribution of information. While this certainly changed the way we all do things, it replaced the existing system with a new one. This pertains to commerce, education, professional development, and social interaction. I have openly criticized the way social interaction has changed in the internet age, but the point is that it has been changed, not that the changes have been wholly positive. The open question remains: will artificial intelligence do the same or will there be no human system that can replace what's taken?</p>

        <p class="mb-8">We don't like non-answers to existential questions. To be in the dark on such a societally destructive potentiality is unacceptable, but… it's where we are, if we're honest. Are we to become a worldwide commune that produces artisan goods in our infinite leisure time or a UBI hellscape where people lose their ambition and turn to stimulation of any kind to try to feel like they're living an actual life? No one knows and those who claim to know know even less.</p>

        <p class="mb-8">One thing that people in the tech world never seem to add to the equation is that the rate of adoption never matches the rate of innovation. Blue chip companies aren't going to convert their business models overnight even if there is some AI that can produce as much as a human. Plus, with the possibility of AI/Robot Taxes being levied on corporations as this technology slowly becomes more utilized, this is a much more nuanced picture than either the utopian or dystopian visions provided.</p>

        <p class="mb-8">Also worth noting: an AI has not been created that can direct itself, nor has an AI been created that has legitimately innovated anything without human direction. So are LLMs more like a language-calculator than a God? Only time will reveal this. An unforeseen boundary in the development of these systems could crop up at any moment, in fact, they may even have revealed themselves already.</p>

        <p class="mb-8">AIs struggle with incredible amounts of characters being thrown at them all at once, any programmer will tell you this and there have been studies as well. How, without direction, will an AI manage an entire code base if their response reduces in quality when provided a fraction of that code? When AI is finally trained on all available human data and the corpus of human achievement has been eaten by these machines, won't the synthetic data generated by these machines mirror the data that the LLMs were trained on? Again, these aren't innovative machines, maybe we'll have something like that in the future, but LLMs predict characters based on user input, context, and training data through features and weights. How can we expect to surpass human intelligence if that intelligence hasn't been recorded?</p>

        <p class="mb-8">There's no definitive answer I can give to the incredible variety of questions that this technology inspires, but I can venture a guess based on what I've seen in my limited 27 years: we'll be fine. Probably. Maybe.</p>
      `,
      date: 'February 11, 2025',
      category: 'Technology'
    },
    'my-big-play': {
      slug: 'my-big-play',
      title: 'My Big Play',
      content: `
        <p class="mb-8">The greatest opportunity for ascension in the 2020s lies in AI integration and figuring out how AI will be used in the coming decades. AI models are experiencing extreme innovation, but the true profiteers of this time will be the people who find out how to use these models in the most useful manner. It wasn't Internet Service Providers or Broadband companies that consolidated the most incredible wealth in perpetuity; it was the internet entrepreneur. Mark Zuckerberg, Jeff Bezos, Larry Ellison to name a few. Sure, ISPs are successful businesses, but what ISP founder is one of the richest people in the world?</p>

        <p class="mb-8">It is with this backdrop that I have migrated my thoughts on startups to an AI-first perspective. Big companies cannot and aren't willing to overhaul their existing business models and services to become fully engulfed in useful AI integrations. There is plenty of fluff and lackluster AI uses on the internet built out by these tech giants. Comment summarization comes to mind. People enjoy reading comments, so an AI integration that replaces an enjoyable, community-building experience is worse than unnecessary. Many of the current uses of AI among the tech giants are like this. They can't rebuild their services so they're left with small breadcrumbs of AI usage everywhere. This era may prove to be the most overflowed with opportunity since the early days of the internet or the social media boom.</p>

        <p class="mb-8">As of now, I'm a technical consultant at Oracle, but I have many projects that I'm building that will take advantage of this opportunity. PLATO5 is an AI-first social app, designed to create online connections that evolve into IRL friendships. This is the first and most fleshed-out project that I've been working on. Kommin is an offshoot of PLATO5 that grew into something that no longer had a direct bearing on PLATO5's value proposition. After many iterations and pivots, I've set on turning it into a mobile-first, minimal oratory board that hopes to one day stand toe-to-toe with the entirety of the podcasting industry through small, digestible, auto-play enabled voice clips that can be easily thrown on during work or transit. Goldstein Simulator is a big one. This project is dedicated to optimizing existing LLM responses for simulations that maintain the logic of their respective realities and could one day be the narrative backbone of AI-generated video games, choose-your-adventure films, and more. My personal favorite theoretical application of Goldstein Simulator is my idea of Simulation Lounges that encourage social connection.</p>

        <p class="mb-8">PLATO5 was initially not supposed to be an AI app. In fact, I started building it before LLMs were fully introduced to the wider public through ChatGPT. Unfortunately, early on I fell into the same trap as the tech giants and built AI Chat Suggestors, instead of my current solution: AI Chat Managers that passively and actively aid users with managing their conversations and help them brainstorm new things to discuss, making IRL connections more likely and conversations more engaging. The chat suggestions were peripheral; the chat managers are direct, constant, and easy to utilize. This is the future of ai-chat integration in my opinion.</p>

        <p class="mb-8">The chat suggestions weren't necessarily bad, but they distracted from the main purpose of PLATO5: building those IRL friendships for users. I even gave the Chat Suggestors 5 different personalities for different types of chat suggestions. Zen was a neurotic creative, Steward was a historical savant butler with a penchant for uniformity, Plato was a mirror of the Ancient Greek philosopher of the same name, but with little quirks like the propensity to get flustered and call you 'malaka', Cyba was a cyborg with a cybernetic startup and glitchy hardware, and Gertrude the Conqueror was a sweet, docile grandmother who doubled as a warlord, ever-defending the PLATO5 realm. While humorous, this got in the way of PLATO5's value proposition, as you might have guessed. Also, it's worth noting to anyone interested in AI's with personalities: it's one of the things that LLMs lag behind in. Not believable whatsoever.</p>

        <p class="mb-8">Kommin will use AIs in a more limited capacity for now, but maybe later bigger integrations could be built. AI Elaboration is an actually useful version of summarization. Instead of having to tap a user's profile or dig through old komms, you can feed that data to AIs and they can provide insight and intriguing connections on why the user may have recorded this komm and who they are. This is a good example of a useful AI integration that stands in stark contrast with comment summarization. Also, all algos will likely be AI enhanced when I have enough data to train an algorithm on.</p>

        <p class="mb-8">Goldstein Simulator has an obvious AI application. It's business model hinges on AIs. It's actually the multi-layered approach, turn-based collaboration features, on-the-spot fine-tuning, and backend coordination that makes Goldstein Simulator's process unique. I'll expound on this more in the future. I'm about a month away from starting the build.</p>

        <p class="mb-8">So, to wrap things up here: this is my big play. If I'm to make it in the world of entrepreneurship, all or some of these projects will have to propel me. I'm not naive or reluctant to get my name out there and stump for my visions of these companies and I'll be dedicating my money, time, and spirit to these projects until I'm either repeatedly and forcefully denied or… I win.</p>
      `,
      date: 'February 7, 2025',
      category: 'Startups',
      note: 'Note: Kommin and Goldstein Simulator are deprecated projects'
    },
    'zero-to-five': {
      slug: 'zero-to-five',
      title: 'Zero to Five: The Early Days of My Entrepreneurial Journey',
      content: `
        <p class="mb-8">Besides the on-the-nose reference to Peter Thiel's Zero to One (one of my favorites), this blog post is mostly going to discuss my early experiences building PLATO5 and the challenges therein.</p>

        <p class="mb-8">PLATO5's web app launched on November 13th, 2024 and has been reimagined and upgraded a dozen times since. Most recently I struggled with the gamification feature and how it fits into the social ecosystem that I'm building. It seems counterproductive to create a point system on top of an already stressful and intimidating experience for many people, like forming new social bonds. There are more reasons, but to avoid veering off-topic, I'll leave the explanation there for now. Regardless, I've learned more about design and system building in the last 4 months than I have throughout my many years of 'tutorial hell' and previous attempts at building something as ambitious as PLATO5.</p>

        <p class="mb-8">At first I wanted to build a mobile app for PLATO5 because I believe mobile apps to be much more readily adopted by my primary demographic, but I had some issues with the Google Developer Program that shifted me to the much less monopolized and limiting process of getting a web app on the internet. Luckily, I had the basic design, the backend, and the concept of PLATO5 fleshed-out at that point, so a simple web app took me a little over two weeks to get online.</p>

        <p class="mb-8">Since publishing, and very very very limited marketing, I had little to no expectations about mass-adoption of PLATO5 or a 'build and they will come' mindset. 3-5 non-friends or family have tried the app and interacted with it in surprising ways that helped me understand users a little bit more. For example, everyone that signed up took the personality assessment. I thought this would be a massive obstacle initially, but it actually seems to be a main selling point. People want to know about themselves so much that they're willing to take a test, or at least they're willing to take the assessment for the purpose of improving their matches, or some mixture of both. I guess my understanding is limited by my small user base and lack of comprehensive data science.</p>

        <p class="mb-8">Unfortunately, my early attempt at building a simple version of PLATO5 didn't retain those early users. This is what I've been working on now: making PLATO5 immediately useful, navigable, and understandable. PLATO5 is, after all, a tool or engine, not a platform (at least in the traditional sense). Also, I've been reserving most of my marketing activities until I'm confident people will stick around and I've enabled people to pay for premium features, hopefully letting me earn some of my adspend back.</p>

        <p class="mb-8">Perfectionism is another thing that I've wrestled with while building and iterating on PLATO5. The app is never done or perfect. There's a near-infinite list of features or improvements I want to roll-out tomorrow, but due to me being the only developer on the project and reality dictating that a million features doesn't guarantee usership, alas, these feature will only truly exist in my imagination (at least until I'm not the sole programmer).</p>

        <p class="mb-8">To circle back on the idea on building features that encourage retention, I've built stories, AIi conversation assistants, a user feed that prioritizes recency and completed profiles, multimedia support for user's photo galleries and kommin (our discussion board), a restructured navigation column to prioritize nanos (our group chats on PLATO5) and easy tab jumping (this one's just for me).</p>

        <p class="mb-8">Next up will be the premium tiers and their full integration into PLATO5. As mentioned, I hope to get some money back from this, not necessarily profit yet. We'll see though. I'd love to take this on as a full-time job. The amount of work I could put into PLATO5 then excites me. It doesn't feel like work, it feels more like exploration or creation. I assume this is what a calling or destiny is (or maybe a term that's less pompous and metaphysical).</p>

        <p class="mb-8">The rest of the story of PLATO5 is still being written and I'm sure there's much of it I've memory-banked or just forgot. Still, time will tell if this is a serious tool for helping combat the loneliness epidemic that's devastating the younger generations or a flash in the pan.</p>
      `,
      date: 'January 17, 2025',
      category: 'Early Career',
      note: 'Note: This article references an older version of PLATO5 that is no longer reflective of the current version, although the musings on the project are still largely accurate'
    }
  };

  public mount(container: HTMLElement, slug: string): void {
    this.container = container;
    
    const article = this.articles[slug];
    if (!article) {
      this.showNotFound();
      return;
    }

    const section = document.createElement('section');
    section.className = 'py-16 px-6 fade-in-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out';
    section.innerHTML = `
      <div class="max-w-4xl mx-auto">
        <!-- Back Navigation -->
        <div class="mb-8">
          <a href="/articles" class="inline-flex items-center gap-2 text-text-secondary hover:text-text transition-colors duration-300">
            <i class="fas fa-arrow-left"></i>
            Back to Articles
          </a>
        </div>

        <!-- Article Header -->
        <header class="mb-12">
          <div class="mb-6">
            <span class="px-3 py-1 bg-card-bg text-text-secondary text-sm font-medium rounded-full border border-text-secondary/20">
              ${article.category}
            </span>
          </div>
          <h1 class="text-4xl md:text-5xl font-heading text-text mb-4">${article.title}</h1>
          <time class="text-text-secondary text-lg">${article.date}</time>
          
          ${article.note ? `
          <!-- Custom note -->
          <div class="mt-6">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-card-bg border border-text-secondary/20 rounded-full">
              <i class="fas fa-info-circle text-secondary"></i>
              <span class="text-text-secondary text-sm">${article.note}</span>
            </div>
          </div>
          ` : ''}
        </header>

        <!-- Article Content -->
        <article class="prose prose-lg prose-invert max-w-none">
          <div class="text-text-secondary leading-relaxed space-y-8 text-lg md:text-justify">
            <div class="first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:leading-none first-letter:bg-gradient-to-br first-letter:from-secondary first-letter:to-purple first-letter:bg-clip-text first-letter:text-transparent first-letter:font-black">
              ${article.content}
            </div>
          </div>
        </article>

        <!-- Share Section -->
        <div class="mt-16 pt-8 border-t border-text-secondary/20">
          <div class="flex items-center justify-between">
            <span class="text-text-secondary">Share this article:</span>
            <div class="flex gap-4">
              <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}" 
                 target="_blank" 
                 class="text-text-secondary hover:text-secondary transition-colors duration-300">
                <i class="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}" 
                 target="_blank" 
                 class="text-text-secondary hover:text-secondary transition-colors duration-300">
                <i class="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    
    this.container.appendChild(section);
    ScrollFade.init();
  }

  private showNotFound(): void {
    if (!this.container) return;
    
    this.container.innerHTML = `
      <div class="max-w-4xl mx-auto py-16 px-6 text-center">
        <h1 class="text-4xl font-heading text-text mb-4">Article Not Found</h1>
        <p class="text-text-secondary mb-8">The article you're looking for doesn't exist.</p>
        <a href="/articles" class="inline-block px-6 py-3 bg-gradient-to-r from-secondary to-blue-600 text-white rounded-full hover:shadow-lg transition-all duration-300">
          ← Back to Articles
        </a>
      </div>
    `;
  }
} 