import React, { useContext } from 'react';
import { CartComponentContext } from '../../contexts/CartComponentContext';
import './Buttons.scss';

const Buttons: React.FC = () => {
  const productContext = useContext(CartComponentContext);
  const { switchPage, disabledCode } = productContext.cartComponents;
  const { dispatch } = productContext;
  const pageSwitch = () => {
    dispatch({ type: 'COMPONENT', payload: { switchPage: !switchPage } });
  };

  return (
    <div
      style={{
        opacity: disabledCode ? 0.3 : 1,
        pointerEvents: !disabledCode ? 'auto' : 'none',
      }}
      className="buttons"
    >
      <button onClick={pageSwitch} className="button button_check">
        Checkout now
      </button>
      <button className="button button_pay">
        <img className="apple" src="img/apple.svg" alt="btnImage" />
      </button>
      <button className="button button_pay">
        <img className="paypay" src="img/pay.svg" alt="btnImage" />
      </button>
    </div>
  );
};

export default Buttons;
