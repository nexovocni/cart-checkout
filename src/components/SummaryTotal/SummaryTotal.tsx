import React, {useState, useEffect, useRef, useContext} from 'react'
import {CartComponentContext} from '../../contexts/CartComponentContext'
import './SummaryTotal.scss'

interface IProps {
    itemsValue: string;
    title: string;
    valueTrans: boolean;
}

const SummaryTotal:React.FC<IProps> = ({itemsValue, title, valueTrans}) => {

    const productContext:any = useContext(CartComponentContext)
    const {disabledCode} = productContext

    const [value, setValue] = useState(itemsValue)

    const [anime, setAnime] = useState(false)

    useEffect(() => {
       setAnime((anime:boolean)=>!anime)
       setValue(itemsValue)
    },[itemsValue])

    function usePrevious(value: any) {
       
        const ref = useRef();
        
        useEffect(() => {
          ref.current = value;
        }, [itemsValue]); 
        
        return ref.current;
      }

    const prevValue = usePrevious(value)

    return (
        <div style={{opacity: disabledCode ? .3 : 1, pointerEvents: "none"}} className="summary__top__data">
            <p className="summary__top__title">{title}</p>
            {!valueTrans ? <p>{itemsValue}</p> : <div className="value-result"><p className= {anime ? "prev-value" : "value-open"} >{anime ? `${prevValue}` : `${value}`}</p><p className={anime ? "value-open" : "prev-value"}>{!anime ? `${prevValue}` : `${value}`}</p></div>}
        </div>
    )
}

export default SummaryTotal
