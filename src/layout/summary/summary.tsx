import React,{useContext} from 'react'
import './summary.scss'
import Checkbox from '../../components/checkbox/checkbox'
import Tax from '../../components/tax/tax'
import Code from '../../components/code/code'
import Buttons from '../../components/summaryButtons/buttons'
import {CodeContext} from '../../hooks/CodeContext'
import {TaxContext} from '../../hooks/TaxContext'


const Summary = () => {

    const [disabledCode] = useContext(CodeContext)
    const [disabledTax] = useContext(TaxContext)

    return (
        <section className="summary">
            <div className="top">
                <div style={{opacity: disabledCode | disabledTax ? .3 : 1, pointerEvents: disabledCode | disabledTax ? "auto" : "none"}} className="shipping">
                    <p>You are $30 away from free shipping</p>
                </div>
                <div style={{opacity: disabledCode | disabledTax ? .3 : 1, pointerEvents: "none"}} className="summary__total">
                    <p>Your items</p>
                    <p>$345.00</p>
                </div>
                <div style={{opacity: disabledCode | disabledTax ? .3 : 1 }} className="line"></div>
                <Checkbox />
                <div className="line-grey"></div>
                <Tax />
                <div className="line-grey"></div>
                <Code />
                <div className="line-grey"></div>
                <div style={{opacity: disabledCode | disabledTax ? .3 : 1, pointerEvents: "none"}} className="summary__subtotal">
                    <p>Subtotal</p>
                    <p className="total_value">$345.00</p>
                </div>
            </div>
            <Buttons />
        </section>
    )
}

export default Summary
