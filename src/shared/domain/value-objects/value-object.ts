import { isEqual } from 'lodash';
import { Notification } from '../validators';

export abstract class ValueObject<T = any> {
  public readonly notification = new Notification();
  abstract value: T;

  public hasErrors(): boolean {
    return this.notification.hasErrors();
  }

  public equals(object: ValueObject): boolean {
    if (object === null || object === undefined) {
      return false;
    }

    if (object.constructor.name !== this.constructor.name) {
      return false;
    }

    return isEqual(this, object);
  };
}
