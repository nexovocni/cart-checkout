import React, {useContext, useState} from 'react'
import './checkbox.scss'

interface IProps {
    tax: boolean
    code: boolean
    shipValue: number
    update: any
}

const Checkbox:React.FC<IProps> = ({tax, code, shipValue, update}) => {

    const [isChecked, setChecked] = useState(true)

    return (
        <form style={{opacity: code || tax ? .3 : 1, pointerEvents: code || tax ? "none" : "auto"}} className="checkbox">
                <div className="checkbox__component">
                    <div className="ship">
                        <label>
                        <input onChange={(e) => update(parseInt(e.target.value))} onClick={() => setChecked(true)} checked={isChecked} type="radio" name="ship" value={10}/>
                        <span className="circle"></span>
                        Ship to an adress</label> 
                    </div>
                    <p>{shipValue > 0 ? `$10.00` : `Free`}</p>
                </div>
                <div className="checkbox__component">
                    <div className="ship">
                        <label>
                        <input onChange={(e) => update(parseInt(e.target.value))} onClick={() => setChecked(false)} checked={!isChecked} type="radio" name="ship" value={0}/>
                        <span className="circle"></span>
                        Pick up in store</label> 
                    </div>
                    <p>Free</p>
                </div>    
        </form>
    )
}

export default Checkbox
