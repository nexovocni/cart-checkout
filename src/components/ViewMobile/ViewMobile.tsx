import React, {useContext} from 'react'
import {CartComponentContext} from '../../contexts/CartComponentContext'
import "./ViewMobile.scss"

interface IProps {
    localData: any;
    review: boolean;
    removeProduct: any
}

const ViewMobile:React.FC<IProps> = ({localData, review, removeProduct}) => {

    const productContext:any = useContext(CartComponentContext)
    const {productState, dispatch} = productContext
    
    const handleState = () => {
        dispatch({type: "COMPONENT", payload: {cartState: true}})
        dispatch({type: "COMPONENT", payload: {productState: false}})
    }

    return (
        <div className={`${review ? `review__` : ``}name__viewMobile`}>
            <div className={productState? `${review ? `review__` : ``}name__mobile-data-mob` : `${review ? `review__` : ``}name__viewMobile`} >
                <p className={`${review ? `review` : `name`}__mobile-data-text`}>{localData.color} - Size {localData.size} - Quantity {localData.quantity}</p>
            </div>
            <div className={productState? `${review ? `review__` : ``}name__mobile-nav` : `${review ? `review__` : ``}name__mobile-nav-mob`}>
                <button onClick={handleState} className="name__mobile-nav-edit">Edit</button>
                <button onClick={removeProduct} className="name__mobile-nav-remove">Remove</button>
            </div>
        </div>
    )
}

export default ViewMobile
