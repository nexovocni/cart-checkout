import React, { useContext } from 'react';
import './Summary.scss';
import SummaryForm from '../SummaryForm/SummaryForm';
import SummaryCart from '../SummaryCart/SummaryCart';
import MobileHeader from '../../../components/MobileHeader/MobileHeader';
import { CartComponentContext } from '../../../contexts/CartComponentContext';

const Summary: React.FC = () => {
  const productContext: any = useContext(CartComponentContext);
  const { cartState } = productContext;

  return (
    <React.Fragment>
      <section
        style={{
          opacity: cartState ? 0.3 : 1,
          pointerEvents: cartState ? 'none' : 'auto',
        }}
        className="summary"
      >
        <MobileHeader />
        <SummaryCart />
        <SummaryForm />
      </section>
    </React.Fragment>
  );
};

export default Summary;
