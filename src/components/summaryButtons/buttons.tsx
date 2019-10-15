import React from 'react'
import './buttons.scss'
import {Link} from 'react-router-dom'

const Buttons = () => {
    return (
        <div className="buttons">
            <Link to="#" className="button button_check">Checkout now</Link>
            <Link to="#" className="button button_pay"><img className="apple" src="img/apple.svg"/></Link>
            <Link to="#" className="button button_pay"><img className="paypay" src="img/pay.svg"/></Link>
        </div>
    )
}

export default Buttons
