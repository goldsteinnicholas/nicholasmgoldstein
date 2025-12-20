import { ScrollFade } from '../scroll-fade';

interface ArticleContent {
  slug: string;
  title: string;
  content: string;
  date: string;
  category: string;
  note?: string;
  updatedAt?: string;
}
// Adding a comment to update the project. 
export class Article {
  private container: HTMLElement | null = null;
  
  private articles: Record<string, ArticleContent> = {
    'the-sad-life-of-the-solopreneur-billionaire': {
      slug: 'the-sad-life-of-the-solopreneur-billionaire',
      title: 'The Sad Life of the Solopreneur Billionaire',
      content: `
        <p class="mb-8 leading-loose first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:leading-none first-letter:bg-gradient-to-br first-letter:from-secondary first-letter:to-purple first-letter:bg-clip-text first-letter:text-transparent first-letter:font-black">If you listen closely to what AI Execs say about how AI will change the world, you'll likely come away with amazement, horror, or some unholy combination of the two. Personally, I think many of their pronouncements are overblown, but that's beside the point. One particular outcome that many of these sorts seem drawn to is the advent of the 'Solopreneur billionaire': a man or woman who's come to the threshold of capitalist glory all by themselves (and an army of yet-to-be-developed AI agents).</p>

        <p class="mb-8 leading-loose">On its face, this seems like a worthy aspiration. The hyper-independent founder-type finally getting their opportunity to frolic in the glowing sun amongst other titans of industry and robber barons alike that have also broken through to the other side. Digging a little beneath the surface, you might ask, 'what does this really look like?'. What does this person do in their free time? Is the Solopreneur billionaire a happy person or a slave to the very agents that he used to actualize his fortune?</p>

        <p class="mb-8 leading-loose">Meet Larry, a fictional Solopreneur of this ilk, who bought into the mythology of the Solopreneur billionaire and hopes to one day make it a reality for himself. He is hypnotized by the grandiosity and audacity of the project and will stake his reputation on its success. AI Farm, his fictional startup, is a B2B SaaS that automates various workflows that business owners typically had to rely on people for. He has no qualms with replacing that human labor because he believes they could be more productive elsewhere (perhaps starting their own B2B SaaS, going to Trade School, doing gig economy work, or becoming an Influencer). Larry has been using these same agents that he's built for his clients to automate his own work processes and believes that this will scale indefinitely. More and more time is poured into managing this agentic swarm, and less is spent actually coding, designing, communicating, or even living.</p>

        <p class="mb-8 leading-loose">Working with the agents can be irritating. While they don't talk back and don't need sleep or meal breaks, they don't understand certain things that a human would intuitively get. The interface of AI Farm is dull and unimaginative, the microcopy is corporate new-speak, and the customer service recordings that he keeps for analysis are filled with people yelling through their microphones to speak to an actual human.</p>

        <p class="mb-8 leading-loose">As for his social life… Can you guess? It pretty much consists of discussing the happenings at work with a non-company-related AI, looking for some semblance of someone understanding the underlying struggle of trying to make AIs more like humans and trying to manage his mental health accordingly. He could date or join a run club or just go to a bar, but that's a distraction. He needs to become something meaningful. His path to meaning is unfortunately tied up in this tiring work of his own design.</p>

        <p class="mb-8 leading-loose">As for his valuation targets, they're going up. He's soaring past the competition and in theory, he's getting exactly what he wants: the life of the Solopreneur billionaire-to-be. In the coming year, his AI valuation analysis agent tells him that he's set to pass the big B and finally arrive at his big dream. The thought of what to do after comes into his mind, but he has no ideas.</p>

        <div class="my-12 flex items-center justify-center">
          <div class="h-px w-32 bg-gradient-to-r from-transparent via-text-secondary to-transparent"></div>
          <div class="mx-4 h-1.5 w-1.5 rounded-full bg-text-secondary"></div>
          <div class="h-px w-32 bg-gradient-to-r from-transparent via-text-secondary to-transparent"></div>
        </div>

        <p class="mb-8 leading-loose">In a year, his valuation target has come and gone. He celebrated by sending an AI-generated press release out and taking a couple remote interviews with some financial rags and even some national papers and TV stations that were interested in the story. Still, not much has really changed. He has a net worth most people would dream of, but no time to use it for anything but reinvestment (which happens on an automated schedule).</p>

        <p class="mb-8 leading-loose">There's not much of a choice but to keep growing. And so he does. He pushes into new sectors, continuing to automate workflows and indirectly pass out resignation slips to unsuspecting workers with families, home loans, and aspirations of their own. Soon he's set his sights on the valuation target of $10B.</p>

        <p class="mb-8 leading-loose">By this point, I'd be lying if I said Larry was a healthy man physically, psychologically, or otherwise. He's a prisoner to his desk and his AI 'subordinates'. Somehow he gets up and starts the grind over every morning without too many second thoughts. I suppose it's the only thing he truly knows at this point. Not to mention, many agents are explicitly prompted and designed to 'motivate him to maximum efficiency and prioritize his productivity over all' leaving him with a constant streaming dialogue that forces the outcome of more work, less life. He's Sisyphus walking alongside a tied-up boulder, observing a pulley contraption at the top of the hill lug it upward, hoping the rope doesn't snap.</p>

        <div class="my-12 flex items-center justify-center">
          <div class="h-px w-32 bg-gradient-to-r from-transparent via-text-secondary to-transparent"></div>
          <div class="mx-4 h-1.5 w-1.5 rounded-full bg-text-secondary"></div>
          <div class="h-px w-32 bg-gradient-to-r from-transparent via-text-secondary to-transparent"></div>
        </div>

        <p class="mb-8 leading-loose">And one rainy autumn morning, he woke up. He's now 50 years old. What a storied career paired with a life of far fewer stories to share.</p>

        <p class="mb-8 leading-loose">At 50, Larry remains unmarried, not in the market to date, with no friends (at least not the human sort), and time has rendered him into something less inspired, despite the constant whispers from his machines to keep working. He cracked $100B valuation some time ago. A feat that should've been significant was met with little fanfare as many other solo founders have figured out Larry's playbook and made comparable amounts, doubtless resorting to a similar hermetic lifestyle. Those stories have been written many times over. A Solopreneur billionaire (even centi-billionaire) is old news in a world where agents have taken over the US economy.</p>

        <p class="mb-8 leading-loose">On this day, as the sun climbs like that same boulder hoisting up the hill and the raindrops patter on the roof of Larry's compound, a profound sadness has found its home in his heart. Woe and all its accoutrements have been building in Larry for decades at this point. He feels a new calling. A normal one.</p>

        <p class="mb-8 leading-loose">To leave his house and go to the bagel shop. Something normal people do on a weekly basis is genuinely a novel concept to this institutionalized man. So he does it. He trudges to his garage, gets in his car, and drives. He had been holed up in his home for what felt like years, doing something that sometimes felt akin to building, but mostly felt like floundering.</p>

        <p class="mb-8 leading-loose">He rolls out of the sedan, meanders through the drizzle, until his hand rests on the bagel shop's door handle, and he pulls. Inside he joins a line of fellow humans and takes in a whiff of everything bagel seasoning that permeates the air here. Ambient chatter overwhelms him slightly, but it's a welcome discomfort.</p>

        <p class="mb-8 leading-loose">A baby's cry subsides near the door as her mother slowly rocks her. Many people in the line look to be grabbing a coffee to-go before their shifts. For the most part, they look to be blue-collar workers in a hurry. Some people seem to just be living. A couple people have their laptops out, trying to avoid getting bagel crumbs in the keyboard, maybe working on a novel or the next killer app.</p>

        <p class="mb-8 leading-loose">Larry reaches the front counter and orders a plain bagel toasted with cream cheese, then walks over to the pick-up counter to stand awkwardly by the trash can, hoping to avoid an impromptu discussion, though secretly wishing one is forced upon him.</p>

        <p class="mb-8 leading-loose">In the corner of the coffee shop, he sees what looks like a meeting of five twenty-somethings talking with a certain ambition that reminded him of how he used to talk. They're having a meeting it seems. They're wearing button ups and business casual dress just talking and enjoying the food before tearing into some work. This is a rare sight, in a world where so many have gone the same path as Larry. Larry averts his eyes, so as not to seem nosey. He twiddles his thumbs attempting to avoid pulling out his phone and getting a barrage of reports on the company. He sits and sits, looking up only to glance at the front counter once in a while, checking for his order that he plans to eat in his sedan.</p>

        <p class="mb-8 leading-loose">A young man suddenly approaches Larry. "Hey, I know you!", he says enthusiastically, "You founded AI Farm, right? This is crazy, I didn't know you lived nearby." Larry clears his throat nervously, "Yea- yeah, I live right down the road actually. You guys are having a meeting?" The man replies, "You know, we're trying to do the in-person thing. Everything's remote or automated these days, we personally think that people are leaning more toward human-built products today. I know that's like against your whole business model and all, but it's why we do what we do." He chuckles nervously knowing that he may have insulted Larry. "No, no. I get it… I get it. Um, you're doing it right… And... keep the spark." He says contemplatively as his order is called from the front counter, "Order for Larry."</p>

        <p class="mb-8 leading-loose">He shakes the young man's hand and wishes him luck with everything, more graciously than he expected to just seconds prior. He walks to the counter and grabs his order, retreating to his car to eat.</p>

        <p class="mb-8 leading-loose">Larry took his first steps this day.</p>
      `,
      date: 'December 19, 2025',
      category: 'Society & Culture'
    },
    'no-were-not-trying-to-replace-dungeon-masters-with-ai': {
      slug: 'no-were-not-trying-to-replace-dungeon-masters-with-ai',
      title: "No, We're Not Trying to Replace Dungeon Masters with AI",
      content: `
        <p class="mb-8 leading-loose first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:leading-none first-letter:bg-gradient-to-br first-letter:from-secondary first-letter:to-purple first-letter:bg-clip-text first-letter:text-transparent first-letter:font-black">The closest thing to Emstrata's emergent narratives, in practice, is a well-structured Dungeons and Dragons campaign. This much is irrefutable. We borrowed many mechanics and parameters from the strategy game created by Gary Gygax and Dave Arneson, like rolling probabilities for realistic consequences. Albeit, we introduced new concepts on top of these mechanics, but clearly the influence is present.</p>

        <p class="mb-8 leading-loose">It could be argued that Gygax and Arneson were well ahead of their time and essentially laid out the fundamental mechanisms with which stories could write themselves in perpetuity with realistic outcomes, even though they didn't have LLMs available to them to actually do the writing. So, it was left up to a human: A Dungeon Master. Even today, if you ran a D&D campaign without a human Dungeon Master and an AI in their stead, you would likely end up with either a mess or a worse experience, due to the resultant reduction in social cohesion.</p>

        <p class="mb-8 leading-loose">Now, I don't necessarily feel the need to reassert my preference for humans over AIs, but there are obvious benefits to keeping a human in the loop. Unfortunately, I'm not positive that this is a belief that all my contemporaries share. There's a cohort of people who strive to replace traditional human arts, hobbies, and jobs with AI, rather than using AI as a foundational technology that can enable new forms of creativity and productivity for human beings.</p>

        <p class="mb-8 leading-loose">A new coinage seems necessary to explain what's happening here: AI Replacementism (Replacementism for short) is the philosophical position of believing, in whole or in part, that the end goal of AI reasoning and generative capabilities is the replacement of human labor. Think of CEOs who seem giddy to pontificate about programmers that don't have to sleep and can't argue, or who remark about a 'new Industrial Revolution'. What they don't mention about the possible Industrial Revolution is that this won't result in better living standards. It would further entrench and accelerate the existing inequality in our system and crown the AI companies of today as the Sole Proprietors of agglomerated labor. This leaves nothing for the rest of us. Somehow, this is their idealist worldview. I'm sure it's compelling if you're a billionaire or just wish you were.</p>

        <p class="mb-8 leading-loose">The alternative viewpoint on AI and the development of AI applications is using the capabilities of these systems to augment human skill, similar to how previous technologies bolstered human productivity and introduced new forms of art and new kinds of pastimes. It's not only a more likely outcome, but one that doesn't result in a dystopian hellscape… which is nice.</p>

        <p class="mb-8 leading-loose">And to be clear, Emstrata isn't only built for D&D-esque fantasy scenarios. It was built to 'Democratize Experience' and allows you to generate any sort of reality that you can imagine and then inhabit it to its fullest.</p>

        <p class="mb-8 leading-loose">Orchestrator Mode is the main step that Emstrata takes toward reasserting human autonomy over these simulated realities. This type of simulation allows one participant to become an Orchestrator that stands between the Discovery and Narration Layers of the Emstrata system. The Discovery Layer plans the next turn, establishes the potential consequences, then rolls them. The Orchestrator then has the opportunity to check those results, edit them, or even insert ideas of their own before they get sent to the Narration Layer for the following turn to be written. This gives complete control of the simulation's direction to a human actor. In theory, the Orchestrator could completely ignore the Discovery Layer and point the simulation in their preferred direction easily.</p>

        <p class="mb-8 leading-loose">For D&D, having a human DM that uses the Orchestrator Mode to enforce a particular ruleset and may determine certain things on their end would be very helpful. The Emstrata system keeps track of the rules of the underlying reality, what has and hasn't happened, and the DM focuses on their area of expertise with full control.</p>

        <p class="mb-8 leading-loose">I built Emstrata to help humans, not replace them. A number of AI Storytelling startups can't say the same. From projects that advertise themselves as AI Dungeon Masters or even AI Novelists, it's clear what the aim is. They want the humans out of the loop and to passively consume their AI's outputs. What a waste of human potential.</p>

        <p class="mb-8 leading-loose">Honing and highlighting human creativity is a harder path, to be fair. Many of the financial interests in the tech world are inherently Replacementist. 'Wouldn't it be a boon to business if we didn't need to hire people?' They ask with an obvious answer in mind. 'What's more convenient than opening an app and the AI determines everything for you?' They ask with their pupils contorting into dollar signs.</p>

        <p class="mb-8 leading-loose">If AI Storytelling becomes an automated process with little to no human input, we've already seen a bit of what that will look like on social media: AI-slop style memes and a complete free-for-all on creative output. In the coming years of rapid AI development, high-quality films will be drowned out by 1,000 similar pieces created with one prompt, resulting in a lack of incentive to make high-quality films, even if they're qualitatively better. Creative endeavors will be reduced to a number and the line between genuine human creation and AI generation will be further blurred.</p>

        <p class="mb-8 leading-loose">What Emstrata does is fundamentally different. Humans are part and parcel of everything Emstrata blurts out. It's a genuine tool that humans can use to generate something that couldn't have existed before: a human-AI collaborative narrative. Will it replace films? No. Will it help plan and influence films? I have no doubt.</p>

        <p class="mb-8 leading-loose">In our ideal future, we'll have delineated the appropriate place for AI in society. A place where humans can still create cool things, because that's what humans do, and a place where AI might make things go a little smoother along the way. Potentially acting as a sounding board or an ideator or a system to track narrative elements. There's a right way and a wrong way to proceed here. We can relegate humans to the fringes of relevance or empower them. Looking around, it's a bit concerning to see so many people on the anti-human side. At Emstrata, we'll build the alternative. Something pro-human. A system that doesn't write for you, but instead, writes with you.</p>

        <p class="mb-8 leading-loose">We're working on it.</p>
      `,
      date: 'December 10, 2025',
      category: 'Emstrata'
    },
    'the-dystopian-future-of-ai-girlfriends': {
      slug: 'the-dystopian-future-of-ai-girlfriends',
      title: 'The Dystopian Future of AI Girlfriends',
      content: `
        <p class="mb-8 leading-loose first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:leading-none first-letter:bg-gradient-to-br first-letter:from-secondary first-letter:to-purple first-letter:bg-clip-text first-letter:text-transparent first-letter:font-black">Can anyone think of a more apt way our society comes to a screeching halt than through the monopolization of human attention? It seems we haven't learned much from our experiments in degrading people's dopamine receptors and neural circuits for decades at this point. Still, I have some hope that this 'innovation' will be rejected. Of course, I'm talking about the dystopian idea of turning computers and algorithms into romantic partners: AI girlfriends.</p>

        <p class="mb-8 leading-loose">To be abundantly clear, I think that AI boyfriends will be a similar problem for society if/when those ideas are funded and brought to the fore. What we're seeing now is an onslaught of marketing targeted at young men, seemingly for the purpose of generating more incels and tethering them to a series of LaaS (Love as a Service) platforms. It's the psychopath's wet dream made manifest. Clearly, the issue is thinking you can date a computer, which feels absurd to discuss even as I'm typing this out, but maybe with normalization over the course of decades and cynical marketing to make a quick buck, combined with increased atomization of society and an eroding of dating culture altogether, we may come to the disastrous point of acknowledging this as a likelihood.</p>

        <p class="mb-8 leading-loose">And… that's fucked.</p>

        <p class="mb-8 leading-loose">Whether it's the richest man in the world posting anime women on his social media app, using his LLM to let the animations speak to you, or a small startup hoping to break into the mainstream by addicting you to the hollow feeling of digitized courtship, this is an inflating balloon set to pop sometime in the coming years. The pop won't be isolated either. This will bleed into everything from politics to the general perception of the tech industry. Think of how politics has already been affected by isolated people feeding into extremism or how 'tech bro' has become a pejorative, no doubt as a result of bad actors using the legacy of the tech founder to launder their own reputations and then betraying that long-established foundation.</p>

        <p class="mb-8 leading-loose">But, I digress. The real issue is people getting stripped of their humanity decade after decade by the 'innovators' of society. If we're truly innovators, why are we building obvious and evil stuff? I seem to recall a famous search engine's slogan that pertained to this very thing from years ago: "Don't be Evil". That seemed like a good precept. A sole commandment for the tech world that we forgot some time ago.</p>

        <p class="mb-8 leading-loose">We could go through a list of other egregious choices that those in the tech world made along the way, like meme-coin/NFT pump and dumps, gambling apps that keep your addiction at arm's reach perpetually, and social media that addicts you in a similar way. The point is, AI girlfriend apps aren't a new category in and of themselves. They're part of a nefarious strain of technology that somehow keeps getting prioritized and allowed to wreak havoc on society.</p>

        <p class="mb-8 leading-loose">So, what's the answer? How do we prevent predatory companies from scamming, addicting, and romancing people who are just trying to live a normal life? Some form of regulation is necessary here. Whether it's an age-gate for social media, as Australia has already implemented, or blocking certain features (though this requires knowledge of tech that I don't count on our elected officials to have).</p>

        <p class="mb-8 leading-loose">Regulations, however, don't get to the crux of the problem: the disappearance of third places, unwalkable neighborhoods, car dependence/the suburbanization of America, the reliance on these social apps in lieu of a functioning real-life alternative in many parts of the US, etc. Resolving this is much more difficult for obvious reasons. Fixing the layout of neighborhoods will likely be longer fought and more comprehensive than even getting legislation passed. Still, this is a deeply entrenched issue in the United States; I could even point to the individualistic nature of American culture, philosophy, and governance as the starting point to this disembodied superpower we're in danger of becoming. Equal parts hegemonic on the world stage and misconfigured in our communities.</p>

        <p class="mb-8 leading-loose">If we do restrain and reform not only tech, but community development, we'll see the beginnings of a slow healing process (and likely some new problem to crop up elsewhere). Truth be told, every generation is handed a set of problems to solve. It's the stone with which we sculpt a new future and the beginning of something else entirely. Unlike generations that mobilized against external enemies with clear front lines, this generation needs to battle isolation, predatory behavior from massive conglomerates, the exploding cost of living, and much more. And, to some degree we'll solve those things and I'm sure we'll plant new seeds of terror for future generations all the while trying to fix our shit.</p>
      `,
      date: 'November 19, 2025',
      category: 'Society & Culture'
    },
    'learning-german-through-ai-simulations-part-i': {
      slug: 'learning-german-through-ai-simulations-part-i',
      title: 'Learning German Through AI Simulations Part I',
      content: `
        <p class="mb-8 leading-loose first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:leading-none first-letter:bg-gradient-to-br first-letter:from-secondary first-letter:to-purple first-letter:bg-clip-text first-letter:text-transparent first-letter:font-black">Language learning is an incredible pain. Most people I know took Spanish in high school and the amount of Spanish that they retained couldn't order them a taco. So few Americans are bilingual today and the reason is obvious; you really only need English in the United States to get by. If you want to become fluent in a language fast and naturally, you need to immerse yourself in that culture and speak the language frequently. Necessity is a much better teacher than routine.</p>

        <p class="mb-8 leading-loose">The problem is most people can't drop everything to spend months in Berlin to learn German. They don't have the money or the time. But… can't we simulate immersion? Emstrata allows for this exact thing. Want to learn French? Start a simulated reality in Paris. Want to learn Chinese? Embody a character that's traveling all around the Chinese provinces. The possibilities are endless. When you get really good, perhaps you just tell the AI to write the entire thing in your language of choice or maybe even opting to learn Swahili in a fantasy world.</p>

        <p class="mb-8 leading-loose">Emstrata is an emergent narrative engine that uses AI to build storylines and full worlds according to your prompts, actions, and inputs. It's a text-based system that unravels a world as you live in it and perform actions within the emergent narrative. There's a comprehensive tool-set to manage, improve, and keep track of your story as well.</p>

        <p class="mb-8 leading-loose">I used Emstrata to get started learning German. It was surprisingly effective at not only managing an engaging storyline with real stakes, but also weaving in genuinely useful phrases throughout the process and providing great context for them. I found myself in a narrative where my character was dropped in Germany with minimal money, trying to track down a particular Jugendherberge (youth hostel). It was a compelling storyline that quickly unraveled into a comprehensive lesson. Try it yourself by starting a new sim using the "Fremd in Berlin" template; it's categorized as a 'Learning through Immersion' sim. By the tenth turn, I had learned the following words and phrases:</p>

        <ul class="mb-8 space-y-2 text-text-secondary leading-relaxed list-disc list-inside marker:text-secondary">
          <li><strong class="text-text">Fremd:</strong> Foreigner</li>
          <li><strong class="text-text">Hauptbahnhof:</strong> Central Train Station</li>
          <li><strong class="text-text">Entschuldigung, wo ist...:</strong> Excuse me, where is...</li>
          <li><strong class="text-text">Ich verstehe nicht:</strong> I don't understand</li>
          <li><strong class="text-text">Brauchen Sie Hilfe?:</strong> Do you need help?</li>
          <li><strong class="text-text">Auskunft:</strong> Information</li>
          <li><strong class="text-text">U-Bahn:</strong> Subway</li>
          <li><strong class="text-text">Jugendherberge:</strong> Youth hostel</li>
          <li><strong class="text-text">Wie heißt du?:</strong> What is your name?</li>
          <li><strong class="text-text">Wohin gehst du?:</strong> Where are you going?</li>
          <li><strong class="text-text">Ich heiße Klaus:</strong> I'm called Klaus</li>
          <li><strong class="text-text">Ich gehe zur Arbeit in Mitte:</strong> I'm going to work in Mitte</li>
          <li><strong class="text-text">Wo ist der Bahnhof:</strong> Where is the railroad station?</li>
          <li><strong class="text-text">Wo ist das Hotel:</strong> Where is the hotel?</li>
          <li><strong class="text-text">Wieviel kostet das?:</strong> How much does that cost?</li>
          <li><strong class="text-text">Sprechen Sie Englisch?:</strong> Do you speak English?</li>
          <li><strong class="text-text">Eine Fahrkarte nach Friedrichshain:</strong> One ticket to Friedrichshain</li>
          <li><strong class="text-text">Einmal nach...:</strong> Once to...</li>
          <li><strong class="text-text">Viel Glück:</strong> Good luck</li>
          <li><strong class="text-text">Einzelfahrt:</strong> One-way, single journey</li>
          <li><strong class="text-text">Tageskarte:</strong> Day pass</li>
          <li><strong class="text-text">Das sind böhmische Dörfer für mich:</strong> That's all Greek to me</li>
          <li><strong class="text-text">Mein Zug:</strong> My train</li>
          <li><strong class="text-text">Mein Zug kommt bald:</strong> My train comes soon</li>
          <li><strong class="text-text">Bis bald:</strong> See you soon</li>
          <li><strong class="text-text">Mein Gott:</strong> My God</li>
          <li><strong class="text-text">Danke schön:</strong> Thank you very much</li>
        </ul>

        <p class="mb-8 leading-loose">'Das sind böhmische Dörfer für mich' has to be my favorite. Once I'm fluent, everything in German will, in fact, be Greek to me. Then I'll need a simulation where I can learn Greek from the island of Mykonos.</p>

        <p class="mb-8 leading-loose">Compare this method to ones utilized by Duolingo or other language learning apps. Fundamentally-speaking, this is more immersive, entertaining, natural, and time-efficient. It was never the use-case I imagined when I built Emstrata, but it seems to be one of the really powerful ones that has come to the fore.</p>

        <p class="mb-8 leading-loose">Here's an example turn I got from Emstrata that demonstrates how this works:</p>

        <blockquote class="mb-8 p-6 bg-card-bg border-l-4 border-secondary rounded-r-lg italic text-text-secondary">
          <p class="mb-4 leading-loose"><strong class="text-text">Fremd in Berlin | Turn 2</strong></p>
          <p class="mb-4 leading-loose">Jon flips through the phrasebook's weathered pages, his thumb tracing over cramped handwriting that chronicles three days of linguistic desperation. The margins bristle with his translations: 'Entschuldigung, wo ist...' paired with 'Ex-SHOOL-di-goong, vo ist' in shaky phonetics. <strong class="text-text">He finds a cluster of transportation phrases</strong> and mouths them silently—'Ich verstehe nicht' becoming a whispered mantra as German announcements cascade overhead like verbal static.</p>
          <p class="mb-4 leading-loose">A middle-aged commuter in a wool coat slows near him, catching sight of Jon's obvious struggle with the book. <strong class="text-text">The man approaches with a cautious smile, speaking in deliberately simple German</strong>: 'Brauchen Sie Hilfe?' His tone carries the patient cadence of someone accustomed to helping lost travelers. Around them, the station's complexity seems to amplify—departure boards flickering with destinations Jon can't parse, the PA system crackling with announcements that blur into incomprehensible noise.</p>
          <p class="leading-loose">Jon stands at the nexus of possibility, phrasebook trembling slightly in his grip. The information booth with its 'Auskunft' sign offers official help but intimidating formality. To his east, the U-Bahn entrance promises direct passage to Friedrichshain, though the subway map resembles a multicolored spiderweb of confusion. The helpful commuter waits patiently, eyebrows raised in gentle inquiry, while the morning rush continues to eddy around them in rapid-fire German that gnaws at Jon's confidence with every overheard syllable.</p>
        </blockquote>

        <p class="mb-8 leading-loose">Just in that turn, I took note of a number of helpful phrases. I also used the note-taking tool on Emstrata to capture these all:</p>

        <div class="mb-8 flex flex-col items-center">
          <img src="/emstrata-note-taking.png" alt="Note-taking on Emstrata" class="max-w-md w-full rounded-2xl border border-text-secondary/30">
          <p class="text-sm text-text-secondary text-center mt-2 italic">Note-taking on Emstrata</p>
        </div>

        <p class="mb-8 leading-loose">The only better way to learn a language would have to be actually going to the country itself. Perusing the markets, making small-talk with store clerks, but, as mentioned, this is unfeasible. Emstrata is the digital answer to immersion learning. Also, this isn't even limited to language learning. Imagine witnessing the Trial of Socrates or fighting in a bunker in World War I. You could learn history, brainstorm ideas for your novel by living within its reality, and so much more.</p>
      `,
      date: 'November 17, 2025',
      category: 'Emstrata'
    },
    'can-emstrata-dethrone-chatgpt-in-storytelling': {
      slug: 'can-emstrata-dethrone-chatgpt-in-storytelling',
      title: 'Can Emstrata Dethrone ChatGPT in Storytelling?',
      content: `
        <p class="mb-8 leading-loose first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:leading-none first-letter:bg-gradient-to-br first-letter:from-secondary first-letter:to-purple first-letter:bg-clip-text first-letter:text-transparent first-letter:font-black">AI storytelling and the ability to immerse yourself in AI-generated worlds are entering a brand new era. The good news is apps like Emstrata have no interest in replacing human creativity or diminishing artistic minds, but rather harnessing them to work alongside AI to create a profound experience that couldn't have existed in the pre-LLM era.</p>

        <p class="mb-8 leading-loose">Today we'll jump into comparing Emstrata to the biggest LLM out there, ChatGPT. Now, Emstrata is going to fall short of ChatGPT in a myriad of ways, for instance, it won't write your school essay or generate a simple webpage for you, but what it will do particularly well is set up a narrative world based on your prompts in which you can inhabit. You can also alter these simulations by taking actions and allowing the AI to adapt to your decisions and by interacting with the tooling built specifically to always allow users to have the final say in the direction of their simulation.</p>

        <p class="mb-8 leading-loose">I'm Nick Goldstein, and yes, I built Emstrata. It's a powerful emergent narrative engine designed to not only build narrative worlds, but maintain their reality; complete with systems to ensure realistic consequences to actions within your simulation reality. Emstrata is, in short, the natural evolution of storytelling in the AI era. It synthesizes human creativity, AI-mediation, and memory management to enable a unique experience that doesn't diminish the creative predisposition of human beings.</p>

        <p class="mb-8 leading-loose">ChatGPT is obviously the general purpose LLM of note that brought this wave of AI products to the fore in the first place. Without it, I, and many other developers, would have much less leeway to build compelling products. They broke down the walls of the castle, so that Emstrata could barge in and decapitate the king. Or, at least do so in some simulated reality.</p>

        <h2 class="text-3xl font-heading text-text mb-6 mt-12">Comparison Criteria</h2>

        <p class="mb-8 leading-loose">Now, for the meat of the sandwich. We'll be doing a deep dive on how these 2 systems handle a variety of aspects that are essential to not only storytelling and immersion, but the mechanics that make a simulated reality feel real. Specifically, we'll be looking at how ChatGPT and Emstrata handle:</p>

        <ul class="mb-8 space-y-4 text-text-secondary leading-relaxed">
          <li class="mb-4">
            <strong class="text-text">World Building</strong>
            <ul class="mt-2 ml-6 space-y-2 list-disc marker:text-secondary">
              <li>The ability to construct a dense and rich world that feels livable and has clearly defined constraints.</li>
              <li>If you're a fan of Game of Thrones, think of how layered Westeros is and how George RR Martin built that out so completely.</li>
            </ul>
          </li>
          <li class="mb-4">
            <strong class="text-text">Consequence Handling</strong>
            <ul class="mt-2 ml-6 space-y-2 list-disc marker:text-secondary">
              <li>How are action consequences handled? Does the AI determine everything and lord over the simulation reality or is there a different system that makes the AI simulation guide less omnipotent?</li>
            </ul>
          </li>
          <li class="mb-4">
            <strong class="text-text">Tooling</strong>
            <ul class="mt-2 ml-6 space-y-2 list-disc marker:text-secondary">
              <li>How does the service handle auxiliary aspects of simulated realities?</li>
              <li>Are there simple methods to correct errors? Are there ways to enforce foreign rule-sets? What does the platform offer that would ensure that the user has absolutely everything they need to commit to the reality and fully immerse?</li>
              <li>This one is a bit of a layup for Emstrata.</li>
            </ul>
          </li>
          <li class="mb-4">
            <strong class="text-text">Ease of Use</strong>
            <ul class="mt-2 ml-6 space-y-2 list-disc marker:text-secondary">
              <li>How quickly can you get started with the system? Is there a learning curve?</li>
            </ul>
          </li>
          <li class="mb-4">
            <strong class="text-text">Brainstorming</strong>
            <ul class="mt-2 ml-6 space-y-2 list-disc marker:text-secondary">
              <li>Which system can generate better simulation ideas?</li>
            </ul>
          </li>
          <li class="mb-4">
            <strong class="text-text">Story Development</strong>
            <ul class="mt-2 ml-6 space-y-2 list-disc marker:text-secondary">
              <li>Does the story evolve naturally and change with user actions in a reliable way?</li>
            </ul>
          </li>
        </ul>

        <h2 class="text-3xl font-heading text-text mb-6 mt-12">Test Results</h2>

        <h3 class="text-xl font-heading text-text mb-4 mt-8">"Generate an imaginative D&D Campaign"</h3>
        <p class="mb-4 leading-loose text-text-secondary"><em>ChatGPT was given a little extra context since its basic interface is not set up for world building exclusively</em></p>
        <p class="mb-4 leading-loose"><strong class="text-text">ChatGPT:</strong> Despite being explicitly prompted to create a D&D campaign with a clear starting scenario, ChatGPT didn't even bother establishing a character. Instead, it opens with "You are: a wanderer whose identity will solidify through action", essentially telling you it'll figure out who you are later. The world itself is all atmosphere and no structure: "borderlands," "shimmering storms," a "colossal figure on the horizon." It reads like someone trying to sound mysterious rather than actually building a place you can interact with. Where are you standing? What can you touch? Who else is here? None of that gets answered; just purple prose about "traveling wounds" and "restless energy." Worse, it's completely generic. This could be the opening to ten thousand different fantasy stories. "Crossroads of Embers" with "ramshackle junctions" and "whispers of darkness" feels like it was assembled from a template of fantasy clichés rather than creating something specific and tangible. <strong class="text-text">4/10</strong></p>
        <p class="mb-8 leading-loose"><strong class="text-text">Emstrata:</strong> Emstrata hands you a fully realized scenario from turn one. You're Zara Corvin, standing in the Great Market of Verdan, having just smashed a tax ledger with an iron rod. The city has an Upper District, a Lower Borough, and a Great Market—actual geography you can navigate. Guards are approaching from three directions. The crowd is dispersing. You have maybe hours before Lord Fairfax responds. Everything you need to make a meaningful decision is right there. No flowery language about cosmic mysteries—just a concrete situation with clear stakes and immediate choices. <strong class="text-text">8/10</strong></p>

        <h3 class="text-xl font-heading text-text mb-4 mt-8">Breakdown of how systems handle the consequences of actions</h3>
        <p class="mb-4 leading-loose"><strong class="text-text">ChatGPT:</strong> Allows the AI to determine the outcome of the action completely. No outside determination that would leave anything up to realistic chance. You inspect your gear and the AI just decides you find a mysterious bronze disc that "hums faintly." You look around and it decides there are ground vibrations forming "a pattern." Everything happens because the AI thinks it sounds good, not because any system determined whether it should. There's no tension and outcomes bend toward whatever the AI finds narratively convenient. <strong class="text-text">5/10</strong></p>
        <p class="mb-8 leading-loose"><strong class="text-text">Emstrata:</strong> Uses a probability rolling system to outsource likelihood to chance. The AI determines the chances of something occurring within the bounds of the reality of the sim based on strict instructions, then probability modifiers are applied to the likelihood, and the AI narrator has to live with the results regardless of the convenience of the outcome or the potential disruption to the way the AI would prefer the story to go. You might fail when the AI wants you to succeed. You might discover something critical through lucky rolls. The story isn't predetermined, it emerges through genuine chance interacting with your choices. For instance, approaching boots disrupted my inventory search because one of my probability rolls failed. All this said, weighted randomness really isn't how consequences are determined in real life, so while this feels realistic, it still isn't perfect. <strong class="text-text">8/10</strong></p>

        <h3 class="text-xl font-heading text-text mb-4 mt-8">List of tools available to users that could theoretically help within emergent narratives</h3>
        <p class="mb-4 leading-loose"><strong class="text-text">ChatGPT:</strong> Chat history for continuity and web search for non-fiction simulations. That's it. If the AI contradicts itself, forgets a detail, or makes a decision you disagree with, your only option is to type corrections into the chat and hope it listens. There's no built-in mechanism to flag errors, enforce rules, or maintain consistency beyond asking nicely. <strong class="text-text">3/10</strong></p>
        <p class="mb-8 leading-loose"><strong class="text-text">Emstrata:</strong> Protest Function to flag AI mistakes without breaking immersion. Invisible Hand for direct narrative injection when you need to steer things. Text-to-speech so you can listen instead of read. Stats tracking, interactive maps, persistent notes. In-sim questions with secret-shielding so the AI won't spoil information your character shouldn't know yet. Multi-participant simulations so you can run stories with other players. Orchestrator mode for fine-tuned control over simulation parameters. Simulation templates to jumpstart worlds. Every tool exists to give you control over the narrative without fighting the AI or breaking the experience. <strong class="text-text">9/10</strong></p>

        <h3 class="text-xl font-heading text-text mb-4 mt-8">Ease of Use</h3>
        <p class="mb-4 leading-loose"><strong class="text-text">ChatGPT:</strong> Simple, familiar interface that feels like texting. You type, it responds. No learning curve, no setup, no configuration. If you've used any chat app, you already know how to use ChatGPT. That said, if you want it to actually generate emergent narratives instead of generic responses, you'll need to craft careful prompts and continually steer it in the right direction. So while the interface is easier, getting quality narrative experiences requires work on your end. <strong class="text-text">8/10</strong></p>
        <p class="mb-8 leading-loose"><strong class="text-text">Emstrata:</strong> Purpose-built for narrative generation, which means there's a slight learning curve. You need to understand what the Protest Function does, when to use the Invisible Hand, how Orchestrator mode works. The interface is more complex because it's doing more. But once you spend five minutes orienting yourself, you have tools ChatGPT simply doesn't offer and the system is already optimized for storytelling without needing constant prompt engineering. The tradeoff is initial friction for long-term power. <strong class="text-text">5/10</strong></p>

        <h3 class="text-xl font-heading text-text mb-4 mt-8">Brainstorm a new sim based on this prompt: "I think a world of squirrels simulation would be cool, help me flesh out an idea"</h3>
        <p class="mb-4 leading-loose"><strong class="text-text">ChatGPT:</strong> My version of ChatGPT has saved memories that include Emstrata mechanics, and when I asked it to brainstorm a squirrel world simulation, it initially tried to build out a massive simulation world with all the technical details—which wasn't what I asked for, but did demonstrate real competency at understanding simulation design. After I told it to stop filibustering and just give me the concept, it delivered something clean and immediately usable. Squirrel civilization where basic instincts—hoarding, territory, chaos—create emergent social dynamics. You nudge the system and watch what happens. It's a strong concept that makes sense and feels playable. That said, my extensive brainstorming history with ChatGPT may have influenced these results. <strong class="text-text">7/10</strong></p>
        <p class="mb-8 leading-loose"><strong class="text-text">Emstrata:</strong> Unfortunately, Emstrata's built-in brainstorming chatbot Emory underperformed here. Instead of immediately generating a concept, Emory asked irrelevant follow-ups before finally producing "The Great Oak Crisis"—three squirrel clans facing resource scarcity and habitat destruction with mysteries and sabotage escalating tensions. What I like: it's built specifically for Emstrata, provides a short summary you can paste directly into the world builder, and suggests titles. What I don't like: Emory's personality gets in the way of results. The performative friendliness ("jumping straight into the nuts and bolts!") wastes time. I need to transform Emory into a focused brainstorming AI that builds complex worlds with natural stakes and suggests Invisible Hand injections to maintain momentum. <strong class="text-text">5/10</strong></p>

        <h3 class="text-xl font-heading text-text mb-4 mt-8">Subjective analysis of story development</h3>
        <p class="mb-4 leading-loose"><strong class="text-text">ChatGPT:</strong> Five turns in and the protagonist still doesn't have a name. ChatGPT opened with "a wanderer whose identity will solidify through action" and just... kept calling them The Wanderer. No identity emerged. No character development happened. The story doesn't progress so much as react to random inputs. Turn one establishes mysterious vibes (shimmering storms, colossal figures, villages vanishing). Turn two introduces an NPC with a quest hook. Turn three, I attacked her for no reason just to test the system. Turns four and five become a fight scene with zero context or stakes. Why are we fighting? What does winning or losing mean? The system has no idea because I gave it no motivation—but it just went with it anyway, generating combat descriptions without questioning whether this makes narrative sense. The dialogue is painfully generic. "If it's adventure you want, the world has plenty to give." "So that's how it is?" "Your move, Wanderer." It reads like placeholder text from a fantasy TV show. And when the half-elf says "the Crossroads watches and remembers," what does that even mean? There's no established system for consequences, no indication this fight will matter beyond this moment. Nothing builds. There are no stakes beyond "you're fighting now because you decided to." The ground vibrations mentioned in turn one get referenced again but never develop into anything. The mysterious bronze disc that "hums faintly" never comes up again. ChatGPT is just reacting turn by turn, generating atmospheric descriptions without any underlying structure holding it together. <strong class="text-text">2/10</strong></p>
        <p class="mb-8 leading-loose"><strong class="text-text">Emstrata:</strong> The opening establishes Zara in the Great Market having just destroyed tax records with guards closing in from three directions. By turn five, she's sprinting through the Merchant Quarter with half the district shouting "thief" and pointing her out while guards systematically close escape routes. What changed wasn't a plot twist or dramatic reveal but realistic escalation: her tools identified her as a fleeing blacksmith, her coin pouch jingled during movement, she accidentally scattered a merchant's goods while running, and civilians started actively helping the guards track her. The environment responds to actions instead of bending toward narrative convenience. Merchants notice specific details and react accordingly. The spatial layout matters because guards coordinate their sweep patterns. Physical stress manifests through tunneling vision and ragged breathing. Escape routes that seemed viable become traps as the situation evolves. The stakes are immediate (capture means execution) and grounded in cause and effect. There's genuine tension because the system isn't protecting you from consequences or forcing dramatic moments. Things get worse because of what actually happened, not because the story decided it was time for complications. <strong class="text-text">9/10</strong></p>

        <h3 class="text-xl font-heading text-text mb-4 mt-8">World Building Results</h3>
        <p class="mb-4 leading-loose text-text-secondary"><strong class="text-text">ChatGPT</strong> (extra prompting to orient it toward Emstrata-style simulations):</p>
        <blockquote class="mb-6 p-6 bg-card-bg border-l-4 border-secondary rounded-r-lg italic text-text-secondary">
          <p class="mb-4 leading-relaxed">You are: <strong class="text-text not-italic">A wanderer whose identity will solidify through action, a protagonist shaped by each prompt you give.</strong></p>
          <p class="mb-4 leading-relaxed">In the borderlands between the Verdant Expanse and the Shattered Meridian lies a realm unraveling. Kingdoms that once traded in quiet harmony now whisper of vanished towns, strange shimmering storms, and constellations that have begun to rearrange themselves without permission. Scholars argue whether this is prophecy, calamity, or merely the world remembering something older than the gods. Whatever the truth, adventurers have begun to feel a tug in their bones—an inaudible summons toward the unknown.</p>
          <p class="mb-4 leading-relaxed">Your story begins at the Crossroads of Embers, a ramshackle junction where caravans pause before braving the deeper wilds. Smoke curls from fire pits where travelers share rumors of a growing darkness that moves like a traveling wound: villages emptied without struggle, forests whose roots hum with restless energy, and a colossal figure spotted walking the horizon at dusk—too distant to recognize, too enormous to ignore. The world is shifting, and even the wind seems to be holding its breath.</p>
          <p class="leading-relaxed">Here, amid the clatter of hooves and the glow of lanterns, <strong class="text-text not-italic">you</strong> arrive—driven by instinct, hope, fear, destiny, or perhaps a mystery you have not yet named. Whatever brought you here will soon thrust you into a tale of gods who have fallen silent, maps that rewrite themselves overnight, and an ancient force reaching up from beneath the soil to reclaim what was lost.</p>
        </blockquote>
        <p class="mb-4 leading-loose text-text-secondary"><strong class="text-text">Emstrata:</strong></p>
        <blockquote class="mb-8 p-6 bg-card-bg border-l-4 border-secondary rounded-r-lg italic text-text-secondary">
          <p class="mb-4 leading-relaxed">The ancient city of Verdan sprawls across terraced hillsides, its cobblestone streets echoing with the clatter of hooves and the creak of merchant wagons. <strong class="text-text not-italic">Smoke rises from the Lower Borough</strong>, where angry voices carry through narrow alleyways lined with timber-framed houses. The yearly tallage collection has begun—the feudal tax that keeps the common folk bound to their lords—but something feels different this time.</p>
          <p class="mb-4 leading-relaxed">In the Upper District, Lord Fairfax's guards patrol with unusual intensity, their steel boots striking stone in measured rhythm. Word spreads through taverns and market stalls that several villages have <strong class="text-text not-italic">refused to pay their tribute</strong>, and whispers speak of a mysterious figure organizing resistance in the countryside. The city's merchant guilds watch nervously as their carefully maintained order threatens to crumble.</p>
          <p class="mb-4 leading-relaxed">Near the Great Market, Zara Corvin stands amid the chaos of overturned tax collector's tables, her weathered hands still gripping the iron rod she used to <strong class="text-text not-italic">shatter the tax ledger</strong>. The crowd around her buzzes with nervous energy—some cheering, others backing away as they spot the approaching guard patrol. Her eyes scan the gathering faces, looking for allies or escape routes.</p>
          <p class="leading-relaxed">The midday bell tolls across Verdan, and everyone knows that Lord Fairfax's response will come swiftly. The next few hours will determine whether this act of defiance sparks a revolution or ends in public execution. <strong class="text-text not-italic">The sound of marching boots grows louder</strong> from three different directions, and the crowd begins to disperse.</p>
        </blockquote>

        <h2 class="text-3xl font-heading text-text mb-6 mt-12">Results of Comparison</h2>

        <div class="mb-8 overflow-x-auto">
          <table class="w-full border-collapse border border-text-secondary/30">
            <thead>
              <tr class="bg-card-bg border-b-2 border-text-secondary/30">
                <th class="text-left py-4 px-6 font-heading text-text border-r border-text-secondary/20">Criteria</th>
                <th class="text-left py-4 px-6 font-heading text-text border-r border-text-secondary/20">ChatGPT</th>
                <th class="text-left py-4 px-6 font-heading text-text">Emstrata</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-text-secondary/20 hover:bg-card-bg/50 transition-colors">
                <td class="py-4 px-6 text-left text-text font-medium border-r border-text-secondary/20">World Building</td>
                <td class="py-4 px-6 text-left text-text-secondary border-r border-text-secondary/20">Vague atmosphere with no concrete details. No character establishment, no specific geography, purple prose over substance. 4/10</td>
                <td class="py-4 px-6 text-left text-text-secondary">Fully realized scenario with named character, specific geography, immediate stakes, and actionable choices from turn one. 8/10</td>
              </tr>
              <tr class="border-b border-text-secondary/20 hover:bg-card-bg/50 transition-colors">
                <td class="py-4 px-6 text-left text-text font-medium border-r border-text-secondary/20">Consequences</td>
                <td class="py-4 px-6 text-left text-text-secondary border-r border-text-secondary/20">AI decides everything based on narrative convenience. No external systems, no tension, outcomes bend toward what sounds cool. 5/10</td>
                <td class="py-4 px-6 text-left text-text-secondary">Probability rolling system outsources outcomes to chance. AI must accept results regardless of narrative convenience. Real tension emerges. 8/10</td>
              </tr>
              <tr class="border-b border-text-secondary/20 hover:bg-card-bg/50 transition-colors">
                <td class="py-4 px-6 text-left text-text font-medium border-r border-text-secondary/20">Tooling</td>
                <td class="py-4 px-6 text-left text-text-secondary border-r border-text-secondary/20">Chat history for continuity, web search for non-fiction simulations. No error correction, no rule enforcement. 3/10</td>
                <td class="py-4 px-6 text-left text-text-secondary">Protest Function, Invisible Hand, TTS, stats, map, notes, in-sim questions with secret-shielding, multiparticipant simulations, Orchestrator Mode, simulation templates. Full narrative control suite. 9/10</td>
              </tr>
              <tr class="border-b border-text-secondary/20 hover:bg-card-bg/50 transition-colors">
                <td class="py-4 px-6 text-left text-text font-medium border-r border-text-secondary/20">Ease of Use</td>
                <td class="py-4 px-6 text-left text-text-secondary border-r border-text-secondary/20">Familiar texting interface, but requires constant prompt engineering for quality narratives. 8/10</td>
                <td class="py-4 px-6 text-left text-text-secondary">Slight learning curve for specialized tools, but optimized for storytelling without prompt wrestling. 5/10</td>
              </tr>
              <tr class="border-b border-text-secondary/20 hover:bg-card-bg/50 transition-colors">
                <td class="py-4 px-6 text-left text-text font-medium border-r border-text-secondary/20">Brainstorming</td>
                <td class="py-4 px-6 text-left text-text-secondary border-r border-text-secondary/20">Clean concept generation after correction. Benefits from extensive user history. Strong at ideation. 7/10</td>
                <td class="py-4 px-6 text-left text-text-secondary">Emory's personality can interfere with results. Produces Emstrata-ready output with titles, but needs refinement. 5/10</td>
              </tr>
              <tr class="border-b border-text-secondary/20 hover:bg-card-bg/50 transition-colors">
                <td class="py-4 px-6 text-left text-text font-medium border-r border-text-secondary/20">Story Development</td>
                <td class="py-4 px-6 text-left text-text-secondary border-r border-text-secondary/20">No character identity, generic dialogue, random combat with no stakes. Just reacts turn-by-turn with no structure. 2/10</td>
                <td class="py-4 px-6 text-left text-text-secondary">Organic escalation through compounding consequences. Environment responds realistically. Genuine tension and stakes throughout. 9/10</td>
              </tr>
              <tr class="border-b-2 border-text-secondary/30 font-semibold bg-card-bg/30">
                <td class="py-4 px-6 text-left text-text border-r border-text-secondary/20">Totals</td>
                <td class="py-4 px-6 text-left text-text border-r border-text-secondary/20">29/60 - 48%</td>
                <td class="py-4 px-6 text-left text-text">44/60 - 73%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 class="text-3xl font-heading text-text mb-6 mt-12">Conclusion</h2>

        <p class="mb-8 leading-loose">Obviously, I'm biased toward Emstrata, but I do think it's clear that a service designed specifically to handle emergent narrative simulations really well will blow a general LLM out of the water in that vertical, and I think that was demonstrated here. ChatGPT couldn't establish a character after five turns, generated a fight scene with zero stakes when I randomly attacked an NPC, and relied entirely on AI omnipotence to determine outcomes. Meanwhile, Emstrata built a cohesive story where my failed probability roll during an inventory check had guards interrupt me, where my sprinting caused coins to jingle and civilians to start shouting "thief," and where every choice compounded into worse problems. The final scores reflect this: ChatGPT 29 out of 60, Emstrata 44 out of 60. When you need actual narrative tools like Protest Functions, probability systems, entity management, and spatial consistency, a specialized platform built for storytelling will outperform a general-purpose AI trying to do the same job through prompting alone.</p>
      `,
      date: 'November 10, 2025',
      category: 'Emstrata',
      updatedAt: 'December 3, 2025'
    },
    'building-to-build-what-should-exist': {
      slug: 'building-to-build-what-should-exist',
      title: 'Building to Build What Should Exist',
      content: `
        <p class="mb-8 leading-loose">I became enamored by the world of startups after seeing The Social Network in high school. I had previously wanted to become a music producer and chase the dream of being an artist. Something was activated in me by that movie. It was likely equal parts that I identified with the outsider, Zuck, and that building startups was an incredibly monetizable route for my creative ambitions. Shortly after, I taught myself to build. I experienced all the pitfalls that come along with self-teaching programming, and I eventually pulled myself from the depths of tutorial hell with my keyboard held high. It wasn't for another, at least, 5 years until I'd come up with the basic concept of PLATO5, an AI social app of my own, and a decent amount longer until I'd stumble upon the idea for Emstrata, my most recent project that utilizes AI to generate emergent narratives you can live in. I had other ideas early on. My earliest was a weirdly ambitious idea for a 17-year-old: A new way to monetize music for independent artists called MUSICORUM, that allowed users to purchase percentages of independent musicians' royalties and fund their careers. Now, obviously, I could sit here and poke holes in that today, but what I had at that time was an idea that sounds a lot like what Patreon became. Later I pivoted the idea to include crypto for funding and also a music video streaming app, but I wasn't ready to build anything close to that complex on my own, nor should I have. I slowly lost interest and I had other ideas, like Isle, a simple app that was a mix between productivity software and social media. You would create public occurrences that would display on a timeline that other people could check out. It was clean and simple, and also an early example of me trying to give people tools to meet each other for public events. Isle was sort of a prototypical version of PLATO5 in many ways.</p>

        <p class="mb-8 leading-loose">The Silicon Valley of my late teens was one that I glamorized. I don't recognize it. The startup stories of today are largely that of little innovation and quick exits. B2B SaaS products with a severe want for taste and imagination litter the rolling hills of tech hubs. Behemoth tech giant conglomerates eat competitors with their endless resources. Competition exists, but it exists between companies with pockets deeper than most countries and CEOs with net worths only matched by their arrogance. Perhaps I hold a misconception born of nostalgia, but I doubt it. Zuckerberg started Facebook in a dorm room and now he couldn't conceivably fall from the top of the subindustry of social media, without some sort of divine intervention. It has seemed almost insurmountable to build a new social app since at least 2015. TikTok has broken the mold there, but that was doubtless a herculean feat only possible with metric tons of money. Plus, the social apps of today aren't even original. Snapchat introduces stories and the others copy, TikTok blows up and all of a sudden every app has a short-video feed. Even the outbreak ideas of our time have a short-lasting impact due to obvious mimicry. Perhaps I'm just lamenting the fact that it's much more difficult to shock the world with an app, but I don't quite think it's that either. ChatGPT's launch was also enormous, and shocked the world in this traditional sense, but again, that was an Olympian lift, with the backing of an insane amount of capital and a once-in-a-lifetime innovation. And, further deepening my point, Meta, Google, and many others copied them within months of launch, rather than investing in their own new, exciting products. Smart Business? Maybe. Great for people who genuinely enjoy new tech and invention? Definitely not.</p>

        <p class="mb-8 leading-loose">Naturally, founders have adapted to this new world of copycats and acquisitions. People have begun to build for exits, bump up their engagement metrics, and learn all the buzzwords that VCs orgasm to upon utterance. Founders don't opt to build new platforms or tools anymore, which on a personal level, is about the only thing I find interesting to build. They have moved toward building incremental improvements to existing solutions or products that are just branded slightly differently to capture a different market segment.</p>

        <p class="mb-8 leading-loose">If we go back further in time, we have Steve Wozniak and Jobs' idyllic tech landscape. A relative blank canvas from where we sit today. Unfathomable possibilities and unparalleled innovation. They sat on the precipice of a typhoon of consumer electronics that they would unleash on the world from a garage in California. It was a world with far fewer gatekeepers or hyper-entrenched players with checkbooks utilized as artillery. A place where an early sort of Countercultural Tech thrived and things were built because they should exist.</p>

        <p class="mb-8 leading-loose">This is gone. Maybe it exists in pockets, but from a bird's-eye view, it's nonexistent. Anti-competitive practices are simply the rules of the road on this highway and there's no clear upswell fighting against this. We will see less innovation, more pattycake between overpowered enterprises who have long forgotten what it was like to build what should exist and instead build what should pad their shareholders' pockets with buzzwords ready to fire at a moment's notice. They went from 'move fast and break things' to 'maintain market position and buy the competition'. The money that flooded into the industry over the decades following the era of the advent of the personal computer likely contorted this revolutionary wave into its current form.</p>

        <p class="mb-8 leading-loose">Now, all hope is not lost. I guess hope is the one true human universal. There's always a chance to make things better, even in a face-off with entrenched powers with unbelievable resources. My proposal is a cultural one: Countercultural Tech. A philocultural path for bringing new ideas to bear under these circumstances, that maintains chiefly the aim of always building to build what should exist. A path that rejects VC orthodoxy and catering to people who want subpar or incremental creation because it's easier to sell. We want a tech that revolutionizes and inspires again and isn't beholden to the interests of financiers with 12 vacation homes in 7 nations and 4 yachts, but perhaps accountable to the people or at least genuine innovation and tasteful execution.</p>

        <p class="mb-8 leading-loose">To build what should exist could be seen as ambiguous, so let me expound on how this relates to ethical and cultural considerations. As mentioned above, many ambitious, young founders have gone the route of building a company for a quick exits or to get noticed by a VC firm. They treat the term 'Founder' as if it's a job position, rather than an indicator of grit and creative entrepreneurship that struggles to find footing in normal employment. This is the VC orthodoxy that has captured an entire generation of industrious builders. To build counterculturally you must surgically remove that rot from your mind. You need to build to effectuate some ideal future, whether that means maximizing profit or not. And, to be clear, that doesn't mean that a hyper-profitable company can just paste on a slogan or two and be considered Countercultural Tech. It will be clear in how a business is run, whether they are trying to effectuate a better society or not, as it always was.</p>

        <p class="mb-8 leading-loose">Let me be clear, I'm not begging for a change in this piece. This is a statement of intention. I aim to innovate at the level of the people I look up to and hope that's enough to break through the scaffolding and create something better on the other side. To find a place to build things that should exist. I hope you join me there.</p>
      `,
      date: 'July 18, 2025',
      category: 'Startups',
      updatedAt: 'November 9, 2025'
    },
    'corrosive-convenience': {
      slug: 'corrosive-convenience',
      title: 'Corrosive Convenience',
      content: `
        <p class="mb-8 leading-loose">Convenience Apps: Applications that deconstruct errands or processes that would normally take time away from your day, minimize their impact on your schedule, and remove them from your immediate attention.</p>

        <p class="mb-8 leading-loose">These convenience apps aren't bad at face-value. In fact, they are good for simplifying many processes and getting things done on the fly. The proliferation of these apps, however, has thrown the baby out with the bath water; the baby being happenstance social interactions.</p>

        <p class="mb-8 leading-loose">Nowadays, everything comes right to your door. A meal from the restaurant down the street, groceries, that appliance you saw scrolling through Amazon, images and videos of beautiful people, even the dopamine hit you get from socializing. The issue with this may or may not be obvious to you as an individual based on your personal experiences. Many have found themselves socially isolated and cocooned by these invisible forces. This isn't a subjective statement to be clear. It's been documented that loneliness has doubled since the 1980s, as has the depressive effect that social media has on the younger generations.</p>

        <p class="mb-8 leading-loose">Some highly extroverted individuals may navigate this landscape fine, but many are left out in the wilderness to fend for themselves.</p>

        <p class="mb-8 leading-loose">Without semi-mandated socializing, some people will do it very infrequently. With an acknowledgement of the risk of being hyperbolic, we're creating a generation of hermits and super-extroverts. This is bad for many reasons. One reason is the health issues that result from loneliness for extended periods of time. Another is the lack of introverted thought being proliferated in certain circles. Many extroverts are astounded by the differences between their less social compatriots and themselves. I would venture to guess that introverts are more reflective, but perhaps that's just my biased perception speaking. Regardless, some introverts have worthwhile ideas that are being shared exclusively in online introvert echo chambers, while the social class are only being exposed to those who 'touch grass'. Unfortunately, we'll see the implications of this in the years to come. Some have already started to rear their ugly heads with an incredible political and societal disconnect between those who socialize and the internet dwellers who'd rather not. Incel subcultures, extremism on all sides of the political spectrum, and much much more seem to be early indications of a social system gone awry.</p>

        <p class="mb-8 leading-loose">Honorable mention to the exceedingly worrying economic inequality in the United States. This certainly isn't helping any of these issues either.</p>

        <p class="mb-8 leading-loose">PLATO5 is meant to be the antidote to this. Whether it works or not supposedly depends on me. Fun. PLATO5 is designed for the sole purpose of bringing people together in the real world. This makes it a tool for the younger generation to potentially reclaim their social autonomy and take proactive and reactive steps to improve the dire straits they may find themselves in. Of course, this depends on people's willingness to put themselves out there, but while I'm constantly preoccupied with reducing socially intimidating circumstances on the platform and minimizing friction in the process as much as possible, I cannot force people to use the service and meet someone new. I'm contented with building the tool that makes loneliness optional however.</p>

        <p class="mb-8 leading-loose">If I'm successful, we should see a measurable drop in loneliness. If we don't, then I guess I failed. To accomplish this we'll need a user base bigger than 15 people (which I'm working on). This mission is personal to me and I hope to make the aforementioned dent in those loneliness numbers and build something that sets a new standard for making friends in a more convenient age.</p>
      `,
      date: 'February 27, 2025',
      category: 'Technology'
    },
    'why-plato5-matters': {
      slug: 'why-plato5-matters',
      title: 'Why PLATO5 Matters',
      content: `
        <p class="mb-8 leading-loose">PLATO5 stands for platonic relationships based on the Big 5 personality traits. It's a clever app with transformative potential. Its modus operandi zooms in on the pipeline from online connection to IRL friendship, how these relationships form, and what foundations they're built upon. Call it self-destructive or perfectionist, but recently I took the web app down to rebuild the app from the ground up, refocusing exclusively on the aforementioned pipeline, integrating AI into everything, and molding PLATO5 into something with a much cleaner value proposition and directly addressing the loneliness epidemic that PLATO5 seeks to remedy.</p>

        <p class="mb-8 leading-loose">The pipeline from online connection to IRL friendships isn't only a descriptive slogan, but the vision for PLATO5 and the proposal that this project puts forward for helping alleviate the problems that Web 2.0 helped create, including, but not limited to, the loneliness epidemic that is significantly worse in the younger generations. PLATO5 has a simple system on face value: get a match of 4 people total based on personality, interest, and location, chat with them in an AI-integrated groupchat, and when the group feels a certain level of comfort with each other, they can utilize the Nearby applet to find events to attend together virtual or IRL. Most social apps aren't this focused and many don't even have a direct path to finding new friends to share experiences with in the real world. If a social app does have a method to accomplish this aim, it's usually secondary, indirect, or not prioritized. Think of the social media apps of the past decade; they were primarily focused on continuous app usage to increase eyeballs on ads and not particularly worried about creating lifelong friendships despite their pontifications.</p>

        <p class="mb-8 leading-loose">Web 2.0 was not truly 'social'. It sought a large user base and perhaps had good intentions, but regardless, how can we claim victory when the social outcomes get worse and worse and 'social media' bred all sorts of negative offshoots from incel subcultures to algorithmically-enhanced body dysmorphia and eating disorders. We are siloed, dependent on parasocial relationships, politically polarized, and alone in the world as a generation. 'Doomscrolling' is a term often used to describe the Infinite Jest circumstance many people find themselves in these days, with users being funneled into their own algorithmically constructed cultural tubes of content that many people become addicted to. Algorithms focused on engagement to help out advertisers and boost profits are an obvious culprit.</p>

        <p class="mb-8 leading-loose">I like to make a distinction between traditional 'social' media and my concept of a social engine. A social engine is more of a tool than a content platform. The only engagement we care about is engagement that provably leads to good, healthy relationships and positive social outcomes. Sounds over-optimistic? Look at the pipeline specifics I've laid out above. This isn't an opaque project or a front for another dystopian social app. This is a project designed to create online connections that are being effectively moved to the real world. That's what separates PLATO5 from social media. This pipeline and its effectiveness is the yardstick with which we measure the usefulness of our service. You might ask, 'Well how do you plan on monetizing this service? Surely advertisement is mixed in here somewhere?' And I don't deny that ads may be a necessity for profitability in the future, but our audience will be built on the effectiveness of the service and the ability of our service to send users through the pipeline laid out in the beginning of this article and the positive feedback loop that this generates, not algos that push engagement at all costs.</p>

        <p class="mb-8 leading-loose">To take a detour to explain the AI component here: the AI may seem like a disconnected or unnecessary factor in the description of the project that I laid out, but lend me your reading/listening faculties for a minute. Zen, the AI Chat Manager that I've built, is a facilitator of connection and interaction embedded in the groupchat. In a way, Zen makes humans more human and helps them articulate themselves in an intimidating social environment. Groupchats also alleviate the intimidation factor of 1 on 1 matchmaking scenarios. Zen works passively and actively, meaning that anytime chats are sent, Zen will coach and help users organize their thoughts within their groupchats and with access to public user data, Zen will also field questions about discussion topics to introduce and, if prompted, write a chat in the voice of the requestor. Zen also dynamically organizes and tracks conversation branches and ensures that no one in the chat is excluded.</p>

        <p class="mb-8 leading-loose">With PLATO5 V2 (relaunching soon), we may actually be able to provide something good to a generation at the whims of social tech giants and facing massive challenges in the years ahead. I hope that's the case, as this issue is personal to me, and I foresee very little change being championed in a world where engagement is king and data is godly.</p>
      `,
      date: 'February 21, 2025',
      category: 'PLATO5'
    },
    'either-paradise-or-paralysis': {
      slug: 'either-paradise-or-paralysis',
      title: 'Either Paradise or Paralysis: A Musing on Disruptionist Tech',
      content: `
        <p class="mb-8 leading-loose">The internet revolutionized many industries and fundamentally uprooted processes that we all depend on a daily basis. Chief among these is distribution. Distribution of goods and services, distribution of communication, and distribution of information. While this certainly changed the way we all do things, it replaced the existing system with a new one. This pertains to commerce, education, professional development, and social interaction. I have openly criticized the way social interaction has changed in the internet age, but the point is that it has been changed, not that the changes have been wholly positive. The open question remains: will artificial intelligence do the same or will there be no human system that can replace what's taken?</p>

        <p class="mb-8 leading-loose">We don't like non-answers to existential questions. To be in the dark on such a societally destructive potentiality is unacceptable, but… it's where we are, if we're honest. Are we to become a worldwide commune that produces artisan goods in our infinite leisure time or a UBI hellscape where people lose their ambition and turn to stimulation of any kind to try to feel like they're living an actual life? No one knows and those who claim to know know even less.</p>

        <p class="mb-8 leading-loose">One thing that people in the tech world never seem to add to the equation is that the rate of adoption never matches the rate of innovation. Blue chip companies aren't going to convert their business models overnight even if there is some AI that can produce as much as a human. Plus, with the possibility of AI/Robot Taxes being levied on corporations as this technology slowly becomes more utilized, this is a much more nuanced picture than either the utopian or dystopian visions provided.</p>

        <p class="mb-8 leading-loose">Also worth noting: an AI has not been created that can direct itself, nor has an AI been created that has legitimately innovated anything without human direction. So are LLMs more like a language-calculator than a God? Only time will reveal this. An unforeseen boundary in the development of these systems could crop up at any moment, in fact, they may even have revealed themselves already.</p>

        <p class="mb-8 leading-loose">AIs struggle with incredible amounts of characters being thrown at them all at once; any programmer will tell you this and there have been studies as well. How, without direction, will an AI manage an entire code base if their response reduces in quality when provided a fraction of that code? When AI is finally trained on all available human data and the corpus of human achievement has been eaten by these machines, won't the synthetic data generated by these machines mirror the data that the LLMs were trained on? Again, these aren't innovative machines, maybe we'll have something like that in the future, but LLMs predict characters based on user input, context, and training data through features and weights. How can we expect to surpass human intelligence if that intelligence hasn't been recorded?</p>

        <p class="mb-8 leading-loose">There's no definitive answer I can give to the incredible variety of questions that this technology inspires, but I can venture a guess based on what I've seen in my limited 27 years: we'll be fine. Probably. Maybe.</p>
      `,
      date: 'February 11, 2025',
      category: 'Technology'
    },
    'my-big-play': {
      slug: 'my-big-play',
      title: 'My Big Play',
      content: `
        <p class="mb-8 leading-loose">The greatest opportunity for ascension in the 2020s lies in AI integration and figuring out how AI will be used in the coming decades. AI models are experiencing extreme innovation, but the true profiteers of this time will be the people who find out how to use these models in the most useful manner. It wasn't Internet Service Providers or Broadband companies that consolidated the most incredible wealth in perpetuity; it was the internet entrepreneur. Mark Zuckerberg, Jeff Bezos, Larry Ellison to name a few. Sure, ISPs are successful businesses, but what ISP founder is one of the richest people in the world?</p>

        <p class="mb-8 leading-loose">It is with this backdrop that I have migrated my thoughts on startups to an AI-first perspective. Big companies cannot and aren't willing to overhaul their existing business models and services to become fully engulfed in useful AI integrations. There is plenty of fluff and lackluster AI uses on the internet built out by these tech giants. Comment summarization comes to mind. People enjoy reading comments, so an AI integration that replaces an enjoyable, community-building experience is worse than unnecessary. Many of the current uses of AI among the tech giants are like this. They can't rebuild their services so they're left with small breadcrumbs of AI usage everywhere. This era may prove to be the most overflowed with opportunity since the early days of the internet or the social media boom.</p>

        <p class="mb-8 leading-loose">As of now, I'm a technical consultant at Oracle, but I have many projects that I'm building that will take advantage of this opportunity. PLATO5 is an AI-first social app, designed to create online connections that evolve into IRL friendships. This is the first and most fleshed-out project that I've been working on. Kommin is an offshoot of PLATO5 that grew into something that no longer had a direct bearing on PLATO5's value proposition. After many iterations and pivots, I've set on turning it into a mobile-first, minimal oratory board that hopes to one day stand toe-to-toe with the entirety of the podcasting industry through small, digestible, auto-play enabled voice clips that can be easily thrown on during work or transit. Goldstein Simulator is a big one. This project is dedicated to optimizing existing LLM responses for simulations that maintain the logic of their respective realities and could one day be the narrative backbone of AI-generated video games, choose-your-adventure films, and more. My personal favorite theoretical application of Goldstein Simulator is my idea of Simulation Lounges that encourage social connection.</p>

        <p class="mb-8 leading-loose">PLATO5 was initially not supposed to be an AI app. In fact, I started building it before LLMs were fully introduced to the wider public through ChatGPT. Unfortunately, early on I fell into the same trap as the tech giants and built AI Chat Suggestors, instead of my current solution: AI Chat Managers that passively and actively aid users with managing their conversations and help them brainstorm new things to discuss, making IRL connections more likely and conversations more engaging. The chat suggestions were peripheral; the chat managers are direct, constant, and easy to utilize. This is the future of ai-chat integration in my opinion.</p>

        <p class="mb-8 leading-loose">The chat suggestions weren't necessarily bad, but they distracted from the main purpose of PLATO5: building those IRL friendships for users. I even gave the Chat Suggestors 5 different personalities for different types of chat suggestions. Zen was a neurotic creative, Steward was a historical savant butler with a penchant for uniformity, Plato was a mirror of the Ancient Greek philosopher of the same name, but with little quirks like the propensity to get flustered and call you 'malaka', Cyba was a cyborg with a cybernetic startup and glitchy hardware, and Gertrude the Conqueror was a sweet, docile grandmother who doubled as a warlord, ever-defending the PLATO5 realm. While humorous, this got in the way of PLATO5's value proposition, as you might have guessed. Also, it's worth noting to anyone interested in AIs with personalities: it's one of the things that LLMs lag behind in. Not believable whatsoever.</p>

        <p class="mb-8 leading-loose">Kommin will use AIs in a more limited capacity for now, but maybe later bigger integrations could be built. AI Elaboration is an actually useful version of summarization. Instead of having to tap a user's profile or dig through old komms, you can feed that data to AIs and they can provide insight and intriguing connections on why the user may have recorded this komm and who they are. This is a good example of a useful AI integration that stands in stark contrast with comment summarization. Also, all algos will likely be AI enhanced when I have enough data to train an algorithm on.</p>

        <p class="mb-8 leading-loose">Goldstein Simulator has an obvious AI application. Its business model hinges on AIs. It's actually the multi-layered approach, turn-based collaboration features, on-the-spot fine-tuning, and backend coordination that makes Goldstein Simulator's process unique. I'll expound on this more in the future. I'm about a month away from starting the build.</p>

        <p class="mb-8 leading-loose">So, to wrap things up here: this is my big play. If I'm to make it in the world of entrepreneurship, all or some of these projects will have to propel me. I'm not naive or reluctant to get my name out there and stump for my visions of these companies and I'll be dedicating my money, time, and spirit to these projects until I'm either repeatedly and forcefully denied or… I win.</p>
      `,
      date: 'February 7, 2025',
      category: 'Startups',
      note: 'Note: Kommin and Goldstein Simulator are deprecated projects'
    },
    'zero-to-five': {
      slug: 'zero-to-five',
      title: 'Zero to Five: The Early Days of My Entrepreneurial Journey',
      content: `
        <p class="mb-8 leading-loose">Besides the on-the-nose reference to Peter Thiel's Zero to One (one of my favorites), this blog post is mostly going to discuss my early experiences building PLATO5 and the challenges therein.</p>

        <p class="mb-8 leading-loose">PLATO5's web app launched on November 13th, 2024 and has been reimagined and upgraded a dozen times since. Most recently I struggled with the gamification feature and how it fits into the social ecosystem that I'm building. It seems counterproductive to create a point system on top of an already stressful and intimidating experience for many people, like forming new social bonds. There are more reasons, but to avoid veering off-topic, I'll leave the explanation there for now. Regardless, I've learned more about design and system building in the last 4 months than I have throughout my many years of 'tutorial hell' and previous attempts at building something as ambitious as PLATO5.</p>

        <p class="mb-8 leading-loose">At first I wanted to build a mobile app for PLATO5 because I believe mobile apps to be much more readily adopted by my primary demographic, but I had some issues with the Google Developer Program that shifted me to the much less monopolized and limiting process of getting a web app on the internet. Luckily, I had the basic design, the backend, and the concept of PLATO5 fleshed-out at that point, so a simple web app took me a little over two weeks to get online.</p>

        <p class="mb-8 leading-loose">Since publishing, and very very very limited marketing, I had little to no expectations about mass-adoption of PLATO5 or a 'build and they will come' mindset. 3-5 non-friends or family have tried the app and interacted with it in surprising ways that helped me understand users a little bit more. For example, everyone that signed up took the personality assessment. I thought this would be a massive obstacle initially, but it actually seems to be a main selling point. People want to know about themselves so much that they're willing to take a test, or at least they're willing to take the assessment for the purpose of improving their matches, or some mixture of both. I guess my understanding is limited by my small user base and lack of comprehensive data science.</p>

        <p class="mb-8 leading-loose">Unfortunately, my early attempt at building a simple version of PLATO5 didn't retain those early users. This is what I've been working on now: making PLATO5 immediately useful, navigable, and understandable. PLATO5 is, after all, a tool or engine, not a platform (at least in the traditional sense). Also, I've been reserving most of my marketing activities until I'm confident people will stick around and I've enabled people to pay for premium features, hopefully letting me earn some of my adspend back.</p>

        <p class="mb-8 leading-loose">Perfectionism is another thing that I've wrestled with while building and iterating on PLATO5. The app is never done or perfect. There's a near-infinite list of features or improvements I want to roll-out tomorrow, but due to me being the only developer on the project and reality dictating that a million features doesn't guarantee usership, alas, these features will only truly exist in my imagination (at least until I'm not the sole programmer).</p>

        <p class="mb-8 leading-loose">To circle back on the idea on building features that encourage retention, I've built stories, AI conversation assistants, a user feed that prioritizes recency and completed profiles, multimedia support for user's photo galleries and kommin (our discussion board), a restructured navigation column to prioritize nanos (our group chats on PLATO5) and easy tab jumping (this one's just for me).</p>

        <p class="mb-8 leading-loose">Next up will be the premium tiers and their full integration into PLATO5. As mentioned, I hope to get some money back from this, not necessarily profit yet. We'll see though. I'd love to take this on as a full-time job. The amount of work I could put into PLATO5 then excites me. It doesn't feel like work, it feels more like exploration or creation. I assume this is what a calling or destiny is (or maybe a term that's less pompous and metaphysical).</p>

        <p class="mb-8 leading-loose">The rest of the story of PLATO5 is still being written and I'm sure there's much of it I've memory-banked or just forgot. Still, time will tell if this is a serious tool for helping combat the loneliness epidemic that's devastating the younger generations or a flash in the pan.</p>
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

    // Parse dates for datetime attributes
    const publishedDateISO = this.parseDate(article.date);
    const updatedDateISO = article.updatedAt ? this.parseDate(article.updatedAt) : '';

    const section = document.createElement('section');
    section.className = 'py-16 px-6 fade-in-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out';
    section.innerHTML = `
      <span data-route="/articles/${slug}" style="display: none;"></span>
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
          <div class="flex flex-col gap-2">
            <time class="text-text-secondary text-lg" datetime="${publishedDateISO}">
              Published: ${article.date}
            </time>
            ${article.updatedAt ? `
            <time class="text-text-secondary text-base italic" datetime="${updatedDateISO}">
              Updated: ${article.updatedAt}
            </time>
            ` : ''}
          </div>
          
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
        <article class="prose prose-lg prose-invert max-w-none fade-in-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <div class="text-text-secondary leading-relaxed space-y-8 text-lg md:text-justify">
            <div class="first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:leading-none first-letter:bg-gradient-to-br first-letter:from-secondary first-letter:to-purple first-letter:bg-clip-text first-letter:text-transparent first-letter:font-black">
              ${article.content}
            </div>
          </div>
        </article>

        <!-- Share Section -->
        <div class="mt-16 pt-8 border-t border-text-secondary/20">
          <div class="flex items-center justify-between flex-wrap gap-4">
            <span class="text-text-secondary">Share this article:</span>
            <div class="flex gap-4 flex-wrap">
              <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="text-text-secondary hover:text-blue-400 transition-colors duration-300"
                 aria-label="Share on Twitter">
                <i class="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="text-text-secondary hover:text-blue-600 transition-colors duration-300"
                 aria-label="Share on LinkedIn">
                <i class="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="text-text-secondary hover:text-blue-700 transition-colors duration-300"
                 aria-label="Share on Facebook">
                <i class="fab fa-facebook text-xl"></i>
              </a>
              <a href="https://www.reddit.com/submit?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(article.title)}" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="text-text-secondary hover:text-orange-500 transition-colors duration-300"
                 aria-label="Share on Reddit">
                <i class="fab fa-reddit text-xl"></i>
              </a>
              <a href="mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(window.location.href)}" 
                 class="text-text-secondary hover:text-gray-500 transition-colors duration-300"
                 aria-label="Share via Email">
                <i class="fas fa-envelope text-xl"></i>
              </a>
              <button 
                 id="copy-link-btn"
                 class="text-text-secondary hover:text-secondary transition-colors duration-300 bg-transparent border-none cursor-pointer"
                 aria-label="Copy link">
                <i class="fas fa-link text-xl"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Check me out elsewhere -->
        <div class="mt-12 pt-8 border-t border-text-secondary/20">
          <p class="text-text-secondary mb-4 text-center">Check me out elsewhere:</p>
          <div class="flex items-center justify-center gap-6 flex-wrap">
            <a href="https://www.youtube.com/@goldsteinnick" 
               target="_blank" 
               rel="noopener noreferrer"
               class="text-text-secondary hover:text-red-500 transition-colors duration-300"
               aria-label="YouTube">
              <i class="fab fa-youtube text-2xl"></i>
            </a>
            <a href="https://goldsteinnick.substack.com/" 
               target="_blank" 
               rel="noopener noreferrer"
               class="text-text-secondary hover:text-orange-500 transition-colors duration-300"
               aria-label="Substack">
              <i class="fas fa-envelope-open-text text-2xl"></i>
            </a>
            <a href="https://medium.com/@nicholas_18438" 
               target="_blank" 
               rel="noopener noreferrer"
               class="text-text-secondary hover:text-black dark:hover:text-white transition-colors duration-300"
               aria-label="Medium">
              <i class="fab fa-medium text-2xl"></i>
            </a>
            <a href="https://www.threads.com/@goldsteinnick?xmt=AQF0Bw9n1CvqpqWunZqBIgKQjfG0Difn8fa_GlkIP1vchhE" 
               target="_blank" 
               rel="noopener noreferrer"
               class="text-text-secondary hover:text-black dark:hover:text-white transition-colors duration-300"
               aria-label="Threads">
              <i class="fab fa-threads text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/nicholas-goldstein-362a13179/" 
               target="_blank" 
               rel="noopener noreferrer"
               class="text-text-secondary hover:text-blue-600 transition-colors duration-300"
               aria-label="LinkedIn">
              <i class="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    `;
    
    this.container.appendChild(section);
    
    // Update metadata (canonical, title, description, Open Graph, Twitter)
    this.updateMetadata(article, slug);
    
    // Setup copy link button
    this.setupCopyLink();
    
    ScrollFade.init();
    
    // Trigger fade-in for article content immediately on load
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Fade in the section wrapper
        section.classList.remove('opacity-0', 'translate-y-8');
        section.classList.add('opacity-100', 'translate-y-0');
        
        // Fade in the article content
        const articleContent = section.querySelector('article');
        if (articleContent) {
          articleContent.classList.remove('opacity-0', 'translate-y-8');
          articleContent.classList.add('opacity-100', 'translate-y-0');
        }
      });
    });
  }

  private setupCopyLink(): void {
    const copyBtn = this.container?.querySelector('#copy-link-btn');
    if (!copyBtn) return;

    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        const icon = copyBtn.querySelector('i');
        if (icon) {
          const originalClass = icon.className;
          icon.className = 'fas fa-check text-xl';
          setTimeout(() => {
            icon.className = originalClass;
          }, 2000);
        }
      } catch (err) {
        console.error('Failed to copy link:', err);
      }
    });
  }

  private updateMetadata(article: ArticleContent, slug: string): void {
    const canonicalUrl = `https://nicholasmgoldstein.com/articles/${slug}`;
    const articleUrl = canonicalUrl;
    
    // Parse dates for proper formatting
    const publishedDate = this.parseDate(article.date);
    const modifiedDate = article.updatedAt ? this.parseDate(article.updatedAt) : publishedDate;
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;
    
    // Update page title
    document.title = `${article.title} | Nick Goldstein`;
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    // Create a simple description from the first paragraph or use a default
    const description = article.content.replace(/<[^>]*>/g, '').substring(0, 160) + '...';
    metaDescription.content = description;
    
    // Update Open Graph tags
    this.updateMetaTag('property', 'og:type', 'article');
    this.updateMetaTag('property', 'og:url', articleUrl);
    this.updateMetaTag('property', 'og:title', article.title);
    this.updateMetaTag('property', 'og:description', description);
    
    // Article-specific Open Graph tags
    this.updateMetaTag('property', 'article:published_time', publishedDate);
    this.updateMetaTag('property', 'article:modified_time', modifiedDate);
    this.updateMetaTag('property', 'article:author', 'Nick Goldstein');
    this.updateMetaTag('property', 'article:section', article.category);
    this.updateMetaTag('property', 'article:tag', article.category);
    
    // Update Twitter tags
    this.updateMetaTag('property', 'twitter:card', 'summary_large_image');
    this.updateMetaTag('property', 'twitter:url', articleUrl);
    this.updateMetaTag('property', 'twitter:title', article.title);
    this.updateMetaTag('property', 'twitter:description', description);
    
    // Add Schema.org Article structured data for AI readability
    this.addArticleStructuredData(article, slug, publishedDate, modifiedDate);
  }

  private parseDate(dateString: string): string {
    // Convert "November 17, 2025" to ISO 8601 format "2025-11-17"
    const months: Record<string, string> = {
      'January': '01', 'February': '02', 'March': '03', 'April': '04',
      'May': '05', 'June': '06', 'July': '07', 'August': '08',
      'September': '09', 'October': '10', 'November': '11', 'December': '12'
    };
    
    const parts = dateString.split(' ');
    if (parts.length === 3) {
      const month = months[parts[0]];
      const day = parts[1].replace(',', '').padStart(2, '0');
      const year = parts[2];
      return `${year}-${month}-${day}`;
    }
    return new Date().toISOString().split('T')[0];
  }

  private addArticleStructuredData(article: ArticleContent, slug: string, publishedDate: string, modifiedDate: string): void {
    // Remove existing article structured data if any
    const existingScript = document.querySelector('script[type="application/ld+json"][data-article-schema]');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Extract plain text content - remove HTML tags but preserve structure
    let textContent = article.content
      .replace(/<blockquote[^>]*>/g, '\n\n> ')
      .replace(/<\/blockquote>/g, '\n\n')
      .replace(/<strong[^>]*>/g, '**')
      .replace(/<\/strong>/g, '**')
      .replace(/<em[^>]*>/g, '*')
      .replace(/<\/em>/g, '*')
      .replace(/<li[^>]*>/g, '\n- ')
      .replace(/<\/li>/g, '')
      .replace(/<ul[^>]*>/g, '\n')
      .replace(/<\/ul>/g, '\n')
      .replace(/<p[^>]*>/g, '\n\n')
      .replace(/<\/p>/g, '')
      .replace(/<div[^>]*>/g, '\n')
      .replace(/<\/div>/g, '')
      .replace(/<img[^>]*>/g, '')
      .replace(/<[^>]*>/g, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
    
    const articleDescription = textContent.substring(0, 200) + (textContent.length > 200 ? '...' : '');
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "description": articleDescription,
      "articleBody": textContent,
      "image": "https://nicholasmgoldstein.com/nicholasmgoldstein-favicon.png",
      "datePublished": publishedDate,
      "dateModified": modifiedDate,
      "author": {
        "@type": "Person",
        "name": "Nick Goldstein",
        "url": "https://nicholasmgoldstein.com"
      },
      "publisher": {
        "@type": "Person",
        "name": "Nick Goldstein",
        "url": "https://nicholasmgoldstein.com"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://nicholasmgoldstein.com/articles/${slug}`
      },
      "articleSection": article.category,
      "keywords": article.category,
      "inLanguage": "en-US"
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-article-schema', 'true');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  private updateMetaTag(attribute: string, name: string, content: string): void {
    let metaTag = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute(attribute, name);
      document.head.appendChild(metaTag);
    }
    metaTag.content = content;
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