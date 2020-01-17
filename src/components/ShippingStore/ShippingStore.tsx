import React from 'react';
import { Form } from 'react-final-form';
import ShippingName from '../ShippingName/ShippingName';
import ShippingPhone from '../../components/ShippingPhone/ShippingPhone';
import ShippingSelect from '../../components/ShippingSelect/ShippingSelect';
import './ShippingStore.scss';

interface IProps {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  setPhone: (value: string) => void;
  validate: (value: string) => void;
  submitBtn: () => void;
}

const ShippingStore: React.FC<IProps> = ({
  setFirstName,
  setLastName,
  setPhone,
  validate,
  submitBtn,
}) => {
  return (
    <Form
      onSubmit={submitBtn}
      render={({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit} className="shipping__component__form">
            <p>
              Please ensure that your first bane and last name is identical to a
              valid id card. The phone number will be used to contact you once
              your order has been received in your selected store.
            </p>
            <ShippingName
              setFirstName={setFirstName}
              setLastName={setLastName}
              validate={validate}
            />
            <ShippingPhone setPhone={setPhone} validate={validate} />
            <ShippingSelect validate={validate} />
            <button
              onSubmit={() => handleSubmit()}
              className="shipping__component__submit"
              type="submit"
            >
              Continue to payment method
            </button>
          </form>
        );
      }}
    />
  );
};

export default ShippingStore;
