import React, { useState, useEffect, useRef, useContext } from 'react';
import { CartComponentContext } from '../../contexts/CartComponentContext';
import './SummarySubtotal.scss';

interface IProps {
  itemsValue: number;
}

const SummarySubtotal: React.FC<IProps> = ({ itemsValue }) => {
  const productContext = useContext(CartComponentContext);
  const { disabledCode } = productContext.cartComponents;
  const [value, setValue] = useState();
  const [anime, setAnime] = useState(false);

  useEffect(() => {
    setValue(itemsValue.toFixed(2));
  }, [itemsValue]);

  useEffect(() => {
    setAnime(() => !anime);
  }, [itemsValue]);

  const usePrevious = (valuePrev: undefined) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = valuePrev;
    }, [itemsValue]);
    return ref.current;
  };

  const prevValue = usePrevious(value);

  return (
    <div
      style={{ opacity: disabledCode ? 0.3 : 1, pointerEvents: 'none' }}
      className="summary__top__subtotal"
    >
      <p>Subtotal</p>
      <div className="value-result">
        <p className={anime ? 'prev-value' : 'value-open'}>
          {anime ? `$${prevValue}` : `$${value}`}
        </p>
        <p className={anime ? 'value-open' : 'prev-value'}>
          {!anime ? `$${prevValue}` : `$${value}`}
        </p>
      </div>
    </div>
  );
};

export default SummarySubtotal;
