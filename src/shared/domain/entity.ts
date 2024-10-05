import { v4 as uuidv4 } from 'uuid';

export type BaseEntityConstructorProps = {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type BaseEntityRestoreProps = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type BaseEntityProps = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};
export abstract class BaseEntity<T extends BaseEntityProps = any> {
  public readonly id: string;
  public readonly createdAt: Date;
  protected _updatedAt: Date;

  constructor(props: BaseEntityConstructorProps) {
    this.id = props.id || uuidv4();
    this.createdAt = props.createdAt || new Date();
    this._updatedAt = props.updatedAt || new Date();
  }

  public get updatedAt(): Date {
    return this._updatedAt;
  }

  abstract toJSON(): T;
}
