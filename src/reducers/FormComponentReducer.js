export const FormComponentReducer = (state, action) => {
    switch (action.type){
        case 'COMPONENT':
            return { ...state, ...action.payload};
        default:
            return state;
    }
}
