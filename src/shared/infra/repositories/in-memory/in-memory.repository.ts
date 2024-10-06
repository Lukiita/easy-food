import { BaseEntity, EntityNotFoundError, Repository } from '../../../domain';

export abstract class InMemoryRepository<E extends BaseEntity> implements Repository<E> {
  protected entities: E[] = [];

  async save(entity: E): Promise<void> {
    this.entities.push(entity);
  }

  async update(entity: E): Promise<void> {
    const index = this.entities.findIndex((e) => e.id === entity.id);
    this.entities[index] = entity;
  }

  async delete(id: string): Promise<void> {
    const index = this.entities.findIndex((e) => e.id === id);
    this.entities.splice(index, 1);
  }

  async findById(id: string): Promise<E> {
    const entity = this.entities.find((e) => e.id === id);
    if (!entity) {
      throw new EntityNotFoundError(`Entity`, id);
    }

    return entity;
  }

  async findAll(): Promise<E[]> {
    return this.entities;
  }
}
