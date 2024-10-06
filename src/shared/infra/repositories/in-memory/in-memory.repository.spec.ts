import { BaseEntity, EntityNotFoundError } from '../../../../shared/domain';
import { InMemoryRepository } from './in-memory.repository';

class EntityStub extends BaseEntity {
  public value: string;

  constructor(value: string, id?: string) {
    super({ id });
    this.value = value;
  }

  public toJSON() {
    return {
      id: this.id,
    };
  }
}

class InMemoryRepositoryStub extends InMemoryRepository<EntityStub> { }

describe('InMemoryRepository Unit Tests', () => {
  it('should save entity', async () => {
    const repository = new InMemoryRepositoryStub();
    const entity = new EntityStub('Value');

    expect(repository['entities']).toHaveLength(0);
    await repository.save(entity);
    expect(repository['entities']).toHaveLength(1);
  });

  it('should find entity by id', async () => {
    const repository = new InMemoryRepositoryStub();
    const entity = new EntityStub('Value');

    await repository.save(entity);
    const entityFound = await repository.findById(entity.id);
    expect(entityFound.value).toBe(entity.value);
  });

  it('should throw error when entity not found', async () => {
    const repository = new InMemoryRepositoryStub();
    await expect(repository.findById('id')).rejects.toThrow(EntityNotFoundError);
  });

  it('should update entity', async () => {
    const repository = new InMemoryRepositoryStub();
    const entity = new EntityStub('value');

    await repository.save(entity);
    entity.value = 'newValue';
    await repository.update(entity);

    const entityFound = await repository.findById(entity.id);
    expect(entityFound.value).toBe('newValue');
  });

  it('should delete entity', async () => {
    const repository = new InMemoryRepositoryStub();
    const entity = new EntityStub('value');

    await repository.save(entity);
    expect(repository['entities']).toHaveLength(1);

    await repository.delete(entity.id);
    expect(repository['entities']).toHaveLength(0);
  });

  it('should find all entities', async () => {
    const repository = new InMemoryRepositoryStub();
    const entity1 = new EntityStub('value1');
    const entity2 = new EntityStub('value2');

    await repository.save(entity1);
    await repository.save(entity2);

    const entities = await repository.findAll();
    expect(entities).toHaveLength(2);
    expect(entities[0].value).toBe('value1');
    expect(entities[1].value).toBe('value2');
  });

});
