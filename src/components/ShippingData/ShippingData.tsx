import React, { useContext } from 'react';
import './ShippingData.scss';
import { FormComponentContext } from '../../contexts/FormComponentContext';

interface IProps {
  firstName: string;
  firstNameAddress: string;
  lastName: string;
  lastNameAddress: string;
  firstAddress: string;
  lastAddress: string;
  postal: string;
  city: string;
  province: string;
  country: string;
  phone: string;
  phoneAddress: string;
}

const ShippingData: React.FC<IProps> = ({
  firstName,
  lastName,
  firstAddress,
  lastAddress,
  postal,
  province,
  city,
  country,
  phone,
  firstNameAddress,
  lastNameAddress,
  phoneAddress,
}) => {
  const formContext = useContext(FormComponentContext);
  const { formComponents } = formContext;
  const { componentShipping, homeShipping, storeShipping } = formComponents;

  return (
    <React.Fragment>
      <div
        className={
          !componentShipping && storeShipping
            ? 'shipping__data'
            : 'shipping__data__close'
        }
      >
        <p>
          {firstName} {lastName}
        </p>
        <p>{phone}</p>
      </div>
      <div
        className={
          !componentShipping && homeShipping
            ? 'shipping__data'
            : 'shipping__data__close'
        }
      >
        <p>
          {firstNameAddress} {lastNameAddress}
        </p>
        <p>
          {firstAddress}, {lastAddress}
        </p>
        <p>
          {postal}, {city}, {province}, {country}
        </p>
        <p>{phoneAddress}</p>
      </div>
    </React.Fragment>
  );
};

export default ShippingData;
