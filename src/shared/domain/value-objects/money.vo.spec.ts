import { Money } from './money.vo';

describe('Money Testes Unitários', () => {

  test
    .each([
      [0, 0],
      [10, 10],
      [7.5, 7.5],
      [8.76, 8.76],
      [14.78598, 14.79],
    ])(`should create an instance correctly: %s`, (value, expected) => {
      const money = new Money(value);
      expect(money).toBeTruthy();
      expect(money.value).toBe(expected);
    });

  test('should be invalid when creating an instance with a negative value', () => {
    const money = new Money(-1);
    expect(money.hasErrors()).toBeTruthy();
    expect(money.notification).notificationContainsErrorMessages([
      { value: ['The value cannot be negative'] }
    ]);
  });

  test('should add correctly', () => {
    const money = new Money(10);
    const newValue = money.add(5);
    expect(newValue.value).toBe(15);
  });

  test('should subtract correctly', () => {
    const money = new Money(10);
    const newValue = money.subtract(5);
    expect(newValue.value).toBe(5);
  });

  test('should multiply correctly', () => {
    const money = new Money(10);
    const newValue = money.multiply(5);
    expect(newValue.value).toBe(50);
  });

  test('should divide correctly', () => {
    const money = new Money(10);
    const newValue = money.divide(5);
    expect(newValue.value).toBe(2);
  });

  test
    .each([
      [0, 'R$ 0,00'],
      [10, 'R$ 10,00'],
      [7.5, 'R$ 7,50'],
      [8.76, 'R$ 8,76'],
      [14.78598, 'R$ 14,79'],
      [1000, 'R$ 1.000,00'],
      [1000.5, 'R$ 1.000,50'],
      [10000, 'R$ 10.000,00'],
      [100000, 'R$ 100.000,00'],
      [1000000, 'R$ 1.000.000,00'],
      [10000000, 'R$ 10.000.000,00'],
      [100000000, 'R$ 100.000.000,00']
    ])
    ('should return the formatted value correctly: %s', (value, expected) => {
      const money = new Money(value);
      const formattedValue = money.toString();
      expect(formattedValue).toBe(expected);
    });
});
