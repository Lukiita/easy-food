import { EntityNotFoundError } from '../../../../shared';
import { ProdutoCategoria } from '../../../domain';
import { ProdutoInMemoryrepository } from '../../../infra';
import { CreateProdutoUseCase } from '../create-produto/create-produto.use-case';
import { FindProdutoByIdUseCase } from './find-produto-by-id.use-case';

describe('FindProdutoByIdUseCase E2E Tests', () => {
  let createProdutoUseCase: CreateProdutoUseCase;
  let findProdutoByIdUseCase: FindProdutoByIdUseCase;

  beforeEach(() => {
    const produtoRepository = new ProdutoInMemoryrepository();
    createProdutoUseCase = new CreateProdutoUseCase(produtoRepository);
    findProdutoByIdUseCase = new FindProdutoByIdUseCase(produtoRepository);
  });

  it('should find a Produto by id', async () => {
    const { produtoId } = await createProdutoUseCase.execute({
      name: 'Produto 1',
      price: 10,
      category: ProdutoCategoria.LANCHE,
      description: 'Descrição do produto 1',
    });

    const findByIdOutput = await findProdutoByIdUseCase.execute(produtoId);
    expect(findByIdOutput.id).toBe(produtoId);
    expect(findByIdOutput.name).toBe('Produto 1');
    expect(findByIdOutput.price).toBe(10);
    expect(findByIdOutput.category).toBe(ProdutoCategoria.LANCHE);
    expect(findByIdOutput.description).toBe('Descrição do produto 1');
    expect(findByIdOutput.status).toBe('ATIVO');
    expect(findByIdOutput.createdAt).toBeInstanceOf(Date);
    expect(findByIdOutput.updatedAt).toBeInstanceOf(Date);
  });

  it('should throw an error when Produto is not found', async () => {
    await expect(findProdutoByIdUseCase.execute('id')).rejects.toThrow(EntityNotFoundError);
  });
});
