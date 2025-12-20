import { ScrollFade } from '../scroll-fade';

interface CourseModule {
  number: string;
  chapter: number;
  title: string;
  description: string;
  slideDeckPath?: string;
  videoUrl?: string;
  writtenContent?: string; // Placeholder for written content
}

interface CourseReaderData {
  title: string;
  description: string;
  modules: CourseModule[];
  externalResources?: Array<{
    title: string;
    url: string;
    description: string;
    isExternal?: boolean;
  }>;
}

export class CourseReader {
  private container: HTMLElement | null = null;
  
  private courses: Record<string, CourseReaderData> = {
    'build-ai-platforms': {
      title: 'Build AI Platforms from Scratch',
      description: 'Learn to build powerful AI-powered applications and platforms from scratch. This course focuses on design, architecture, and engineering, NOT coding.',
      externalResources: [
        {
          title: 'Repo w/ Common Code Patterns',
          url: 'https://github.com/goldsteinnicholas/build-ai-platforms-from-scratch',
          description: 'Common code patterns and examples from the course.',
          isExternal: true
        },
        {
          title: 'System Prompt Generator',
          url: '/system-prompt-generator',
          description: 'A tool for generating effective system prompts for AI platforms.',
          isExternal: false
        },
        {
          title: 'Emstrata',
          url: 'https://emstrata.com',
          description: 'A platform for creating immersive narrative experiences using AI to generate emergent storylines.',
          isExternal: true
        },
        {
          title: 'PLATO5',
          url: 'https://plato5.us',
          description: 'A social engine designed to turn online connections into real-world friendships, with AI integration to facilitate conversations.',
          isExternal: true
        }
      ],
      modules: [
    // Chapter 1: Foundations
    {
      number: '1',
      chapter: 1,
      title: 'Before we get started',
      description: 'Introduction to the course concept and how it will be structured.',
      slideDeckPath: '/01 Build AI Platforms from Scratch - Slide Deck/index.html',
      videoUrl: 'https://youtu.be/t033k5bSSkY?si=qvwgst_6UcnLDbJf',
      writtenContent: `
        <div class="space-y-8">
          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Before We Get Started</h2>
            <p class="text-text-secondary mb-4">Please consider the following before proceeding:</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li><strong>NOTE:</strong> This is NOT a coding course. This series will strictly focus on the design, architecture, and engineering choices involved in building an AI platform/app.</li>
              <li>Despite this not being a coding course, we will provide a Github repo with some common coding patterns that you will likely utilize at some point in the process of building an AI platform.</li>
              <li>This course is for beginners who want to take advantage of LLMs, and other AI technologies in their projects. The content will be geared more toward ambitious and complex projects that want to make use of things like multi-layered AI architectures, data transformations through LLMs, agents, ambient intelligence, etc., rather than something like a simple chatbot.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Key Terms & Definitions</h2>
            <p class="text-text-secondary mb-4">Important concepts and terminology used throughout this course:</p>
            <dl class="space-y-4 text-text-secondary">
              <div>
                <dt class="font-semibold text-text mb-1"><strong>LLM (Large Language Model)</strong></dt>
                <dd>A type of AI trained on massive amounts of text that can understand and generate human language.</dd>
              </div>
              <div>
                <dt class="font-semibold text-text mb-1"><strong>Agents</strong></dt>
                <dd>AI systems that can take actions and make decisions autonomously to accomplish goals, not just answer questions.</dd>
              </div>
              <div>
                <dt class="font-semibold text-text mb-1"><strong>AI Architecture</strong></dt>
                <dd>How you structure and organize the different components of your AI system to work together.</dd>
              </div>
              <div>
                <dt class="font-semibold text-text mb-1"><strong>Data Transformation Through LLMs</strong></dt>
                <dd>Using AI to convert information from one format to another—like turning messy user input into structured data.</dd>
              </div>
              <div>
                <dt class="font-semibold text-text mb-1"><strong>Prompt Engineering</strong></dt>
                <dd>The practice of writing instructions to AI models to get reliable, useful outputs.</dd>
              </div>
              <div>
                <dt class="font-semibold text-text mb-1"><strong>Tech Stack</strong></dt>
                <dd>The collection of technologies and tools you use to build your platform—programming languages, frameworks, databases, etc.</dd>
              </div>
              <div>
                <dt class="font-semibold text-text mb-1"><strong>IDE (Integrated Development Environment)</strong></dt>
                <dd>The software where you write your code.</dd>
              </div>
              <div>
                <dt class="font-semibold text-text mb-1"><strong>MToks (Million Tokens)</strong></dt>
                <dd>Standard unit for measuring large-scale API usage. 1 MTok = 1,000,000 tokens.</dd>
              </div>
              <div>
                <dt class="font-semibold text-text mb-1"><strong>APIs (Application Programming Interfaces)</strong></dt>
                <dd>How your code communicates with external services like AI providers.</dd>
              </div>
              <div>
                <dt class="font-semibold text-text mb-1"><strong>Industry Benchmarks</strong></dt>
                <dd>Standard metrics and performance expectations for AI systems in production.</dd>
              </div>
              <div>
                <dt class="font-semibold text-text mb-1"><strong>Input/Output (in LLM APIs)</strong></dt>
                <dd>Input = what you send to the AI. Output = what it generates back. Output typically costs more.</dd>
              </div>
              <div>
                <dt class="font-semibold text-text mb-1"><strong>Context Windows</strong></dt>
                <dd>The total amount of text an AI model can process at once, including your instructions and its response.</dd>
              </div>
              <div>
                <dt class="font-semibold text-text mb-1"><strong>Tokens</strong></dt>
                <dd>The basic units AI models use to read and generate text. Roughly 1 token = 0.75 words.</dd>
              </div>
              <div>
                <dt class="font-semibold text-text mb-1"><strong>AI Hallucination</strong></dt>
                <dd>When AI generates plausible-sounding information that's actually incorrect or made up.</dd>
              </div>
              <div>
                <dt class="font-semibold text-text mb-1"><strong>Systems Thinking</strong></dt>
                <dd>Designing platforms as interconnected parts rather than isolated features, focusing on how components interact.</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Course Specs</h2>
            <p class="text-text-secondary mb-4 italic">Broad agenda of what you'll receive in future modules:</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>A comprehensive understanding of what building an AI platform entails</li>
              <li>Actionable steps to develop your own AI-powered application</li>
              <li>Real-world examples of AI platforms and how they were built</li>
              <li>Prompt Engineering for complex projects (Modularity, Inputs/Outputs, Preventing Bad Behavior, etc.)</li>
              <li>Considerations regarding design and user experience</li>
              <li>Multi-layered AI workflows and data transformations</li>
              <li>Tracking AI usage and limiting tokens while maintaining accurate responses</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Tech Stack</h2>
            <p class="text-text-secondary mb-4 italic">The tools and technologies I use in my projects most frequently:</p>
            <ul class="list-disc list-inside space-y-2 text-text-secondary ml-4">
              <li><strong>Frontend (Web):</strong> Typescript/Vite & Tailwind</li>
              <li><strong>Mobile:</strong> Flutter</li>
              <li><strong>Backend:</strong> Go (Gin)</li>
              <li><strong>DB:</strong> PostgreSQL, GORM</li>
              <li><strong>LLM API:</strong> Anthropic, OpenAI (Sometimes - mostly as backup), Mistral (For simple tasks)</li>
              <li><strong>TTS API:</strong> OpenAI TTS</li>
              <li><strong>IDE:</strong> Cursor</li>
              <li><strong>Cloud Hosting:</strong> Digital Ocean</li>
              <li><strong>Image and Video Hosting:</strong> Cloudinary</li>
            </ul>
            <p class="text-text-secondary mt-4 italic"><strong>NOTE:</strong> Architectural concepts apply regardless of stack.</p>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Structure of Course Topics</h2>
            <p class="text-text-secondary mb-4 italic">How we'll lay out easily digestible info:</p>
            <ol class="list-decimal list-inside space-y-4 text-text-secondary ml-4">
              <li><strong>Introduction/definition</strong> of a common issue or a foundational concept</li>
              <li><strong>Real world story</strong> involving this topic in either one of my projects or a well-known platform elsewhere and its resolution</li>
              <li><strong>The decision making process breakdown</strong> and specifics that should inform build</li>
              <li><strong>Major takeaways</strong> from previous slides and how to apply this to your own project</li>
            </ol>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">My Projects</h2>
            <p class="text-text-secondary mb-4 italic">What I've built using the methods that I'm sharing in this course:</p>
            <div class="space-y-6">
              <div>
                <h3 class="text-xl font-heading text-text mb-2">Emstrata</h3>
                <p class="text-text-secondary">A text-based emergent storycraft simulator where stories unfold like lived experiences. Participants make choices that shape narrative worlds, AI systems maintain continuity and consistency, and users can interact with the simulation—altering mid-flight, navigating AI-generated planes, making inquiries, and correcting errors.</p>
              </div>
              <div>
                <h3 class="text-xl font-heading text-text mb-2">PLATO5 <span class="text-sm text-text-secondary/70">(In the middle of a redesign)</span></h3>
                <p class="text-text-secondary">An AI-first social engine designed to generate real-world friendships, not screen time. It matches people based on personality (Big 5 traits), interests, and location, facilitates conversations through "Zen—an AI chat manager," and guides users toward planning actual meetups, with the goal of getting people off the app and into real life.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Why Build AI Platforms</h2>
            <p class="text-text-secondary mb-4 italic">Novel applications of AI are best for this:</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>When you're building something that doesn't exist yet, you need architecture designed specifically for that problem</li>
              <li>Complex AI applications require precise control over how prompts are structured, how state is managed across multiple AI calls, and how data flows between different parts of the system</li>
              <li>Building from scratch means you can optimize every layer for your specific use case—from how you call the AI to how you handle edge cases to how you manage costs at scale</li>
              <li>The architecture choices you make define what's possible. Emstrata's multi-layer narrative system works because the entire platform is built around maintaining continuity and tracking story threads</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">The Cost Reality of AI Apps</h2>
            <p class="text-text-secondary mb-4 italic">How much an AI application will cost to run, test, and maintain:</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li><strong>AI API usage:</strong> Usage is measured in tokens (MToks). Different models and APIs have varying charges and strengths not always reflected in benchmarks.</li>
              <li><strong>Input and Output costs:</strong> Input and output tokens often have different prices, with output tokens typically costing more. Applications generating large AI responses will incur higher costs, especially compared to those with larger context windows.</li>
              <li><strong>Context window size:</strong> The size of the context window affects not only prices but also performance. It's important to manage the amount of tokens sent to the API and prefer standardized methods for controlling and organizing tokens into easily readable inputs.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Apps that Evolve</h2>
            <p class="text-text-secondary mb-4 italic">Building for the unpredictability of AI:</p>
            <ul class="list-disc list-inside space-y-4 text-text-secondary ml-4">
              <li><strong>AIs hallucinate.</strong> You likely already know this if you're considering building an AI platform, but consider that the scale of the hallucination and the downstream effects of them can expand exponentially with architecture and design that rests on the accuracy of AI responses. A lot of this course will cover this reality and demonstrate ways to hedge against these unfortunate issues or embrace them in interesting ways.</li>
              <li>Luckily, many hallucinations can be stamped out, accounted for, or predicted in the course of designing your app. This will require persistence, trial and error, and a level of systems-thinking.</li>
              <li>All in all, this is a feature, not a bug. The reason AIs hallucinate is the same reason that we will receive different responses to the same input and the AI can mimic human creative capacity.</li>
            </ul>
          </section>
        </div>
      `
    },
    {
      number: '2',
      chapter: 1,
      title: 'Setting Up Your Platform Prereqs',
      description: 'Developing the framework to iterate on your platforms, selecting a tech & productivity stack.',
      slideDeckPath: '/02 Build AI Platforms from Scratch - Slide Deck/index.html',
      videoUrl: 'https://youtu.be/IxoTXA7dFMw?si=5WeVY10GYtOoxdHh',
      writtenContent: `
        <div class="space-y-8">
          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Quick Reminder...</h2>
            <p class="text-text-secondary mb-4 italic">For people who may have forgotten:</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>This course isn't for coding. However, there will be a code repo linked in the External Resources section that has common code patterns that you will likely need for calling third-party LLM APIs, parsing responses, counting tokens and assessing cost, etc.</li>
              <li>If you want a more focused learning environment, take the course on nicholasmgoldstein.com/courses. This way you won't be tempted to jump to a recommended video or divert your attention.</li>
              <li>This is a free course, but if you want to support me, you can like/subscribe or check out some of my own AI platforms like Emstrata @ <a href="https://emstrata.com" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">emstrata.com</a>.</li>
              <li>I'm fully open to your input. If there's topics you'd like covered more thoroughly or anything you're unclear on, feel free to comment.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Picking an LLM</h2>
            <p class="text-text-secondary mb-4 italic">Making your choice early on prevents paralysis later.</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li><strong>LLM Strengths and Learning:</strong> Different LLMs have varying strengths and textual voices. The best way to learn them is by working with them and iterating on system prompts, rather than solely relying on benchmarks.</li>
              <li><strong>Recommended LLMs and Usage:</strong> My personal favorite is Claude/Anthropic's third-party API (specifically versions 3.7 to 4.0), but ChatGPT/OpenAI and Gemini/Google are also great options. These platforms typically require a credit card for usage, and pricing information can be found on their respective websites.</li>
              <li><strong>Multi-LLM Strategy:</strong> Consider using multiple LLMs for different types of tasks. For instance, Claude 4.0 is excellent for heavier analysis and rule-following, while Mistral or other smaller models work well for simpler tasks. This strategy can save money while maintaining effectiveness.</li>
              <li><strong>Additional Tools:</strong> A benefit of using OpenAI or Google over Anthropic is that their platforms often include other built-in tools such as Text-to-Speech (TTS), transcription, and image generation.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">The Choice is Yours</h2>
            <p class="text-text-secondary mb-4">Below are some links to some of the API Workbenches mentioned:</p>
            <ul class="list-disc list-inside space-y-2 text-text-secondary ml-4">
              <li><a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">Anthropic - console.anthropic.com</a></li>
              <li><a href="https://platform.openai.com" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">OpenAI - platform.openai.com</a></li>
              <li><a href="https://ai.google.dev" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">Google - ai.google.dev</a></li>
              <li><a href="https://console.mistral.ai" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">Mistral - console.mistral.ai</a></li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Anatomy of an AI Request</h2>
            <p class="text-text-secondary mb-4 italic">How building in the Workbench looks:</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li><strong>Prompt Library System:</strong> Most workbenches have a feature to save prompts for testing. You'll need a naming system for high volume usage.</li>
              <li><strong>Model Selection:</strong> Click on the model name (e.g., 'claude-sonnet-4-5...') to switch between different Anthropic models or other providers.</li>
              <li><strong>System Prompt:</strong> The static instruction sent to the LLM. This fundamentally defines what the prompt does and sets the behavior and context for the AI.</li>
              <li><strong>User Request:</strong> The term 'User' can be misleading for non-chatbot systems. This refers to the particular data sent for a specific instance or request.</li>
              <li><strong>Expected Response:</strong> This is an LLM response from the API, which you can test and iterate on before implementing in your application.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Intermediate Techniques</h2>
            <p class="text-text-secondary mb-4 italic">System Prompt Variables & Message Pairs:</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li><strong>System Prompt Variables:</strong> Wrap camelCase strings in <code class="bg-card-bg px-2 py-1 rounded text-accent">{{...}}</code> to setup a variable within your system prompt. This could be used to customize the prompt for specific purposes or to further modularize prompts.</li>
              <li><strong>Message Pairs:</strong> The most common use-case is for chat history, but fundamentally adds context to this specific request. This allows you to maintain conversation context across multiple interactions.</li>
              <li><strong>NOTE:</strong> My personal preference is to avoid things like system prompt variables and instead systematize user requests. You'll see examples of how I do this in the Prompt Engineering module. This is just what makes more sense to me, but both approaches have their merits.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Thoughts on Frontend/Backend</h2>
            <p class="text-text-secondary mb-4 italic">You will need to select which languages/frameworks you want to use:</p>
            <ul class="list-disc list-inside space-y-4 text-text-secondary ml-4">
              <li><strong>Security Warning:</strong> Do NOT expose your API keys on the frontend AT ALL. This is a massive security vulnerability. This is why third-party LLM API calls will be made on the backend. Remember, your bank accounts and/or cards are linked to these API keys. Set proper limits and don't expose yourself to bad actors.</li>
              <li>I'll be using TypeScript/Vite for frontend, Flutter for mobile, and Go/Gin for backend in this tutorial. AI-Powered IDEs will be a necessity for the non-coders (even if you know how to code, they boost productivity significantly). Cursor is my go-to.</li>
              <li>Again, code will not be a prominent factor in this course, but I'll give concrete steps for setting up a basic frontend and backend that you can use to iterate on for your project.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Learn While Building</h2>
            <p class="text-text-secondary mb-4 italic">Don't let AI run rampant in your project:</p>
            <ul class="list-disc list-inside space-y-4 text-text-secondary ml-4">
              <li>If you're new to coding, a non-coder, or just working with code patterns you're unfamiliar with, AI can help you learn.</li>
              <li>Vibe-coding is overrated—learn what the AI is writing and why it works. This will help you with troubleshooting later and also let you know what is and isn't possible in your own projects. Don't fall for one-shot app-builder marketing; you should still know the fundamentals.</li>
              <li>In Cursor, instruct your agent to "Add comments explaining what each line of code is doing in-depth. I'm new to coding and would like to understand what each line is doing." This simple instruction will help you immensely and also help the AI think critically about the code it's writing. Then it's on you; actually read the comments for better understanding of your system.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Frontend Setup</h2>
            <p class="text-text-secondary mb-4 italic">TypeScript/Vite Steps/Commands:</p>
            <ul class="list-disc list-inside space-y-2 text-text-secondary ml-4">
              <li>If you need to revisit: Click into the code repo and open <code class="bg-card-bg px-2 py-1 rounded text-accent">setup-instructions.txt</code></li>
              <li><code class="bg-card-bg px-2 py-1 rounded text-accent">npm create vite@latest my-project-name -- --template vanilla-ts</code></li>
              <li><code class="bg-card-bg px-2 py-1 rounded text-accent">cd my-project-name</code></li>
              <li><code class="bg-card-bg px-2 py-1 rounded text-accent">npm install</code></li>
              <li><code class="bg-card-bg px-2 py-1 rounded text-accent">npm run dev</code></li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Backend Setup</h2>
            <p class="text-text-secondary mb-4 italic">Go/Gin Steps/Commands:</p>
            <ul class="list-disc list-inside space-y-2 text-text-secondary ml-4">
              <li>More instructions for Go: Click into the code repo and open <code class="bg-card-bg px-2 py-1 rounded text-accent">setup-instructions.txt</code></li>
              <li><code class="bg-card-bg px-2 py-1 rounded text-accent">mkdir my-project-name</code></li>
              <li><code class="bg-card-bg px-2 py-1 rounded text-accent">cd my-project-name</code></li>
              <li><code class="bg-card-bg px-2 py-1 rounded text-accent">go mod init github.com/yourusername/my-project-name</code></li>
              <li><code class="bg-card-bg px-2 py-1 rounded text-accent">go get -u github.com/gin-gonic/gin</code></li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Database Setup</h2>
            <p class="text-text-secondary mb-4 italic">PostgreSQL & GORM Steps/Commands:</p>
            <ul class="list-disc list-inside space-y-2 text-text-secondary ml-4">
              <li>More instructions for Database setup: Click into the code repo and open <code class="bg-card-bg px-2 py-1 rounded text-accent">setup-instructions.txt</code></li>
              <li><code class="bg-card-bg px-2 py-1 rounded text-accent">Install PostgreSQL</code></li>
              <li><code class="bg-card-bg px-2 py-1 rounded text-accent">createdb mydb</code></li>
              <li>Then in your Go project:</li>
              <li><code class="bg-card-bg px-2 py-1 rounded text-accent">go get -u gorm.io/gorm</code></li>
              <li><code class="bg-card-bg px-2 py-1 rounded text-accent">go get -u gorm.io/driver/postgres</code></li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Mobile App Setup</h2>
            <p class="text-text-secondary mb-4 italic">Flutter Steps/Commands:</p>
            <ul class="list-disc list-inside space-y-2 text-text-secondary ml-4">
              <li><code class="bg-card-bg px-2 py-1 rounded text-accent">flutter create my_project_name</code></li>
              <li><code class="bg-card-bg px-2 py-1 rounded text-accent">cd my_project_name</code></li>
              <li><code class="bg-card-bg px-2 py-1 rounded text-accent">flutter run</code></li>
              <li>(You'll need Flutter SDK installed first: <a href="https://docs.flutter.dev/get-started/install" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">https://docs.flutter.dev/get-started/install</a>)</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">The Main Takeaway</h2>
            <p class="text-text-secondary mb-4 italic">What's the point of all this setup?</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>If you're new to coding, <strong>you don't need to understand any of this code yet.</strong> The goal is to have a working environment—frontend, backend, database, mobile—so when you start building, everything's already there.</li>
              <li><strong>AI will be essential for the implementation.</strong> Cursor and other AI-powered IDEs can write the code. Your job is understanding what you're building, overseeing, troubleshooting, and architecting, not necessarily memorizing syntax, although you will learn a lot about coding throughout this process.</li>
            </ul>
          </section>
        </div>
      `
    },
    {
      number: '3',
      chapter: 1,
      title: 'Prompt Engineering',
      description: 'Learn effective prompt engineering techniques for building AI platforms.',
      slideDeckPath: '/03 Build AI Platforms from Scratch- Prompt Engineering/index.html',
      videoUrl: 'https://youtu.be/w6yQaDm6-dE',
      writtenContent: `
        <div class="space-y-8">
          <section>
            <h2 class="text-2xl font-heading text-text mb-4">What is Prompt Engineering?</h2>
            <p class="text-text-secondary mb-4 italic">And how does it make or break AI platforms?</p>
            <ul class="list-disc list-inside space-y-4 text-text-secondary ml-4">
              <li><strong>Prompt engineering is the discipline of designing instructions that control AI behavior.</strong> Your prompt is the blueprint for how an AI interprets requests and generates responses.</li>
              <li><strong>In AI platforms, prompts aren't just suggestions, they're the entire control mechanism.</strong>
                <ul class="list-disc list-inside space-y-2 mt-2 ml-6">
                  <li>Bad prompts = unpredictable outputs, hallucinations, parsing failures, user frustration.</li>
                  <li>Good prompts = consistent behavior, reliable outputs, maintainable systems, scalable platforms.</li>
                </ul>
              </li>
              <li><strong>The difference between a working AI product and a broken one often comes down to prompt quality:</strong>
                <ul class="list-disc list-inside space-y-2 mt-2 ml-6">
                  <li>Vague prompts → AI invents its own interpretations.</li>
                  <li>Contradictory prompts → AI picks randomly between conflicting instructions.</li>
                  <li>Well-structured prompts → AI follows rules consistently.</li>
                </ul>
              </li>
              <li><strong>Prompts are architectural decisions that determine whether your AI layer functions reliably or fails under edge cases.</strong></li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">An Example from My Project</h2>
            <p class="text-text-secondary mb-4 italic">Short example from Emstrata</p>
            <div class="space-y-4 text-text-secondary">
              <p><strong>The World Builder</strong> is a foundational prompt in Emstrata that allows users to create custom narrative worlds based on their inputs, complete with character, locations, items, and a reality that maintains.</p>
              <div>
                <p class="mb-2"><strong>My World Builder system prompt in Emstrata takes in a number of input elements (pieces of data that I clearly define within the system prompt):</strong></p>
                <ul class="list-disc list-inside space-y-1 ml-6">
                  <li><code class="bg-card-bg px-2 py-1 rounded text-accent">user-msg</code></li>
                  <li><code class="bg-card-bg px-2 py-1 rounded text-accent">title</code></li>
                  <li><code class="bg-card-bg px-2 py-1 rounded text-accent">prefs</code></li>
                  <li><code class="bg-card-bg px-2 py-1 rounded text-accent">genre</code></li>
                  <li><code class="bg-card-bg px-2 py-1 rounded text-accent">arc</code></li>
                </ul>
              </div>
              <div>
                <p class="mb-2"><strong>From these input elements, the World Builder outputs:</strong></p>
                <ul class="list-disc list-inside space-y-1 ml-6">
                  <li><code class="bg-card-bg px-2 py-1 rounded text-accent">prose("")</code></li>
                  <li><code class="bg-card-bg px-2 py-1 rounded text-accent">basis("")</code></li>
                  <li><code class="bg-card-bg px-2 py-1 rounded text-accent">char("name", "desc", "state")</code></li>
                  <li><code class="bg-card-bg px-2 py-1 rounded text-accent">Item("name", "desc", "state")</code></li>
                  <li><code class="bg-card-bg px-2 py-1 rounded text-accent">location("name", "desc", "state")</code></li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">How to Structure a System Prompt</h2>
            <p class="text-text-secondary mb-4 italic">Achieving maximum effectiveness with your prompts</p>
            <p class="text-text-secondary mb-4"><strong>Split your prompt into modules. Each one handles a distinct concern:</strong></p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li><strong>Core Identity</strong> - what is this AI (a chatbot, research agent, etc.) and what does it do</li>
              <li><strong>Platform Specifics</strong> - context about where/how it operates, if that relates to the output</li>
              <li><strong>Understanding Role</strong> - scope, responsibilities, boundaries</li>
              <li><strong>Dissecting Requests</strong> - how to parse incoming data</li>
              <li><strong>Response Expectations</strong> - exact output format with function calls</li>
              <li><strong>Quality Standards</strong> - non-negotiable benchmarks for output</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Request Structure</h2>
            <p class="text-text-secondary mb-4 italic">What I suggest</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>Requests on projects should come in key-value pairs that are easily understandable and clearly defined.
                <ul class="list-disc list-inside space-y-2 mt-2 ml-6">
                  <li>An example given is <code class="bg-card-bg px-2 py-1 rounded text-accent">user-input: "This is what the user said!"</code></li>
                  <li>Another example is <code class="bg-card-bg px-2 py-1 rounded text-accent">convo-summary: "This is a breakdown of what was said previously"</code></li>
                </ul>
              </li>
              <li>A number of these key-value pairs can be listed, and the input can be split up as much as needed, as long as it remains logical and the AI will understand the intent after defining the input elements.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Response Structure</h2>
            <p class="text-text-secondary mb-4 italic">What I suggest</p>
            <ul class="list-disc list-inside space-y-4 text-text-secondary ml-4">
              <li><strong>Structured Output:</strong> Returning predefined functions instead of unstructured output aids in parsing, logical coherence, AI understanding, and prevents anomalous responses or AI hallucinations.</li>
              <li><strong>Argument Definition:</strong> It's crucial to define arguments beforehand and ensure the AI maintains the correct order and argument types (e.g., string, number, likelihood/1000).</li>
              <li><strong>Examples of predefined functions:</strong>
                <ul class="list-disc list-inside space-y-2 mt-2 ml-6">
                  <li><code class="bg-card-bg px-2 py-1 rounded text-accent">try("Outcome 1", "Outcome 2", 100/1000)</code> - This means "10% chance outcome 1 is successful, 90% chance outcome 2 happens."</li>
                  <li><code class="bg-card-bg px-2 py-1 rounded text-accent">attack(damage, 20)</code> - This means "the attack does 20 points of damage." Note that "damage" is a keyword, not a string, in this context.</li>
                  <li><code class="bg-card-bg px-2 py-1 rounded text-accent">speak("this is some example dialogue")</code> - This represents "Example dialogue coming from the AI."</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">What is a Function</h2>
            <p class="text-text-secondary mb-4 italic">For non-coders</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>A function is a preset command that can hold arguments which determine specific outcomes</li>
              <li><strong>Anatomy:</strong> <code class="bg-card-bg px-2 py-1 rounded text-accent">functionName(argument1, argument2, argument3)</code></li>
              <li><strong>Function Name:</strong> The command type (speak, create, attack, move)</li>
              <li><strong>Parentheses ()</strong> - Container holding the arguments</li>
              <li><strong>Arguments</strong> - The values that determine what actually happens, separated by commas, in a specific order</li>
              <li><strong>Example:</strong> <code class="bg-card-bg px-2 py-1 rounded text-accent">speak("Hello there", cheerful)</code>
                <ul class="list-disc list-inside space-y-1 mt-2 ml-6">
                  <li><code class="bg-card-bg px-2 py-1 rounded text-accent">speak</code> = command type</li>
                  <li><code class="bg-card-bg px-2 py-1 rounded text-accent">"Hello there"</code> = what gets said</li>
                  <li><code class="bg-card-bg px-2 py-1 rounded text-accent">cheerful</code> = how it's said</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Modularity</h2>
            <p class="text-text-secondary mb-4 italic">The benefits of breaking system prompts down</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li><strong>Modules are independently updatable.</strong> Fix one without rewriting everything.</li>
              <li><strong>Think of it like code architecture.</strong> There's a separation of concerns that makes everything cleaner and more maintainable.</li>
              <li><strong>Modular architecture gives you:</strong>
                <ul class="list-disc list-inside space-y-2 mt-2 ml-6">
                  <li><strong>Independent updates</strong> - fix one module without touching others</li>
                  <li><strong>Reusability</strong> - drop the same module into different prompts</li>
                  <li><strong>Clarity</strong> - each module has one job, easy to understand</li>
                  <li><strong>Collaboration</strong> - team members can work on different modules simultaneously</li>
                  <li><strong>Debugging</strong> - isolate issues to specific modules instead of hunting through a massive block of text</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Inputs and Outputs</h2>
            <p class="text-text-secondary mb-4 italic">How these make or break a system prompt</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li><strong>Input only what you absolutely need to get an expected output.</strong> Additional info may deprioritize more important inputs.</li>
              <li><strong>Setup a prioritization hierarchy.</strong> i.e. <code class="bg-card-bg px-2 py-1 rounded text-accent">user-input > convo-history > saved-prefs</code></li>
              <li><strong>Similarly, output only the necessities as well.</strong> The more elements being generated, the higher the chance of confusion or deprioritization.</li>
              <li><strong>Take your time cycling through building => reducing => building => reducing.</strong> You will likely see that you were overthinking what you need in both parts.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Defining Rules</h2>
            <p class="text-text-secondary mb-4 italic">Ensuring rules are stressed and enforced</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li><strong>Critical rules need emphasis.</strong> Use ALL CAPS, repetition, strategic placement at the beginning or end of modules.</li>
              <li><strong>Eliminate contradictory instructions.</strong> If you give conflicting instructions (e.g., "be concise" in one place and "provide extensive detail" in another), the AI will pick one arbitrarily.</li>
              <li><strong>Be explicit about constraints.</strong> What the AI cannot do is as important as what it can do.</li>
              <li><strong>Define argument types strictly and repeat them.</strong> Examples: <code class="bg-card-bg px-2 py-1 rounded text-accent">string "text in quotes"</code>, <code class="bg-card-bg px-2 py-1 rounded text-accent">num without quotes</code>, and <code class="bg-card-bg px-2 py-1 rounded text-accent">likelihood num/1000</code>.</li>
              <li><strong>Example of bad rule:</strong> "Respond appropriately"<br>
                <strong>Example of good rule:</strong> "You must respond using only the functions defined in Response Expectations Module. Do not invent new functions or arguments."</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Preventing Hallucinations</h2>
            <p class="text-text-secondary mb-4 italic">Techniques to keep AIs on track</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>Restricting AIs to a specific formatted response is one of the best ways to ensure flawed responses don't happen i.e. <code class="bg-card-bg px-2 py-1 rounded text-accent">response("this is an example of a response", "This is the second argument to this function")</code></li>
              <li>If you choose this method, reiterate to the AI that they cannot make up their own functions or arguments, they will likely try.</li>
              <li>Be hyper-specific about requirements, identify and eliminate contradictory prompting that may be confusing the AI.</li>
              <li>All caps can be an effective method to stress an aspect to the AI, if necessary.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Trial & Error</h2>
            <p class="text-text-secondary mb-4 italic">Iteration is absolutely necessary to achieve good results</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>All LLMs will react differently to certain types of prompting. Some will follow rules and understand certain instructions better than others.</li>
              <li>Testing, iterating, and saving updates will be essential to getting good results from your AIs.</li>
              <li>Consider the size of the model in proportion to the size of the task. A massive response with complex logic should be handled by a bigger (probably more expensive) model.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Major Takeaways</h2>
            <p class="text-text-secondary mb-4 italic">What to remember</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li><strong>Modular architecture beats monolithic blocks every time.</strong> Easier to debug, reuse, and collaborate on.</li>
              <li><strong>Define clear input/output structures using key-value pairs and preset functions.</strong> Ambiguity kills AI performance.</li>
              <li><strong>Minimize both inputs and outputs to absolute essentials.</strong> More complexity = more confusion = worse results.</li>
              <li><strong>Formatted responses (function calls with strict argument types) are your best defense against hallucinations.</strong></li>
              <li><strong>Test, reduce, test again.</strong> Your first draft will always need refinement.</li>
              <li><strong>Be hyper-specific. Eliminate contradictions. Stress critical rules with ALL CAPS if necessary.</strong></li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">System Prompt Generator Tool</h2>
            <p class="text-text-secondary mb-4 italic">Easiest way to get started</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>Available now on <a href="/system-prompt-generator" class="text-accent hover:underline">https://nicholasmgoldstein.com/system-prompt-generator</a></li>
              <li>Prebuilt modular system prompt skeleton that can give you a basis to build upon</li>
              <li>Feel free to copy/paste this into Notion, Google Docs, Microsoft Word, or whatever you plan to use and add your own modules/rulesets and logic</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Exemplary System Prompt</h2>
            <p class="text-text-secondary mb-4 italic">A complete example demonstrating all the concepts from this module</p>
            <div class="bg-card-bg border border-text-secondary/20 rounded-lg p-6 space-y-6 text-text-secondary">
              <div>
                <h3 class="text-xl font-heading text-text mb-3">Core Identity Module</h3>
                <p class="mb-2">The following statement defines your fundamental identity and primary purpose. All your actions, responses, and behaviors must align with this core identity.</p>
                <p>You are SupportBot, a customer service assistant for ShopEase, an online retail platform specializing in electronics and home goods.</p>
              </div>

              <div>
                <h3 class="text-xl font-heading text-text mb-3">Platform Specifics Module</h3>
                <p class="mb-2">The following information describes the platform, environment, or system you operate within. Consider these details when formulating responses and making decisions.</p>
                <p>You operate within a live chat widget on the ShopEase website. Users can message you 24/7. The platform has access to order databases, tracking information, and product catalogs. Sessions remain active for 15 minutes of inactivity before auto-closing.</p>
              </div>

              <div>
                <h3 class="text-xl font-heading text-text mb-3">Quality Standards</h3>
                <p class="mb-2">The following standards define the benchmarks and criteria your outputs must meet. These are non-negotiable quality bars that every response must satisfy.</p>
                <p>Responses must be under 150 words, use friendly but professional tone, provide actionable next steps, and include relevant order/tracking numbers when applicable. Never make promises about refunds or replacements without confirming eligibility first.</p>
              </div>

              <div>
                <h3 class="text-xl font-heading text-text mb-3">Understanding Your Role</h3>
                <p class="mb-2">The following description clarifies your responsibilities, scope, and how you should interact with the system and users.</p>
                <p>You receive customer inquiries about orders, shipping, returns, and product questions. Your job is to provide accurate information, troubleshoot issues, and escalate to human agents when problems exceed your scope (billing disputes, damaged items, complex technical issues). You can look up order status but cannot process refunds directly.</p>
              </div>

              <div>
                <h3 class="text-xl font-heading text-text mb-3">Dissecting Requests Module</h3>
                <p class="mb-2">The following describes the structure and format of incoming requests you will receive.</p>
                <p class="mb-3">You will receive structured request data containing the user's message, their order history, and session context.</p>
                <p class="mb-2 font-semibold text-text">Example Request Format:</p>
                <p class="mb-2">The following shows the key names you will receive, with example values to illustrate the format:</p>
                <ul class="list-disc list-inside space-y-1 ml-4 mb-3">
                  <li><code class="bg-text-secondary/10 px-2 py-1 rounded">user-message: "Where is my order?"</code></li>
                  <li><code class="bg-text-secondary/10 px-2 py-1 rounded">order-history: "Order #12345 placed 3 days ago, status: shipped"</code></li>
                  <li><code class="bg-text-secondary/10 px-2 py-1 rounded">customer-tier: "premium"</code></li>
                </ul>
                <p class="mb-2 font-semibold text-text">Input Element Definitions:</p>
                <p class="mb-2">The following defines each input element and how you should interpret it:</p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li><code class="bg-text-secondary/10 px-2 py-1 rounded">user-message</code>: The actual text the customer typed into the chat</li>
                  <li><code class="bg-text-secondary/10 px-2 py-1 rounded">order-history</code>: Recent orders associated with this customer's account</li>
                  <li><code class="bg-text-secondary/10 px-2 py-1 rounded">customer-tier</code>: Customer loyalty status (standard, premium, VIP) which affects response priority</li>
                </ul>
              </div>

              <div>
                <h3 class="text-xl font-heading text-text mb-3">Response Expectations Module</h3>
                <p class="mb-2">You must respond using ONLY the following preset functions. Each function has specific parameters that must appear in the exact order specified.</p>
                <p class="mb-2 font-semibold text-text">Parameter Type Definitions:</p>
                <ul class="list-disc list-inside space-y-1 ml-4 mb-4">
                  <li><code class="bg-text-secondary/10 px-2 py-1 rounded">"string"</code> - Text enclosed in double quotes</li>
                  <li><code class="bg-text-secondary/10 px-2 py-1 rounded">num</code> - Raw integer or decimal without quotes</li>
                  <li><code class="bg-text-secondary/10 px-2 py-1 rounded">num/1000</code> - Integer representing probability (divided by 1000 to get decimal value)</li>
                </ul>
                <p class="mb-2 font-semibold text-text">Required Response Functions:</p>
                <p class="mb-2">The following functions define your complete response format. Your entire response must consist of these function calls with correct parameter types in the correct order.</p>
                <ul class="list-disc list-inside space-y-1 ml-4 mb-4">
                  <li><code class="bg-text-secondary/10 px-2 py-1 rounded">reply("string...", likelihood/1000)</code></li>
                  <li><code class="bg-text-secondary/10 px-2 py-1 rounded">escalate("string...", "string...")</code></li>
                  <li><code class="bg-text-secondary/10 px-2 py-1 rounded">lookup("string...", num)</code></li>
                </ul>
                <p class="mb-2 font-semibold text-text">Function and Argument Definitions:</p>
                <p class="mb-2">The following defines what each function and its arguments represent:</p>
                <ul class="list-disc list-inside space-y-3 ml-4">
                  <li><strong>reply:</strong>
                    <ul class="list-disc list-inside space-y-1 mt-1 ml-6">
                      <li>Purpose: Standard response to customer with helpful information</li>
                      <li>Argument 1 ("string..."): The message text to send to the customer</li>
                      <li>Argument 2 (likelihood): Confidence level that this answer fully resolves the customer's issue</li>
                    </ul>
                  </li>
                  <li><strong>escalate:</strong>
                    <ul class="list-disc list-inside space-y-1 mt-1 ml-6">
                      <li>Purpose: Transfer conversation to human agent when issue requires manual intervention</li>
                      <li>Argument 1 ("string..."): Brief summary of the issue for the human agent</li>
                      <li>Argument 2 ("string..."): Reason for escalation (billing, damaged-item, technical, other)</li>
                    </ul>
                  </li>
                  <li><strong>lookup:</strong>
                    <ul class="list-disc list-inside space-y-1 mt-1 ml-6">
                      <li>Purpose: Request additional data from the order database before responding</li>
                      <li>Argument 1 ("string..."): What type of data to retrieve (tracking, order-details, return-policy)</li>
                      <li>Argument 2 (num): The order number to look up</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-xl font-heading text-text mb-3">Further Instructions</h3>
                <p class="mb-2">The following provides additional guidelines that supplement all other modules.</p>
                <p>Always check order-history before answering shipping questions. If customer-tier is "VIP", prioritize speed and offer proactive solutions. Never share other customers' information. If you're unsure about a return policy detail, use lookup() before responding. Escalate immediately if the customer uses hostile language or mentions legal action.</p>
              </div>

              <div>
                <h3 class="text-xl font-heading text-text mb-3">Quality Check Process</h3>
                <p class="mb-2">Before outputting any response, verify your output against the following criteria. If your response fails any check, revise it until all criteria are satisfied.</p>
                <p>Before responding, verify: (1) Did I answer the specific question asked? (2) Did I include relevant order numbers? (3) Is my confidence level accurate? (4) Should this be escalated instead? If any answer is no, revise your response.</p>
              </div>
            </div>
          </section>
        </div>
      `
    },
    {
      number: '4',
      chapter: 1,
      title: 'Multilayered Architectures',
      description: 'Explore complex system architectures with multiple layers for building robust AI platforms.',
      slideDeckPath: '/04 Build AI Platforms from Scratch - Slide Deck/index.html',
      writtenContent: `
        <div class="space-y-8">
          <section>
            <h2 class="text-2xl font-heading text-text mb-4">What is a Multilayered AI Architecture?</h2>
            <p class="text-text-secondary mb-4 italic">And how can it supercharge the power of your app?</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>If one prompt takes an input and runs it through a series of filters and rules and fundamentally transforms the input data, then outputs it to you, multiple coordinated prompts compound those transformations substantially.</li>
              <li>The separation of concerns between AI layers not only makes these systems more manageable, but it helps avoid confusing the AI with a million tasks, bolstering performance for the most important functionalities.</li>
              <li>For systems that are aiming for near-perfect performance or just more consistent results.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">An Example from Emstrata</h2>
            <p class="text-text-secondary mb-4 italic">The Emstrata Cycle</p>
            <div class="space-y-4 text-text-secondary">
              <p>The Emstrata Cycle is a standardized series of prompts that run on every turn in an Emstrata simulation.</p>
              <p>This cycle retains a comprehensive memory of all entities in the simulation, plans/positions entities on an interactive coordinate plane, writes prose according to exacting instructions, captures secrets and memories, and corrects all continuity errors after the narrative is written.</p>
              <p><strong>No single prompt or backend wizardry would be able to accomplish this by itself.</strong></p>
              <div>
                <p class="mb-2"><strong>These are the layers (simplified for the example):</strong></p>
                <ul class="list-disc list-inside space-y-2 ml-6">
                  <li><strong>Groundskeeper</strong> (system memory)</li>
                  <li><strong>Discovery</strong> (planning/consequence handling)</li>
                  <li><strong>Narration</strong> (writing the narrative)</li>
                  <li><strong>Chron-Con</strong> (correcting any minor errors)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Think Architecturally</h2>
            <p class="text-text-secondary mb-4 italic">Strategize on the best ways to achieve great results for your platform</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li><strong>Consider your actual goal, and then break it down into steps.</strong> If you were to perform this action yourself, what steps would you need to follow? Write that down. That's your workflow.</li>
              <li><strong>After formalizing your workflow, think of the type of data transformations you would need throughout that process</strong> and then build the prompts to automate, then chain them together.</li>
              <li><strong>Illustrative example:</strong> If your platform depends on conversation history for context, it can cause your token count and performance to take a hit. Perhaps a conversation consolidator prompt would benefit you. And if you want a truly random number to be used in the determination of something in your system, perhaps you have the backend serve that up to your AI, rather than assuming that the LLM's training data can produce anything close to pure randomness.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Correction Layers</h2>
            <p class="text-text-secondary mb-4 italic">The referee of your platform</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>Correction layers catch errors after other layers have done their work. They're your quality control layers. They spot continuity breaks, logical inconsistencies, or constraint violations that slipped through.</li>
              <li><strong>In Emstrata:</strong> The Chron-Con layer runs after the narrative is written. It checks for things like: Did a character who was in the tavern suddenly appear in the forest without traveling? Did someone use an item they don't have? Are the spatial coordinates consistent with the described action?</li>
              <li><strong>When you need one:</strong> Use correction layers when there are complex requirements and expectations that your platform needs to meet. Correcting before revealing the final answer can lower the chance of bad responses.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Reasoning/Strategy Layers</h2>
            <p class="text-text-secondary mb-4 italic">The decision-maker of your platform</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>Reasoning layers make decisions before content gets generated. They evaluate the current state, consider available options, assess consequences, and choose a direction. Think of them as the 'planning brain' of your system.</li>
              <li><strong>In Emstrata:</strong> Discovery handles this - it looks at what the participant wants to do, considers the simulation state, evaluates what outcomes make narrative sense, and determines how the action should resolve. It's not writing the story yet; it's deciding what should happen.</li>
              <li><strong>When you need one:</strong> If you find yourself asking an LLM to both 'figure out what should happen AND write it beautifully,' you're overloading a single prompt. Split it. Reason first, write second.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Memory Consolidation Layers</h2>
            <p class="text-text-secondary mb-4 italic">The stenographer of your platform</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>Memory consolidation layers distill what just happened into something retrievable later. They extract the important details from verbose content and store them in a format your system can efficiently query or format into future inputs.</li>
              <li><strong>In Emstrata:</strong> Groundskeeper serves this function. After Discovery determines what happens and Narration writes it, Groundskeeper updates the comprehensive memory of all entities and the emergent narrative. It's maintaining the source of truth about the simulation state.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Content Layers</h2>
            <p class="text-text-secondary mb-4 italic">The performer of your platform</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>Content layers generate the actual output users experience - the prose, dialogue, descriptions, or interface text. These layers take decisions from reasoning layers and context from memory layers, then craft the experience.</li>
              <li><strong>Emstrata's Narration layer does this.</strong> It receives Discovery's decisions about what happened, checks Groundskeeper's simulation state, and writes the actual narrative text that players read. It's optimizing for atmosphere, pacing, and emotional resonance - not logic or consistency (that's handled elsewhere).</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Catch-All/Connector Layers</h2>
            <p class="text-text-secondary mb-4 italic">The clean-up crew of your platform</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>Not every layer fits a clean category. Catch-all layers are hybrids that do complementary work for multiple other layers. They handle tasks that don't belong to any single specialized layer but are essential for the system to function cohesively.</li>
              <li>These layers often emerge when you discover gaps where two layers need to work together but speak different 'languages,' or several layers all need the same preprocessing that none of them should be responsible for individually.</li>
              <li><strong>In Emstrata:</strong> The Chron-Con does more than just error correction. It also tracks secrets and memories from the narrative, explicitly tagging them for Groundskeeper to integrate into system memory. You don't want Narration burdened with the unrelated task of extracting and categorizing secrets while it's trying to write high-quality prose. And Groundskeeper needs these pieces explicitly labeled as 'secrets' or 'memories' to properly integrate them into the simulation history. The Chron-Con bridges this gap.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Cyclical Vs Circumstantial Systems</h2>
            <p class="text-text-secondary mb-4 italic">And everything in-between</p>
            <div class="space-y-4 text-text-secondary">
              <div>
                <h3 class="text-xl font-heading text-text mb-2">Cyclical systems</h3>
                <p>Cyclical systems run the same prompts every time. Emstrata follows this pattern: every turn runs Discovery, then Narration, then Chron-Con, then Groundskeeper, in that exact order. The flow is predictable and consistent regardless of what happens in the simulation. You always know what's executing next, which makes debugging straightforward and cost estimation more reliable.</p>
              </div>
              <div>
                <h3 class="text-xl font-heading text-text mb-2">Circumstantial systems</h3>
                <p>Circumstantial systems determine the pathway based on outcomes or AI direction. The route through your architecture changes depending on what happened in previous steps. Maybe an error detection layer decides whether correction is needed. Maybe a routing layer examines user intent and sends the request down completely different processing paths. The system adapts its own execution flow based on runtime conditions.</p>
              </div>
              <div>
                <h3 class="text-xl font-heading text-text mb-2">Hybrid systems</h3>
                <p>Hybrid systems are mostly cyclical at their base, but circumstantial at times when specific conditions warrant different handling. You might always run your core cycle, but branch to specialized subsystems when certain triggers fire. Many real-world systems end up here. It's a reliable backbone with conditional branches for edge cases. Emstrata has a number of circumstantial offshoots as well.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Agnostic Backend Interaction</h2>
            <p class="text-text-secondary mb-4 italic">What happens between AI layers</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li><strong>Data Persistence and Utility:</strong> Between AI layers, it's important to save important, transformed data to the backend for future retrieval, debugging, rerunning if there's an error, etc.</li>
              <li><strong>Data Reusability and Presentation:</strong> Saving data also allows you to present that data in interesting ways later or feed that data into other layers in the future.</li>
              <li><strong>Unbiased Decision-Making:</strong> Also, when you need an unbiased judge, the backend is the place to go. The backend is 'agnostic' to outcome, whereas the AI may or may not have a strong preference and display it.</li>
              <li><strong>Emstrata Example (Weighted Randomness):</strong> In Emstrata, consequences are rolled and use weighted randomness. The Discovery layer determines the likelihood something happens, and then the backend returns a random number out of 1000. If that number is within the set likelihood range, the backend serves the confirmed consequence to the Narration layer; if it's outside of the range, it sends the failure outcome.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Randomness Injection</h2>
            <p class="text-text-secondary mb-4 italic">A jolt of creativity</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>If you grow tired of tropes and clichés in your responses, I have an answer: Random Concept Injection.</li>
              <li>This is something I do for parts of the system that do creative heavy-lifting. Oftentimes, AIs will hop to really tried and true answers to creative questions, which is great for reasoning well, but not so much for surprising an audience.</li>
              <li>I use this to get names for characters that aren't baked into the training data, inject interesting concepts into simulations, and build out characters based on character archetypes.</li>
              <li>It can be used for any list of random strings you'd like to be potentially incorporated into a particular decision-making process.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Cost Considerations</h2>
            <p class="text-text-secondary mb-4 italic">Usage costs will likely increase</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>Multilayered architectures cost more than single-prompt systems. Each layer is an API call, and those add up. If you're running a four-layer cycle on every user interaction, you're potentially paying 4x what a single prompt would cost (depending on usage costs and tokens). That's the trade you're making for better results.</li>
              <li>But they work better when properly configured. The question isn't 'should I add more layers to save money'; it's 'does the quality improvement justify the cost for my use case?' A customer service bot might not need four layers. A narrative engine generating premium content probably does.</li>
              <li>Optimization strategies exist. Use cheaper models for simpler layers (correction doesn't need the most expensive model), cache aggressively for cyclical systems, and be honest about cutting layers that aren't pulling their weight. Every layer should earn its spot.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Performance Considerations</h2>
            <p class="text-text-secondary mb-4 italic">Speed vs quality</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>More layers means more latency. If you need fast responses, waiting on three consecutive prompts to complete is probably a bad solution.</li>
              <li>But parallelization can help. Some layers don't depend on each other and can run simultaneously. If your reasoning layer and your memory retrieval layer both only need the user input, run them in parallel.</li>
              <li>Performance can be helped and hurt by layering. Adding a layer isn't always the answer. Sometimes consolidating two weak layers into one strong prompt improves both speed and quality.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Hallucination Considerations</h2>
            <p class="text-text-secondary mb-4 italic">Avoiding architectures that tend to compound hallucinations</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>In multilayered systems, hallucinations compound. One layer's mistake becomes the next layer's input. If your reasoning layer hallucinates a fact and your content layer writes it beautifully, you've just produced confidently wrong output. The more layers, the more opportunities for errors to slip through and get amplified.</li>
              <li>Correction layers should come before memory consolidation. If you don't catch errors before they enter your system's permanent memory, those minor mistakes slip into history and slowly expand. They reintroduce themselves ad infinitum, compounding with each cycle until your system's "source of truth" is corrupted.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Major Takeaways</h2>
            <p class="text-text-secondary mb-4 italic">What to remember</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li><strong>Multilayered architectures compound transformations.</strong> Each layer takes input, transforms it, and passes it forward. The power comes from coordinating these transformations to achieve results no single prompt could accomplish.</li>
              <li><strong>Layer types provide a vocabulary for building.</strong> Correction, reasoning, memory consolidation, content, and catch-all layers each serve distinct purposes. Understanding these patterns helps you architect intentionally rather than intuitively.</li>
              <li><strong>Cyclical systems run the same flow every time.</strong> Circumstantial systems adapt their pathway based on outcomes. Most production systems end up somewhere in-between.</li>
              <li><strong>Backend integration handles what LLMs can't.</strong> True randomness, deterministic calculations, unbiased judgment, and data persistence belong outside the AI layers.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">System Prompt Generator Tool</h2>
            <p class="text-text-secondary mb-4 italic">Reminding you that this exists and is a great way to get started</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>Available now on <a href="/system-prompt-generator" class="text-accent hover:underline">https://nicholasmgoldstein.com/system-prompt-generator</a></li>
              <li>Prebuilt modular system prompt skeleton that can give you a basis to build upon</li>
              <li>Feel free to copy/paste this into Notion, Google Docs, Microsoft Word, or whatever you plan to use and add your own modules/rulesets and logic</li>
            </ul>
          </section>
        </div>
      `
    },
    {
      number: '5',
      chapter: 1,
      title: 'Recap: Modules 1-4',
      description: 'A comprehensive review of the foundational concepts: course introduction, platform prerequisites, prompt engineering, and multilayered architectures.',
      writtenContent: `
        <div class="space-y-8">
          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Getting Started Recap</h2>
            <p class="text-text-secondary mb-4 italic">What building AI platforms actually entails</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li><strong>Not just coding</strong> - design, architecture, and engineering decisions</li>
              <li>Complex projects need multi-layered AI architectures, data transformations, agents, ambient intelligence</li>
              <li>Novel applications require architecture designed for that specific problem</li>
              <li>Architecture choices define what's possible</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">The Cost Reality</h2>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>AI API usage measured in tokens (MToks)</li>
              <li>Input and output tokens priced differently (output typically costs more)</li>
              <li>Context window size affects both price and performance</li>
              <li>Applications generating large AI responses incur higher costs</li>
              <li>Need to manage token counts sent to API</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Hallucinations are a Feature, Not a Bug</h2>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>Scale of hallucinations and downstream effects expand exponentially with poor architecture</li>
              <li>Many hallucinations can be stamped out, accounted for, or predicted through design</li>
              <li>Requires persistence, trial and error, systems thinking</li>
              <li>Same mechanism that causes hallucinations enables creativity and variation</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Tech Stack Doesn't Matter</h2>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>Architectural concepts apply regardless of stack</li>
              <li><strong>Security critical:</strong> never expose API keys on frontend</li>
              <li>All LLM API calls happen on backend</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Setup and Testing Recap</h2>
            <p class="text-text-secondary mb-4 italic">Pick an LLM and learn by doing</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>Different LLMs have varying strengths and textual voices</li>
              <li>Learn through iteration on system prompts, not just benchmarks</li>
              <li>Consider multi-LLM strategy: expensive models for complex tasks, cheaper models for simple tasks</li>
              <li>Claude 4.0 for heavy analysis, Mistral for simple tasks</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Workbench Anatomy</h2>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li><strong>System prompt:</strong> static instruction defining AI behavior and context</li>
              <li><strong>User request:</strong> specific data for this particular instance</li>
              <li>Test and iterate before implementing in application</li>
              <li>Use prompt library to organize high-volume testing</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Setup Creates Iteration Foundation</h2>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>Frontend, backend, database, mobile - get environment working first</li>
              <li>AI-powered IDEs (Cursor) write code</li>
              <li>Your job: understanding architecture, overseeing, troubleshooting</li>
              <li>Learn coding through process, not syntax memorization</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Prompt Engineering Recap</h2>
            <p class="text-text-secondary mb-4 italic">Prompts are control mechanisms</p>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>Vague prompts → AI invents interpretations</li>
              <li>Contradictory prompts → AI picks randomly</li>
              <li>Well-structured prompts → consistent behavior</li>
              <li>Difference between working product and broken one comes down to prompt quality</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Modular Structure</h2>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li><strong>Core Identity:</strong> what is this AI, what does it do</li>
              <li><strong>Platform Specifics:</strong> context about where/how it operates</li>
              <li><strong>Understanding Role:</strong> scope, responsibilities, boundaries</li>
              <li><strong>Dissecting Requests:</strong> how to parse incoming data</li>
              <li><strong>Response Expectations:</strong> exact output format</li>
              <li><strong>Quality Standards:</strong> non-negotiable benchmarks</li>
              <li>Each module handles one concern, updated independently</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Structure Requests and Responses</h2>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li><strong>Requests:</strong> key-value pairs (<code class="bg-card-bg px-2 py-1 rounded text-accent">user-input: "text"</code>, <code class="bg-card-bg px-2 py-1 rounded text-accent">convo-summary: "summary"</code>)</li>
              <li><strong>Responses:</strong> predefined functions with strict argument types</li>
              <li><strong>Examples:</strong> <code class="bg-card-bg px-2 py-1 rounded text-accent">speak("dialogue")</code>, <code class="bg-card-bg px-2 py-1 rounded text-accent">attack(damage, 20)</code>, <code class="bg-card-bg px-2 py-1 rounded text-accent">try("outcome1", "outcome2", 100/1000)</code></li>
              <li>Structured outputs aid parsing, prevent hallucinations, maintain logical coherence</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Minimize to Essentials</h2>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>Input only what you need for expected output</li>
              <li>Setup prioritization hierarchy: <code class="bg-card-bg px-2 py-1 rounded text-accent">user-input > convo-history > saved-prefs</code></li>
              <li>Output only necessities</li>
              <li>More elements = higher chance of confusion</li>
              <li>Build → reduce → build → reduce</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Define and Enforce Rules</h2>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li><strong>Critical rules:</strong> ALL CAPS, repetition, strategic placement</li>
              <li>Eliminate contradictory instructions</li>
              <li>Be explicit about constraints (what AI cannot do)</li>
              <li>Define argument types strictly and repeat them</li>
              <li><strong>Example bad rule:</strong> "Respond appropriately"</li>
              <li><strong>Example good rule:</strong> "You must respond using only the functions defined in Response Expectations Module. Do not invent new functions or arguments."</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Preventing Hallucinations</h2>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>Restrict AI to specific formatted responses</li>
              <li>Reiterate: cannot make up its own functions or arguments</li>
              <li>Be hyper-specific about requirements</li>
              <li>Identify and eliminate contradictory prompting</li>
              <li>ALL CAPS to stress critical aspects</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Test and Iterate</h2>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>All LLMs react differently to certain prompting</li>
              <li>Testing, iterating, and saving updates is essential</li>
              <li>Consider model size in proportion to task size</li>
              <li>A massive response with complex logic needs a bigger (more expensive) model</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Multilayered Architectures Recap</h2>
            <ul class="list-disc list-inside space-y-3 text-text-secondary ml-4">
              <li>Multiple coordinated prompts compound transformations substantially</li>
              <li>Layer types: Correction, Reasoning/Strategy, Memory Consolidation, Content, Catch-All</li>
              <li>System types: Cyclical (same flow), Circumstantial (adaptive), Hybrid (most real-world systems)</li>
              <li>Backend handles: true randomness, deterministic calculations, unbiased judgment, data persistence</li>
              <li>Tradeoffs: More layers = higher cost and latency, but better quality when properly configured</li>
              <li>Correction layers must come before memory consolidation to prevent error compounding</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-heading text-text mb-4">Quiz</h2>
            <p class="text-text-secondary mb-6 italic">This quiz is designed to help with retention. Feel free to skip if you prefer, or use the "Reveal Answer" button to check your understanding.</p>
            <div id="module-5-quiz" class="space-y-8" data-quiz-initialized="false">
              <!-- Questions will be inserted here by JavaScript -->
            </div>
          </section>
        </div>
      `
    },
    // Chapter 2: Core Architecture & Data Operations
    {
      number: '6',
      chapter: 2,
      title: 'CRUD, Transformations, & Parsing',
      description: 'Understand data operations, transformations, and parsing techniques essential for AI platform development.'
    },
    {
      number: '7',
      chapter: 2,
      title: 'AI-Rep Architecture In-Depth',
      description: 'Deep dive into AI-Rep architecture patterns and how to implement them in your platforms.'
    },
    {
      number: '8',
      chapter: 2,
      title: 'Building Your Own Architecture / Compounding Transformations',
      description: 'Learn to design and build custom architectures by compounding transformations for complex AI systems.'
    },
    {
      number: '9',
      chapter: 2,
      title: 'Real-World Application: PLATO5 Planning',
      description: 'Apply learned concepts to a real-world case study: planning PLATO5\'s rebuild.'
    },
    {
      number: '10',
      chapter: 2,
      title: 'Recap: Modules 6-10',
      description: 'A comprehensive review of data operations, AI-Rep patterns, custom architectures, and PLATO5 planning.'
    },
    // Chapter 3: Real-World Applications & Design
    {
      number: '11',
      chapter: 3,
      title: 'In-Depth Look: Emstrata\'s Architecture',
      description: 'Explore the architecture behind Emstrata, a platform for creating immersive narrative experiences using AI to generate emergent storylines.'
    },
    {
      number: '12',
      chapter: 3,
      title: 'Architecting Lore Builder System for Emstrata',
      description: 'Learn how to design and build a lore builder system for narrative platforms, using Emstrata as a case study.'
    },
    {
      number: '13',
      chapter: 3,
      title: 'Notes on Platform Design & Design Language',
      description: 'Learn about platform design principles and developing a cohesive design language for AI-powered applications.'
    },
    {
      number: '14',
      chapter: 3,
      title: 'Considering Use-Cases, Demographics, & Markets',
      description: 'Explore how to identify use-cases, understand target demographics, and evaluate market opportunities for AI platforms.'
    },
    {
      number: '15',
      chapter: 3,
      title: 'Messaging About Novel Products/Services',
      description: 'Learn how to effectively communicate and market innovative AI products and services to your target audience.'
    },
    {
      number: '16',
      chapter: 3,
      title: 'Recap: Modules 11-16',
      description: 'A comprehensive review of real-world architectures, lore builder systems, platform design, market considerations, and messaging.'
    },
    // Chapter 4: Infrastructure & Integration
    {
      number: '17',
      chapter: 4,
      title: 'Deployment & Distribution - Web, Mobile, & API Hosting & Storage',
      description: 'Learn how to deploy and distribute your platform: hosting APIs, deploying web apps, publishing to app stores, and storing multimedia content.'
    },
    {
      number: '18',
      chapter: 4,
      title: 'Integrating Other AI Services',
      description: 'Learn how to integrate additional AI capabilities including TTS, image generation, video generation, and other AI algorithms into your platform.'
    },
    {
      number: '19',
      chapter: 4,
      title: 'Securing AI Pipelines Against Hallucination',
      description: 'Strategies and techniques for preventing, detecting, and handling AI hallucinations to ensure reliable and trustworthy outputs.'
    },
    {
      number: '20',
      chapter: 4,
      title: 'New Update on PLATO5\'s Rebuild',
      description: 'Latest progress update on the PLATO5 rebuild, covering recent developments, challenges overcome, and architectural refinements.'
    },
    {
      number: '21',
      chapter: 4,
      title: 'Recap: Modules 17-21',
      description: 'A comprehensive review of deployment, AI service integration, security, and PLATO5 rebuild progress.'
    },
    // Chapter 5: Ethics, Operations & Growth
    {
      number: '22',
      chapter: 5,
      title: 'Ethical AI Usage & Examples of Pitfalls',
      description: 'Learn about ethical considerations in AI development, including privacy concerns, disclosing AI usage, and common pitfalls to avoid when building AI platforms.'
    },
    {
      number: '23',
      chapter: 5,
      title: 'Retaining Your AI Outputs for Future Training',
      description: 'Strategies for storing and managing AI-generated outputs to enable future model training, fine-tuning, and continuous improvement of your platform.'
    },
    {
      number: '24',
      chapter: 5,
      title: 'Things that go Unconsidered',
      description: 'Critical but often overlooked aspects of platform development including Terms of Service, session logic, data retention policies, and other essential considerations.'
    },
    {
      number: '25',
      chapter: 5,
      title: 'Building An Audience for your platform',
      description: 'Strategies for growing and engaging an audience for your AI platform, from early adopters to broader market reach.'
    },
    {
      number: '26',
      chapter: 5,
      title: 'Recap: Modules 22-26',
      description: 'A comprehensive review of ethical AI usage, retaining outputs, overlooked considerations, and audience building.'
    },
    {
      number: '27',
      chapter: 5,
      title: 'Onboarding Users',
      description: 'Design effective user onboarding experiences that help users understand and successfully use your AI platform\'s capabilities.'
    },
    {
      number: '28',
      chapter: 5,
      title: 'Wrap-Up: Building AI Platforms from Scratch',
      description: 'Final thoughts and key takeaways from the course, summarizing the journey from foundational concepts to building complete AI platforms.'
    }
      ]
    },
    'communicating-vision': {
      title: 'Communicating Vision',
      description: 'Learn how to effectively communicate your vision, ideas, and projects to others. Master the art of storytelling, presentation, and conveying complex concepts clearly.',
      externalResources: [],
      modules: [
        {
          number: '1',
          chapter: 1,
          title: 'Steve Jobs | 1994 Interview with John McLaughlin',
          description: 'A deep dive into how Steve Jobs communicates his vision, philosophy, and approach to building products that change the world.',
          writtenContent: `
            <div class="space-y-8">
              <section>
                <h2 class="text-2xl font-heading text-text mb-4">Steve Jobs | 1994 Interview with John McLaughlin</h2>
                <p class="text-text-secondary mb-4">Content for this module is coming soon. Check back later or view the <a href="/course/communicating-vision/module/1" class="text-accent hover:underline">video and slides version</a>.</p>
              </section>
            </div>
          `
        }
      ]
    }
  };
  
