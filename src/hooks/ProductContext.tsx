import React, {useState, createContext} from 'react'

export const ProductContext = createContext<any>((undefined as any) as any);

export const ProductProvider = (props:any) => {

    const[globalProduct, setGlobalProduct] = useState({})
    
    return(
        <ProductContext.Provider value={[globalProduct, setGlobalProduct]}>
            {props.children}
        </ProductContext.Provider>
    )
}