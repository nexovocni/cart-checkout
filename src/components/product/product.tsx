import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import { IProduct } from '../../interfaces/Interfaces';
import ProductLeft from '../ProductLeft/ProductLeft';
import ProductRight from '../ProductRight/ProductRight';
import './Product.scss';

interface IProps {
  product: IProduct;
}

const Product: React.FC<IProps> = ({ product }) => {
  const productContext = useContext(ProductContext);
  const { deleteProduct } = productContext;

  return (
    <div className="product">
      <div className="product__section">
        <ProductLeft product={product} review={false} />
        <ProductRight product={product} />
      </div>
      <div
        id={`${product.id}`}
        onClick={() => {
          deleteProduct(product.id);
        }}
        className="product__exit"
      >
        <i className="fa fa-times" />
      </div>
    </div>
  );
};

export default Product;
