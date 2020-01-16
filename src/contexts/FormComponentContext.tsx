import React, { createContext, useReducer } from 'react';
import { FormComponentReducer } from '../reducers/ComponentReducer';
import { IFormContext } from '../interfaces/Interfaces';

const components = {
  formComponents: {
    componentEmail: true,
    componentPayment: false,
    componentShipping: false,
    componentReview: false,
    componentPassword: false,
    editEmail: false,
    editShipping: false,
    editPayment: false,
    editReview: false,
    homeShipping: false,
    storeShipping: false,
    creditPayment: false,
    giftPayment: false,
    stateReview: false,
  },
};

export const FormComponentContext = createContext<IFormContext>(components);

export const ComponentContextProvider = (props: {
  children: React.ReactNode;
}) => {
  const [formComponents, dispatch] = useReducer(
    FormComponentReducer,
    components.formComponents
  );

  const formContext: IFormContext = {
    formComponents,
    dispatch,
  };

  return (
    <FormComponentContext.Provider value={formContext}>
      {props.children}
    </FormComponentContext.Provider>
  );
};
