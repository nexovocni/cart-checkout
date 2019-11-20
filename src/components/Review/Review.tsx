import React, {useState, useEffect, useRef} from 'react'
import ReviewProduct from '../ReviewProduct/ReviewProduct'
import ReviewData from '../ReviewData/ReviewData'
import './Review.scss'

interface IProps {
    products: any[];
    changeProducts: any;
    deleteProduct: any;
    checkValue: number;
    itemsValue: any;
    componentReview: boolean;
    openComponentReview: any;
    shipValue: number;
    taxValue: any;
    openEditBtn: any;
    editBtn: any;
}

const Review:React.FC<IProps> = ({products, changeProducts, deleteProduct, checkValue, itemsValue, openComponentReview, componentReview, shipValue, taxValue, openEditBtn, editBtn}) => {

    const [stateComponent, updateStateComponent] = useState (false)

    const [scrollBtn, setScrollBtn] = useState(false)

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const wrappedElement = document.getElementById('sticky_div')
              
            if (Math.round(wrappedElement!.getBoundingClientRect().bottom) - window.innerHeight <= 0) {
                setScrollBtn(true)
            }
        })
    }, [componentReview])

    const reviewSubmit = () => {
        openComponentReview(false)
        setScrollBtn(false)
        openEditBtn({...editBtn, review: true})
    }

    return (
        <div className="review">
            <h2 style={{color: !componentReview ? "#999" : "#000"}} className="review__number">4</h2>
            <div style={{backgroundColor: !componentReview ? "#999" : "#000"}} className="dash-review"></div>
            <div className="review__component__up">
                <div className="review__component">
                    <h2 style={{color: !componentReview ? "#999" : "#000"}} className="review__heading">Review and finish</h2>
                    <button style={{opacity: !componentReview ? 1 : 0}} onClick={() => {openComponentReview(!componentReview)}} className={editBtn.review ? "review__heading__button" : "editBtn"}>Edit</button>
                    <div className={componentReview ? "review__component__section" : "close"}>
                        <div className="review__products">
                            {products.map(product => {
                                return(
                                    <ReviewProduct 
                                        product={product}
                                        changeProducts={changeProducts}
                                        deleteProduct={deleteProduct}
                                        stateComponent={stateComponent}
                                        updateStateComponent={updateStateComponent}
                                    />
                                )
                            })}
                        </div>
                        <div className="review__data">
                            <ReviewData 
                                itemsValue={itemsValue}
                                checkValue={checkValue}
                                productComponent={stateComponent}
                                shipValue={shipValue}
                                taxValue={taxValue}
                            />
                        </div>
                        <div style={{position: stateComponent ? "relative" : "sticky"}} id="sticky_div" className={!scrollBtn ? "review__component__button" : "review__component__button-sticky"}>
                            <button style={{opacity: stateComponent ? .3 : 1, pointerEvents: stateComponent ? "none" : "auto"}} onClick={reviewSubmit} className="review__component__submit" type="submit">Place order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review
