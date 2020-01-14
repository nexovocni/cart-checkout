import React, { useContext, useState } from 'react';
import { CartComponentContext } from '../../contexts/CartComponentContext';
import { ProductContext } from '../../contexts/ProductContext';
import './Checkbox.scss';

const Checkbox: React.FC = () => {
  const [isChecked, setChecked] = useState(true);

  const cartContext: any = useContext(CartComponentContext);
  const { disabledCode, cartState } = cartContext.cartComponents;
  const productContext: any = useContext(ProductContext);
  const { dispatch } = productContext;
  const { checkValue } = productContext.values;

  return (
    <form
      style={{
        opacity: disabledCode ? 0.3 : 1,
        pointerEvents: disabledCode || cartState ? 'none' : 'auto',
      }}
      className="checkbox"
    >
      <div className="checkbox__component">
        <div className="ship">
          <label>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({
                  type: 'CHECK',
                  payload: parseInt(e.currentTarget.value, 0),
                })
              }
              onClick={() => setChecked(true)}
              checked={isChecked}
              type="radio"
              name="ship"
              value={10}
            />
            <span className="circle" />
            Ship to an adress
          </label>
        </div>
        <p>${checkValue.toFixed(2)}</p>
      </div>
      <div className="checkbox__component">
        <div className="ship">
          <label>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({
                  type: 'CHECK',
                  payload: parseInt(e.currentTarget.value, 0),
                })
              }
              onClick={() => setChecked(false)}
              checked={!isChecked}
              type="radio"
              name="ship"
              value={0}
            />
            <span className="circle" />
            Pick up in store
          </label>
        </div>
        <p>Free</p>
      </div>
    </form>
  );
};

export default Checkbox;
