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
    openEditBtn: any;
    editBtn:any
}

const Email:React.FC<IProps> = ({componentEmail, openComponentEmail, openComponentShipping, openEditBtn, editBtn}) => {

    const [input, setInput] = useState("")

    const [passwordComponent, setPasswordComponent] = useState(false)

    const passwordBtn = () => {
        setPasswordComponent(true)
        openComponentEmail(true)
    }

    const submitBtn = () => {
        openComponentEmail(!componentEmail)
        openComponentShipping(true)
        openEditBtn({...editBtn, email: true})
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
                        <div className="email__up">
                        <h2 style={{color: !componentEmail ? "#999" : "#000"}} className="email__number">1</h2>
                        <span style={{backgroundColor: !componentEmail ? "#999" : "#000"}} className="dash-email"></span>
                        <h2 style={{color: !componentEmail ? "#999" : "#000"}} className="email__heading">Your email</h2>
                        <button onClick={ () =>{openComponentEmail(!componentEmail)}} style={{display: componentEmail ? "none" : "inline"}} className={!componentEmail ? "email__heading__button" : "close"}>Edit</button>
                        </div>
                            <form onSubmit={props.handleSubmit} className={componentEmail ? "email__component__form" : "email__component__form__close"}>
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
                            <p className={!componentEmail ? "email__email__responsive" : "close"}>{input}</p>
                     </div>
                )
            }}
        />
    )
}

export default Email
