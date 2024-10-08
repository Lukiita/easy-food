import { BaseEntity, BaseEntityConstructorProps, BaseEntityProps, Money, Name } from '../../shared';

export enum ProdutoCategoria {
  LANCHE = 'LANCHE',
  ACOMPANHAMENTO = 'ACOMPANHAMENTO',
  BEBIDA = 'BEBIDA',
};

export enum ProdutoStatus {
  ATIVO = 'ATIVO',
  INATIVO = 'INATIVO',
};

type ProdutoConstructorProps = BaseEntityConstructorProps & {
  name: string;
  price: number;
  category: ProdutoCategoria;
  description?: string | null;
  status?: ProdutoStatus;
};

export type ProdutoPros = BaseEntityProps & {
  name: string;
  price: number;
  category: ProdutoCategoria;
  description: string | null;
  status: ProdutoStatus;
}
export class Produto extends BaseEntity<ProdutoPros> {
  private _name: Name;
  private _price: Money;
  private _category: ProdutoCategoria;
  private _description: string | null;
  private _status: ProdutoStatus;

  private constructor(props: ProdutoConstructorProps) {
    super(props);
    this._name = new Name(props.name);
    this._price = new Money(props.price);
    this._category = props.category
    this._description = props.description || null;
    this._status = props.status || ProdutoStatus.ATIVO;
    this.validate();
  }

  public get name(): string {
    return this._name.value;
  }

  public get price(): number {
    return this._price.value;
  }

  public get category(): ProdutoCategoria {
    return this._category;
  }

  public get description(): string | null {
    return this._description;
  }

  public get status(): ProdutoStatus {
    return this._status;
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
    this.validateCategory();
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

  private validateCategory(): void {
    if (!Object.values(ProdutoCategoria).includes(this._category)) {
      this.notification.addError('Invalid category', 'category');
    }
  }

  public toJSON(): ProdutoPros {
    return {
      id: this.id,
      name: this._name.value,
      price: this._price.value,
      category: this._category,
      description: this._description,
      status: this._status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
