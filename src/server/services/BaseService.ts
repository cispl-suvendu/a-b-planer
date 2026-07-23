// BaseService acts as a marker or common functionality provider for all services.
// Services contain business logic, and orchestrate calls to repositories and external APIs.

import { logger } from '@/lib/logger';

export abstract class BaseService {
  protected logger = logger;
}
