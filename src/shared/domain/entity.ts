import { v4 as uuidv4 } from 'uuid';
export type BaseEntityConstructorProps = {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export abstract class BaseEntity {
  public readonly id: string;
  public readonly createdAt: Date;
  public updatedAt: Date;

  constructor(props: BaseEntityConstructorProps) {
    this.id = props.id || uuidv4();
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = props.updatedAt || new Date();
  }
}
