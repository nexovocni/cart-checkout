import React from 'react'
import Product from '../../../components/Product/Product'
import InfoCart from '../../../components/InfoCart/InfoCart'
import './Products.scss'

interface IProps {
    products: any,
    changeProducts: any,
    deleteProduct: any,
    updateState: any
    stateComponent: boolean
}

const Products: React.FC<IProps> = ({products, changeProducts, deleteProduct, updateState, stateComponent}) => {

    return (
        <main className="main">
            <InfoCart products={ products }/>
            <div className="main__products">
                {products.map((product: any) => {
                    return (
                        <Product
                            key={ product.id }
                            changeProducts={ changeProducts } 
                            deleteProduct={ deleteProduct } 
                            product={ product } 
                            updateState= { updateState }
                            stateComponent={stateComponent}
                        />
                    )
                })}
            </div>
        </main>
    )
}

export default Products
