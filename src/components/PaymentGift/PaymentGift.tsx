import React from 'react';
import { Form, Field } from 'react-final-form';
import './PaymentGift.scss';

interface IProps {
  submitBtn: any;
  validate: any;
}

const PaymentGift: React.FC<IProps> = ({ validate, submitBtn }) => {
  return (
    <React.Fragment>
      <Form
        onSubmit={submitBtn}
        render={(props: any) => {
          return (
            <>
              <h3 className="payment__component__gift__heading">
                Apply gift cards
              </h3>
              <form
                onSubmit={props.handleSubmit}
                className="payment__component__form__gift"
              >
                <Field
                  name="gift-number"
                  type="text"
                  component="input"
                  validate={validate}
                >
                  {({ input, meta }) => {
                    return (
                      <div className="payment__component__gift__input">
                        <label
                          className={
                            input.value
                              ? 'payment__component__gift__label'
                              : 'close'
                          }
                        >
                          Gift card number
                        </label>
                        <input
                          placeholder="Gift card number"
                          className="payment__component__gift__number"
                          {...input}
                        />
                        {meta.error && meta.touched ? (
                          <span className="payment__component__gift__validation">
                            {meta.error}
                          </span>
                        ) : (
                          <span className="payment__component__gift__text">
                            Keep card for 30 days after purchase
                          </span>
                        )}
                      </div>
                    );
                  }}
                </Field>
                <Field
                  name="pin-number"
                  type="password"
                  component="input"
                  validate={validate}
                >
                  {({ input, meta }) => {
                    return (
                      <div className="payment__component__gift__input">
                        <label
                          className={
                            input.value
                              ? 'payment__component__gift__label'
                              : 'close'
                          }
                        >
                          PIN
                        </label>
                        <input
                          placeholder="PIN"
                          className="payment__component__gift__pin"
                          {...input}
                        />
                        {meta.error && meta.touched ? (
                          <span className="payment__component__gift__validation">
                            {meta.error}
                          </span>
                        ) : null}
                      </div>
                    );
                  }}
                </Field>
                <button
                  onSubmit={props.handleSubmit}
                  className="payment__component__gift__submit"
                  type="submit"
                >
                  Apply
                </button>
              </form>
            </>
          );
        }}
      />
    </React.Fragment>
  );
};
export default PaymentGift;
