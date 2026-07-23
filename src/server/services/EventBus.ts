import { EventEmitter } from 'events';

class EventBus extends EventEmitter {
  constructor() {
    super();
    // Increase max listeners since many clients might connect via SSE
    this.setMaxListeners(100);
  }
}

// Export a singleton instance
export const eventBus = new EventBus();
