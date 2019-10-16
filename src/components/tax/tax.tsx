import React,{useState, useContext} from 'react'
import './tax.scss'

interface IProps {
    tax: boolean
    code: boolean
    update: any
}

const Tax:React.FC<IProps> = ({code, tax, update}) => {
  
    const [on, setOn] = useState<boolean>(false)
    const [height, setHeight] = useState<string>("0px")
    const [emptyInput, setInput] = useState<string>("")

    const toggleOnClick = () => {
        setHeight(on ? "0" : "220px")
        setOn(!on)
        update(!tax)
    }

    return (
        <div className="tax" style={{opacity: code ? .3 : 1, pointerEvents: code ? "none" : "auto"}}>
            <div className="tax__visible" onClick={toggleOnClick}>
                <p>Estimate you tax and shipping</p>
                <i className={on ? "fas fa-angle-down clicked" : "fas fa-angle-down"}></i>
            </div>
                <form style={{maxHeight: `${height}` }} action="#" className="tax__visible-form" >
                    <input onChange={(e) => setInput(e.target.value)} placeholder="Enter TAX code" type="text"/>
                    <input disabled={emptyInput ? false : true} style={{opacity: emptyInput ? 1 : .3}} type="submit" value="Estimate" />
                </form>
        </div>
    )
}

export default Tax
