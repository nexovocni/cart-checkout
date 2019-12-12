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
    products: any;
    setCheckValue: any;
    stateComponent: boolean;
    itemsValue: number;
    shipValue: number;
    checkValue: number;
    value: number;
    switchComponent: boolean;
    setSwitchComponent: any;
}

const Summary:React.FC<IProps> = ({products, stateComponent, setCheckValue, itemsValue, shipValue, checkValue, value, switchComponent, setSwitchComponent}) => {

    const [disabledCode, setDisabledCode] = useState(false)
    
    return (
        <React.Fragment>
            <div className={switchComponent ? "summarycart" : "summarycart__close"}>
            <div className="summarycart__top">
                <SummaryTitle 
                    shipValue={shipValue} 
                    disabledCode={disabledCode}
                />
                <SummaryTotal
                    itemsValue={`$${itemsValue.toFixed(2)}`}  
                    disabledCode={disabledCode} 
                    title="Your order"
                    valueTrans={true}
                />
                <div style={{opacity: disabledCode ? .3 : 1 }} className="summarycart__line"></div>
                <Checkbox 
                    code={disabledCode} 
                    setCheckValue={setCheckValue} 
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
                    itemsValue={value}
                    shipValue={shipValue}
                   disabledCode={disabledCode}
                    checkValue={checkValue}
                />
            </div>
            <div className={setSwitchComponent ? "summarycart__bottom" : "summarycart__bottom__close"}>
                <Buttons 
                    stateComponent={stateComponent} 
                    disabledCode={disabledCode}
                    switchComponent={switchComponent}
                    setSwitchComponent={setSwitchComponent}
                />
            </div>
        </div>
    </React.Fragment>
    )
}

export default Summary