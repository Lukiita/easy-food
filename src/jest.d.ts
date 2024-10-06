import { FieldsErrors } from './shared';

declare global {
  namespace jest {
    interface Matchers<R> {
      notificationContainsErrorMessages: (expected: Array<FieldsErrors>) => R;
    }
  }
}
