import { BaseEntity } from './entities';

export interface Repository<E extends BaseEntity> {
  save(entity: E): Promise<void>;
  update(entity: E): Promise<void>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<E | null>;
  findAll(): Promise<E[]>;
}
