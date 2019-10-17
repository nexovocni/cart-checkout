import React from 'react'
import './buttons.scss'
import {Link} from 'react-router-dom'

interface IProps {
   isChecked: number
   stateComponent: boolean
}

const Buttons:React.FC<IProps> = ({isChecked, stateComponent}) => {
    return (
        <div className="buttons">
            <Link to="#" className="button button_check">Checkout now</Link>
            <Link style={{opacity: !isChecked ? .3 : 1, pointerEvents: !isChecked || stateComponent ? "none" : "auto"}} to="#" className="button button_pay"><img className="apple" src="img/apple.svg"/></Link>
            <Link style={{opacity: !isChecked ? .3 : 1, pointerEvents: !isChecked || stateComponent ? "none" : "auto"}} to="#" className="button button_pay"><img className="paypay" src="img/pay.svg"/></Link>
        </div>
    )
}

export default Buttons
