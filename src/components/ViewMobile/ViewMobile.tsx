import React from 'react'
import "./ViewMobile.scss"

interface IProps {
    localData: any;
    handleState: any;
    productComponent: any;
    removeProduct: any;
    classNames: any;
}

const ViewMobile:React.FC<IProps> = ({localData, handleState, productComponent, removeProduct, classNames}) => {
    return (
        <div className={classNames.viewMob}>
            <div className={productComponent ? classNames.viewNameMob : classNames.viewMob} >
                <p className={classNames.viewText}>{localData.color} - Size {localData.size} - Quantity {localData.quantity}</p>
            </div>
            <div className={productComponent ? classNames.navMob : classNames.navViewMob}>
                <button onClick={handleState} className="name__mobile-nav-edit">Edit</button>
                <button onClick={removeProduct} className="name__mobile-nav-remove">Remove</button>
            </div>
        </div>
    )
}

export default ViewMobile
