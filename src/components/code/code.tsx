import React,{useState, useContext} from 'react'
import {CodeContext} from '../../hooks/CodeContext'
import {TaxContext} from '../../hooks/TaxContext'
import './code.scss'

const Code = () => {

    const [on, setOn] = useState<boolean>(false)
    const [height, setHeight] = useState<string>("0px")
    const [disabledCode, setDisabledCode] = useContext(CodeContext)
    const [disabledTax] = useContext(TaxContext)
    const [emptyInput, setInput] = useState("")
    
    const toggleOnClick = () => {
        setHeight(on ? `0px` : "220px")
        setOn(!on)
        setDisabledCode(!disabledCode)
    }

    return (
        <div style={{opacity: disabledTax ? .3 : 1, pointerEvents: disabledTax ? "none" : "auto"}} className="code">
            <div className="visible" onClick={toggleOnClick}>
                <p>Have a promo code?</p>
                <i className={on ? "fas fa-angle-down clicked" : "fas fa-angle-down"}></i>
            </div>
            <form style={{maxHeight: `${height}`}} action="#" className="visible-form" >
                <input onChange={(e) => setInput(e.target.value)} placeholder="Enter promo code" type="text"/>
                <input disabled={emptyInput ? false : true} style={{opacity: emptyInput ? 1 : .3}} type="submit" value="Apply" />
            </form>
        </div>
    )
}

export default Code
