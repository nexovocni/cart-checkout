import React, {useState} from 'react'
import './Email.scss'
import {Form} from 'react-final-form'
import MessageEmail from '../EmailMessage/EmailMessage'
import PasswordEmail from '../EmailPassword/EmailPassword'
import EmailMain from '../EmailMain/EmailMain'

interface IProps {
    componentEmail: boolean;
    openComponentEmail: any;
    openComponentShipping: any;
}

const Email:React.FC<IProps> = ({componentEmail, openComponentEmail, openComponentShipping}) => {

    const [input, setInput] = useState("")

    const [passwordComponent, setPasswordComponent] = useState(false)

    const passwordBtn = () => {
        setPasswordComponent(true)
        openComponentEmail(true)
    }

    const submitBtn = () => {
        openComponentEmail(!componentEmail)
        openComponentShipping(true)
    }

    const editBtn = () => {
        openComponentEmail(!componentEmail)
        openComponentShipping(false)
    }

    const validate = (email:any) => {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

   const validateEmail = (value:any) => (value && validate(value) ? null : "Invalid mail")

    return (
        <Form onSubmit={submitBtn} 
            render={(props:any) => { 
                return( 
                    <div className="email">
                        <h2 className="email__number">1</h2>
                        <div className={componentEmail ? "email__component" :"email__component margin"}>
                            <h2 className="email__heading">Your email</h2>
                            <p className={!componentEmail ? "email__email" : "close"}>{input}</p>
                            <button onClick={editBtn} className={!componentEmail ? "email__heading__button" : "close"}>Edit</button>
                            <form onSubmit={props.handleSubmit} className={componentEmail ? "email__component__form" : "close"}>
                                <EmailMain 
                                    submitBtn={submitBtn}
                                    input={input}
                                    validateEmail={validateEmail}
                                    setInput={setInput}
                                />
                                <MessageEmail
                                    passwordBtn={passwordBtn}
                                    passwordComponent={passwordComponent}
                                    input={input}
                                    validate={validate}
                                    submitBtn={props.handleSubmit}
                                />
                                <PasswordEmail 
                                    passwordComponent={passwordComponent}
                                    input={input}
                                    validate={validate}
                                    submitBtn={props.handleSubmit}
                                />
                            </form>
                        </div>
                    </div>
                )
            }}
        />
    )
}

export default Email
