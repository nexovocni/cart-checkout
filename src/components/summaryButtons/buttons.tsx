import React from 'react'
import './Buttons.scss'
import {Link} from 'react-router-dom'

interface IProps {
   stateComponent: boolean;
   disabledCode: boolean;
   switchComponent: boolean;
   setSwitchComponent: any;
}

const Buttons:React.FC<IProps> = ({ stateComponent, disabledCode, switchComponent, setSwitchComponent}) => {
    return (
        <div style={{opacity: disabledCode  ? .3 : 1, pointerEvents: !disabledCode ? "auto" : "none"}} className="buttons">
            <button onClick={() => {setSwitchComponent(!switchComponent)}} className="button button_check">Checkout now</button>
            <button className="button button_pay"><img className="apple" src="img/apple.svg"/></button>
            <button className="button button_pay"><img className="paypay" src="img/pay.svg"/></button>
        </div>
    )
}

export default Buttons
