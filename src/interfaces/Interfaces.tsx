export interface IProduct {
  name: string;
  size: string;
  price: string;
  color: string;
  colorName: string;
  quantity: string;
  id: number;
  colors: string[];
  sizes: string[];
  quantities: number[];
  image: string;
}

export interface IFormComponents {
  componentEmail: boolean;
  componentPayment: boolean;
  componentShipping: boolean;
  componentReview: boolean;
  componentPassword: boolean;
  editEmail: boolean;
  editShipping: boolean;
  editPayment: boolean;
  editReview: boolean;
  homeShipping: boolean;
  storeShipping: boolean;
  creditPayment: boolean;
  giftPayment: boolean;
  stateReview: boolean;
}

export interface IFormContext {
  formComponents: IFormComponents;
  dispatch?: any;
}

export interface ICartComponents {
  switchPage: boolean;
  cartState: boolean;
  tax: boolean;
  disabledCode: boolean;
}

export interface ICartContext {
  cartComponents: ICartComponents;
  dispatch?: any;
}
