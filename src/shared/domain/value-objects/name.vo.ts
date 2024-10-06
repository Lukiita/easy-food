import { ValueObject } from './value-object';

export class Name extends ValueObject<string> {
  public readonly value: string;

  constructor(value: string) {
    super();
    this.value = value;
    this.validate();
  }

  private validate(): void {
    if (!this.value) {
      this.notification.addError('Nome é obrigatório', 'name');
      return;
    }

    if (this.value?.length < 3) {
      this.notification.addError('Nome deve ter no mínimo 3 caracteres', 'name');
    }

    if (this.value?.length > 100) {
      this.notification.addError('Nome deve ter no máximo 100 caracteres', 'name');
    }

    const nameRegex = /^[a-zA-Z0-9\s]+$/;
    if (!nameRegex.test(this.value)) {
      this.notification.addError('Nome deve conter apenas letras e números', 'name');
    }
  }
}
