import React from 'react'
import './ViewProduct.scss'
import ViewMobile from '../ViewMobile/ViewMobile'

interface IProps {
    localData: any;
    handleState: any;
    productComponent: any;
    removeProduct: any;
    classNames: any;
}

const ViewProduct:React.FC<IProps> = ({localData, handleState, productComponent, removeProduct, classNames}) => {

    return (
            <React.Fragment>
                <div className={classNames.img}>
                    <img src={localData.image[localData.colors.indexOf(localData.color)]} alt="image"/>
                </div>
                <div className={classNames.nameSection}>
                    <div className={productComponent ? classNames.name :  classNames.nameMob}>
                        <div>
                            <p>{localData.name}</p>
                        </div>
                        <ViewMobile 
                            handleState={handleState} 
                            removeProduct={removeProduct} 
                            productComponent={productComponent}
                            localData={localData}
                            classNames={classNames}
                        />
                        <div className={productComponent ? "wishlist" : "wishlist-mob"}>
                            <p><i className="fa fa-heart"></i>Move to wishlist</p>
                        </div>
                    </div>
                    <div className="name__price">
                        <p>${parseInt(localData.price).toFixed(2)}</p>
                    </div>
                </div>
            </React.Fragment>
    )
}

export default ViewProduct
