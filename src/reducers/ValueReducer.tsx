export const ValueReducer = (
  state: number,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case 'CHECK':
      return action.payload;
    default:
      return state;
  }
};
