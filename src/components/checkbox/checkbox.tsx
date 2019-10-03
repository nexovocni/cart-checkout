import React, {useContext, useState} from 'react'
import {CodeContext} from '../../hooks/CodeContext'
import {TaxContext} from '../../hooks/TaxContext'
import {CheckContext} from '../../hooks/CheckContext'
import './checkbox.scss'

const Checkbox = () => {

    const [disabledCode] = useContext(CodeContext)
    const [disabledTax] = useContext(TaxContext)
    const [CheckValue,setCheckValue] = useContext(CheckContext)
    const [isChecked, setChecked] = useState(true)

    return (
        <form style={{opacity: disabledCode | disabledTax ? .3 : 1, pointerEvents: disabledCode | disabledTax ? "none" : "auto"}} className="checkbox">
                <div className="checkbox__component">
                    <div className="ship">
                        <label>
                        <input onChange={(e) => setCheckValue(parseInt(e.target.value))} onClick={() => setChecked(true)} checked={isChecked} type="radio" name="ship" value="10"/>
                        <span className="circle"></span>
                        Ship to an adress</label> 
                    </div>
                    <p>$10</p>
                </div>
                <div className="checkbox__component">
                    <div className="ship">
                        <label>
                        <input onChange={(e) => setCheckValue(parseInt(e.target.value))} onClick={() => setChecked(false)} checked={!isChecked} type="radio" name="ship" value="0"/>
                        <span className="circle"></span>
                        Pick up in store</label> 
                    </div>
                    <p>Free</p>
                </div>    
        </form>
    )
}

export default Checkbox
