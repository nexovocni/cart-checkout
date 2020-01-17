import React, { useContext } from 'react';
import './PaymentData.scss';
import { FormComponentContext } from '../../contexts/FormComponentContext';
import formatString from 'format-string-by-pattern';

interface IProps {
  cardCredit: string;
  card: string;
}

const PaymentData: React.FC<IProps> = ({ card, cardCredit }) => {
  const formContext = useContext(FormComponentContext);
  const { formComponents } = formContext;
  const { componentPayment, giftPayment } = formComponents;

  return (
    <div
      className={
        (!componentPayment && giftPayment) || card
          ? 'payment__data__component'
          : 'close'
      }
    >
      <div
        className={!componentPayment && giftPayment ? 'payment__data' : 'close'}
      >
        <p>Applied gift card</p>
      </div>
      <div className={!componentPayment && card ? 'payment__data' : 'close'}>
        <p>
          {card} &nbsp; {formatString('●●●● ●●●● ●●●● 9999', cardCredit)}
        </p>
      </div>
    </div>
  );
};

export default PaymentData;
