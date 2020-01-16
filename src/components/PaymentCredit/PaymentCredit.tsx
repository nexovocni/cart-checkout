import React from 'react';
import './PaymentCredit.scss';
import { Form, Field } from 'react-final-form';
import formatString from 'format-string-by-pattern';

interface IProps {
  setCardCredit: (value: string) => void;
  submitBtn: () => void;
  validate: (value: string) => void;
  setCard: (value: string) => void;
  cardCredit: string;
  cardValue: string;
}

const PaymentCredit: React.FC<IProps> = ({
  validate,
  submitBtn,
  setCard,
  setCardCredit,
  cardValue,
}) => {
  const clearNumber = (value: string = '') => {
    return value.replace(/\D+/g, '');
  };

  const cardValidate = (input: string): string | null | void => {
    if (cardValue === 'Visa card') {
      const visaValidator = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
      return visaValidator.test(clearNumber(input)) ? null : 'Invalid input';
    } else if (cardValue === 'Master card') {
      const masterValidator = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
      return masterValidator.test(clearNumber(input)) ? null : 'Invalid input';
    } else if (cardValue === 'American express') {
      const expressValidator = /^3[47][0-9]{13}$/;
      return expressValidator.test(clearNumber(input)) ? null : 'Invalid input';
    } else if (cardValue === '') {
      return 'Invalid input';
    }
  };

  const dateValidate = (input: string) => {
    const dateReg = new RegExp('^(0[1-9]|1[0-2]) / (1[9]|2[0-9])$', 'g');
    return dateReg.test(input) ? null : 'Invalid input';
  };

  const formatNumbers = (anyString: string) => {
    const onlyNumbers = anyString.replace(/[^\d]/g, '');
    return formatString('9999 9999 9999 9999 9999', onlyNumbers);
  };

  const cvvValidate = (input: string): string | null | void => {
    if (cardValue === 'Visa card' || cardValue === 'Master card') {
      const cvvValidator = /^[0-9]{3}$/;
      return cvvValidator.test(clearNumber(input)) ? null : 'Invalid input';
    } else if (cardValue === 'American express') {
      const cvvValidator = /^[0-9]{4}$/;
      return cvvValidator.test(clearNumber(input)) ? null : 'Invalid input';
    } else if (cardValue === '') {
      return 'Invalid input';
    }
  };

  return (
    <Form
      onSubmit={submitBtn}
      render={(props: any) => {
        return (
          <form
            onSubmit={props.handleSubmit}
            className="payment__component__form"
          >
            <div className="payment__component__input border-bottom">
              <Field
                name="radius"
                type="select"
                component="input"
                validate={validate}
              >
                {({ input, meta }) => {
                  setCard(input.value);
                  return (
                    <>
                      <label
                        className={
                          input.value ? 'payment__component__label' : 'close'
                        }
                      >
                        Cards in my wallet
                      </label>
                      <select
                        placeholder="Country"
                        className={
                          input.value
                            ? 'payment__component__credit__select select'
                            : 'payment__component__credit__select select border'
                        }
                        {...input}
                      >
                        <option selected={true} hidden={true} value="">
                          Chose a card
                        </option>
                        <option value="Visa card">Visa card</option>
                        <option value="Master card">Master card</option>
                        <option value="American express">
                          American Express
                        </option>
                      </select>
                      <i className="fas fa-angle-down select" />
                      {meta.error && meta.touched ? (
                        <span className="payment__component__validation">
                          {meta.error}
                        </span>
                      ) : null}
                    </>
                  );
                }}
              </Field>
            </div>
            <div className="payment__component__input">
              <Field
                name="credit-name"
                type="text"
                component="input"
                validate={validate}
              >
                {({ input, meta }) => {
                  return (
                    <>
                      <label
                        className={
                          input.value ? 'payment__component__label' : 'close'
                        }
                      >
                        Card holder name
                      </label>
                      <input
                        placeholder="Card holder name"
                        className="payment__component__credit__name"
                        {...input}
                      />
                      {meta.error && meta.touched ? (
                        <span className="payment__component__validation">
                          {meta.error}
                        </span>
                      ) : null}
                    </>
                  );
                }}
              </Field>
            </div>
            <div className="payment__component__input">
              <Field
                name="credit-number"
                type="text"
                component="input"
                validate={cardValidate}
                parse={formatNumbers}
              >
                {({ input, meta }) => {
                  setCardCredit(input.value);
                  return (
                    <>
                      <label
                        className={
                          input.value ? 'payment__component__label' : 'close'
                        }
                      >
                        Card number
                      </label>
                      <input
                        placeholder="Card number"
                        className="payment__component__credit__number"
                        {...input}
                      />
                      {meta.error && meta.touched ? (
                        <span className="payment__component__validation">
                          {meta.error}
                        </span>
                      ) : null}
                    </>
                  );
                }}
              </Field>
            </div>
            <div className="payment__component__display">
              <Field
                name="credit-expirarion"
                type="text"
                component="input"
                validate={dateValidate}
                parse={formatString('MM / YY')}
              >
                {({ input, meta }) => {
                  return (
                    <div className="payment__component__date">
                      <label
                        className={
                          input.value ? 'payment__component__label' : 'close'
                        }
                      >
                        Expiration date
                      </label>
                      <input
                        placeholder="MM / YY"
                        className="payment__component__credit__expiration"
                        {...input}
                      />
                      {meta.error && meta.touched ? (
                        <span className="payment__component__validation">
                          {meta.error}
                        </span>
                      ) : null}
                    </div>
                  );
                }}
              </Field>
              <Field
                name="credit-date"
                type="text"
                component="input"
                validate={cvvValidate}
                parse={formatString('1234')}
              >
                {({ input, meta }) => {
                  return (
                    <div className="payment__component__date">
                      <label
                        className={
                          input.value ? 'payment__component__label' : 'close'
                        }
                      >
                        CVV
                      </label>
                      <input
                        placeholder="CVV"
                        className="payment__component__credit__date"
                        {...input}
                      />
                      {meta.error && meta.touched ? (
                        <span className="payment__component__validation">
                          {meta.error}
                        </span>
                      ) : null}
                    </div>
                  );
                }}
              </Field>
            </div>
            <div className="payment__component__shipping">
              <div className="payment__component__shipping__sign">
                {' '}
                <i className="fa fa-check" />
              </div>
              <p className="payment__component__shipping__text">
                Billing address same as shipping
              </p>
            </div>
            <button
              onSubmit={props.handleSubmit}
              className="payment__component__credit__submit"
              type="submit"
            >
              Review and finish
            </button>
          </form>
        );
      }}
    />
  );
};

export default PaymentCredit;
