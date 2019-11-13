import React, {useState, useEffect} from 'react'
import ReviewSelect from '../ReviewSelect/ReviewSelect'
import ReviewInfo from '../ReviewInfo/ReviewInfo'
import './ReviewProduct.scss'

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
    changeProducts: any;
    deleteProduct: any;
    updateProductComponent: any;
    productComponent: boolean;
}

const ReviewProduct:React.FC<IProps> = ({product, changeProducts, deleteProduct, updateProductComponent, productComponent}) => {

    const [localData, setLocalData] = useState(product);
    const [state, updateState] = useState(true)

    const handleState = () => {
        updateState(false)
        updateProductComponent(true)
    }

    const handleChange = (e:any) => {
        const newProduct = {...localData, [e.target.name]: e.target.value};
        changeProducts(newProduct.id, newProduct);
    };

    const handleChangeColor = (e:any) => {
        const newColor = e.target.value;

        const newProduct = {
            ...localData, 
            color: newColor,
        };

        changeProducts(newProduct.id, newProduct);
    }

    const removeProduct = () => {
        deleteProduct(localData.id);
    }

    useEffect(() => {
        setLocalData(product);
    }, [product])

    const handleButton = () => {
        updateProductComponent(false)
        updateState(false)
    }

    return (
        <div style={{opacity: productComponent && state ? .3 : 1, pointerEvents: productComponent && state ? "none" : "auto"}} className="review__product">
            <ReviewInfo 
                localData={localData}
                productComponent={productComponent}
                handleState={handleState}
                removeProduct={removeProduct}
            /> 
            <ReviewSelect 
                handleButton={handleButton}
                handleChange={handleChange}
                handleChangeColor={handleChangeColor}
                product={product}
                localData={localData}
                productComponent={productComponent}
                state={state}
            />
        </div>
    )
}

export default ReviewProduct

