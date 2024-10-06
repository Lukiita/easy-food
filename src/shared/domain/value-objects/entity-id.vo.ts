import { v4 as uuidv4, validate as uuidValidate } from 'uuid';
import { ValueObject } from './value-object';

export class EntityId extends ValueObject {
  public readonly value: string;

  constructor(value?: string) {
    super();
    this.value = value || uuidv4();
    this.validate();
  }

  private validate(): void {
    if (!uuidValidate(this.value)) {
      this.notification.addError('ID inválido');
    }
  }
}
