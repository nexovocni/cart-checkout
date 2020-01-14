import React, { useState, useContext } from 'react';
import { Field, Form } from 'react-final-form';
import './EmailPassword.scss';
import { FormComponentContext } from '../../contexts/FormComponentContext';

interface IProps {
  submitBtn: any;
  inputValue: string;
  validate: any;
}

const PasswordEmail: React.FC<IProps> = ({
  submitBtn,
  inputValue,
  validate,
}) => {
  const [passwordValue, setPasswordValue] = useState('');

  const [eye, setEye] = useState(false);

  const validatePassword = (value: string) => {
    const passValidation = /^[a-zA-Z0-9]{5,}$/;
    return passValidation.test(value)
      ? null
      : 'Password needs to be at least 5 charactes long';
  };

  const validateConfirmPassword = (value: string) =>
    value === passwordValue ? null : 'Password dont match';

  const formContext: any = useContext(FormComponentContext);

  const { formComponents } = formContext;

  const { componentPassword } = formComponents;

  return (
    <Form
      onSubmit={submitBtn}
      render={(props: any) => {
        return (
          <div
            className={
              validate(inputValue) && componentPassword
                ? 'email__component__password'
                : 'close'
            }
          >
            <div className="email__component__password__up">
              <i className="fas fa-circle dot" />
              <p>
                Create your password using at least 5 characters and some other
                interesting security rules for your own safety.
              </p>
              <Field
                name="password"
                type={!eye ? 'password' : 'text'}
                component="input"
                validate={validatePassword}
              >
                {({ input, meta }) => {
                  setPasswordValue(input.value);
                  return (
                    <div className="email__component__field">
                      <i
                        onClick={() => setEye(!eye)}
                        className="fa fa-eye input"
                      />
                      {meta.error && meta.touched ? (
                        <i className="fa fa-times red" />
                      ) : null}
                      {meta.touched && !meta.error && meta.touched ? (
                        <i className="fa fa-check green" />
                      ) : null}
                      <input
                        placeholder="Password"
                        className={
                          input.value
                            ? 'email__component__input'
                            : 'email__component__input border'
                        }
                        {...input}
                      />
                      {meta.error && meta.touched ? (
                        <span className="email__component__password__validation">
                          {meta.error}
                        </span>
                      ) : null}
                    </div>
                  );
                }}
              </Field>
              <Field
                name="confirm-password"
                type="password"
                component="input"
                validate={validateConfirmPassword}
              >
                {({ input, meta }) => {
                  return (
                    <div className="email__component__field">
                      <i
                        onClick={() => setEye(!eye)}
                        className="fa fa-eye input pass"
                      />
                      {meta.error && meta.touched ? (
                        <i className="fa fa-times red" />
                      ) : null}
                      {meta.touched && !meta.error && meta.touched ? (
                        <i className="fa fa-check green" />
                      ) : null}
                      <input
                        placeholder="Confirm Password"
                        className={
                          input.value
                            ? 'email__component__input'
                            : 'email__component__input border'
                        }
                        {...input}
                      />
                      {meta.error && meta.touched ? (
                        <span className="email__component__password__validation">
                          {meta.error}
                        </span>
                      ) : null}
                    </div>
                  );
                }}
              </Field>
            </div>
            <div className="email__component__buttons">
              <button
                type="submit"
                onClick={props.handleSubmit}
                className="black__button"
              >
                Save and continue
              </button>
            </div>
          </div>
        );
      }}
    />
  );
};

export default PasswordEmail;
