import { ICartComponents } from '../interfaces/Interfaces';

export const CartComponentReducer = (
  state: ICartComponents,
  action: {
    type: string;
    payload: ICartComponents;
  }
) => {
  switch (action.type) {
    case 'CART-COMPONENT':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
