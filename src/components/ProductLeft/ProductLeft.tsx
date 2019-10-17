import React, {useState} from 'react'
import SelectMobile from '../SelectMobile/SelectMobile'
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
    localData: any,
    handleChange: any,
    handleChangeColor: any
    removeProduct: any,
    updateState: any,
    stateComponent: boolean
}

const ProductLeft:React.FC<IProps> = ({
    localData,
    removeProduct,
    product, 
    handleChange, 
    handleChangeColor, 
    updateState,
    stateComponent
}) => {

    const [productComponent, updateProductComponent] = useState (true)

    const handleState = () => {
        updateState(true)
        updateProductComponent(false)
    }

    return (
        <div className="product__section__left" style={{opacity: stateComponent && productComponent ? .3 : 1, pointerEvents: stateComponent && productComponent ? "none" : "auto"}}>
            <div className="product__section__left-top">
                <div className="product__section__left-image">
                    <img src={localData.image[localData.colors.indexOf(localData.color)]} alt="image"/>
                </div>
                <div className="product__section__left-name">
                    <div style={{justifyContent: !productComponent ? "center" : "space-between"}} className="name">
                        <div>
                            <p>{localData.name}</p>
                        </div>
                        <div style={{display: !productComponent ? "none" : "inline"}}>
                            <p className="name__mobile-data">{localData.color} - Size {localData.size} - Quantity {localData.quantity}</p>
                        </div>
                        <div  style={{display: !productComponent ? "none" : ""}} className="name__mobile-nav">
                            <button onClick={handleState} className="name__mobile-nav-edit">Edit</button>
                            <button onClick={removeProduct} className="name__mobile-nav-remove">Remove</button>
                        </div>
                        <div style={{display: productComponent ? "" : "inline"}} className="wishlist">
                            <p><i className="fa fa-heart"></i>Move to wishlist</p>
                        </div>
                    </div>
                    <div className="name__price">
                        <p>${parseInt(localData.price).toFixed(2)}</p>
                    </div>
                </div>
            </div>
            <div style={{display: productComponent ? "none" : "flex"}} className="product__section__left-bottom">
                <SelectMobile 
                    localData={ localData}  
                    handleChange={ handleChange } 
                    handleChangeColor={ handleChangeColor }  
                    product={ product }
                    updateState={ updateState }
                    updateProductComponent= { updateProductComponent}
                />
            </div>
        </div>
    )
}

export default ProductLeft
