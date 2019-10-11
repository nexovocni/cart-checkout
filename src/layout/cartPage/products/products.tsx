import React,{useState, useEffect, useContext} from 'react'
import Product from '../../../components/product/product'
import InfoCart from '../../../components/infoCart/infoCart'
import './products.scss'

interface IProps {
    products: any;
    updateProducts: any;
}

const Products: React.FC<IProps> = ({
    products,
    updateProducts,
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
            <InfoCart />
            <div className="products">
                {products.map((product: any, index: any) => {
                    return (
                        <Product
                            key={ product.id }
                            update={ changeProducts } 
                            remove={ deleteProduct } 
                            product={ product } 
                        />
                    )
                })}
            </div>
        </main>
    )
}

export default Products
