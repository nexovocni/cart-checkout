import React, {useState, useEffect} from 'react'
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
}

const Review:React.FC<IProps> = ({products, changeProducts, deleteProduct, checkValue, itemsValue, openComponentReview, componentReview, shipValue, taxValue}) => {

    const [productComponent, updateProductComponent] = useState (false)

    const [scroll, setScroll] = useState(0)
    const [scrollBtn, setScrollBtn] = useState(false)

    useEffect(() => {
      document.addEventListener("scroll", () => {
        const scrollCheck = window.scrollY 
        if (scrollCheck !== scroll) {
          setScroll(scrollCheck)
        }
      })
      if(scroll >= 841){
        setScrollBtn(true)
        }
    })

    const reviewSubmit = () => {
        openComponentReview(false)
        setScrollBtn(false)
    }

    return (
        <div className="review">
            <h2 className="review__number">4</h2>
            <div className="review__component__up">
                <div className="review__component">
                    <h2 className="review__heading">Review and finish</h2>
                    <button onClick={() => {openComponentReview(!componentReview)}} className={!componentReview ? "review__heading__button" : "close"}>Edit</button>
                    <div className={componentReview ? "review__component__section" : "close"}>
                        <div className="review__products">
                            {products.map(product => {
                                return(
                                    <ReviewProduct 
                                        product={product}
                                        changeProducts={changeProducts}
                                        deleteProduct={deleteProduct}
                                        productComponent={productComponent}
                                        updateProductComponent={updateProductComponent}
                                    />
                                )
                            })}
                        </div>
                        <div className="review__data">
                            <ReviewData 
                                itemsValue={itemsValue}
                                checkValue={checkValue}
                                productComponent={productComponent}
                                shipValue={shipValue}
                                taxValue={taxValue}
                            />
                        </div>
                        <div style={{position: productComponent ? "relative" : "sticky"}} className={!scrollBtn ? "review__component__button" : "review__component__button-sticky"}>
                            <button style={{opacity: productComponent ? .3 : 1, pointerEvents: productComponent ? "none" : "auto"}} onClick={reviewSubmit} className="review__component__submit" type="submit">Place order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review
