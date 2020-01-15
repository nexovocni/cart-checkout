import React, { useState, useContext } from 'react';
import { Field } from 'react-final-form';
import { ProductContext } from '../../contexts/ProductContext';
import './ShippingStandard.scss';

const ShippingStandard: React.FC = () => {
  const [isChecked, setChecked] = useState(true);
  const productContext: any = useContext(ProductContext);
  const { dispatch } = productContext;
  const checkBtn = (input: string) => {
    dispatch({ type: 'CHECK', payload: parseInt(input, 0) });
    setChecked(false);
  };

  const checkBtnStandard = (input: string) => {
    dispatch({ type: 'CHECK', payload: parseInt(input, 0) });
    setChecked(true);
  };

  return (
    <React.Fragment>
      <h3 className="shipping__component__heading">Shipping method</h3>
      <div className="shipping__component__radio">
        <div className="shipping__component__radio__input">
          <Field
            type="radio"
            name="ship"
            value={'10'}
            component="input"
            checked={true}
          >
            {({ input }) => {
              input.checked = isChecked;
              return (
                <label>
                  <input
                    onClick={() => checkBtnStandard(input.value)}
                    {...input}
                  />
                  <span className="circle" />
                  Standard Shipping
                  <p>5 - 7 business days</p>
                </label>
              );
            }}
          </Field>
        </div>
        <p>$10.00</p>
      </div>
      <div className="shipping__component__radio">
        <div className="shipping__component__radio__input">
          <Field type="radio" name="ship" value={'15'} component="input">
            {({ input }) => {
              return (
                <label>
                  <input onClick={() => checkBtn(input.value)} {...input} />
                  <span className="circle" />
                  Express Shipping
                  <p>2 - 3 business days</p>
                </label>
              );
            }}
          </Field>
        </div>
        <p>$15.00</p>
      </div>
      <div className="shipping__component__radio">
        <div className="shipping__component__radio__input">
          <Field type="radio" name="ship" value={'20'} component="input">
            {({ input }) => {
              return (
                <label>
                  <input onClick={() => checkBtn(input.value)} {...input} />
                  <span className="circle" />
                  Next day delivery
                  <p>Orders before 12PM</p>
                </label>
              );
            }}
          </Field>
        </div>
        <p>$20.00</p>
      </div>
    </React.Fragment>
  );
};

export default ShippingStandard;
