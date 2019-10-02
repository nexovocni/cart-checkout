import React, {useState, createContext} from 'react'

export const TaxContext = createContext<any>((undefined as any) as any);

export const TaxProvider = (props:any) => {

    const[disabledTax, setDisabledTax] = useState(false)
    
    return(
        <TaxContext.Provider value={[disabledTax, setDisabledTax]}>
            {props.children}
        </TaxContext.Provider>
    )
}