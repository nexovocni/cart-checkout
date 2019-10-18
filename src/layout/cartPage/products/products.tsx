import React from 'react'
import Product from '../../../components/Product/Product'
import InfoCart from '../../../components/infoCart/infoCart'
import './Products.scss'

interface IProps {
    products: any;
    changeProducts: any;
    deleteProduct: any
}

const Products: React.FC<IProps> = ({
    products,
    changeProducts,
    deleteProduct
}) => {

    return (
        <main className="main">
            <InfoCart products={ products }/>
            <div className="main__products">
                {products.map((product: any) => {
                    return (
                        <Product
                            key={ product.id }
                            updateProducts={ changeProducts } 
                            remove={ deleteProduct } 
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
