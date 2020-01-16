export interface IProduct {
  name: string;
  size: string;
  sizes: string[];
  price: number;
  color: string;
  colors: string[];
  image: string;
  quantity: number;
  quantities: number[];
  id: number;
}

export interface IFormComponents {
  componentEmail?: boolean;
  componentPayment?: boolean;
  componentShipping?: boolean;
  componentReview?: boolean;
  componentPassword?: boolean;
  editEmail?: boolean;
  editShipping?: boolean;
  editPayment?: boolean;
  editReview?: boolean;
  homeShipping?: boolean;
  storeShipping?: boolean;
  creditPayment?: boolean;
  giftPayment?: boolean;
  stateReview?: boolean;
}

export interface IFormContext {
  formComponents: IFormComponents;
  dispatch?: any;
}

export interface ICartComponents {
  switchPage?: boolean;
  cartState?: boolean;
  tax?: boolean;
  disabledCode?: boolean;
}

export interface ICartContext {
  cartComponents: ICartComponents;
  dispatch?: any;
}

export interface IValues {
  itemsValue: number;
  shipValue: number;
  cartCheckValue: number;
  value: number;
  checkValue: number;
  taxValue: { gst: number; pst: number };
}

export interface IProductContext {
  values: IValues;
  products?: IProduct[] | undefined;
  dispatch?: any;
  changeProducts?: (
    e: React.ChangeEvent<HTMLSelectElement>,
    value: IProduct
  ) => void;
  deleteProduct?: ((value: number) => void) | undefined;
}
