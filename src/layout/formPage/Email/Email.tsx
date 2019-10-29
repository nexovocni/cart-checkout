import React, {useState} from 'react'
import './Email.scss'
import WhiteButtons from '../../../components/WhiteButtons/WhiteButtons'
import {Field, Form} from 'react-final-form'

interface IProps {
    component: boolean;
    openComponent: any
}

const Email:React.FC<IProps> = ({component, openComponent}) => {

    const [input, setInput] = useState("")

    const [password, setPassword] = useState(false)

    const passwordBtn = () => {
        setPassword(true)
    }

    const submitBtn = (e:any) => {
        openComponent(!component)
    }

   const validate = (value:any) => (value && value.includes("@") ? null : "Invalid mail")
    console.log(input)
    return (
        <Form onSubmit={submitBtn} 
            render={(props:any) => { 
                return( 
                    <div className="email">
                        <h2 className="email__number">1</h2>
                        <div className="email__component">
                            <h2 className="email__heading">Your email</h2>
                            <form onSubmit={props.handleSubmit} className={component ? "email__component__form" : "email__component__form__close"}>
                                <label className={input ? "email__component__label" : "email__component__label open"}>Email</label>
                                <Field  
                                    name="email" 
                                    type="email" 
                                    placeholder="Email" 
                                    component="input"
                                    validate={validate}
                                >
                                    {({input, meta}) => {
                                        setInput(input.value)
                                        return(
                                        <div className="email__component__field">
                                        <input className={input.value ? "email__component__input" : "email__component__input border"} {...input} autoFocus/>
                                        <p className="email__component__policy">See our <span>privacy policy</span></p>
                                        {meta.error && meta.touched? <span className="email__component__validation">{meta.error}</span> : null}
                                        </div>
                                    )}}
                                </Field>
                                <div className={input.includes("@") && !password ? "email__component__message" : "email__component__message close"}>
                                    <div className="email__component__message__up">
                                        <i className="fas fa-circle"></i>
                                        <p>Welcome! Create password to save information for one-click checkout, order tracking, VIP discount and more!</p>
                                    </div>
                                    <div className="email__component__buttons">
                                        <button onClick={submitBtn} className="white__button">Continue as a guest</button>
                                        <button onClick={passwordBtn} className="white__button">Create password</button>
                                    </div>
                                </div>
                                <div className={password ? "email__component__message" : "email__component__message close"}>
                                    <div className="email__component__message__up">
                                        <i className="fas fa-circle"></i>
                                        <p>Create your password using at least 8 characters and some other interesting security rules for your own safety</p>
                                        <Field  
                                            name="email" 
                                            type="email" 
                                            placeholder="Email" 
                                            component="input"
                                            validate={validate}
                                        >
                                            {({input, meta}) => {
                                                setInput(input.value)
                                                return(
                                                <div className="email__component__field">
                                                <input className={input.value ? "email__component__input" : "email__component__input border"} {...input} autoFocus/>
                                                <p className="email__component__policy">See our <span>privacy policy</span></p>
                                                {meta.error && meta.touched? <span className="email__component__validation">{meta.error}</span> : null}
                                                </div>
                                            )}}
                                        </Field>
                                        <Field  
                                            name="email" 
                                            type="email" 
                                            placeholder="Email" 
                                            component="input"
                                            validate={validate}
                                        >
                                            {({input, meta}) => {
                                                setInput(input.value)
                                                return(
                                                <div className="email__component__field">
                                                <input className={input.value ? "email__component__input" : "email__component__input border"} {...input} autoFocus/>
                                                <p className="email__component__policy">See our <span>privacy policy</span></p>
                                                {meta.error && meta.touched? <span className="email__component__validation">{meta.error}</span> : null}
                                                </div>
                                            )}}
                                        </Field>
                                    </div>
                                    <div className="email__component__buttons">
                                        <button className="black__button">Save and continue</button>
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
