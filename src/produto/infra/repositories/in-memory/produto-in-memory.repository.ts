import { ProdutoRepository } from 'src/produto/domain/produto.repository';
import { InMemoryRepository } from '../../../../shared';
import { Produto } from '../../../domain';

export class ProdutoInMemoryrepository extends InMemoryRepository<Produto> implements ProdutoRepository { }
