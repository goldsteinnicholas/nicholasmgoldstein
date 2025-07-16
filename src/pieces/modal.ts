export class Modal {
    private container: HTMLElement | null = null;
    private modalElement: HTMLElement | null = null;
    private isOpen: boolean = false;
  
    constructor(private id: string) {}
  
    public mount(container: HTMLElement): void {
      this.container = container;
      
      const modal = document.createElement('div');
      modal.id = this.id;
      modal.className = 'fixed inset-0 z-50 hidden';
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('role', 'dialog');
      
      // Create overlay and modal separately
      const overlay = document.createElement('div');
      overlay.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity';
      
      const modalContent = document.createElement('div');
      modalContent.className = 'fixed inset-0 z-10 overflow-y-auto';
      modalContent.innerHTML = `
        <div class="flex min-h-full items-center justify-center p-4">
          <div class="relative transform overflow-hidden rounded-2xl bg-card-bg border border-subtle shadow-xl transition-all w-full max-w-lg backdrop-blur-md">
            <!-- Close button -->
            <button class="absolute right-4 top-4 text-text-secondary hover:text-text transition-colors duration-300">
              <i class="fas fa-times text-xl"></i>
            </button>
            
            <!-- Content container -->
            <div class="p-6 sm:p-8">
              <div class="modal-content"></div>
            </div>
          </div>
        </div>
      `;
      
      modal.appendChild(overlay);
      modal.appendChild(modalContent);
      
      this.container.appendChild(modal);
      this.modalElement = modal;
      this.setupEventListeners();
    }
  
    private setupEventListeners(): void {
      if (!this.modalElement) return;
  
      // Close on overlay click
      const modalContent = this.modalElement.querySelector('.flex.min-h-full');
      modalContent?.addEventListener('click', (e) => {
        if (e.target === modalContent) {
          this.close();
        }
      });
  
      // Close on X button click
      const closeButton = this.modalElement.querySelector('button');
      closeButton?.addEventListener('click', () => this.close());
  
      // Close on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.close();
        }
      });
    }
  
    public open(content: string | HTMLElement): void {
      if (!this.modalElement) return;
      
      const contentContainer = this.modalElement.querySelector('.modal-content');
      if (!contentContainer) return;
  
      // Set content
      if (typeof content === 'string') {
        contentContainer.innerHTML = content;
      } else {
        contentContainer.innerHTML = '';
        contentContainer.appendChild(content);
      }
  
      // Show modal with animation
      this.modalElement.classList.remove('hidden');
      this.isOpen = true;
  
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    }
  
    public close(): void {
      if (!this.modalElement) return;
      
      this.modalElement.classList.add('hidden');
      this.isOpen = false;
      
      // Restore body scroll
      document.body.style.overflow = '';
    }
  }