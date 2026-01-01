import { ScrollFade } from '../scroll-fade';

export class SystemPromptGenerator {
  private container: HTMLElement | null = null;

  public mount(container: HTMLElement): void {
    this.container = container;

    const section = document.createElement('section');
    section.className = 'min-h-screen py-16 px-6 fade-in-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out';
    section.innerHTML = `
      <span data-route="/system-prompt-generator" style="display: none;"></span>
      <div class="max-w-4xl mx-auto">
        <div class="mb-8">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading text-text mb-6">System Prompt Generator</h1>
          <div class="text-lg text-text-secondary leading-relaxed space-y-4">
            <p>
              Build production-ready system prompts for Claude, GPT-4, and other AI platforms with our free modular prompt engineering tool. The System Prompt Generator helps developers, AI engineers, and businesses create structured, maintainable AI instructions using industry best practices.
            </p>
            <p>
              Design custom AI assistants, chatbots, and automation tools with clearly defined modules for identity, platform context, quality standards, request parsing, and response formatting. Features dynamic function builders, key-value mapping tools, and quality check processes.
            </p>
            <p>
              Perfect for enterprise AI deployment, custom GPT development, conversational AI applications, and AI-powered workflow automation. Export professional-grade system prompts that ensure consistent AI behavior, accurate response formatting, and scalable architecture.
            </p>
            <p>
              No prompt engineering expertise required - our intuitive interface guides you through creating effective AI instructions with modular components that can be updated, tested, and reused across projects.
            </p>
          </div>
        </div>

        <form id="prompt-generator-form" class="space-y-8">
          <!-- Core Identity Module -->
          <div class="bg-card-bg border border-text-secondary/20 rounded-xl p-6 md:p-8">
            <h2 class="text-2xl font-heading text-text mb-2">Core Identity Module</h2>
            <p class="text-sm text-text-secondary mb-4">
              Define the fundamental identity and purpose of the AI. This establishes who the AI is and what it does.
            </p>
            <input
              type="text"
              id="core-identity"
              name="core-identity"
              placeholder="e.g. You are a research bot for ABC Inc."
              class="w-full px-4 py-3 bg-card-bg border border-text-secondary/20 rounded-lg text-text placeholder-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"
            />
          </div>

          <!-- Platform Specifics Module -->
          <div class="bg-card-bg border border-text-secondary/20 rounded-xl p-6 md:p-8">
            <h2 class="text-2xl font-heading text-text mb-2">Platform Specifics Module</h2>
            <p class="text-sm text-text-secondary mb-4">
              Include information about the platform that may be relevant or inform responses. This helps the AI understand the context and environment it operates in.
            </p>
            <textarea
              id="platform-specifics"
              name="platform-specifics"
              rows="4"
              placeholder="Enter platform-specific information..."
              class="w-full px-4 py-3 bg-card-bg border border-text-secondary/20 rounded-lg text-text placeholder-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all resize-y"
            ></textarea>
          </div>

          <!-- Quality Standards -->
          <div class="bg-card-bg border border-text-secondary/20 rounded-xl p-6 md:p-8">
            <h2 class="text-2xl font-heading text-text mb-2">Quality Standards</h2>
            <p class="text-sm text-text-secondary mb-4">
              Define the standards and expectations for the AI's output quality, accuracy, and performance.
            </p>
            <textarea
              id="quality-standards"
              name="quality-standards"
              rows="4"
              placeholder="Enter quality standards..."
              class="w-full px-4 py-3 bg-card-bg border border-text-secondary/20 rounded-lg text-text placeholder-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all resize-y"
            ></textarea>
          </div>

          <!-- Understanding Your Role -->
          <div class="bg-card-bg border border-text-secondary/20 rounded-xl p-6 md:p-8">
            <h2 class="text-2xl font-heading text-text mb-2">Understanding Your Role</h2>
            <p class="text-sm text-text-secondary mb-4">
              Clarify the AI's role, responsibilities, and how it should interact with users and the system.
            </p>
            <textarea
              id="understanding-role"
              name="understanding-role"
              rows="4"
              placeholder="Enter role understanding..."
              class="w-full px-4 py-3 bg-card-bg border border-text-secondary/20 rounded-lg text-text placeholder-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all resize-y"
            ></textarea>
          </div>

          <!-- Dissecting Requests Module -->
          <div class="bg-card-bg border border-text-secondary/20 rounded-xl p-6 md:p-8">
            <h2 class="text-2xl font-heading text-text mb-2">Dissecting Requests Module</h2>
            <p class="text-sm text-text-secondary mb-4">
              Define how the AI should interpret and process incoming requests. This module includes notes about what the AI will receive and key-value pairs for mapping user inputs to specific values or actions.
            </p>
            
            <div class="mb-6">
              <label for="dissecting-notes" class="block text-sm font-medium text-text mb-2">Notes about what the AI will receive:</label>
              <textarea
                id="dissecting-notes"
                name="dissecting-notes"
                rows="3"
                placeholder="Enter notes about incoming requests..."
                class="w-full px-4 py-3 bg-card-bg border border-text-secondary/20 rounded-lg text-text placeholder-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all resize-y"
              ></textarea>
            </div>

            <div>
              <label class="block text-sm font-medium text-text mb-2">Example Request Format (Key-Value Pairs):</label>
              <p class="text-xs text-text-secondary mb-3">Enter the actual key names that will be used in requests. The values shown are examples to illustrate the format.</p>
              <div id="key-value-pairs" class="space-y-3 mb-4">
                <!-- Key-value pairs will be added here dynamically -->
              </div>
              <button
                type="button"
                id="add-key-value-btn"
                class="inline-flex items-center gap-2 px-4 py-2 bg-card-bg border border-text-secondary/20 rounded-lg text-text hover:border-accent/50 hover:bg-card-bg/80 transition-all text-sm"
              >
                <i class="fas fa-plus"></i>
                Add Key-Value Pair
              </button>
            </div>
          </div>

          <!-- Response Expectations Module -->
          <div class="bg-card-bg border border-text-secondary/20 rounded-xl p-6 md:p-8">
            <h2 class="text-2xl font-heading text-text mb-2">Response Expectations Module</h2>
            <p class="text-sm text-text-secondary mb-4">
              Define what the AI is expected to respond with. In this paradigm, the AI will be responding in preset functions like <code class="text-accent">response("string", num, num/1000, "string")</code>
            </p>
            
            <div>
              <label class="block text-sm font-medium text-text mb-2">Response Functions:</label>
              <div id="response-functions" class="space-y-6 mb-4">
                <!-- Functions will be added here dynamically -->
              </div>
              <button
                type="button"
                id="add-function-btn"
                class="inline-flex items-center gap-2 px-4 py-2 bg-card-bg border border-text-secondary/20 rounded-lg text-text hover:border-accent/50 hover:bg-card-bg/80 transition-all text-sm"
              >
                <i class="fas fa-plus"></i>
                Add Function
              </button>
            </div>
          </div>

          <!-- Further Instructions -->
          <div class="bg-card-bg border border-text-secondary/20 rounded-xl p-6 md:p-8">
            <h2 class="text-2xl font-heading text-text mb-2">Further Instructions</h2>
            <p class="text-sm text-text-secondary mb-4">
              Provide any additional instructions, guidelines, or special considerations for the AI's behavior and responses.
            </p>
            <textarea
              id="further-instructions"
              name="further-instructions"
              rows="4"
              placeholder="Enter further instructions..."
              class="w-full px-4 py-3 bg-card-bg border border-text-secondary/20 rounded-lg text-text placeholder-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all resize-y"
            ></textarea>
          </div>

          <!-- Quality Check Process -->
          <div class="bg-card-bg border border-text-secondary/20 rounded-xl p-6 md:p-8">
            <h2 class="text-2xl font-heading text-text mb-2">Quality Check Process</h2>
            <p class="text-sm text-text-secondary mb-4">
              Define the process or criteria the AI should use to verify the quality and accuracy of its responses before outputting them.
            </p>
            <textarea
              id="quality-check-process"
              name="quality-check-process"
              rows="4"
              placeholder="Enter quality check process..."
              class="w-full px-4 py-3 bg-card-bg border border-text-secondary/20 rounded-lg text-text placeholder-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all resize-y"
            ></textarea>
          </div>

          <!-- Generate Button -->
          <div class="flex justify-center">
            <button
              type="button"
              id="generate-prompt-btn"
              class="px-8 py-4 bg-gradient-to-r from-secondary to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
            >
              Generate System Prompt
            </button>
          </div>
        </form>

        <!-- Generated Prompt Output -->
        <div id="generated-prompt-container" class="mt-12 hidden">
          <div class="bg-card-bg border border-text-secondary/20 rounded-xl p-6 md:p-8">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-2xl font-heading text-text">Generated System Prompt</h2>
              <button
                type="button"
                id="copy-prompt-btn"
                class="inline-flex items-center gap-2 px-4 py-2 bg-card-bg border border-text-secondary/20 rounded-lg text-text hover:border-accent/50 hover:bg-card-bg/80 transition-all text-sm"
              >
                <i class="fas fa-copy"></i>
                Copy
              </button>
            </div>
            <pre id="generated-prompt" class="whitespace-pre-wrap text-sm text-text-secondary bg-card-bg border border-text-secondary/20 rounded-lg p-4 overflow-x-auto"></pre>
          </div>
        </div>
      </div>
    `;

    this.container.appendChild(section);
    this.setupForm();
    ScrollFade.init();
  }

