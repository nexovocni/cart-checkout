import React,{useState} from 'react'
import './Summary.scss'
import SummaryForm from '../SummaryForm/SummaryForm'
import SummaryCart from '../SummaryCart/SummaryCart'
import MobileHeader from '../../../components/MobileHeader/MobileHeader'

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
    tax: boolean;
    taxValue: any;
}

const Summary:React.FC<IProps> = ({products, stateComponent, setCheckValue, itemsValue, shipValue, checkValue, value, switchComponent, setSwitchComponent, tax, taxValue}) => {

    
    return (
        <section style={{opacity: stateComponent ? .3 : 1, pointerEvents: stateComponent ? "none" : "auto"}} className="summary">
            <MobileHeader products={products}/>
            <SummaryCart
                switchComponent={switchComponent}
                setSwitchComponent={setSwitchComponent}
                products={products}
                itemsValue={itemsValue}
                shipValue={shipValue}
                checkValue={checkValue}
                setCheckValue={setCheckValue}
                value={value}
                stateComponent={stateComponent}
            />
            <SummaryForm 
                switchComponent={switchComponent}
                setSwitchComponent={setSwitchComponent}
                checkValue={checkValue}
                itemsValue={itemsValue}
                shipValue={shipValue}
                value={value}
                tax={tax}
                taxValue={taxValue}
            />
        </section>
    )
}

export default Summary