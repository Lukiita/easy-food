import { EntityValidationError } from '../../../../shared';
import { Produto, ProdutoCategoria, ProdutoRepository } from '../../../domain';

export class CreateProdutoUseCase {
  constructor(private readonly produtoRepository: ProdutoRepository) { }

  async execute(input: Input): Promise<Output> {
    const produto = Produto.create({
      name: input.name,
      price: input.price,
      category: input.category,
      description: input.description,
    });

    if (produto.hasError()) {
      throw new EntityValidationError(produto.notification.toJSON(), 'Produto data is invalid');
    }

    await this.produtoRepository.save(produto);
    return { produtoId: produto.id }; .0
  }
}

type Input = {
  name: string;
  price: number;
  category: ProdutoCategoria;
  description?: string;
}

type Output = { produtoId: string };