  public reinitializeListeners(): void {
    // This method is called when prerendered content is preserved
    // It reattaches event listeners without recreating the DOM
    const appContainer = document.querySelector('#app') as HTMLElement;
    if (appContainer) {
      // Set container to the app container
      this.container = appContainer;
      // Reattach form listeners (skip adding initial key-value pair since content is already rendered)
      this.attachFormListeners();
    }
  }

  private setupForm(): void {
    // Add initial key-value pair
    this.addKeyValuePair();

    // Attach all form listeners
    this.attachFormListeners();
  }

  private attachFormListeners(): void {
    const form = this.container?.querySelector('#prompt-generator-form') as HTMLFormElement;
    const addKeyValueBtn = this.container?.querySelector('#add-key-value-btn');
    const addFunctionBtn = this.container?.querySelector('#add-function-btn');
    const copyBtn = this.container?.querySelector('#copy-prompt-btn');
    const generateBtn = this.container?.querySelector('#generate-prompt-btn');

    // Add key-value pair button
    addKeyValueBtn?.addEventListener('click', () => {
      this.addKeyValuePair();
    });

    // Add function button
    addFunctionBtn?.addEventListener('click', () => {
      this.addFunction();
    });

    // Generate button
    generateBtn?.addEventListener('click', () => {
      this.generatePrompt();
    });

    // Form submission (prevent default in case of Enter key)
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.generatePrompt();
    });

    // Copy button
    copyBtn?.addEventListener('click', () => {
      this.copyPrompt();
    });
  }

  private addKeyValuePair(): void {
    const container = this.container?.querySelector('#key-value-pairs');
    if (!container) return;

    const pairDiv = document.createElement('div');
    pairDiv.className = 'bg-primary/30 border border-text-secondary/20 rounded-lg p-4 space-y-3';
    pairDiv.innerHTML = `
      <div class="flex gap-3 items-start">
        <div class="flex-1">
          <label class="block text-xs font-medium text-text-secondary mb-1">Key (Actual Key Name):</label>
          <input
            type="text"
            placeholder="user-input"
            class="key-input w-full px-4 py-2 bg-card-bg border border-text-secondary/20 rounded-lg text-text placeholder-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all text-sm"
          />
        </div>
        <div class="flex items-center text-text-secondary pt-6">
          <span>:</span>
        </div>
        <div class="flex-1">
          <label class="block text-xs font-medium text-text-secondary mb-1">Example Value:</label>
          <input
            type="text"
            placeholder="value"
            class="example-input w-full px-4 py-2 bg-card-bg border border-text-secondary/20 rounded-lg text-text placeholder-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all text-sm"
          />
        </div>
        <button
          type="button"
          class="remove-pair-btn px-3 py-2 text-text-secondary hover:text-text transition-colors mt-6"
          aria-label="Remove pair"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div>
        <label class="block text-xs font-medium text-text-secondary mb-1">Input Element Definition:</label>
        <textarea
          placeholder="Define what this input element represents..."
          class="definition-input w-full px-4 py-2 bg-card-bg border border-text-secondary/20 rounded-lg text-text placeholder-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all text-sm resize-y"
          rows="2"
        ></textarea>
      </div>
    `;

    // Remove button handler
    const removeBtn = pairDiv.querySelector('.remove-pair-btn');
    removeBtn?.addEventListener('click', () => {
      pairDiv.remove();
    });

    container.appendChild(pairDiv);
  }

  private addFunction(): void {
    const container = this.container?.querySelector('#response-functions');
    if (!container) return;

    const functionDiv = document.createElement('div');
    functionDiv.className = 'bg-primary/30 border border-text-secondary/20 rounded-lg p-4';
    functionDiv.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <label class="block text-sm font-medium text-text mb-2">Function Name:</label>
        <button
          type="button"
          class="remove-function-btn px-3 py-1 text-text-secondary hover:text-text transition-colors text-sm"
          aria-label="Remove function"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>
      <input
        type="text"
        class="function-name-input w-full px-4 py-2 bg-card-bg border border-text-secondary/20 rounded-lg text-text placeholder-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all text-sm mb-4"
        placeholder="functionName"
      />
      <div class="mb-4">
        <label class="block text-xs font-medium text-text-secondary mb-1">What this function represents:</label>
        <textarea
          class="function-definition-input w-full px-4 py-2 bg-card-bg border border-text-secondary/20 rounded-lg text-text placeholder-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all text-sm resize-y"
          placeholder="Describe what this function does and when it should be used..."
          rows="2"
        ></textarea>
      </div>
      <div>
        <label class="block text-sm font-medium text-text mb-2">Parameters:</label>
        <div class="function-parameters space-y-2 mb-2">
          <!-- Parameters will be added here dynamically -->
        </div>
        <button
          type="button"
          class="add-parameter-btn inline-flex items-center gap-2 px-3 py-1 bg-card-bg border border-text-secondary/20 rounded-lg text-text hover:border-accent/50 hover:bg-card-bg/80 transition-all text-xs"
        >
          <i class="fas fa-plus"></i>
          Add Parameter
        </button>
      </div>
    `;

    // Remove function button handler
    const removeBtn = functionDiv.querySelector('.remove-function-btn');
    removeBtn?.addEventListener('click', () => {
      functionDiv.remove();
    });

    // Add parameter button handler
    const addParamBtn = functionDiv.querySelector('.add-parameter-btn');
    addParamBtn?.addEventListener('click', () => {
      this.addParameter(functionDiv);
    });

    container.appendChild(functionDiv);
  }

  private addParameter(functionDiv: HTMLElement): void {
    const container = functionDiv.querySelector('.function-parameters');
    if (!container) return;

    const paramDiv = document.createElement('div');
    paramDiv.className = 'bg-primary/20 border border-text-secondary/20 rounded-lg p-3 space-y-2';
    paramDiv.innerHTML = `
      <div class="flex gap-2 items-start">
        <div class="flex gap-2 items-center flex-1">
          <select class="param-type-select px-3 py-2 bg-card-bg border border-text-secondary/20 rounded-lg text-text focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all text-sm" style="min-width: 140px;">
            <option value="string">string</option>
            <option value="num">num</option>
            <option value="likelihood">likelihood</option>
          </select>
          <div class="param-type-display px-3 py-2 bg-card-bg/50 border border-text-secondary/20 rounded-lg text-text-secondary text-sm flex-1">
            <span class="param-type-text">string</span>
          </div>
        </div>
        <button
          type="button"
          class="remove-parameter-btn px-2 py-2 text-text-secondary hover:text-text transition-colors"
          aria-label="Remove parameter"
        >
          <i class="fas fa-times text-xs"></i>
        </button>
      </div>
      <div>
        <label class="block text-xs font-medium text-text-secondary mb-1">What this argument represents:</label>
        <input
          type="text"
          class="param-definition-input w-full px-3 py-2 bg-card-bg border border-text-secondary/20 rounded-lg text-text placeholder-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all text-sm"
          placeholder="Describe what this argument represents..."
        />
      </div>
    `;

    const typeSelect = paramDiv.querySelector('.param-type-select') as HTMLSelectElement;
    const typeDisplay = paramDiv.querySelector('.param-type-text') as HTMLElement;

    // Update type display based on selection
    const updateParameterType = () => {
      const type = typeSelect.value;
      if (type === 'string') {
        typeDisplay.textContent = '"string..."';
      } else if (type === 'num') {
        typeDisplay.textContent = 'num';
      } else if (type === 'likelihood') {
        typeDisplay.textContent = 'likelihood/1000';
      }
    };

    typeSelect.addEventListener('change', updateParameterType);
    updateParameterType();

    // Remove parameter button handler
    const removeBtn = paramDiv.querySelector('.remove-parameter-btn');
    removeBtn?.addEventListener('click', () => {
      paramDiv.remove();
    });

    container.appendChild(paramDiv);
  }

  private generatePrompt(): void {
    const coreIdentity = (this.container?.querySelector('#core-identity') as HTMLInputElement)?.value.trim();
    const platformSpecifics = (this.container?.querySelector('#platform-specifics') as HTMLTextAreaElement)?.value.trim();
    const qualityStandards = (this.container?.querySelector('#quality-standards') as HTMLTextAreaElement)?.value.trim();
    const understandingRole = (this.container?.querySelector('#understanding-role') as HTMLTextAreaElement)?.value.trim();
    const dissectingNotes = (this.container?.querySelector('#dissecting-notes') as HTMLTextAreaElement)?.value.trim();
    const furtherInstructions = (this.container?.querySelector('#further-instructions') as HTMLTextAreaElement)?.value.trim();
    const qualityCheckProcess = (this.container?.querySelector('#quality-check-process') as HTMLTextAreaElement)?.value.trim();

    // Get key-value pairs
    const keyValuePairs: Array<{ key: string; example: string; definition: string }> = [];
    const pairDivs = this.container?.querySelectorAll('#key-value-pairs > div');
    pairDivs?.forEach((div) => {
      const keyInput = div.querySelector('.key-input') as HTMLInputElement;
      const exampleInput = div.querySelector('.example-input') as HTMLInputElement;
      const definitionInput = div.querySelector('.definition-input') as HTMLTextAreaElement;
      const key = keyInput?.value.trim() || '';
      const example = exampleInput?.value.trim() || '';
      const definition = definitionInput?.value.trim() || '';
      if (key || example || definition) {
        keyValuePairs.push({ key, example, definition });
      }
    });

    // Build the prompt
    let prompt = '';

    if (coreIdentity) {
      prompt += `Core Identity Module\n\n`;
      prompt += `The following statement defines your fundamental identity and primary purpose. All your actions, responses, and behaviors must align with this core identity.\n\n`;
      prompt += `${coreIdentity}\n\n\n`;
    }

    if (platformSpecifics) {
      prompt += `Platform Specifics Module\n\n`;
      prompt += `The following information describes the platform, environment, or system you operate within. Consider these details when formulating responses and making decisions.\n\n`;
      prompt += `${platformSpecifics}\n\n\n`;
    }

    if (qualityStandards) {
      prompt += `Quality Standards\n\n`;
      prompt += `The following standards define the benchmarks and criteria your outputs must meet. These are non-negotiable quality bars that every response must satisfy.\n\n`;
      prompt += `${qualityStandards}\n\n\n`;
    }

    if (understandingRole) {
      prompt += `Understanding Your Role\n\n`;
      prompt += `The following description clarifies your responsibilities, scope, and how you should interact with the system and users.\n\n`;
      prompt += `${understandingRole}\n\n\n`;
    }

    if (dissectingNotes || keyValuePairs.length > 0) {
      prompt += `Dissecting Requests Module\n\n`;
      prompt += `The following describes the structure and format of incoming requests you will receive.\n\n`;
      if (dissectingNotes) {
        prompt += `${dissectingNotes}\n\n`;
      }
      if (keyValuePairs.length > 0) {
        // Show example request format
        prompt += `Example Request Format:\n\n`;
        prompt += `The following shows the key names you will receive, with example values to illustrate the format:\n\n`;
        keyValuePairs.forEach(({ key, example }) => {
          if (key && example) {
            prompt += `${key}: ${example}\n`;
          } else if (key) {
            prompt += `${key}:\n`;
          }
        });
        prompt += `\n`;
        
        // Show input element definitions
        const definitions = keyValuePairs.filter(({ definition }) => definition);
        if (definitions.length > 0) {
          prompt += `Input Element Definitions:\n\n`;
          prompt += `The following defines each input element and how you should interpret it:\n\n`;
          definitions.forEach(({ key, definition }) => {
            if (key && definition) {
              prompt += `${key}: ${definition}\n`;
            }
          });
          prompt += `\n\n`;
        }
      }
    }

    // Get response functions
    const responseFunctions: Array<{ 
      name: string; 
      parameters: string[]; 
      definition?: string;
      argumentDefinitions: Array<{ position: number; definition: string; type: string }>;
    }> = [];
    const functionDivs = this.container?.querySelectorAll('#response-functions > div');
    functionDivs?.forEach((div) => {
      const nameInput = div.querySelector('.function-name-input') as HTMLInputElement;
      const definitionInput = div.querySelector('.function-definition-input') as HTMLTextAreaElement;
      const paramDivs = div.querySelectorAll('.function-parameters > div');
      const name = nameInput?.value.trim();
      const definition = definitionInput?.value.trim();
      const parameters: string[] = [];
      const argumentDefinitions: Array<{ position: number; definition: string; type: string }> = [];
      
      paramDivs?.forEach((paramDiv, index) => {
        const typeSelect = paramDiv.querySelector('.param-type-select') as HTMLSelectElement;
        const paramDefInput = paramDiv.querySelector('.param-definition-input') as HTMLInputElement;
        const type = typeSelect?.value;
        const paramDef = paramDefInput?.value.trim();
        
        // Add parameter type to the function signature
        if (type === 'string') {
          parameters.push('"string..."');
        } else if (type === 'num') {
          parameters.push('num');
        } else if (type === 'likelihood') {
          parameters.push('likelihood/1000');
        }
        
        if (paramDef) {
          argumentDefinitions.push({ position: index + 1, definition: paramDef, type });
        } else {
          argumentDefinitions.push({ position: index + 1, definition: '', type });
        }
      });

      if (name || parameters.length > 0 || definition) {
        responseFunctions.push({ 
          name: name || 'unnamed', 
          parameters,
          definition,
          argumentDefinitions
        });
      }
    });

    if (responseFunctions.length > 0) {
      prompt += `Response Expectations Module\n\n`;
      prompt += `You must respond using ONLY the following preset functions. Each function has specific parameters that must appear in the exact order specified.\n\n`;
      prompt += `Parameter Type Definitions:\n\n\n`;
      prompt += `"string" - Text enclosed in double quotes\n\n`;
      prompt += `num - Raw integer or decimal without quotes\n\n`;
      prompt += `num/1000 - Integer representing probability (divided by 1000 to get decimal value)\n\n\n`;
      prompt += `Required Response Functions:\n\n`;
      prompt += `The following functions define your complete response format. Your entire response must consist of these function calls with correct parameter types in the correct order.\n\n`;
      responseFunctions.forEach(({ name, parameters }) => {
        const paramsStr = parameters.length > 0 
          ? parameters.join(', ') 
          : '';
        prompt += `${name}(${paramsStr})\n`;
      });
      prompt += `\n`;
      
      // Add function and argument definitions
      prompt += `Function and Argument Definitions:\n\n`;
      prompt += `The following defines what each function and its arguments represent:\n\n`;
      responseFunctions.forEach(({ name, definition, argumentDefinitions }) => {
        prompt += `${name}:\n`;
        if (definition) {
          prompt += `  Purpose: ${definition}\n`;
        }
        if (argumentDefinitions.length > 0) {
          argumentDefinitions.forEach(({ position, definition: argDef, type }) => {
            const displayType = type === 'string' ? '"string..."' : type;
            if (argDef) {
              prompt += `  Argument ${position} (${displayType}): ${argDef}\n`;
            } else {
              prompt += `  Argument ${position} (${displayType})\n`;
            }
          });
        }
        prompt += `\n`;
      });
      prompt += `\n`;
    }

    if (furtherInstructions) {
      prompt += `Further Instructions\n\n`;
      prompt += `The following provides additional guidelines that supplement all other modules.\n\n`;
      prompt += `${furtherInstructions}\n\n\n`;
    }

    if (qualityCheckProcess) {
      prompt += `Quality Check Process\n\n`;
      prompt += `Before outputting any response, verify your output against the following criteria. If your response fails any check, revise it until all criteria are satisfied.\n\n`;
      prompt += `${qualityCheckProcess}\n\n\n`;
    }

    // Display the generated prompt
    const outputContainer = this.container?.querySelector('#generated-prompt-container');
    const outputElement = this.container?.querySelector('#generated-prompt') as HTMLElement;

    if (outputContainer && outputElement) {
      outputElement.textContent = prompt.trim() || 'Please fill in at least one field to generate a prompt.';
      outputContainer.classList.remove('hidden');
      outputContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  private copyPrompt(): void {
    const promptElement = this.container?.querySelector('#generated-prompt') as HTMLElement;
    if (!promptElement) return;

    const text = promptElement.textContent || '';
    navigator.clipboard.writeText(text).then(() => {
      const copyBtn = this.container?.querySelector('#copy-prompt-btn') as HTMLElement;
      if (copyBtn) {
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
          copyBtn.innerHTML = originalHTML;
        }, 2000);
      }
    });
  }
}

