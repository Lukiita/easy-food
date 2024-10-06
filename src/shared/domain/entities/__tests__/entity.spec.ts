import { validate as uuidValidate } from 'uuid';
import { BaseEntity } from '../entity';

class StubEntity extends BaseEntity {
  toJSON() {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

describe('BaseEntity Unit Test', () => {
  test('should create an entity with a valid UUID and timestamps', () => {
    const entity = new StubEntity({});
    expect(entity.id).toBeDefined();
    expect(uuidValidate(entity.id)).toBe(true);
    expect(entity.notification.errors.size).toBe(0);
    expect(entity.createdAt).toBeInstanceOf(Date);
    expect(entity.updatedAt).toBeInstanceOf(Date);
  });
});
