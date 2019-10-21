import React from 'react'
import './Buttons.scss'
import {Link} from 'react-router-dom'

interface IProps {
   isChecked: number
   stateComponent: boolean
   disabledCode: boolean
}

const Buttons:React.FC<IProps> = ({isChecked, stateComponent, disabledCode}) => {
    return (
        <div style={{opacity: !isChecked || disabledCode  ? .3 : 1, pointerEvents: !stateComponent || disabledCode  ? "auto" : "none"}} className="buttons">
            <Link to="/form" className="button button_check">Checkout now</Link>
            <Link to="#" className="button button_pay"><img className="apple" src="img/apple.svg"/></Link>
            <Link to="#" className="button button_pay"><img className="paypay" src="img/pay.svg"/></Link>
        </div>
    )
}

export default Buttons
