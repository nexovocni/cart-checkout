import React from 'react'
import "./ViewMobile.scss"

interface IProps {
    localData: any,
    handleState: any,
    productComponent: any,
    removeProduct: any,
}

const ViewMobile:React.FC<IProps> = ({localData, handleState, productComponent, removeProduct}) => {
    return (
        <div className="name__viewMobile">
            <div className={!productComponent ? "name__mobile-data-mob" : "name__mobile-data"} >
                    <p className="name__mobile-data-text">{localData.color} - Size {localData.size} - Quantity {localData.quantity}</p>
                </div>
                <div className={productComponent ? "name__mobile-nav" : "name__mobile-nav-mob"}>
                    <button onClick={handleState} className="name__mobile-nav-edit">Edit</button>
                    <button onClick={removeProduct} className="name__mobile-nav-remove">Remove</button>
                </div>
        </div>
    )
}

export default ViewMobile
