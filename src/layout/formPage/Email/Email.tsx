import React, {useState} from 'react'
import './Email.scss'
import {Field, Form} from 'react-final-form'

interface IProps {
    component: boolean;
    openComponent: any
}

const Email:React.FC<IProps> = ({component, openComponent}) => {

    const [input, setInput] = useState("")

    const [passwordComponent, setPasswordComponent] = useState(false)

    const [passwordValue, setPasswordValue] = useState("")

    const passwordBtn = () => {
        setPasswordComponent(true)
        openComponent(true)
    }

    const submitBtn = (e:any) => {
        openComponent(!component)
    }

    const validate = (email:any) => {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

   const validateEmail = (value:any) => (value && validate(value) ? null : "Invalid mail")

   const validatePassword = (value:any) => (passwordValue.length > 5 ? null : "Password needs to be at least 8 charactes long")

   const validateConfirmPassword = (value:any) => (value === passwordValue ? null : "Password don't match")

    return (
        <Form onSubmit={submitBtn} 
            render={(props:any) => { 
                return( 
                    <div className="email">
                        <h2 className="email__number">1</h2>
                        <div className="email__component">
                            <h2 className="email__heading">Your email</h2>
                            <p className={!component ? "email__email" : "email__email close"}>{input}</p>
                            <button onClick={() => {openComponent(!component)}} className={!component ? "email__heading__button" : "email__heading__button close"}>Edit</button>
                            <form onSubmit={props.handleSubmit} className={component ? "email__component__form" : "email__component__form__close"}>
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
                                    )}}
                                </Field>
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
                                <div className={validate(input) && passwordComponent ? "email__component__password" : "email__component__password close"}>
                                    <div className="email__component__password__up">
                                        <i className="fas fa-circle"></i>
                                        <p>Create your password using at least 8 characters and some other interesting security rules for your own safety.</p>
                                        <Field  
                                            name="password" 
                                            type="password"  
                                            component="input"
                                            validate={validatePassword}
                                        >
                                            {({input, meta}) => {
                                                setPasswordValue(input.value)
                                                return(
                                                <div className="email__component__field">
                                                <i className="fa fa-eye input"></i>
                                                {meta.error && meta.touched ? <i className="fa fa-times red"></i> : null}
                                                {meta.touched && !meta.error && meta.touched ? <i className="fa fa-check green"></i> : null}
                                                <input placeholder="Password" className={input.value ? "email__component__input" : "email__component__input border"} {...input}/>
                                                {meta.error && meta.touched? <span className="email__component__password__validation">{meta.error}</span> : null}
                                                </div>
                                            )}}
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
                                            )}}
                                        </Field>
                                    </div>
                                    <div className="email__component__buttons">
                                        <button type="submit" onClick={props.handleChange} className="black__button">Save and continue</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }}
        />
    )
}

export default Email
