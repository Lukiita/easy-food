import { BaseEntity, BaseEntityConstructorProps, BaseEntityProps, Money, Name } from '../../shared';

export enum ProdutoCategoria {
  LANCHE = 'LANCHE',
  ACOMPANHAMENTO = 'ACOMPANHAMENTO',
  BEBIDA = 'BEBIDA',
};

type ProdutoConstructorProps = BaseEntityConstructorProps & {
  name: string;
  price: number;
  category: ProdutoCategoria;
  description?: string | null;
};

type ProdutoPros = BaseEntityProps & {
  name: string;
  price: number;
  category: ProdutoCategoria;
  description: string | null;
}
export class Produto extends BaseEntity<ProdutoPros> {
  private _name: Name;
  private _price: Money;
  private _category: ProdutoCategoria;
  private _description: string | null;

  private constructor(props: ProdutoConstructorProps) {
    super(props);
    this._name = new Name(props.name);
    this._price = new Money(props.price);
    this._category = props.category
    this._description = props.description || null;
    this.validate();
  }

  public static create(props: ProdutoConstructorProps): Produto {
    const produto = new Produto(props);
    return produto;
  }

  public static restore(props: ProdutoPros): Produto {
    return new Produto({
      id: props.id,
      name: props.name,
      price: props.price,
      category: props.category,
      description: props.description,
      createdAt: props.createdAt,
      updatedAt: props.updatedAt,
    });
  }

  private validate(): void {
    this.validateName();
    this.validatePrice();
  }

  private validateName(): void {
    if (this._name.hasErrors()) {
      this.notification.copyErrors(this._name.notification);
    }
  }

  private validatePrice(): void {
    if (this._price.hasErrors()) {
      this.notification.copyErrorsWithCustomField(this._price.notification, 'price');
    }
  }

  public toJSON(): ProdutoPros {
    return {
      id: this.id,
      name: this._name.value,
      price: this._price.value,
      category: this._category,
      description: this._description,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
