import React,{useState} from 'react'
import './SummaryCart.scss'
import Checkbox from '../../../components/Checkbox/Checkbox'
import Code from '../../../components/Code/Code'
import Buttons from '../../../components/SummaryButtons/Buttons'
import MobileHeader from '../../../components/MobileHeader/MobileHeader'
import SummaryTotal from '../../../components/SummaryTotal/SummaryTotal'
import SummaryTitle from '../../../components/SummaryTitle/SummaryTitle'
import SummarySubtotal from '../../../components/SummarySubtotal/SummarySubtotal'

interface IProps {
    products: any,
    checkValue: any,
    setCheckValue: any,
    stateComponent: boolean,
    itemsValue: number,
    shipValue: number
}

const Summary:React.FC<IProps> = ({products, stateComponent, setCheckValue, checkValue, itemsValue, shipValue}) => {

    const [disabledCode, setDisabledCode] = useState(false)
    
    return (
        <section style={{opacity: stateComponent ? .3 : 1, pointerEvents: stateComponent ? "none" : "auto"}} className="summarycart">
            <MobileHeader products={products}/>
            <div className="summarycart__top">
                <SummaryTitle 
                    shipValue={shipValue} 
                    disabledCode={disabledCode}
                />
                <SummaryTotal
                    itemsValue={`$${itemsValue.toFixed(2)}`}  
                    disabledCode={disabledCode} 
                    title="Your order"
                 />
                <div style={{opacity: disabledCode ? .3 : 1 }} className="summarycart__line"></div>
                <Checkbox 
                    code={disabledCode} 
                    update={setCheckValue} 
                    shipValue={shipValue}
                    stateComponent= {stateComponent}
                />
                <div className="summarycart__line-grey"></div>
                <Code 
                    setCode={setDisabledCode}
                    code={disabledCode} 
                    stateComponent= {stateComponent}
                    title="Estimate your tax and shipping"
                    button="Estimate"
                    placeholder="Enter Tax Code"
                />
                <div className="summarycart__line-grey"></div>
                <Code 
                    setCode={setDisabledCode}
                    code={disabledCode}
                    stateComponent={stateComponent}
                    title="Have a promo code"
                    button="Apply"
                    placeholder="Enter Zip Code"
                />
                <div className="summarycart__line-grey"></div>
               <SummarySubtotal 
                 itemsValue={itemsValue}
                 checkValue={checkValue}
                 shipValue={shipValue}
                 disabledCode={disabledCode}
               />
            </div>
            <div className="summarycart__bottom">
                <Buttons 
                    stateComponent={stateComponent} 
                    isChecked={checkValue}
                    disabledCode={disabledCode}
                />
            </div>
        </section>
    )
}

export default Summary
