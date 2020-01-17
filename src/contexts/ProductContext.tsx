import React, { createContext, useState, useEffect, useReducer } from 'react';
import { ValueReducer } from '../reducers/ValueReducer';
import { fetchProducts } from '../service/Service';
import { IProduct } from '../interfaces/Interfaces';
import { IProductContext } from '../interfaces/Interfaces';

const cartValues = {
  values: {
    itemsValue: 0,
    shipValue: 0,
    cartCheckValue: 0,
    value: 0,
    checkValue: 0,
    taxValue: { gst: 3.01, pst: 1.99 },
  },
};

export const ProductContext = createContext<IProductContext>(cartValues);

export const ProductContextProvider = (props: {
  children: React.ReactNode;
}) => {
  let itemsValue = 0;
  const checkValue = 10;
  const [cartCheckValue, dispatch] = useReducer(ValueReducer, checkValue);
  const [products, updateProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetchProducts(
      'https://private-1c29a1-products156.apiary-mock.com/products'
    ).then((data: { products: IProduct[] }) => {
      updateProducts(data.products);
    });
  }, []);

  const changeProducts = (
    e: React.ChangeEvent<HTMLSelectElement>,
    productValue: IProduct
  ) => {
    const newProduct = {
      ...productValue,
      [e.target.name]: e.target.value,
    };
    const newProducts: IProduct[] = products.map((product: IProduct) =>
      product.id === newProduct.id ? newProduct : product
    );
    updateProducts(newProducts);
  };

  const deleteProduct = (productId: number) => {
    const newProducts = products.filter(
      (product: IProduct) => product.id !== productId
    );
    updateProducts(newProducts);
  };

  {
    products.map((product: IProduct) => {
      itemsValue += product.quantity * product.price;
    });
  }

  const value = itemsValue + cartCheckValue;
  const shipValue = 550 - itemsValue;

  const values = {
    itemsValue,
    shipValue,
    cartCheckValue,
    value,
    checkValue,
    taxValue: { gst: 3.01, pst: 1.99 },
  };

  const productContext: IProductContext = {
    values,
    products,
    dispatch,
    changeProducts,
    deleteProduct,
  };

  return (
    <ProductContext.Provider value={productContext}>
      {props.children}
    </ProductContext.Provider>
  );
};
