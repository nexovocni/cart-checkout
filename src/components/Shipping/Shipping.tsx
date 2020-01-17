import React, { useState, useContext } from 'react';
import './Shipping.scss';
import ShippingHome from '../../components/ShippingHome/ShippingHome';
import ShippingStore from '../../components/ShippingStore/ShippingStore';
import ShippingData from '../../components/ShippingData/ShippingData';
import { FormComponentContext } from '../../contexts/FormComponentContext';
import { CartComponentContext } from '../../contexts/CartComponentContext';

const Shipping: React.FC = () => {
  const formContext = useContext(FormComponentContext);
  const cartContext = useContext(CartComponentContext);
  const { formComponents, dispatchForm } = formContext;
  const {
    componentShipping,
    editShipping,
    storeShipping,
    homeShipping,
  } = formComponents;
  const { dispatchCart } = cartContext;

  const submitBtn = () => {
    dispatchForm({
      type: 'FORM-COMPONENT',
      payload: {
        componentShipping: !componentShipping,
        componentPayment: true,
        editShipping: true,
      },
    });
    dispatchCart({
      type: 'CART-COMPONENT',
      payload: {
        tax: true,
      },
    });
  };

  const [firstName, setFirstName] = useState('');
  const [firstNameAddress, setFirstNameAddress] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameAddress, setLastNameAddress] = useState('');
  const [firstAddress, setFirstAddress] = useState('');
  const [lastAddress, setLastAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postal, setPostal] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneAddress, setPhoneAddress] = useState('');
  const validate = (value: string) => (value ? null : 'Invalid input');
  const openShipping = () => {
    dispatchForm({
      type: 'FORM-COMPONENT',
      payload: { componentShipping: !componentShipping },
    });
  };

  return (
    <div className="shipping">
      <div className="shipping__component__head">
        <h2
          style={{ color: !componentShipping ? '#999' : '#000' }}
          className="shipping__number"
        >
          2
        </h2>
        <span
          style={{ backgroundColor: !componentShipping ? '#999' : '#000' }}
          className="dash-shipping"
        />
        <h2
          style={{ color: !componentShipping ? '#999' : '#000' }}
          className="shipping__heading"
        >
          Shipping to
        </h2>
        <button
          style={{ opacity: !componentShipping ? 1 : 0 }}
          onClick={openShipping}
          className={
            editShipping
              ? 'shipping__heading__button'
              : 'shipping__heading__button__close'
          }
        >
          Edit
        </button>
      </div>
      <div className="shipping__component__up">
        <ShippingData
          firstName={firstName}
          firstNameAddress={firstNameAddress}
          lastName={lastName}
          lastNameAddress={lastNameAddress}
          firstAddress={firstAddress}
          lastAddress={lastAddress}
          postal={postal}
          province={province}
          country={country}
          city={city}
          phone={phone}
          phoneAddress={phoneAddress}
        />
        <div
          className={
            componentShipping
              ? 'shipping__component__buttons'
              : 'shipping__component__buttons__close'
          }
        >
          <button
            onClick={() =>
              dispatchForm({
                type: 'FORM-COMPONENT',
                payload: { storeShipping: true, homeShipping: false },
              })
            }
            className={
              storeShipping
                ? 'shipping__component__button border-black'
                : 'shipping__component__button'
            }
          >
            Store - Free
          </button>
          <button
            onClick={() =>
              dispatchForm({
                type: 'FORM-COMPONENT',
                payload: { storeShipping: false, homeShipping: true },
              })
            }
            className={
              homeShipping
                ? 'shipping__component__button border-black'
                : 'shipping__component__button'
            }
          >
            Adress - $10.00
          </button>
        </div>
        <div
          className={
            homeShipping && componentShipping
              ? 'shipping__component__home'
              : 'shipping__component__home__close'
          }
        >
          <ShippingHome
            setFirstName={setFirstNameAddress}
            setLastName={setLastNameAddress}
            setFirstAddress={setFirstAddress}
            setLastAddress={setLastAddress}
            setCity={setCity}
            setPostal={setPostal}
            setProvince={setProvince}
            setPhone={setPhoneAddress}
            setCountry={setCountry}
            submitBtn={submitBtn}
            validate={validate}
          />
        </div>
        <div
          className={
            storeShipping && componentShipping
              ? 'shipping__component__store'
              : 'shipping__component__store__close'
          }
        >
          <ShippingStore
            setFirstName={setFirstName}
            setLastName={setLastName}
            setPhone={setPhone}
            validate={validate}
            submitBtn={submitBtn}
          />
        </div>
      </div>
    </div>
  );
};

export default Shipping;
