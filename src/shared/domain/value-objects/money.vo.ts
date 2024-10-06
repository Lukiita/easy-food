import currency from "currency.js";
import { ValueObject } from './value-object';

export class Money extends ValueObject<number> {
  private readonly _currency: currency;

  constructor(amount: number) {
    super();
    this._currency = currency(amount, { symbol: 'R$ ', decimal: ',', separator: '.' });
    this.validate();
  }

  public get value(): number {
    return this._currency.value;
  }

  private validate(): void {
    if (this._currency.value < 0) {
      this.notification.addError('The value cannot be negative', 'value');
    }
  }

  public add(value: number): Money {
    const novoValor = this._currency.add(value);
    return new Money(novoValor.value);
  }

  public subtract(value: number): Money {
    const novoValor = this._currency.subtract(value);
    return new Money(novoValor.value);
  }

  public multiply(value: number): Money {
    const novoValor = this._currency.multiply(value);
    return new Money(novoValor.value);
  }

  public divide(value: number): Money {
    const novoValor = this._currency.divide(value);
    return new Money(novoValor.value);
  }

  public toString(): string {
    return this._currency.format({ symbol: 'R$ ', decimal: ',', separator: '.' });
  }
}
