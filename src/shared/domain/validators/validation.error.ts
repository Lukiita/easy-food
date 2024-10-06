import { DomainError, ErrorCodes } from '../errors';
import { FieldsErrors } from "./validator-fields.interface";

export class EntityValidationError extends DomainError {
  constructor(public errors: FieldsErrors[], message = "Validation Error") {
    super(message, ErrorCodes.DOMAIN_ENTITY_VALIDATION_ERROR, { errors });
  }
}
