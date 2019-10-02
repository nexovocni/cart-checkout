import React, {useContext} from 'react'
import {CodeContext} from '../../hooks/CodeContext'
import {TaxContext} from '../../hooks/TaxContext'
import './checkbox.scss'

const Checkbox = () => {

    const [disabledCode] = useContext(CodeContext)
    const [disabledTax] = useContext(TaxContext) 

    return (
        <div style={{opacity: disabledCode | disabledTax ? .3 : 1, pointerEvents: disabledCode | disabledTax ? "none" : "auto"}} className="checkbox">
                <div className="checkbox__component">
                    <div className="ship">
                        <label>
                        <input type="radio" name="ship" value="ship"/>
                        <span className="circle"></span>
                        Ship to an adress</label> 
                    </div>
                    <p>$10</p>
                </div>
                <div className="checkbox__component">
                    <div className="store">
                        <label>
                        <input type="radio" name="ship" value="store"/>
                        <span className="circle"></span>
                        Pick up in store</label> 
                    </div>
                    <p>Free</p>
                </div>    
        </div>
    )
}

export default Checkbox
