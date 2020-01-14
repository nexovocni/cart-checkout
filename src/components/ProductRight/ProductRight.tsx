import React from 'react';
import SelectColor from '../SelectColor/SelectColor';
import SelectSize from '../SelectSize/SelectSize';
import SelectQuantity from '../SelectQuantity/SelectQuantity';
import '../SelectColor/SelectColor.scss';
import '../SelectSize/SelectSize.scss';
import '../SelectQuantity/SelectQuantity.scss';
import './ProductRight.scss';
import IProduct from '../../interfaces/Interfaces';

interface IProps {
  product: IProduct;
}

const ProductRight: React.FC<IProps> = ({ product }) => {
  return (
    <div className="product__section__right">
      <div className="product__section__right-color">
        <SelectColor product={product} />
      </div>
      <div className="product__section__right-size">
        <SelectSize product={product} />
      </div>
      <div className="product__section__right-quantity">
        <SelectQuantity product={product} />
      </div>
      <div className="product__section__right-price">
        <p>${parseInt(product.price, 0).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductRight;
