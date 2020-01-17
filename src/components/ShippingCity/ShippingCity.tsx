import React from 'react';
import { Field } from 'react-final-form';
import './ShippingCity.scss';

interface IProps {
  setCity: (value: string) => void;
  setProvince: (value: string) => void;
  setPostal: (value: string) => void;
  setCountry: (value: string) => void;
  validate: (value: string) => void;
}

const ShippingCity: React.FC<IProps> = ({
  setCity,
  setProvince,
  setCountry,
  setPostal,
  validate,
}) => {
  return (
    <div className="shipping__component__city">
      <div className="shipping__component__city__city">
        <Field name="city" type="text" component="input" validate={validate}>
          {({ input, meta }) => {
            setCity(input.value);
            return (
              <div className="shipping__component__city__field">
                <label
                  className={
                    input.value
                      ? 'shipping__component__label'
                      : 'shipping__component__label__close'
                  }
                >
                  City
                </label>
                <input
                  placeholder="City"
                  className={
                    input.value
                      ? 'shipping__component__city__input'
                      : 'shipping__component__city__input border'
                  }
                  {...input}
                />
                {meta.error && meta.touched ? (
                  <span className="shipping__component__validation">
                    {meta.error}
                  </span>
                ) : null}
              </div>
            );
          }}
        </Field>
        <Field
          name="province"
          type="text"
          component="input"
          validate={validate}
        >
          {({ input, meta }) => {
            setProvince(input.value);
            return (
              <div className="shipping__component__city__field">
                <label
                  className={
                    input.value
                      ? 'shipping__component__label'
                      : 'shipping__component__label__close'
                  }
                >
                  Province
                </label>
                <input
                  placeholder="Province"
                  className={
                    input.value
                      ? 'shipping__component__province__input'
                      : 'shipping__component__province__input border'
                  }
                  {...input}
                />
                {meta.error && meta.touched ? (
                  <span className="shipping__component__validation">
                    {meta.error}
                  </span>
                ) : null}
              </div>
            );
          }}
        </Field>
      </div>
      <div className="shipping__component__city__postal">
        <Field name="postal" type="text" component="input" validate={validate}>
          {({ input, meta }) => {
            setPostal(input.value);
            return (
              <div className="shipping__component__city__field">
                <label
                  className={
                    input.value
                      ? 'shipping__component__label'
                      : 'shipping__component__label__close'
                  }
                >
                  Postal Code
                </label>
                <input
                  placeholder="Postal Code"
                  className={
                    input.value
                      ? 'shipping__component__postal__input'
                      : 'shipping__component__postal__input border'
                  }
                  {...input}
                />
                {meta.error && meta.touched ? (
                  <span className="shipping__component__validation">
                    {meta.error}
                  </span>
                ) : null}
              </div>
            );
          }}
        </Field>
        <Field
          name="country"
          type="select"
          component="input"
          validate={validate}
        >
          {({ input, meta }) => {
            setCountry(input.value);
            return (
              <div className="shipping__component__city__field border-bottom">
                <label
                  className={
                    input.value
                      ? 'shipping__component__label'
                      : 'shipping__component__label__close'
                  }
                >
                  Country
                </label>
                <select
                  placeholder="Country"
                  className="shipping__component__country__input select border"
                  {...input}
                >
                  <option selected={true} value="Canada">
                    Canada
                  </option>
                  <option value="America">America</option>
                  <option value="Mexico">Mexico</option>
                </select>
                <i className="fas fa-angle-down select" />
                {meta.error && meta.touched ? (
                  <span className="shipping__component__validation">
                    {meta.error}
                  </span>
                ) : null}
              </div>
            );
          }}
        </Field>
      </div>
    </div>
  );
};

export default ShippingCity;
