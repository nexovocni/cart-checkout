import React,{useState} from 'react'
import './code.scss'

const Code = () => {

    const [on, setOn] = useState<boolean>(false)
    const [height, setHeight] = useState<string>("0px")
    const toggleOnClick = () => {
        setHeight(on ? `0px` : "220px")
        setOn(!on)
    }

    return (
        <div className="code">
            <div className="visible" onClick={toggleOnClick}>
                <p>Have a promo code?</p>
                <i className={on ? "fas fa-angle-down clicked" : "fas fa-angle-down"}></i>
            </div>
            <form style={{maxHeight: `${height}`}} action="#" className="visible-form" >
                <input type="text"/>
                <input type="submit" value="Apply" />
            </form>
        </div>
    )
}

export default Code
