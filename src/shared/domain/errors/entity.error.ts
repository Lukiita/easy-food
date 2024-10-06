import { DomainError } from './base-error';
import { ErrorCodes } from './error-codes';

export class EntityValidationError extends DomainError {
  constructor(message: string) {
    super(message, ErrorCodes.DOMAIN_ENTITY_VALIDATION_ERROR);
  }
}
