import React,{useState, useContext} from 'react'
import './code.scss'

interface IProps {
    tax: boolean
    code: boolean
    update: any
    stateComponent: boolean
}

const Code:React.FC<IProps> = ({tax, code, update, stateComponent}) => {

    const [on, setOn] = useState<boolean>(false)
    const [height, setHeight] = useState<string>("0px")
    const [emptyInput, setInput] = useState("")
    
    const toggleOnClick = () => {
        setHeight(on ? `0px` : "220px")
        setOn(!on)
        update(!code)
    }

    return (
        <div style={{opacity: tax ? .3 : 1, pointerEvents: tax || stateComponent ? "none" : "auto"}} className="code">
            <div className="code__visible" onClick={toggleOnClick}>
                <p>Have a promo code?</p>
                <i className={on ? "fas fa-angle-down clicked" : "fas fa-angle-down"}></i>
            </div>
            <form style={{maxHeight: `${height}`}} action="#" className="code__visible-form" >
                <input onChange={(e) => setInput(e.target.value)} placeholder="Enter ZIP code" type="text"/>
                <input disabled={emptyInput ? false : true} style={{opacity: emptyInput ? 1 : .3}} type="submit" value="Apply" />
            </form>
        </div>
    )
}

export default Code
