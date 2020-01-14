import React, { useContext } from 'react';
import { FormComponentContext } from '../../contexts/FormComponentContext';
import './PaymentButtons.scss';

interface IProps {
  openCredit: any;
  openGift: any;
}

const PaymentButtons: React.FC<IProps> = ({ openCredit, openGift }) => {
  const formContext: any = useContext(FormComponentContext);
  const { formComponents } = formContext;
  const { componentPayment, giftPayment, creditPayment } = formComponents;

  return (
    <div className={componentPayment ? 'payment__component__buttons' : 'close'}>
      <div className="payment__component__buttons__up">
        <button
          onClick={openCredit}
          className={
            creditPayment
              ? 'payment__component__button border-black'
              : 'payment__component__button'
          }
        >
          Credit card
        </button>
        <button
          onClick={openGift}
          className={
            giftPayment
              ? 'payment__component__button border-black'
              : 'payment__component__button'
          }
        >
          Gift card
        </button>
      </div>
      <div className="payment__component__buttons__down">
        <button className="payment__component__button">
          <img className="apple" src="img/apple.svg" alt="apple" />
        </button>
        <button className="payment__component__button">
          <img className="paypay" src="img/pay.svg" alt="pay" />
        </button>
      </div>
    </div>
  );
};

export default PaymentButtons;
