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
    localData: any;
    review: boolean,
    handleChange: any,
    handleChangeColor: any, 
    removeProduct: any
}

const ProductLeft:React.FC<IProps> = ({localData, product, review, removeProduct, handleChange, handleChangeColor}) => {

    const productContext:any = useContext(CartComponentContext)
    const {cartState, productState} = productContext

    return (
        <div className={`${review ? `review` : `product`}__section__left`} style={{opacity: cartState && productState ? .3 : 1, pointerEvents: cartState && productState ? "none" : "auto"}}>
            <div className="product__section__left-top">
                <ViewProduct 
                    localData={localData}
                    review={review}
                    removeProduct={removeProduct}
                />
            </div>
            <div className={!productState ? `${review ? `review` : `product`}__section__left-bottom` : "close"}>
                <SelectMobile 
                    localData={ localData}   
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
