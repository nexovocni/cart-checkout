import React, {useContext} from 'react'
import SelectMobile from '../SelectMobile/SelectMobile'
import ViewProduct from '../ViewProduct/ViewProduct'
import {CartComponentContext} from '../../contexts/CartComponentContext'
import './ProductLeft.scss'

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
    review: boolean,
    handleChange: any,
    handleChangeColor: any, 
}

const ProductLeft:React.FC<IProps> = ({product, review, handleChange, handleChangeColor}) => {

    const cartContext:any = useContext(CartComponentContext)
    const {cartState, productState} = cartContext.cartComponents

    return (
        <div className={`${review ? `review` : `product`}__section__left`} style={{opacity: cartState && productState ? .3 : 1, pointerEvents: cartState && productState ? "none" : "auto"}}>
            <div className="product__section__left-top">
                <ViewProduct 
                    review={review}
                    product={ product }
                />
            </div>
            <div className={!productState ? `${review ? `review` : `product`}__section__left-bottom` : "close"}>
                <SelectMobile    
                    product={ product }
                    review={review}
                    handleChange= {handleChange}
                    handleChangeColor = {handleChangeColor}
                />
            </div>
        </div>
    )
}

export default ProductLeft
