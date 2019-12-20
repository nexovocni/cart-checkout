import React, {useState, useEffect, useRef, useContext} from 'react'
import {CartComponentContext} from '../../contexts/CartComponentContext'
import './SummarySubtotal.scss'

interface IProps {
    itemsValue: any;
}

const SummarySubtotal:React.FC<IProps> = ({itemsValue}) => {

    const productContext:any = useContext(CartComponentContext)
    const {disabledCode} = productContext

    const [value, setValue] = useState(0)

    const [anime, setAnime] = useState(false)

    useEffect(() => {
        setValue((itemsValue).toFixed(2))
     })

    useEffect(() => {
       setAnime((anime:boolean)=>!anime)
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
        <div style={{opacity: disabledCode ? .3 : 1, pointerEvents: "none"}} className="summary__top__subtotal">
            <p>Subtotal</p>
            <div className="value-result">
                <p className= {anime ? "prev-value" : "value-open"} >{anime ? `$${prevValue}` : `$${value}`}</p>
                <p className={anime ? "value-open" : "prev-value"}>{!anime ? `$${prevValue}` : `$${value}`}</p>
            </div>
        </div>
    )
}

export default SummarySubtotal
