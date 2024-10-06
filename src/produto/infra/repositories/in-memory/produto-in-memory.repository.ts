import { InMemoryRepository } from '../../../../shared';
import { Produto, ProdutoRepository } from '../../../domain';

export class ProdutoInMemoryrepository extends InMemoryRepository<Produto> implements ProdutoRepository { }
