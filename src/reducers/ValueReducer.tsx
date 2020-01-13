export const ValueReducer = (state: any, action: any): any => {
    switch (action.type) {
        case 'CHECK':
            return action.payload;
        default:
            return state;
    }
};
