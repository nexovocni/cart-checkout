import React from 'react';
import './ShippingAddress.scss';
import {Field} from 'react-final-form';

interface IProps {
    setFirstAddress: any;
    setLastAddress: any;
    validate: any;
}

const ShippingAddress: React.FC<IProps> = ({setFirstAddress, setLastAddress, validate}: IProps): any => {
    return (
        <div className="shipping__component__address">
            <div className="shipping__component__address__first">
                <Field
                    name="firstAddress"
                    type="text"
                    component="input"
                    validate={validate}
                >
                    {({input, meta}: any): any => {
                        setFirstAddress(input.value);
                        return(
                            <>
                                <label className={input.value ? 'shipping__component__label' : 'shipping__component__label close'}>Address</label>
                                <input placeholder="Address" className="shipping__component__address__input" {...input} />
                                {meta.error && meta.touched ? <span className="shipping__component__validation">{meta.error}</span> : null}
                            </>
                        );
                    }}
                </Field>
            </div>
            <div className="shipping__component__address__last">
                <Field
                    name="lastAddress"
                    type="text"
                    component="input"
                    validate={validate}
                >
                   {({input, meta}: any): any => {
                        setLastAddress(input.value);
                        return(
                            <>
                                <label className={input.value ? 'shipping__component__label' : 'shipping__component__label close'}>Address</label>
                                <input placeholder="Appartment, suite, etc(optional)" className="shipping__component__address__input" {...input}/>
                                {meta.error && meta.touched ? <span className="shipping__component__validation">{meta.error}</span> : null}
                            </>
                        );
                    }}
                </Field>
            </div>
        </div>
    );
};

export default ShippingAddress;
