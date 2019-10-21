import React from 'react'
import './SummaryData.scss'

interface IProps {
    disabledCode: boolean,
    itemsValue: number,
    title: string
}

const SummaryData:React.FC<IProps> = ({disabledCode, itemsValue, title}) => {
    return (
        <div style={{opacity: disabledCode ? .3 : 1, pointerEvents: "none"}} className="summary__top__data">
            <p>{title}</p>
            <p>${itemsValue.toFixed(2)}</p>
        </div>
    )
}

export default SummaryData
