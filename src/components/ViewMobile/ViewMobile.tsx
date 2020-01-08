import React, {useContext} from 'react'
import {CartComponentContext} from '../../contexts/CartComponentContext'
import {ProductContext} from '../../contexts/ProductContext'
import "./ViewMobile.scss"

interface IProps {
    product: any;
    review: boolean;
}

const ViewMobile:React.FC<IProps> = ({product, review}) => {

    const cartContext:any = useContext(CartComponentContext)
    const productContext:any = useContext(ProductContext)
    const {deleteProduct} = productContext
    const {productState} = cartContext.cartComponents
    const {dispatch} = cartContext
    
    const handleState = () => {
        dispatch({type: "COMPONENT", payload: {cartState: true}})
        dispatch({type: "COMPONENT", payload: {productState: false}})
    }


    return (
        <div className={`${review ? `review__` : ``}name__viewMobile`}>
            <div className={productState? `${review ? `review__` : ``}name__mobile-data-mob` : `${review ? `review__` : ``}name__viewMobile`} >
                <p className={`${review ? `review` : `name`}__mobile-data-text`}>{product.color} - Size {product.size} - Quantity {product.quantity}</p>
            </div>
            <div className={productState? `${review ? `review__` : ``}name__mobile-nav` : `${review ? `review__` : ``}name__mobile-nav-mob`}>
                <button onClick={handleState} className="name__mobile-nav-edit">Edit</button>
                <button onClick={() => deleteProduct(product.id)} className="name__mobile-nav-remove">Remove</button>
            </div>
        </div>
    )
}

export default ViewMobile
