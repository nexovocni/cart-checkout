export const FormComponentReducer = (state:any, action:any) => {
    switch (action.type){
        case 'COMPONENT':
            return { ...state, ...action.payload};
        default:
            return state;
    }
}
