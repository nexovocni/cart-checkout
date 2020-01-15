import React, { useState, useContext } from 'react';
import './Email.scss';
import { Form } from 'react-final-form';
import MessageEmail from '../EmailMessage/EmailMessage';
import PasswordEmail from '../EmailPassword/EmailPassword';
import EmailMain from '../EmailMain/EmailMain';
import { FormComponentContext } from '../../contexts/FormComponentContext';

const Email: React.FC = () => {
  const formContext = useContext(FormComponentContext);
  const { formComponents, dispatch } = formContext;
  const { componentEmail } = formComponents;

  const passwordBtn = () => {
    dispatch({
      type: 'COMPONENT',
      payload: { componentPassword: true, componentEmail: true },
    });
  };

  const submitBtn = () => {
    dispatch({
      type: 'COMPONENT',
      payload: {
        componentEmail: false,
        componentShipping: true,
        editEmail: true,
      },
    });
  };

  const validate = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const openEmail = () => {
    dispatch({
      type: 'COMPONENT',
      payload: { componentEmail: !componentEmail },
    });
  };

  const [input, setInput] = useState('');

  const validateEmail = (value: string) =>
    value && validate(value) ? null : 'Invalid mail';

  return (
    <Form
      onSubmit={submitBtn}
      render={props => {
        return (
          <div className="email">
            <div className="email__up">
              <h2
                style={{ color: !componentEmail ? '#999' : '#000' }}
                className="email__number"
              >
                1
              </h2>
              <span
                style={{ backgroundColor: !componentEmail ? '#999' : '#000' }}
                className="dash-email"
              />
              <h2
                style={{ color: !componentEmail ? '#999' : '#000' }}
                className="email__heading"
              >
                Your email
              </h2>
              <button
                onClick={openEmail}
                style={{ display: componentEmail ? 'none' : 'inline' }}
                className={!componentEmail ? 'email__heading__button' : 'close'}
              >
                Edit
              </button>
            </div>
            <form
              onSubmit={props.handleSubmit}
              className={
                componentEmail
                  ? 'email__component__form'
                  : 'email__component__form__close'
              }
            >
              <EmailMain
                submitBtn={submitBtn}
                validateEmail={validateEmail}
                setInput={setInput}
              />
              <MessageEmail
                passwordBtn={passwordBtn}
                input={input}
                validate={validate}
                submitBtn={props.handleSubmit}
              />
              <PasswordEmail
                inputValue={input}
                validate={validate}
                submitBtn={props.handleSubmit}
              />
            </form>
            <p
              className={!componentEmail ? 'email__email__responsive' : 'close'}
            >
              {input}
            </p>
          </div>
        );
      }}
    />
  );
};

export default Email;
