import React, {useState, createContext} from 'react'

export const CheckContext = createContext<any>((undefined as any) as any);

export const CheckProvider = (props:any) => {

    const[CheckValue, setCheckValue] = useState(10)
    
    return(
        <CheckContext.Provider value={[CheckValue, setCheckValue]}>
            {props.children}
        </CheckContext.Provider>
    )
}