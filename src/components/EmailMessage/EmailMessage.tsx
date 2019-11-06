import React from 'react'
import './EmailMessage.scss'

interface IProps{
    passwordComponent: boolean;
    submitBtn: any;
    passwordBtn: any;
    input: string;
    validate: any
}

const MessageEmail:React.FC<IProps> = ({passwordBtn, submitBtn, passwordComponent, input, validate}) => {
    return (
        <div className={validate(input) && !passwordComponent ? "email__component__message" : "email__component__message close"}>
            <div className="email__component__message__up">
                <i className="fas fa-circle"></i>
                <p>Welcome! Create password to save information for one-click checkout, order tracking, VIP discount and more!</p>
            </div>
            <div className="email__component__buttons">
                <button onClick={submitBtn} type="submit" className="white__button">Continue as a guest</button>
                <button onClick={passwordBtn} type="button" className="white__button">Create password</button>
            </div>
        </div>
    )
}

export default MessageEmail
