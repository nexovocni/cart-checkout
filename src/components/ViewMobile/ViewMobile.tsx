import React from 'react'
import "./ViewMobile.scss"

interface IProps {
    localData: any;
    handleState: any;
    productComponent: any;
    removeProduct: any;
    review: boolean
}

const ViewMobile:React.FC<IProps> = ({localData, handleState, productComponent, removeProduct, review}) => {
    return (
        <div className={`${review ? `review__` : ``}name__viewMobile`}>
            <div className={productComponent ? `${review ? `review__` : ``}name__mobile-data-mob` : `${review ? `review__` : ``}name__viewMobile`} >
                <p className={`${review ? `review` : `name`}__mobile-data-text`}>{localData.color} - Size {localData.size} - Quantity {localData.quantity}</p>
            </div>
            <div className={productComponent ? `${review ? `review__` : ``}name__mobile-nav` : `${review ? `review__` : ``}name__mobile-nav-mob`}>
                <button onClick={handleState} className="name__mobile-nav-edit">Edit</button>
                <button onClick={removeProduct} className="name__mobile-nav-remove">Remove</button>
            </div>
        </div>
    )
}

export default ViewMobile
