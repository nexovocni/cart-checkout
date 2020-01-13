import React, {useState, useEffect, useContext} from 'react';
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import ReviewData from '../ReviewData/ReviewData';
import {FormComponentContext} from '../../contexts/FormComponentContext';
import {ProductContext} from '../../contexts/ProductContext';
import './Review.scss';

const Review: React.FC = (): any => {

    const [stateComponent, updateStateComponent] = useState (false);
    const [scrollBtn, setScrollBtn] = useState(false);
    const formContext: any = useContext(FormComponentContext);
    const {formComponents, dispatch} = formContext;
    const {componentReview, editReview} = formComponents;
    const productContext: any = useContext(ProductContext);
    const {products} = productContext;

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const wrappedElement = document.getElementById('sticky_div');
            if (Math.round(wrappedElement!.getBoundingClientRect().bottom) - window.innerHeight <= 0) {
                setScrollBtn(true);
            }
        });
    }, [componentReview]);

    const reviewSubmit = (): any => {
        setScrollBtn(false);
        dispatch({type: 'COMPONENT', payload: {componentReview: false, editReview: true}});
        updateStateComponent(false);
    };

    const openReview = (): any => {
        dispatch({type: 'COMPONENT', payload: {componentReview: !componentReview}});
    };

    return (
        <div className="review">
            <div className="review__up">
            <h2 style={{color: !componentReview ? '#999' : '#000'}} className="review__number">4</h2>
            <div style={{backgroundColor: !componentReview ? '#999' : '#000'}} className="dash-review" />
            <h2 style={{color: !componentReview ? '#999' : '#000'}} className="review__heading">Review and finish</h2>
            <button style={{opacity: !componentReview ? 1 : 0}} onClick={openReview} className={editReview ? 'review__heading__button' : 'editBtn'}>Edit</button>
            </div>
            <div className="review__component">
                <div className={componentReview ? 'review__component__section' : 'close'}>
                    <div className="review__products">
                        {products.map((product: any) => {
                            return(
                                <ReviewProduct
                                    product={product}
                                    key={product.id}
                                />
                            );
                        })}
                    </div>
                    <div className="review__data">
                        <ReviewData />
                    </div>
                    <div style={{position: stateComponent ? 'relative' : 'sticky'}} id="sticky_div" className={!scrollBtn ? 'review__component__button' : 'review__component__button-sticky'}>
                        <button style={{opacity: stateComponent ? .3 : 1, pointerEvents: stateComponent ? 'none' : 'auto'}} onClick={reviewSubmit} className="review__component__submit" type="submit">Place order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
