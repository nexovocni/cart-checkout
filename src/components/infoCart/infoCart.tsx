import React from 'react';
import './InfoCart.scss';

const InfoCart: React.FC<any> = ({ products }) => {
  return (
    <div className="info">
      <div className="info__cart">
        <div className="info__cart__bag">
          <p>Your bag - {products.length}</p>
        </div>
        <div className="info__cart__categories">
          <div className="info__cart__categories-color">
            <p>Color</p>
          </div>
          <div className="info__cart__categories-size">
            <p>Size</p>
          </div>
          <div className="info__cart__categories-quantity">
            <p>Quantity</p>
          </div>
          <div className="info__cart__categories-price">
            <p>Price</p>
          </div>
        </div>
      </div>
      <div className="info__line" />
    </div>
  );
};

export default InfoCart;
