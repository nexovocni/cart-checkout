export const FormComponentReducer = (state:any, action:any) => {
    switch (action.type){
        case 'OPEN':
            return [...state, action.payload = true];
        case 'CLOSE':
            return [...state, action.payload = false];
        case 'REOPEN':
            return [...state, action.payload =  !state.action.payload];
        default:
            return state;
    }
}
