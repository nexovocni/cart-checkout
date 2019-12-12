import React, {useEffect, useState} from 'react'
import CartPage from '../CartPage/CartPage'

const CartCheckOut = () => {

    interface IProduct {
        price: number;
        quantity: number;
        id: number;
        product: {};
    }

    let itemsValue = 0

    const [products, updateProducts] = useState([]);

    const[checkValue, setCheckValue] = useState<number>(10)

    useEffect( () => {
        (async () => {
        const response = await fetch("https://private-1c29a1-products156.apiary-mock.com/products")
        const data = await response.json()
        updateProducts(data.products)
    })()}, [])

    const changeProducts = (productId: number, productData: any) => {
        const newProducts: any = products.map((product: IProduct) => product.id === productId ? productData : product);

        updateProducts(newProducts);
    };

    const deleteProduct = (productId: number) => {
        const newProducts = products.filter((product: any) => product.id !== productId);
      
        updateProducts(newProducts);
    };

    {products.map( (product: IProduct) => {
        itemsValue += product.quantity * product.price
    })}

    const value = itemsValue + checkValue
 
    const shipValue = (550 - itemsValue)

    const [switchComponent, setSwitchComponent] = useState(true)

    return (
            <React.Fragment>
                <CartPage 
                    products={products} 
                    changeProducts={changeProducts}
                    deleteProduct={deleteProduct}
                    setCheckValue={setCheckValue}
                    itemsValue={itemsValue}
                    shipValue={shipValue}
                    checkValue={checkValue}
                    switchComponent={switchComponent}
                    setSwitchComponent={setSwitchComponent}
                    value={value}
                />
            </React.Fragment>
    )
}

export default CartCheckOut
