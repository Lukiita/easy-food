import { EntityNotFoundError } from '../../../../shared';
import { ProdutoPros, ProdutoRepository } from '../../../domain';

export class FindProdutoByIdUseCase {
  constructor(private readonly produtoRepository: ProdutoRepository) { }

  async execute(produtoId: string): Promise<Output> {
    const produto = await this.produtoRepository.findById(produtoId);

    if (!produto) {
      throw new EntityNotFoundError('Produto', produtoId);
    }

    return produto.toJSON();
  }
}

type Output = ProdutoPros;
