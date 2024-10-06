import { Repository } from '../../shared';
import { Produto } from './produto.entity';

export interface ProdutoRepository extends Repository<Produto> { }
