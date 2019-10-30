import React from 'react'
import {Field, Form} from 'react-final-form'
import './YourEmail.scss'

interface IProps {
    submitBtn: any;
    input: string;
    setInput: any;
    validateEmail: any
}

const YourEmail:React.FC<IProps> = ({submitBtn, input, validateEmail, setInput}) => {
    return (
        <Form onSubmit={submitBtn} 
                render={() => { 
                return (
                    <React.Fragment>
                        <label className={input ? "email__component__label" : "email__component__label open"}>Email</label>
                            <Field  
                                name="email" 
                                type="text" 
                                component="input"
                                validate={validateEmail}
                            >
                                {({input, meta}) => {
                                    setInput(input.value)
                                    return(
                                        <div className="email__component__field">
                                            <input placeholder="Email"  className={input.value ? "email__component__input" : "email__component__input border"} {...input} autoFocus/>
                                            <p className="email__component__policy">See our <span>privacy policy</span></p>
                                            {meta.error && meta.touched? <span className="email__component__validation">{meta.error}</span> : null}
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
