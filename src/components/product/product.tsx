import React, { useContext } from 'react'
import ProductLeft from '../ProductLeft/ProductLeft'
import ProductRight from '../ProductRight/ProductRight'
import {ProductContext} from '../../contexts/ProductContext'
import './Product.scss'

interface IProps {
    product: {
        name: string,
        size: string,
        price: string,
        color: string,
        colorName: string, 
        quantity: string,
        id: number,
        colors: string[]
        sizes: string[],
        quantities: number[]
        image: string;
    };
}

const Product: React.FC<IProps> = ({product}) => {

    const productContext:any = useContext(ProductContext)
    const {deleteProduct} = productContext

    return (
        <div className="product">
            <div className="product__section">
                <ProductLeft
                    product={product}
                    review={false}
                /> 
                <ProductRight
                    product={product} 
                />
            </div>
            <div 
                id={`${product.id}`} 
                onClick={ () => { deleteProduct(product.id)} }
                className="product__exit"
            >
                <i className="fa fa-times"></i>
            </div>
        </div>
    )
}

export default Product
