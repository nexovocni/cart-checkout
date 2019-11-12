import React, {useState, useEffect} from 'react'
import ReviewSelect from '../ReviewSelect/ReviewSelect'
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
    changeProducts: any
    deleteProduct: any,
    updateState: any
}

const ReviewProduct:React.FC<IProps> = ({product, changeProducts, deleteProduct, updateState}) => {

    const [localData, setLocalData] = useState(product);

    const [productComponent, updateProductComponent] = useState (false)

    const handleState = () => {
        updateState(true)
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
        <div className="review__product">
               <div className="review__product__section__top">
                    <div className="review__product__section__info">
                        <div className="review__product__section__image">
                            <img src={localData.image[localData.colors.indexOf(localData.color)]} alt="image"/>
                        </div>
                        <div className="review__product__section__name">
                            <div>
                                <p>{localData.name}</p>
                            </div>
                            <div className="review__product__section__text" >
                                <p>{localData.color} - Size {localData.size} - Quantity {localData.quantity}</p>
                            </div>
                            <div className="review__product__section__nav">
                                <button onClick={handleState} className="review__product__section__edit">Edit</button>
                                <button onClick={removeProduct} className="review__product__section__remove">Remove</button>
                            </div>
                        </div>
                    </div>
                    <div className="rewiev__product__section__price">
                        <p>${parseInt(localData.price).toFixed(2)}</p>
                    </div>
            </div>
            <ReviewSelect 
                handleButton={handleButton}
                handleChange={handleChange}
                handleChangeColor={handleChangeColor}
                product={product}
                localData={localData}
                productComponent={productComponent}
            />
        </div>
    )
}

export default ReviewProduct
