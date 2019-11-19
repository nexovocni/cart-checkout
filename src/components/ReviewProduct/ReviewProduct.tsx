import React, {useState, useEffect} from 'react'
import ReviewSelect from '../ReviewSelect/ReviewSelect'
import ReviewInfo from '../ReviewInfo/ReviewInfo'
import ProductLeft from '../ProductLeft/ProductLeft'
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
    updateStateComponent: any;
    stateComponent: boolean;
}

const ReviewProduct:React.FC<IProps> = ({product, changeProducts, deleteProduct, updateStateComponent, stateComponent}) => {

    const [localData, setLocalData] = useState(product);

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

    return (
        <div className="review__product">
            <ProductLeft 
                localData={ localData }
                removeProduct={ removeProduct }
                handleChange={ handleChange }
                handleChangeColor={ handleChangeColor } 
                product={product}
                updateState={ updateStateComponent}
                stateComponent= { stateComponent }
                review={true}
            />
        </div>
    )
}

export default ReviewProduct

