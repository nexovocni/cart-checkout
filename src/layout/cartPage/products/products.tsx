import React, {useContext, useEffect} from 'react'
import Product from '../../../components/Product/Product'
import InfoCart from '../../../components/InfoCart/InfoCart'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import '../../../sass/transitions/transitions.scss'
import {ProductContext} from '../../../contexts/ProductContext'
import './Products.scss'

interface IProps {
    updateState: any
    stateComponent: boolean,
    switchComponent: boolean;
}

const Products: React.FC<IProps> = ({ updateState, stateComponent,switchComponent}) => {

    const cartProducts:any = useContext(ProductContext)
    const {products} = cartProducts

    return (
        <main className={switchComponent ? "main__cart" : "main__cart__close"}>
            <InfoCart products={ products }/>
            <TransitionGroup component={null}>
                {products.map((product: any) => {
                    return (
                        <CSSTransition
                            key={product.id}
                            timeout={300}
                            classNames="item"
                            unmountOnExit={true}
                            mountOnEnter={false}
                        >
                        <Product
                            key={ product.id }
                            product={ product } 
                            updateState= { updateState }
                            stateComponent={stateComponent}
                        />
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>
        </main>
    )
}

export default Products
