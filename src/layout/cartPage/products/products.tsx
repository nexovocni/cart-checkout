import React from 'react'
import Product from '../../../components/Product/product'
import InfoCart from '../../../components/InfoCart/InfoCart'
import './Products.scss'

interface IProps {
    products: any;
    updateProducts: any;
    updateState: any;
    stateComponent: boolean
}

const Products: React.FC<IProps> = ({
    products,
    updateProducts,
    updateState,
    stateComponent
}) => {
    
    const changeProducts = (productId: number, productData: any) => {
        const newProducts = products.map((product: any) => product.id === productId ? productData : product);

        updateProducts(newProducts);
    };

    const deleteProduct = (productId: number) => {
        const newProducts = products.filter((product: any) => product.id !== productId);
      
        updateProducts(newProducts);
    };

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
