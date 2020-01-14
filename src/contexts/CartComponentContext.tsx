import React, { createContext, useReducer } from 'react';
import { FormComponentReducer } from '../reducers/ComponentReducer';

export const CartComponentContext = createContext({});

export const CartContextProvider = (props: any) => {
  const components = {
    switchPage: true,
    cartState: false,
    tax: false,
    disabledCode: false,
  };

  const [cartComponents, dispatch] = useReducer(
    FormComponentReducer,
    components
  );

  const cartContext = {
    cartComponents,
    dispatch,
  };

  return (
    <CartComponentContext.Provider value={cartContext}>
      {props.children}
    </CartComponentContext.Provider>
  );
};
