import React,{useState, useContext} from 'react'
import {CodeContext} from '../../hooks/CodeContext'
import {TaxContext} from '../../hooks/TaxContext'
import './tax.scss'

const Tax = () => {
  
    const [on, setOn] = useState<boolean>(false)
    const [height, setHeight] = useState<string>("0px")
    const [disabledTax, setDisabledTax] = useContext(TaxContext)
    const [disabledCode] = useContext(CodeContext)
    const [emptyInput, setInput] = useState<string>("")

    const toggleOnClick = () => {
        setHeight(on ? "0" : "220px")
        setOn(!on)
        setDisabledTax(!disabledTax)
    }

    return (
        <div className="tax" style={{opacity: disabledCode ? .3 : 1, pointerEvents: disabledCode ? "none" : "auto"}}>
            <div className="visible" onClick={toggleOnClick}>
                <p>Estimate you tax and shipping</p>
                <i className={on ? "fas fa-angle-down clicked" : "fas fa-angle-down"}></i>
            </div>
                <form style={{maxHeight: `${height}` }} action="#" className="visible-form" >
                    <input onChange={(e) => setInput(e.target.value)} placeholder="Enter tax code" type="text"/>
                    <input disabled={emptyInput ? false : true} style={{opacity: emptyInput ? 1 : .3}} type="submit" value="Estimate" />
                </form>
        </div>
    )
}

export default Tax
