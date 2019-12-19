export const ValueReducer = (state:any, action:any) => {
    switch (action.type){
        case 'STANDARD':
            return 10;
        case 'EXPRESS':
            return 15;
        case 'INSTANT':
            return 20;  
        default:
            return state;
    }
}