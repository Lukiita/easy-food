import { Name } from './name.vo';

describe('Name Unit Tests', () => {
  it('should not return an error for valid Name', () => {
    const name = new Name('Valid Name');

    expect(name.notification.hasErrors()).toBeFalsy();
    expect(name.value).toBe('Valid Name');
  });

  test
    .each([
      [null, 'Nome é obrigatório'],
      ['', 'Nome é obrigatório'],
      [undefined, 'Nome é obrigatório'],
      ['P1', 'Nome deve ter no mínimo 3 caracteres'],
      ['P'.repeat(101), 'Nome deve ter no máximo 100 caracteres'],
      ['Produto 1@', 'Nome deve conter apenas letras e números'],
    ])('should return an error for invalid Produto name: %s', (value, message) => {
      const name = new Name(value as any);

      expect(name.notification.hasErrors()).toBeTruthy();
      expect(name.notification).notificationContainsErrorMessages([
        {
          name: [message],
        },
      ]);
    });
});
