import React from 'react'
import {Field, Form} from 'react-final-form'
import './EmailMain.scss'

interface IProps {
    submitBtn: any;
    setInput: any;
    validateEmail: any
}

const YourEmail:React.FC<IProps> = ({submitBtn, validateEmail, setInput}) => {
    return (
        <Form onSubmit={submitBtn} 
                render={() => { 
                return (
                    <React.Fragment>
                            <Field  
                                name="email" 
                                type="text" 
                                component="input"
                                validate={validateEmail}
                            >
                                {({input, meta}) => {
                                    setInput(input.value)
                                    return(
                                        <div className="email__component__field__email">
                                            <div className="email__component__field__label">
                                            <label className={input.value ? "email__component__label" : "email__component__label__close"}>Email</label></div>
                                            <input placeholder="Email"  className={input.value ? "email__component__input" : "email__component__input border"} {...input} autoFocus/>
                                            <div className="email__component__underinput">
                                                <p className="email__component__policy">See our <span>privacy policy</span></p>
                                                {meta.error && meta.touched ? <span className="email__component__validation__underinput">{meta.error}</span> : null}
                                            </div>
                                        </div>
                                    )
                                }}
                            </Field>
                    </React.Fragment>
                )
            }}
        />
    )
}

export default YourEmail
