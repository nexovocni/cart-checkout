import React, { useContext } from 'react';
import Product from '../../../components/Product/Product';
import InfoCart from '../../../components/InfoCart/InfoCart';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../../sass/transitions/transitions.scss';
import { ProductContext } from '../../../contexts/ProductContext';
import { CartComponentContext } from '../../../contexts/CartComponentContext';
import './Products.scss';
import { IProduct } from '../../../interfaces/Interfaces';

const Products: React.FC = () => {
  const cartProducts = useContext(ProductContext);
  const { products } = cartProducts;
  const productContext = useContext(CartComponentContext);
  const { switchPage } = productContext.cartComponents;

  return (
    <main className={switchPage ? 'main__cart' : 'main__cart__close'}>
      <InfoCart products={products} />
      <TransitionGroup component={null}>
        {products.map((product: IProduct) => {
          return (
            <CSSTransition
              key={product.id}
              timeout={300}
              classNames="item"
              unmountOnExit={true}
              mountOnEnter={false}
            >
              <Product key={product.id} product={product} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </main>
  );
};

export default Products;
