import React, {useState, useEffect} from 'react'
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
    updateStateComponent: any;
    stateComponent: boolean;
}

const ReviewProduct:React.FC<IProps> = ({product, updateStateComponent, stateComponent}) => {

    const [localData, setLocalData] = useState(product);


    useEffect(() => {
        setLocalData(product);
    }, [product])

    return (
        <div className="review__product">
            <ProductLeft 
                localData={ localData }
                product={product}
                updateState={ updateStateComponent}
                stateComponent= { stateComponent }
                review={true}
            />
        </div>
    )
}

export default ReviewProduct

