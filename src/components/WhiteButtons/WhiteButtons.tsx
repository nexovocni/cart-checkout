import React from 'react'
import './WhiteButtons.scss'

interface IProps {
    title: string,
    componentSubmit: any,
    component: boolean;
} 

const WhiteButtons:React.FC<IProps> = ({title, componentSubmit, component}) => {

    const submitBtn = (e:any) => {
        e.preventDefault()
        componentSubmit(!component)
    }
     
    return (
        <div className="white__buttons">
            <button onClick={(e) => {submitBtn(e)}} className="white__button">{title}</button>
        </div>
    )
}

export default WhiteButtons
