import React from 'react'
import './SummaryTotal.scss'

interface IProps {
    disabledCode: boolean,
    itemsValue: string,
    title: string
}

const SummaryTotal:React.FC<IProps> = ({disabledCode, itemsValue, title}) => {

    return (
        <div style={{opacity: disabledCode ? .3 : 1, pointerEvents: "none"}} className="summary__top__data">
            <p>{title}</p>
            <p>{itemsValue}</p>
        </div>
    )
}

export default SummaryTotal
