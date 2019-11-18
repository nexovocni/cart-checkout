import React, {useState} from 'react'
import SelectMobile from '../SelectMobile/SelectMobile'
import ViewProduct from '../ViewProduct/ViewProduct'
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
    handleChange: any;
    handleChangeColor: any;
    removeProduct: any;
    updateState: any;
    stateComponent: boolean;
    classNames: any;
}

const ProductLeft:React.FC<IProps> = ({localData, removeProduct, product, handleChange, handleChangeColor, updateState,stateComponent, classNames}) => {

    const [productComponent, updateProductComponent] = useState (true)

    const handleState = () => {
        updateState(true)
        updateProductComponent(false)
    }

    return (
        <div className={classNames.productLeft} style={{opacity: stateComponent && productComponent ? .3 : 1, pointerEvents: stateComponent && productComponent ? "none" : "auto"}}>
            <div className="product__section__left-top">
                <ViewProduct 
                    localData={localData}
                    productComponent={productComponent}
                    handleState={handleState}
                    removeProduct={removeProduct}
                    classNames={classNames}
                />
            </div>
            <div className={productComponent ? classNames.productBottom : classNames.productBottomOpen}>
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
