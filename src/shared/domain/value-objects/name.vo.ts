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
      this.notification.addError('Name is required', 'name');
      return;
    }

    if (this.value?.length < 3) {
      this.notification.addError('Name must be at least 3 characters long', 'name');
    }

    if (this.value?.length > 100) {
      this.notification.addError('Name must be at most 100 characters long', 'name');
    }

    const nameRegex = /^[a-zA-Z0-9\s]+$/;
    if (!nameRegex.test(this.value)) {
      this.notification.addError('Name must contain only letters and numbers', 'name');
    }
  }
}
