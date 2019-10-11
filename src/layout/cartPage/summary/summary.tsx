import React,{useContext, useEffect} from 'react'
import './summary.scss'
import Checkbox from '../../../components/checkbox/checkbox'
import Tax from '../../../components/tax/tax'
import Code from '../../../components/code/code'
import Buttons from '../../../components/summaryButtons/buttons'
import {CodeContext} from '../../../hooks/CodeContext'
import {TaxContext} from '../../../hooks/TaxContext'
import {ProductsContext} from '../../../hooks/ProductsContext'
import {CheckContext} from '../../../hooks/CheckContext'

const Summary = (props:any) => {

    const [CheckValue] = useContext(CheckContext)
    const [disabledCode] = useContext(CodeContext)
    const [disabledTax] = useContext(TaxContext)
    const [products, setProducts] = useContext(ProductsContext)
    let itemsValue = 0

    console.log(products)

    {products.map((product:any) => {
        itemsValue += (product.quantity * product.price)
    })}
   
    useEffect(() => {
        {products.map((product:any) => {
            itemsValue += (product.quantity * product.price)
        })}
    }, [products])

    const shipValue = (550 - itemsValue)
    
    return (
        <section className="summary">
            <div className="top">
                <div style={{opacity: disabledCode | disabledTax ? .3 : 1, pointerEvents: disabledCode | disabledTax ? "auto" : "none"}} className="shipping">
                    <p>{shipValue > 0 ? `You are $${shipValue.toFixed(2)} away from free shipping` : `Free Shipment`}</p>
                </div>
                <div style={{opacity: disabledCode | disabledTax ? .3 : 1, pointerEvents: "none"}} className="summary__total">
                    <p>Your items</p>
                    <p>${itemsValue.toFixed(2)}</p>
                </div>
                <div style={{opacity: disabledCode | disabledTax ? .3 : 1 }} className="line"></div>
                <Checkbox shipValue={shipValue}/>
                <div className="line-grey"></div>
                <Tax />
                <div className="line-grey"></div>
                <Code />
                <div className="line-grey"></div>
                <div style={{opacity: disabledCode | disabledTax ? .3 : 1, pointerEvents: "none"}} className="summary__subtotal">
                    <p>Subtotal</p>
                    <p className="total_value">${shipValue > 0 ? (itemsValue + CheckValue).toFixed(2) : (itemsValue.toFixed(2))}</p>
                </div>
            </div>
            <Buttons />
        </section>
    )
}

export default Summary
