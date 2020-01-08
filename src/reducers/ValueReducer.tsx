export const ValueReducer = (state:any, action:any) => {
    switch (action.type){
        case 'CHECK':
            return action.payload;  
        default:
            return state;
    }
}