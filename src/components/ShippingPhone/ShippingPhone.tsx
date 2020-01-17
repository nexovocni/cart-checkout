import React from 'react';
import { Field } from 'react-final-form';
import './ShippingPhone.scss';

interface IProps {
  setPhone: (value: string) => void;
  validate: (value: string) => void;
}

const ShippingPhone: React.FC<IProps> = ({ setPhone, validate }: IProps) => {
  return (
    <div className="shipping__component__phone">
      <div className="shipping__component__phone__phone">
        <Field name="phone" type="text" component="input" validate={validate}>
          {({ input, meta }) => {
            setPhone(input.value);
            return (
              <>
                <label
                  className={
                    input.value
                      ? 'shipping__component__label'
                      : 'shipping__component__label__close'
                  }
                >
                  Phone
                </label>
                <input
                  placeholder="Phone"
                  className="shipping__component__phone__input"
                  {...input}
                />
                <div className="shipping__component__phone__underinput">
                  <span>Why is it required?</span>
                  {meta.error && meta.touched ? (
                    <span className="shipping__component__validation">
                      {meta.error}
                    </span>
                  ) : null}
                </div>
              </>
            );
          }}
        </Field>
      </div>
    </div>
  );
};

export default ShippingPhone;
