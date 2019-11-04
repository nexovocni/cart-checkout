import React, {useState} from 'react'
import './Checkbox.scss'

interface IProps {
    code: boolean
    shipValue: number
    setCheckValue: any
    stateComponent: boolean
}

const Checkbox:React.FC<IProps> = ({ code, shipValue, setCheckValue, stateComponent}) => {

    const [isChecked, setChecked] = useState(true)

    return (
        <form style={{opacity: code ? .3 : 1, pointerEvents: code || stateComponent  ? "none" : "auto"}} className="checkbox">
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
