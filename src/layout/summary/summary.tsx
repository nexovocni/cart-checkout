import React from 'react'
import './summary.scss'
import Checkbox from '../../components/checkbox/checkbox'
import Tax from '../../components/tax/tax'
import Code from '../../components/code/code'
import Buttons from '../../components/summaryButtons/buttons'

const Summary = () => {
    return (
        <section className="summary">
            <div className="shipping">
                <p>You are $30 away from free shipping</p>
            </div>
            <div className="summary__total">
                <p>Your items</p>
                <p>$345.00</p>
            </div>
            <div className="line"></div>
            <Checkbox />
            <div className="line-grey"></div>
            <Tax />
            <div className="line-grey"></div>
            <Code />
            <div className="line-grey"></div>
            <div className="summary__subtotal">
                <p>Subtotal</p>
                <p className="total_value">$345.00</p>
            </div>
            <Buttons />
        </section>
    )
}

export default Summary
