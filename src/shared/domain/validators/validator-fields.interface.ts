import { Notification } from './notification';

export type FieldsErrors = | string |
{
  [field: string]: string[];
};

export interface ValidatorFields {
  validate(notification: Notification, data: any, fields: string[]): boolean;
}
