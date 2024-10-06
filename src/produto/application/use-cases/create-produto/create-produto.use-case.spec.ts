import { ProdutoCategoria, ProdutoRepository } from '../../../domain';
import { ProdutoInMemoryrepository } from '../../../infra';
import { CreateProdutoUseCase } from './create-produto.use-case';

describe('CreateProdutoUseCase E2E Tests', () => {
  let createProdutoUseCase: CreateProdutoUseCase;
  let produtoRepository: ProdutoRepository;
  beforeEach(() => {
    produtoRepository = new ProdutoInMemoryrepository();
    createProdutoUseCase = new CreateProdutoUseCase(produtoRepository);
  });

  it('should create a new Produto', async () => {
    const { produtoId } = await createProdutoUseCase.execute({
      name: 'Produto 1',
      price: 10,
      category: ProdutoCategoria.LANCHE,
      description: 'Product description',
    });

    const produto = await produtoRepository.findById(produtoId);
    expect(produto.id).toBeDefined();
    expect(produto.createdAt).toBeInstanceOf(Date);
    expect(produto.updatedAt).toBeInstanceOf(Date);
    expect(produto.notification.hasErrors()).toBeFalsy();
    expect(produto.toJSON()).toEqual({
      id: produto.id,
      name: 'Produto 1',
      price: 10,
      category: 'LANCHE',
      description: 'Product description',
      status: 'ATIVO',
      createdAt: produto.createdAt,
      updatedAt: produto.updatedAt,
    });
  });
});
