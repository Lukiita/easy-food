import { Notification } from '../notification';

describe('Notification Unit Test', () => {
  test('should create a new Notification', () => {
    const notification = new Notification();
    expect(notification.errors.size).toBe(0);
  });

  describe('addError', () => {
    it('should add a new error to Notification', () => {
      const notification = new Notification();
      notification.addError('Error message', 'field');
      expect(notification.toJSON()).toEqual([
        {
          field: ['Error message']
        }
      ]);

      notification.addError('Error message 2', 'field');
      expect(notification.toJSON()).toEqual([
        {
          field: ['Error message', 'Error message 2']
        }
      ]);

      notification.addError('Error message 3', 'field2');
      expect(notification.toJSON()).toEqual([
        {
          field: ['Error message', 'Error message 2']
        },
        {
          field2: ['Error message 3']
        }
      ]);
    });

    it('should add a new error to Notification without field', () => {
      const notification = new Notification();
      notification.addError('Error message');
      expect(notification.toJSON()).toEqual(['Error message']);

      notification.addError('Error message 2');
      expect(notification.toJSON()).toEqual(['Error message', 'Error message 2']);

      notification.addError('Error message 3', 'field2');
      expect(notification.toJSON()).toEqual([
        'Error message',
        'Error message 2',
        {
          field2: ['Error message 3']
        }
      ]);
    });
  });

  it('should copy errors from another Notification', () => {
    const notification = new Notification();
    notification.addError('Error message', 'field');
    notification.addError('Error message 2', 'field');
    notification.addError('Error message 3', 'field2');

    const notification2 = new Notification();
    notification2.copyErrors(notification);
    expect(notification2.toJSON()).toEqual([
      {
        field: ['Error message', 'Error message 2']
      },
      {
        field2: ['Error message 3']
      }
    ]);
  });

  it('should copy errors with custom field from another Notification', () => {
    const notification = new Notification();
    notification.addError('Error message', 'field');
    notification.addError('Error message 2', 'field');
    notification.addError('Error message 3', 'field2');

    const notification2 = new Notification();
    notification2.copyErrorsWithCustomField(notification, 'customField');
    notification2.addError('Error message 4', 'field3');
    expect(notification2.toJSON()).toEqual([
      {
        customField: ['Error message', 'Error message 2', 'Error message 3']
      },
      {
        field3: ['Error message 4']
      }
    ]);
  });

  describe('setError', () => {
    it('should set a new error to Notification', () => {
      const notification = new Notification();
      notification.setError('Error message', 'field');
      expect(notification.toJSON()).toEqual([
        {
          field: ['Error message']
        }
      ]);

      notification.setError('Error message 2', 'field');
      expect(notification.toJSON()).toEqual([
        {
          field: ['Error message 2']
        }
      ]);

      notification.setError('Error message 3', 'field2');
      expect(notification.toJSON()).toEqual([
        {
          field: ['Error message 2']
        },
        {
          field2: ['Error message 3']
        }
      ]);
    });

    it('should set a new error to Notification without field', () => {
      const notification = new Notification();
      notification.setError('Error message');
      expect(notification.toJSON()).toEqual(['Error message']);

      notification.setError('Error message 2');
      expect(notification.toJSON()).toEqual(['Error message', 'Error message 2']);

      notification.setError('Error message 3', 'field2');
      expect(notification.toJSON()).toEqual([
        'Error message',
        'Error message 2',
        {
          field2: ['Error message 3']
        }
      ]);

      notification.setError(['Error message 4', 'Error message 5']);
      expect(notification.toJSON()).toEqual([
        'Error message',
        'Error message 2',
        {
          field2: ['Error message 3']
        },
        'Error message 4',
        'Error message 5',
      ]);
    });
  });

  it('should check if Notification has errors', () => {
    const notification = new Notification();
    expect(notification.hasErrors()).toBeFalsy();

    notification.setError('Error message');
    expect(notification.hasErrors()).toBeTruthy();
  });

  it('should clear errors from Notification', () => {
    const notification = new Notification();
    notification.setError('Error message');
    expect(notification.hasErrors()).toBeTruthy();

    notification.clearErrors();
    expect(notification.hasErrors()).toBeFalsy();
  });
});
