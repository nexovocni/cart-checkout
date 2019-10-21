import React from 'react'
import SelectColor from '../SelectColor/SelectColor'
import SelectSize from '../SelectSize/SelectSize'
import SelectQuantity from '../SelectQuantity/SelectQuantity'
import './SelectMobile.scss'

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
    handleChangeColor: any,
    updateState: any
    updateProductComponent: any
}

const SelectMobile:React.FC<IProps> = ({localData, handleChange, handleChangeColor, product, updateState, updateProductComponent}) => {

    const handleButton = () => {
        updateProductComponent(true)
        updateState(false)
    }

    return (
        <React.Fragment>
                <div className="product__section__left-bottom-select">
                    <div className="product__section__left-bottom-select-color">
                        <p>Color</p>
                        <SelectColor localData={localData} handleChangeColor={handleChangeColor}/>
                    </div>
                    <div className="product__section__left-bottom-select-size">
                        <p>Size</p>
                        <SelectSize localData={localData} handleChange={handleChange} product={product}/>
                    </div>
                    <div className="product__section__left-bottom-select-quantity">
                        <p>Quantity</p>
                        <SelectQuantity localData={localData} handleChange={handleChange}/>
                    </div>
                </div>
                <div className="product__section__left-bottom-button">
                    <button onClick={handleButton}>Update Bag</button>
                </div>
        </React.Fragment>
    )
}

export default SelectMobile
