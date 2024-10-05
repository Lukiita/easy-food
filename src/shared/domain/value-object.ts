import { isEqual } from 'lodash';

export abstract class ValueObject {
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
