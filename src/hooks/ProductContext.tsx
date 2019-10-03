import React, {useState, createContext} from 'react'

export const ProductContext = createContext<any>((undefined as any) as any);

export const ProductProvider = (props:any) => {

    const[products, setProducts] = useState([])
    
    return(
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}