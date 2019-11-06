import React from 'react'
import './Buttons.scss'
import {Link} from 'react-router-dom'

interface IProps {
   stateComponent: boolean
   disabledCode: boolean
}

const Buttons:React.FC<IProps> = ({ stateComponent, disabledCode}) => {
    return (
        <div style={{opacity: disabledCode  ? .3 : 1, pointerEvents: !disabledCode ? "auto" : "none"}} className="buttons">
            <Link to="/form" className="button button_check">Checkout now</Link>
            <Link to="#" className="button button_pay"><img className="apple" src="img/apple.svg"/></Link>
            <Link to="#" className="button button_pay"><img className="paypay" src="img/pay.svg"/></Link>
        </div>
    )
}

export default Buttons
