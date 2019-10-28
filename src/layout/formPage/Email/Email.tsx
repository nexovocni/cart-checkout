import React, {useState} from 'react'
import './Email.scss'
import WhiteButtons from '../../../components/WhiteButtons/WhiteButtons'

interface IProps {
    component: boolean;
    openComponent: any
}

const Email:React.FC<IProps> = ({component, openComponent}) => {

    const [input, setInput] = useState("")

    return (
        <div className="email">
            <h2 className="email__number">1</h2>
            <div className="email__component">
                <h2 className="email__heading">Your email</h2>
                <form className={component ? "email__component__form" : "email__component__form__close"}>
                    <label className="email__component__label">Email</label>
                    <input onChange={(e) => {setInput(e.target.value)}} className="email__component__input" type="email" autoFocus/>
                    <p className="email__component__policy">See our <span>privacy policy</span></p>
                    <div className={input ? "email__component__message" : "email__component__message__close"}>
                        <div className="email__component__message__up">
                            <i className="fas fa-circle"></i>
                            <p>Welcome! Create password to save information for one-click checkout, order tracking, VIP discount and more!</p>
                        </div>
                        <div className="email__component__buttons">
                            <WhiteButtons title="Create a password" component={component} componentSubmit={null} />
                            <WhiteButtons title="Continue as guest" component={component} componentSubmit={openComponent} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Email
