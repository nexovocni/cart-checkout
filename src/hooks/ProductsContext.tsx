import React, {useState, createContext} from 'react'

export const ProductsContext = createContext<any>((undefined as any) as any);

export const ProductsProvider = (props:any) => {

    const[products, setProducts] = useState([])
    
    return(
        <ProductsContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductsContext.Provider>
    )
}