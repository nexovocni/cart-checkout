import React, { useContext } from 'react';
import './SummaryCart.scss';
import Checkbox from '../../../components/Checkbox/Checkbox';
import Code from '../../../components/Code/Code';
import Buttons from '../../../components/SummaryButtons/Buttons';
import SummaryTotal from '../../../components/SummaryTotal/SummaryTotal';
import SummaryTitle from '../../../components/SummaryTitle/SummaryTitle';
import SummarySubtotal from '../../../components/SummarySubtotal/SummarySubtotal';
import { ProductContext } from '../../../contexts/ProductContext';
import { CartComponentContext } from '../../../contexts/CartComponentContext';

const Summary: React.FC = () => {
  const productContext = useContext(CartComponentContext);
  const { disabledCode, switchPage } = productContext.cartComponents;

  const cartProducts = useContext(ProductContext);
  const { values } = cartProducts;
  const { itemsValue, shipValue, value } = values;

  return (
    <React.Fragment>
      <div className={switchPage ? 'summarycart' : 'summarycart__close'}>
        <div className="summarycart__top">
          <SummaryTitle shipValue={shipValue} />
          <SummaryTotal
            itemsValue={`$${itemsValue.toFixed(2)}`}
            title="Your order"
            valueTrans={true}
          />
          <div
            style={{ opacity: disabledCode ? 0.3 : 1 }}
            className="summarycart__line"
          />
          <Checkbox />
          <div className="summarycart__line-grey" />
          <Code
            title="Estimate your tax and shipping"
            button="Estimate"
            placeholder="Enter Tax Code"
          />
          <div className="summarycart__line-grey" />
          <Code
            title="Have a promo code"
            button="Apply"
            placeholder="Enter Zip Code"
          />
          <div className="summarycart__line-grey" />
          <SummarySubtotal itemsValue={value} />
        </div>
        <div
          className={
            switchPage ? 'summarycart__bottom' : 'summarycart__bottom__close'
          }
        >
          <Buttons />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Summary;
