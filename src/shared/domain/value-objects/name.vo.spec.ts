import { Name } from './name.vo';

describe('Name Unit Tests', () => {
  it('should not return an error for valid Name', () => {
    const name = new Name('Valid Name');

    expect(name.notification.hasErrors()).toBeFalsy();
    expect(name.value).toBe('Valid Name');
  });

  test
    .each([
      [null, 'Name is required'],
      ['', 'Name is required'],
      [undefined, 'Name is required'],
      ['P1', 'Name must be at least 3 characters long'],
      ['P'.repeat(101), 'Name must be at most 100 characters long'],
      ['Produto 1@', 'Name must contain only letters and numbers'],
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
