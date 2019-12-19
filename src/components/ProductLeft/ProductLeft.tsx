import React, {useState, useContext} from 'react'
import SelectMobile from '../SelectMobile/SelectMobile'
import ViewProduct from '../ViewProduct/ViewProduct'
import {ProductContext} from '../../contexts/ProductContext'
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
    updateState: any;
    stateComponent: boolean;
    review: boolean
}

const ProductLeft:React.FC<IProps> = ({localData, product, updateState,stateComponent, review}) => {

    const [productComponent, updateProductComponent] = useState (true)

    const productContext:any = useContext(ProductContext)
    const {handleChangeColor, handleChange, removeProduct} = productContext

    const handleState = () => {
        updateState(true)
        updateProductComponent(false)
    }

    return (
        <div className={`${review ? `review` : `product`}__section__left`} style={{opacity: stateComponent && productComponent ? .3 : 1, pointerEvents: stateComponent && productComponent ? "none" : "auto"}}>
            <div className="product__section__left-top">
                <ViewProduct 
                    localData={localData}
                    productComponent={productComponent}
                    handleState={handleState}
                    removeProduct={removeProduct}
                    review={review}
                />
            </div>
            <div className={!productComponent ? `${review ? `review` : `product`}__section__left-bottom` : "close"}>
                <SelectMobile 
                    localData={ localData}  
                    handleChange={ handleChange } 
                    handleChangeColor={ handleChangeColor }  
                    product={ product }
                    updateState={ updateState }
                    updateProductComponent= { updateProductComponent}
                    review={review}
                />
            </div>
        </div>
    )
}

export default ProductLeft
