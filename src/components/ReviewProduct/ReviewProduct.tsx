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
    const [state, updateState] = useState(true)

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


    const classNames = {
        img: "review__section__left-image",
        nameSection: "review__section__left-name",
        name: "review__name",
        nameMob: "review__name-mob",
        whishlist: "review__whishlist",
        whishlistMob: "review__wishlist-mob",
        price: "review__name-price",
        viewMob: "review__name__viewMobile",
        viewNameMob: "review__name__mobile-data-mob",
        viewName: "review__name__mobile-data",
        navMob: "review__name__mobile-nav",
        navViewMob: "review__name__mobile-nav-mob",
        productLeft: "review__section__left",
        viewText: "review__mobile-data-text",
        productBottom: "review__section__left-bottom",
        productBottomOpen: "review__section__left-bottom"
    }

    return (
        <div className="review__product">
            <ProductLeft 
                localData={ localData }
                removeProduct={ removeProduct }
                handleChange={ handleChange }
                handleChangeColor={ handleChangeColor } 
                product={product}
                updateState={ updateState}
                stateComponent= { stateComponent }
                classNames={classNames}
            />
        </div>
    )
}

export default ReviewProduct

