import React, {useEffect, useState} from 'react'
import CartPage from '../CartPage/CartPage'
import FormPage from '../FormPage/FormPage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const CartCheckOut = () => {

    const [products, updateProducts] = useState([]);

    const[checkValue, setCheckValue] = useState(10)

    useEffect( () => {
        (async () => {
        const response = await fetch("https://private-1c29a1-products156.apiary-mock.com/products")
        const data = await response.json()
        updateProducts(data.products)
    })()}, [])

    const changeProducts = (productId: number, productData: any) => {
        const newProducts: any = products.map((product: any) => product.id === productId ? productData : product);

        updateProducts(newProducts);
    };

    const deleteProduct = (productId: number) => {
        const newProducts = products.filter((product: any) => product.id !== productId);
      
        updateProducts(newProducts);
    };

    return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route path="/" exact render={(props) => <CartPage 
                        {...props} 
                        products={products} 
                        changeProducts={changeProducts}
                        deleteProduct={deleteProduct}
                        checkValue={checkValue}
                        setCheckValue={setCheckValue}
                        /> 
                        }/>
                        <Route path="/form" render={(props) => <FormPage />}/>
                    </Switch>
                </Router>
            </React.Fragment>
      
    )
}

export default CartCheckOut
