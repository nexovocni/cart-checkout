import React from 'react';
import './ViewProduct.scss';
import ViewMobile from '../ViewMobile/ViewMobile';
import { IProduct } from '../../interfaces/Interfaces';

interface IProps {
  review: boolean;
  productState: boolean;
  updateProductState: (value: boolean) => void;
  product: IProduct;
}

const ViewProduct: React.FC<IProps> = ({
  review,
  product,
  productState,
  updateProductState,
}: IProps) => {
  return (
    <React.Fragment>
      <div className={`${review ? `review` : `product`}__section__left-image`}>
        <img
          src={product.image[product.colors.indexOf(product.color)]}
          alt="productImg"
        />
      </div>
      <div className={`${review ? `review` : `product`}__section__left-name`}>
        <div
          className={
            productState
              ? `${review ? `review` : `product`}__name`
              : `${review ? `review` : `product`}__name-mob`
          }
        >
          <div>
            <p>{product.name}</p>
          </div>
          <ViewMobile
            product={product}
            review={review}
            productState={productState}
            updateProductState={updateProductState}
          />
          <div className={productState ? 'wishlist' : 'wishlist-mob'}>
            <p>
              <i className="fa fa-heart" />
              Move to wishlist
            </p>
          </div>
        </div>
        <div className="name__price">
          <p>${product.price.toFixed(2)}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ViewProduct;
