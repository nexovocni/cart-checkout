import React, { useContext } from 'react';
import { Form } from 'react-final-form';
import ShippingName from '../ShippingName/ShippingName';
import ShippingAddress from '../ShippingAddress/ShippingAddress';
import ShippingCity from '../../components/ShippingCity/ShippingCity';
import ShippingPhone from '../../components/ShippingPhone/ShippingPhone';
import ShippingStandard from '../../components/ShippingStandard/ShippingStandard';
import { FormComponentContext } from '../../contexts/FormComponentContext';
import { ProductContext } from '../../contexts/ProductContext';
import './ShippingHome.scss';

interface IProps {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  setFirstAddress: (value: string) => void;
  setLastAddress: (value: string) => void;
  setCity: (value: string) => void;
  setProvince: (value: string) => void;
  setPostal: (value: string) => void;
  setCountry: (value: string) => void;
  setPhone: (value: string) => void;
  validate: (value: string) => void;
  submitBtn: () => void;
}

const ShippingHome: React.FC<IProps> = ({
  setFirstName,
  setLastName,
  setFirstAddress,
  setLastAddress,
  setCity,
  setCountry,
  setPhone,
  setPostal,
  setProvince,
  validate,
  submitBtn,
}: IProps) => {
  const formContext = useContext(FormComponentContext);
  const { formComponents } = formContext;
  const { componentShipping } = formComponents;
  const productContext: any = useContext(ProductContext);
  const { shipValue, checkValue } = productContext;

  return (
    <Form
      onSubmit={submitBtn}
      render={(props: any) => {
        return (
          <form
            onSubmit={props.handleSubmit}
            className={
              componentShipping ? 'shipping__component__form' : 'close'
            }
          >
            <ShippingName
              setFirstName={setFirstName}
              setLastName={setLastName}
              validate={validate}
            />
            <ShippingAddress
              setFirstAddress={setFirstAddress}
              setLastAddress={setLastAddress}
              validate={validate}
            />
            <ShippingCity
              setCity={setCity}
              setProvince={setProvince}
              setPostal={setPostal}
              setCountry={setCountry}
              validate={validate}
            />
            <ShippingPhone setPhone={setPhone} validate={validate} />
            {checkValue === 0 || shipValue < 0 ? (
              <div className="shipping__standard">
                <div>
                  <h3>Standard shipping</h3>
                  <p>5 - 7 business days</p>
                </div>
                <div>$10.00</div>
              </div>
            ) : (
              <ShippingStandard />
            )}
            <button
              onSubmit={props.handleSubmit}
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

export default ShippingHome;
