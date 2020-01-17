import React, { createContext, useReducer } from 'react';
import { CartComponentReducer } from '../reducers/CartComponentReducer';
import { ICartContext } from '../interfaces/Interfaces';

const components = {
  cartComponents: {
    switchPage: true,
    cartState: false,
    tax: false,
    disabledCode: false,
  },
};

export const CartComponentContext = createContext<ICartContext>(components);

export const CartContextProvider = (props: { children: React.ReactNode }) => {
  const [cartComponents, dispatchCart] = useReducer(
    CartComponentReducer,
    components.cartComponents
  );

  const cartContext: ICartContext = {
    cartComponents,
    dispatchCart,
  };

  return (
    <CartComponentContext.Provider value={cartContext}>
      {props.children}
    </CartComponentContext.Provider>
  );
};
