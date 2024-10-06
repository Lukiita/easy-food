import { subDays, subHours } from 'date-fns';
import { Produto, ProdutoCategoria } from '../entities';

describe('Produto Unit Tests', () => {
  it('should create a new Produto', () => {
    const produto = Produto.create({
      name: 'Produto 1',
      price: 10,
      category: ProdutoCategoria.LANCHE,
      description: 'Product description',
    });

    expect(produto.id).toBeDefined();
    expect(produto.createdAt).toBeInstanceOf(Date);
    expect(produto.updatedAt).toBeInstanceOf(Date);
    expect(produto.toJSON()).toEqual({
      id: produto.id,
      name: 'Produto 1',
      price: 10,
      category: ProdutoCategoria.LANCHE,
      description: 'Product description',
      createdAt: produto.createdAt,
      updatedAt: produto.updatedAt,
    });
  });

  it('should restore a Produto', () => {
    const createdAt = subDays(new Date(), 10);
    const updatedAt = subHours(new Date(), 5);
    const restoredProduto = Produto.restore({
      id: 'd6688697-edfb-4401-9711-3260c44f6a1c',
      name: 'Produto 1',
      price: 10,
      category: ProdutoCategoria.LANCHE,
      description: 'Product description',
      createdAt,
      updatedAt,
    });
    expect(restoredProduto.toJSON()).toEqual({
      id: 'd6688697-edfb-4401-9711-3260c44f6a1c',
      name: 'Produto 1',
      price: 10,
      category: ProdutoCategoria.LANCHE,
      description: 'Product description',
      createdAt,
      updatedAt,
    });
  });

  describe('Produto Name Validation', () => {
    it('should not return an error for valid Produto name', () => {
      const produto = Produto.create({
        name: 'Produto 1',
        price: 10,
        category: ProdutoCategoria.LANCHE,
        description: 'Product description',
      });

      expect(produto.notification.hasErrors()).toBeFalsy();
    });

    test('should return an error for invalid Produto name', () => {
      const produto = Produto.create({
        name: 'Invalid Name@',
        price: 10,
        category: ProdutoCategoria.LANCHE,
        description: 'Product description',
      });

      expect(produto.notification.hasErrors()).toBeTruthy();
      expect(produto.notification).notificationContainsErrorMessages([
        {
          name: ['Name must contain only letters and numbers'],
        },
      ]);
    });
  });
});
