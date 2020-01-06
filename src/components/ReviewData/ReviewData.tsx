import React from 'react'
import SummarySubtotal from '../SummarySubtotal/SummarySubtotal'
import SummaryTotal from '../SummaryTotal/SummaryTotal'
import './ReviewData.scss'

interface IProps {
    itemsValue: any;
    checkValue: any;
    productComponent: any;
    shipValue: number;
    taxValue: any;
}

const ReviewData:React.FC<IProps> = ({itemsValue, checkValue, productComponent, shipValue, taxValue}) => {
    return (
        <div className="review__data__component">
            <div className="review__data__component__section">
            <SummaryTotal
                itemsValue={`$${itemsValue.toFixed(2)}`} 
                disabledCode={productComponent} 
                title="Your Items"
                valueTrans={false}
            />
            <SummaryTotal 
                disabledCode={productComponent} 
                title="GST"
                itemsValue={"$" + taxValue.gst}
                valueTrans={false}
            />
            <SummaryTotal 
                disabledCode={productComponent} 
                title="PST"
                itemsValue={"$" + taxValue.pst}
                valueTrans={false}
             />
            <SummaryTotal
                disabledCode={productComponent} 
                title="Shipping"
                itemsValue={shipValue < 1 ? 'Free' : `$${checkValue.toFixed(2)}`} 
                valueTrans={false}
            />
            </div>
            <SummarySubtotal 
                    itemsValue={itemsValue}
                    shipValue={null}
                    disabledCode={productComponent}
                    checkValue={checkValue}
            />
        </div>
    )
}

export default ReviewData
