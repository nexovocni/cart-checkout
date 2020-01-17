import React, { useContext } from 'react';
import './EmailMessage.scss';
import { FormComponentContext } from '../../contexts/FormComponentContext';

interface IProps {
  submitBtn: () => void;
  passwordBtn: () => void;
  input: string;
  validate: (value: string) => boolean;
}

const MessageEmail: React.FC<IProps> = ({
  passwordBtn,
  submitBtn,
  input,
  validate,
}) => {
  const formContext = useContext(FormComponentContext);
  const { formComponents } = formContext;
  const { componentPassword } = formComponents;

  return (
    <div
      className={
        validate(input) && !componentPassword
          ? 'email__component__message'
          : 'email__component__message close'
      }
    >
      <div className="email__component__message__up">
        <i className="fas fa-circle dot" />
        <p>
          Welcome! Create password to save information for one-click checkout,
          order tracking, VIP discount and more!
        </p>
      </div>
      <div className="email__component__buttons">
        <button onClick={submitBtn} type="submit" className="white__button">
          Continue as a guest
        </button>
        <button onClick={passwordBtn} type="button" className="white__button">
          Create password
        </button>
      </div>
    </div>
  );
};

export default MessageEmail;
