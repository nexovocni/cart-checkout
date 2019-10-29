import React from 'react'
import './WhiteButtons.scss'

interface IProps {
    title: string,
    component: any,
    componentSubmit: any
} 

const WhiteButtons:React.FC<IProps> = ({title, componentSubmit}) => {
     
    return (
        <div className="white__buttons">
            <button onClick={componentSubmit} className="white__button">{title}</button>
        </div>
    )
}

export default WhiteButtons
