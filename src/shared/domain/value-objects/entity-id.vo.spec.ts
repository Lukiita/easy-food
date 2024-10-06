import { validate as uuidValidate } from 'uuid';
import { EntityId } from './entity-id.vo';

describe('EntityId Unit Tests', () => {
  it('should create a valid entity id with a given value', () => {
    let entityId = new EntityId();
    expect(entityId.value).toBeDefined();
    expect(uuidValidate(entityId.value)).toBeTruthy();
    expect(entityId.hasErrors()).toBeFalsy();

    entityId = new EntityId('123e4567-e89b-12d3-a456-426614174000');
    expect(entityId.value).toBeDefined();
    expect(entityId.value).toBe('123e4567-e89b-12d3-a456-426614174000');
    expect(entityId.hasErrors()).toBeFalsy();
  });

  it('should create an invalid entity id with a given value', () => {
    const entityId = new EntityId('invalid-id');
    expect(entityId.value).toBeDefined();
    expect(entityId.value).toBe('invalid-id');
    expect(entityId.hasErrors()).toBeTruthy();
  });
});
