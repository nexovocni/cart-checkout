import React,{useState} from 'react'
import './tax.scss'

const Tax = () => {
  
    const [on, setOn] = useState<boolean>(false)
    const [height, setHeight] = useState<string>("0px")
    const [opa, setOpacity] = useState("0")
    const toggleOnClick = () => {
        setOpacity(on ? "0" : "1")
        setHeight(on ? "0" : "220px")
        setOn(!on)
    }

    return (
        <div className="tax">
            <div className="visible" onClick={toggleOnClick}>
                <p>Estimate you tax and shipping</p>
                <i className={on ? "fas fa-angle-down clicked" : "fas fa-angle-down"}></i>
            </div>
                <form style={{maxHeight: `${height}` }} action="#" className="visible-form" >
                    <input type="text"/>
                    <input type="submit" value="Estimate" />
                </form>
        </div>
    )
}

export default Tax
