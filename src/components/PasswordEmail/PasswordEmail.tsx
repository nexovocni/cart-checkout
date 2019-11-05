import React, {useState, useEffect} from 'react'
import {Field, Form} from 'react-final-form'
import './PasswordEmail.scss'

interface IProps{
    passwordComponent: boolean;
    submitBtn: any;
    input: string;
    validate: any;
}

const PasswordEmail:React.FC<IProps> = ({submitBtn, passwordComponent, input, validate}) => {

    const [passwordValue, setPasswordValue] = useState("")

    const [eye, setEye] = useState(false)

    let i = 0

    const validatePassword = (value:any) => (passwordValue.length + 1 >= 5 ? null : "Password needs to be at least 5 charactes long")

    const validateConfirmPassword = (value:any) => (value === passwordValue ? null : "Password don't match")

    return(
        <Form onSubmit={submitBtn} 
                render={(props:any) => { 
                return (
                    <div className={validate(input) && passwordComponent ? "email__component__password" : "email__component__password close"}>
                    <div className="email__component__password__up">
                        <i className="fas fa-circle"></i>
                        <p>Create your password using at least 5 characters and some other interesting security rules for your own safety.</p>
                        <Field  
                            name="password" 
                            type={!eye ? "password" : "text"} 
                            component="input"
                            validate={validatePassword}
                        >
                            {({input, meta}) => {
                                setPasswordValue(input.value)
                                return(
                                    <div className="email__component__field">
                                        <i onClick={() => setEye(!eye)} className="fa fa-eye input"></i>
                                        {meta.error && meta.touched ? <i className="fa fa-times red"></i> : null}
                                        {meta.touched && !meta.error && meta.touched ? <i className="fa fa-check green"></i> : null}
                                        <input placeholder="Password" className={input.value ? "email__component__input" : "email__component__input border"} {...input}/>
                                        {meta.error && meta.touched? <span className="email__component__password__validation">{meta.error}</span> : null}
                                    </div>
                                )
                            }}
                        </Field>
                        <Field  
                            name="confirm-password" 
                            type="password"  
                            component="input"
                            validate={validateConfirmPassword}
                        >
                            {({input, meta}) => {
                                return(
                                    <div className="email__component__field">
                                        {meta.error && meta.touched ? <i className="fa fa-times red pass"></i> : null}
                                        {meta.touched && !meta.error && meta.touched ? <i className="fa fa-check green pass"></i> : null}
                                        <input placeholder="Confirm Password" className={input.value ? "email__component__input" : "email__component__input border"} {...input}/>
                                        {meta.error && meta.touched ? <span className="email__component__password__validation">{meta.error}</span> : null}
                                    </div>
                                )
                            }}
                        </Field>
                    </div>
                    <div className="email__component__buttons">
                        <button type="submit" onClick={props.handleSubmit} className="black__button">Save and continue</button>
                    </div>
                </div>
                )
            }}
        />
    )
}

export default PasswordEmail