import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import { IProduct } from '../../interfaces/Interfaces';

interface IProps {
  product: IProduct;
}

const SelectSize: React.FC<IProps> = ({ product }) => {
  const productContext = useContext(ProductContext);
  const { changeProducts } = productContext;

  return (
    <div className="product__section__right-size-full">
      <select
        name="size"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          changeProducts(e, product)
        }
      >
        <option selected={true} hidden={true}>
          {product.size}
        </option>
        {product.sizes.map((size: string, index: number) => {
          return (
            <option key={index} value={size}>
              {size}
            </option>
          );
        })}
      </select>
      <i className="fas fa-angle-down" />
    </div>
  );
};

export default SelectSize;