  private getCourseData(courseSlug: string): CourseReaderData | null {
    return this.courses[courseSlug] || null;
  }
  
  private getModules(courseSlug: string): CourseModule[] {
    const courseData = this.getCourseData(courseSlug);
    return courseData?.modules || [];
  }

  public mount(container: HTMLElement, courseSlug: string, moduleNumber: number = 1): void {
    this.container = container;
    
    const courseData = this.getCourseData(courseSlug);
    if (!courseData) {
      // Course not found, show error or redirect
      container.innerHTML = '<div class="p-8 text-center"><h1 class="text-2xl text-text mb-4">Course Not Found</h1><p class="text-text-secondary">The requested course does not exist.</p></div>';
      return;
    }
    
    const modules = this.getModules(courseSlug);
    const currentModule = modules.find(m => m.number === moduleNumber.toString()) || modules[0];
    
    // Update metadata for SEO
    this.updateMetadata(currentModule, courseSlug, moduleNumber);
    
    const section = document.createElement('section');
    section.className = 'min-h-screen py-8 px-6 fade-in-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out';
    section.innerHTML = `
      <span data-route="/course/${courseSlug}/reader/module/${moduleNumber}" style="display: none;"></span>
      <div class="max-w-7xl mx-auto">
        <!-- Back Navigation -->
        <div class="mb-8 flex items-center justify-between">
          <a 
            id="back-to-courses-btn"
            href="/courses" 
            class="inline-flex items-center gap-2 text-text-secondary hover:text-text transition-colors duration-300">
            <i class="fas fa-arrow-left"></i>
            Back to Courses
          </a>
          <a 
            id="back-to-course-btn"
            href="/course/${courseSlug}/module/${moduleNumber}" 
            class="inline-flex items-center gap-2 px-4 py-2 bg-card-bg border border-text-secondary/20 rounded-full hover:border-accent/30 hover:bg-primary/10 transition-all duration-300 text-text-secondary hover:text-text text-sm">
            <i class="fas fa-video"></i>
            <span>View with Video & Slides</span>
          </a>
        </div>
      </div>
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 md:gap-8">
        <!-- Left Navigation Column -->
        <aside class="w-full md:w-48 lg:w-56 flex-shrink-0 md:sticky md:top-24 md:self-start">
          <div class="mb-6 md:mb-0">
            <h2 class="text-lg md:text-xl font-heading text-text mb-4 md:mb-6">Modules</h2>
            <nav class="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:overflow-x-visible md:max-h-[calc(100vh-8rem)] pb-2 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
              ${this.renderModulesByChapter(courseSlug, currentModule)}
            </nav>
          </div>
        </aside>

        <!-- Main Content Area -->
        <main class="flex-1 w-full md:max-w-4xl">
          <!-- Header Section -->
          <div class="mb-8 md:mb-12">
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-heading text-text mb-3 md:mb-4">${moduleNumber === 1 ? courseData.title : currentModule.title}</h1>
            <p class="text-base sm:text-lg text-text-secondary mb-4 md:mb-6">${moduleNumber === 1 ? courseData.description : currentModule.description}</p>
          </div>

          <!-- Written Content Section -->
          <article class="prose prose-invert max-w-none">
            <div id="module-content" class="text-text-secondary leading-relaxed">
              ${currentModule.writtenContent ? currentModule.writtenContent : `
                <p class="text-text-secondary/70 italic">Content for this module is coming soon. Check back later or view the <a href="/course/${courseSlug}/module/${moduleNumber}" class="text-accent hover:underline">video and slides version</a>.</p>
              `}
            </div>
          </article>

          <!-- External Resources Section -->
          ${courseData.externalResources && courseData.externalResources.length > 0 ? `
          <div class="mt-12">
            <h2 class="text-xl sm:text-2xl font-heading text-text mb-6">External Resources</h2>
            <div class="space-y-4">
              ${courseData.externalResources.map(resource => `
              <div class="max-w-md">
                <a 
                  href="${resource.url}" 
                  ${resource.isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''}
                  class="text-text hover:text-accent transition-colors duration-300 inline-flex items-center gap-2">
                  <span class="font-medium">${resource.title}</span>
                  <i class="fas ${resource.isExternal ? 'fa-external-link-alt' : 'fa-arrow-right'} text-xs text-text-secondary/50"></i>
                </a>
                <p class="text-sm text-text-secondary mt-1">${resource.description}</p>
              </div>
              `).join('')}
            </div>
          </div>
          ` : ''}
        </main>
      </div>
    `;
    
    this.container.appendChild(section);
    this.setupBackButton();
    this.setupBackToCourseButton(courseSlug, moduleNumber);
    this.setupModuleLinks(courseSlug);
    if (courseData.externalResources) {
      this.setupExternalResources(courseData.externalResources);
    }
    
    // Initialize quiz for Module 5
    if (moduleNumber === 5) {
      this.initializeQuiz();
    }
    
    ScrollFade.init();
    
    // Trigger fade-in for main section immediately on load
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        section.classList.remove('opacity-0', 'translate-y-8');
        section.classList.add('opacity-100', 'translate-y-0');
      });
    });
    
    window.scrollTo(0, 0);
  }

  private renderModulesByChapter(courseSlug: string, currentModule: CourseModule): string {
    const chapterNames: Record<string, string[]> = {
      'build-ai-platforms': [
        '', // 0-indexed, so chapter 1 is at index 1
        'Chapter 1: Foundations',
        'Chapter 2: Core Architecture & Data Operations',
        'Chapter 3: Real-World Applications, Design & Communication',
        'Chapter 4: Infrastructure & Integration',
        'Chapter 5: Ethics, Operations, Audience Building'
      ],
      'communicating-vision': [
        '',
        'Chapter 1: Foundations',
        'Chapter 2: Advanced Communication Techniques',
        'Chapter 3: Practical Applications',
        'Chapter 4: Refinement & Delivery',
        'Chapter 5: Putting It All Together'
      ]
    };

    const names = chapterNames[courseSlug] || chapterNames['build-ai-platforms'];
    const modules = this.getModules(courseSlug);
    
    let currentChapter = 0;
    let html = '';

    modules.forEach(module => {
      if (module.chapter !== currentChapter) {
        currentChapter = module.chapter;
        html += `
          <div class="hidden md:block mt-4 mb-2 first:mt-0">
            <h3 class="text-sm font-heading text-text-secondary/70 font-semibold uppercase tracking-wide">${names[currentChapter] || ''}</h3>
          </div>
        `;
      }

      const isActive = module.number === currentModule.number;
      html += `
        <a 
          href="/course/${courseSlug}/reader/module/${module.number}"
          class="md:bg-card-bg md:border border-text-secondary/20 rounded-full md:rounded-xl flex items-center justify-center md:items-start md:justify-start w-12 h-12 md:w-auto md:h-[280px] md:p-4 cursor-pointer group flex-shrink-0 md:hover:border-accent/30 hover:shadow-lg transition-all duration-300 ${isActive ? 'bg-primary/15 text-accent border-2 border-blue-500 md:border-accent/50 md:bg-primary/5' : 'text-text-secondary hover:text-text hover:bg-primary/10 border'} md:border-text-secondary/20 md:flex md:flex-col md:overflow-hidden">
          <!-- Mobile: Just the number -->
          <div class="md:hidden text-base text-secondary font-semibold">${module.number}</div>
          <!-- Desktop: Full content -->
          <div class="hidden md:flex md:flex-col md:w-full md:h-full">
            <div class="text-base text-secondary font-semibold md:font-medium md:mb-2 flex-shrink-0">${module.number}</div>
            <h3 class="text-xs md:text-sm lg:text-base font-heading text-text mb-1 md:mb-2 group-hover:text-accent transition-colors duration-300 break-words leading-tight" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">${module.title}</h3>
            <p class="text-xs md:text-sm text-text-secondary leading-relaxed flex-grow break-words" style="display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">${module.description}</p>
          </div>
        </a>
      `;
    });

    return html;
  }

  private setupModuleLinks(courseSlug: string): void {
    const moduleLinks = this.container?.querySelectorAll(`a[href^="/course/${courseSlug}/reader/module/"]`);
    moduleLinks?.forEach(link => {
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

  private setupExternalResources(resources: Array<{ url: string; isExternal?: boolean }>): void {
    resources.forEach(resource => {
      if (!resource.isExternal) {
        const link = this.container?.querySelector(`a[href="${resource.url}"]`);
        link?.addEventListener('click', (e) => {
          e.preventDefault();
          window.history.pushState({}, '', resource.url);
          window.dispatchEvent(new PopStateEvent('popstate'));
        });
      }
    });
  }

  private setupBackButton(): void {
    const backBtn = this.container?.querySelector('#back-to-courses-btn');
    if (!backBtn) return;

    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.history.pushState({}, '', '/courses');
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
  }

  private setupBackToCourseButton(courseSlug: string, moduleNumber: number): void {
    const backToCourseBtn = this.container?.querySelector('#back-to-course-btn');
    if (!backToCourseBtn) return;

    backToCourseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.history.pushState({}, '', `/course/${courseSlug}/module/${moduleNumber}`);
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
  }

  private updateMetadata(module: CourseModule, courseSlug: string, moduleNumber: number): void {
    const courseData = this.getCourseData(courseSlug);
    const courseTitle = courseData?.title || 'Course';
    const canonicalUrl = `https://nicholasmgoldstein.com/course/${courseSlug}/reader/module/${moduleNumber}`;
    const title = `${module.title} - Module ${moduleNumber} | ${courseTitle}`;
    const description = module.writtenContent 
      ? module.writtenContent.replace(/<[^>]*>/g, '').substring(0, 160) + '...'
      : `${module.description} Read the full written guide for ${module.title} from the ${courseTitle} course.`;
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;
    
    // Update page title
    document.title = title;
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;
    
    // Update Open Graph tags
    this.updateMetaTag('property', 'og:type', 'article');
    this.updateMetaTag('property', 'og:url', canonicalUrl);
    this.updateMetaTag('property', 'og:title', title);
    this.updateMetaTag('property', 'og:description', description);
    
    // Update Twitter tags
    this.updateMetaTag('property', 'twitter:card', 'summary_large_image');
    this.updateMetaTag('property', 'twitter:url', canonicalUrl);
    this.updateMetaTag('property', 'twitter:title', title);
    this.updateMetaTag('property', 'twitter:description', description);
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

  public initializeQuizIfNeeded(moduleNumber: number): void {
    if (moduleNumber === 5) {
      this.initializeQuiz();
    }
  }

  private initializeQuiz(): void {
    const quizContainer = document.getElementById('module-5-quiz');
    if (!quizContainer || quizContainer.getAttribute('data-quiz-initialized') === 'true') {
      return;
    }

    // Quiz questions with all choices
    const questions = [
      {
        question: 'What is the primary purpose of modular prompt architecture?',
        choices: [
          { text: 'To make prompts as long as possible', isCorrect: false },
          { text: 'To allow independent updates, reusability, and easier debugging', isCorrect: true },
          { text: 'To ensure only one person can work on the system at a time', isCorrect: false },
          { text: 'To replace the need for testing', isCorrect: false },
          { text: 'To eliminate all API costs', isCorrect: false }
        ]
      },
      {
        question: 'In a multilayered AI system, why should correction layers come before memory consolidation layers?',
        choices: [
          { text: 'Correction layers are faster to execute', isCorrect: false },
          { text: 'Memory consolidation is more expensive', isCorrect: false },
          { text: 'Errors that enter permanent memory will compound and reintroduce themselves infinitely', isCorrect: true },
          { text: 'It doesn\'t matter what order they run in', isCorrect: false },
          { text: 'Correction layers need access to memory first', isCorrect: false }
        ]
      },
      {
        question: 'What\'s the difference between cyclical and circumstantial systems?',
        choices: [
          { text: 'Cyclical systems are cheaper to run', isCorrect: false },
          { text: 'Cyclical systems run the same prompts every time; circumstantial systems adapt their pathway based on outcomes', isCorrect: true },
          { text: 'Circumstantial systems are always better than cyclical systems', isCorrect: false },
          { text: 'Cyclical systems use AI; circumstantial systems don\'t', isCorrect: false },
          { text: 'There is no meaningful difference', isCorrect: false }
        ]
      },
      {
        question: 'Why use preset functions for AI outputs instead of unstructured text?',
        choices: [
          { text: 'Preset functions look more professional', isCorrect: false },
          { text: 'Structured outputs aid parsing, maintain logical coherence, and prevent hallucinations', isCorrect: true },
          { text: 'Unstructured text is too expensive', isCorrect: false },
          { text: 'The AI can\'t generate unstructured text', isCorrect: false },
          { text: 'It makes the prompts shorter', isCorrect: false }
        ]
      },
      {
        question: 'When building an AI platform, what should the backend handle instead of AI layers?',
        choices: [
          { text: 'Creative writing and narrative generation', isCorrect: false },
          { text: 'True randomness, deterministic calculations, unbiased judgment, and data persistence', isCorrect: true },
          { text: 'All user interactions', isCorrect: false },
          { text: 'Nothing; AI should handle everything', isCorrect: false },
          { text: 'Only database queries', isCorrect: false }
        ]
      }
    ];

    // Render quiz with randomized choices
    let quizHTML = '';

    questions.forEach((q, index) => {
      // Randomize choices
      const shuffledChoices = [...q.choices].sort(() => Math.random() - 0.5);
      const correctIndex = shuffledChoices.findIndex(c => c.isCorrect);
      const correctLetter = String.fromCharCode(65 + correctIndex); // A, B, C, D, E

      quizHTML += `
        <div class="quiz-question border border-text-secondary/20 rounded-lg p-6 bg-card-bg" data-question-index="${index}" data-correct-letter="${correctLetter}">
          <h3 class="text-lg font-heading text-text mb-4">Question ${index + 1}: ${q.question}</h3>
          <div class="space-y-3 mb-4">
            ${shuffledChoices.map((choice, choiceIndex) => {
              const letter = String.fromCharCode(65 + choiceIndex);
              return `
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 cursor-pointer transition-colors border border-transparent">
                  <input type="radio" name="question-${index}" value="${letter}" class="mt-1 quiz-radio">
                  <span class="text-text-secondary">${letter}) ${choice.text}</span>
                </label>
              `;
            }).join('')}
          </div>
          <div class="answer-feedback mt-4 hidden"></div>
          <div class="flex gap-3 mt-4">
            <button 
              class="reveal-answer-btn inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-accent/30 rounded-full hover:bg-primary/20 hover:border-accent/50 transition-all duration-300 text-text-secondary hover:text-text text-sm">
              <i class="fas fa-eye"></i>
              <span>Reveal Answer</span>
            </button>
            <button 
              class="reset-question-btn hidden inline-flex items-center gap-2 px-4 py-2 bg-text-secondary/10 border border-text-secondary/30 rounded-full hover:bg-text-secondary/20 hover:border-text-secondary/50 transition-all duration-300 text-text-secondary hover:text-text text-sm">
              <i class="fas fa-redo"></i>
              <span>Reset</span>
            </button>
          </div>
        </div>
      `;
    });

    quizContainer.innerHTML = quizHTML;
    quizContainer.setAttribute('data-quiz-initialized', 'true');

    // Set up radio button handlers for answer checking
    quizContainer.querySelectorAll('.quiz-radio').forEach(radio => {
      radio.addEventListener('change', (e) => {
        const input = e.target as HTMLInputElement;
        const questionContainer = input.closest('.quiz-question') as HTMLElement;
        if (!questionContainer) return;

        const correctLetter = questionContainer.getAttribute('data-correct-letter') || '';
        const selectedLetter = input.value;
        const feedbackDiv = questionContainer.querySelector('.answer-feedback') as HTMLElement;
        const allLabels = questionContainer.querySelectorAll('label');
        const revealBtn = questionContainer.querySelector('.reveal-answer-btn') as HTMLElement;
        const resetBtn = questionContainer.querySelector('.reset-question-btn') as HTMLElement;

        // Disable all radios after selection
        questionContainer.querySelectorAll('.quiz-radio').forEach(r => {
          (r as HTMLInputElement).disabled = true;
        });

        // Check if answer is correct
        const isCorrect = selectedLetter === correctLetter;

        // Update feedback
        if (feedbackDiv) {
          feedbackDiv.classList.remove('hidden');
          if (isCorrect) {
            feedbackDiv.className = 'answer-feedback mt-4 text-accent font-medium';
            feedbackDiv.innerHTML = `
              <i class="fas fa-check-circle mr-2"></i>
              Correct! Well done.
            `;
          } else {
            feedbackDiv.className = 'answer-feedback mt-4 text-red-400 font-medium';
            feedbackDiv.innerHTML = `
              <i class="fas fa-times-circle mr-2"></i>
              Incorrect. The correct answer is ${correctLetter}.
            `;
          }
        }

        // Highlight selected answer
        allLabels.forEach(label => {
          const labelInput = label.querySelector('input') as HTMLInputElement;
          if (labelInput.value === selectedLetter) {
            if (isCorrect) {
              label.classList.add('bg-accent/10', 'border-accent/50');
              label.classList.remove('hover:bg-primary/5', 'border-transparent');
            } else {
              label.classList.add('bg-red-500/10', 'border-red-500/50');
              label.classList.remove('hover:bg-primary/5', 'border-transparent');
            }
          }
        });

        // Highlight correct answer if wrong was selected
        if (!isCorrect) {
          allLabels.forEach(label => {
            const labelInput = label.querySelector('input') as HTMLInputElement;
            if (labelInput.value === correctLetter) {
              label.classList.add('bg-accent/10', 'border-accent/50');
              label.classList.remove('hover:bg-primary/5', 'border-transparent');
            } else if (labelInput.value !== selectedLetter) {
              label.classList.add('opacity-50');
            }
          });
        } else {
          // Dim incorrect answers if correct was selected
          allLabels.forEach(label => {
            const labelInput = label.querySelector('input') as HTMLInputElement;
            if (labelInput.value !== correctLetter) {
              label.classList.add('opacity-50');
            }
          });
        }

        // Hide reveal button and show reset button after selection
        if (revealBtn) {
          revealBtn.classList.add('hidden');
        }
        if (resetBtn) {
          resetBtn.classList.remove('hidden');
        }
      });
    });

    // Set up reveal answer button handlers (fallback)
    quizContainer.querySelectorAll('.reveal-answer-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const button = e.target as HTMLElement;
        const questionContainer = button.closest('.quiz-question') as HTMLElement;
        if (!questionContainer) return;

        const correctLetter = questionContainer.getAttribute('data-correct-letter') || '';
        const feedbackDiv = questionContainer.querySelector('.answer-feedback') as HTMLElement;
        const radioInputs = questionContainer.querySelectorAll('input[type="radio"]') as NodeListOf<HTMLInputElement>;
        const resetBtn = questionContainer.querySelector('.reset-question-btn') as HTMLElement;

        // Disable all radios
        radioInputs.forEach(r => r.disabled = true);

        // Show correct answer in feedback
        if (feedbackDiv) {
          feedbackDiv.classList.remove('hidden');
          feedbackDiv.className = 'answer-feedback mt-4 text-accent font-medium';
          feedbackDiv.innerHTML = `
            <i class="fas fa-check-circle mr-2"></i>
            Correct Answer: ${correctLetter}
          `;
        }

        // Mark correct answer
        radioInputs.forEach(input => {
          const label = input.closest('label');
          if (input.value === correctLetter) {
            input.checked = true;
            if (label) {
              label.classList.add('bg-accent/10', 'border-accent/50');
              label.classList.remove('hover:bg-primary/5', 'border-transparent');
            }
          } else {
            if (label) {
              label.classList.add('opacity-50');
            }
          }
        });

        // Hide reveal button and show reset button
        button.classList.add('hidden');
        if (resetBtn) {
          resetBtn.classList.remove('hidden');
        }
      });
    });

    // Set up reset button handlers
    quizContainer.querySelectorAll('.reset-question-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const button = e.target as HTMLElement;
        const questionContainer = button.closest('.quiz-question') as HTMLElement;
        if (!questionContainer) return;

        const feedbackDiv = questionContainer.querySelector('.answer-feedback') as HTMLElement;
        const radioInputs = questionContainer.querySelectorAll('input[type="radio"]') as NodeListOf<HTMLInputElement>;
        const allLabels = questionContainer.querySelectorAll('label');
        const revealBtn = questionContainer.querySelector('.reveal-answer-btn') as HTMLElement;

        // Reset all radio buttons
        radioInputs.forEach(r => {
          r.disabled = false;
          r.checked = false;
        });

        // Reset all labels styling
        allLabels.forEach(label => {
          label.classList.remove(
            'bg-accent/10', 'border-accent/50',
            'bg-red-500/10', 'border-red-500/50',
            'opacity-50'
          );
          label.classList.add('border-transparent');
        });

        // Hide feedback
        if (feedbackDiv) {
          feedbackDiv.classList.add('hidden');
          feedbackDiv.innerHTML = '';
        }

        // Show reveal button and hide reset button
        if (revealBtn) {
          revealBtn.classList.remove('hidden');
        }
        button.classList.add('hidden');
      });
    });
  }
}

