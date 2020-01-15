import React, { createContext, useReducer } from 'react';
import { FormComponentReducer } from '../reducers/ComponentReducer';
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

export const CartContextProvider = (props: any) => {
  const [cartComponents, dispatch] = useReducer(
    FormComponentReducer,
    components.cartComponents
  );

  const cartContext: ICartContext = {
    cartComponents,
    dispatch,
  };

  return (
    <CartComponentContext.Provider value={cartContext}>
      {props.children}
    </CartComponentContext.Provider>
  );
};
