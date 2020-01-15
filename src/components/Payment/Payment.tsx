import React, { useState, useContext } from 'react';
import './Payment.scss';
import PaymentData from '../PaymentData/PaymentData';
import PaymentGift from '../PaymentGift/PaymentGift';
import PaymentCredit from '../PaymentCredit/PaymentCredit';
import PaymentButtons from '../PaymentButtons/PaymentButtons';
import { FormComponentContext } from '../../contexts/FormComponentContext';

const Payment: React.FC = () => {
  const [card, setCard] = useState('');
  const [cardCredit, setCardCredit] = useState('');
  const formContext = useContext(FormComponentContext);
  const { formComponents, dispatch } = formContext;
  const {
    componentPayment,
    editPayment,
    creditPayment,
    giftPayment,
  } = formComponents;
  const openGift = () => {
    dispatch({
      type: 'COMPONENT',
      payload: { giftPayment: true, creditPayment: false },
    });
    setCardCredit('');
  };

  const openCredit = () => {
    dispatch({
      type: 'COMPONENT',
      payload: { giftPayment: false, creditPayment: true },
    });
  };

  const validate = (value: null | string) => (value ? null : 'Invalid input');

  const submitBtn = () => {
    dispatch({
      type: 'COMPONENT',
      payload: {
        componentPayment: !componentPayment,
        componentReview: true,
        editPayment: true,
      },
    });
  };

  const openPayment = () => {
    dispatch({
      type: 'COMPONENT',
      payload: { componentPayment: !componentPayment },
    });
  };

  return (
    <div className="payment">
      <div className="payment__up">
        <h2
          style={{ color: !componentPayment ? '#999' : '#000' }}
          className="payment__number"
        >
          3
        </h2>
        <div
          style={{ backgroundColor: !componentPayment ? '#999' : '#000' }}
          className="dash-payment"
        />
        <h2
          style={{ color: !componentPayment ? '#999' : '#000' }}
          className="payment__heading"
        >
          Payment method
        </h2>
        <button
          style={{ opacity: !componentPayment ? 1 : 0 }}
          onClick={openPayment}
          className={editPayment ? 'payment__heading__button' : 'editBtn'}
        >
          Edit
        </button>
      </div>
      <div className="payment__component">
        <PaymentData cardCredit={cardCredit} card={card} />
        <PaymentButtons openGift={openGift} openCredit={openCredit} />
      </div>
      <div
        className={
          componentPayment && giftPayment
            ? 'payment__component__gift'
            : 'payment__component__gift__close'
        }
      >
        <PaymentGift validate={validate} submitBtn={submitBtn} />
      </div>
      <div
        className={
          componentPayment && creditPayment
            ? 'payment__component__credit'
            : 'payment__component__credit__close'
        }
      >
        <PaymentCredit
          submitBtn={submitBtn}
          setCard={setCard}
          setCardCredit={setCardCredit}
          validate={validate}
          cardCredit={cardCredit}
          cardValue={card}
        />
      </div>
    </div>
  );
};

export default Payment;
