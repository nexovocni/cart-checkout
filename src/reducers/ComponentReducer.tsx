export const FormComponentReducer = (
  state: any,
  action: {
    type: string;
    payload: any;
  }
) => {
  switch (action.type) {
    case 'COMPONENT':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
