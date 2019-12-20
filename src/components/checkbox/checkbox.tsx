import React, {useState, useContext} from 'react'
import {CartComponentContext} from '../../contexts/CartComponentContext'
import './Checkbox.scss'

interface IProps {
    shipValue: number
    setCheckValue: any
}

const Checkbox:React.FC<IProps> = ({ shipValue, setCheckValue}) => {

    const [isChecked, setChecked] = useState(true)

    const productContext:any = useContext(CartComponentContext)
    const {disabledCode, cartState} = productContext

    return (
        <form style={{opacity: disabledCode ? .3 : 1, pointerEvents: disabledCode || cartState  ? "none" : "auto"}} className="checkbox">
                <div className="checkbox__component">
                    <div className="ship">
                        <label>
                        <input onChange={(e) => setCheckValue(parseInt(e.target.value))} onClick={() => setChecked(true)} checked={isChecked} type="radio" name="ship" value={10}/>
                        <span className="circle"></span>
                        Ship to an adress</label> 
                    </div>
                    <p>{shipValue > 0 ? `$10.00` : `Free`}</p>
                </div>
                <div className="checkbox__component">
                    <div className="ship">
                        <label>
                        <input onChange={(e) => setCheckValue(parseInt(e.target.value))} onClick={() => setChecked(false)} checked={!isChecked} type="radio" name="ship" value={0}/>
                        <span className="circle"></span>
                        Pick up in store</label> 
                    </div>
                    <p>Free</p>
                </div>    
        </form>
    )
}

export default Checkbox
