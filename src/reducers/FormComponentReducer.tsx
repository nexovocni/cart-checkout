import { IFormComponents } from '../interfaces/Interfaces';

export const FormComponentReducer = (
  state: IFormComponents,
  action: {
    type: string;
    payload: IFormComponents;
  }
) => {
  switch (action.type) {
    case 'FORM-COMPONENT':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
