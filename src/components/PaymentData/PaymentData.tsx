import React, { useContext } from "react";
import "./PaymentData.scss";
import { FormComponentContext } from "../../contexts/FormComponentContext";
import formatString from "format-string-by-pattern";

interface IProps {
  cardCredit: string;
  card: string;
}

const PaymentData: React.FC<IProps> = ({ card, cardCredit }) => {
  const formContext: any = useContext(FormComponentContext);
  const { formComponents } = formContext;
  const { componentPayment, giftPayment } = formComponents;

  return (
    <div
      className={
        (!componentPayment && giftPayment) || card
          ? "payment__data__component"
          : "payment__data__component__close"
      }
    >
      <div
        className={
          !componentPayment && giftPayment
            ? "payment__data"
            : "payment__data__close"
        }
      >
        <p>Applied gift card</p>
      </div>
      <div
        className={
          !componentPayment && card ? "payment__data" : "payment__data__close"
        }
      >
        <p>
          {card} &nbsp; {formatString("●●●● ●●●● ●●●● 9999", cardCredit)}
        </p>
      </div>
    </div>
  );
};

export default PaymentData;
