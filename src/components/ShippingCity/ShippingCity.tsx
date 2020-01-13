import React from 'react';
import {Field} from 'react-final-form';
import './ShippingCity.scss';

interface IProps {
    setCity: any;
    setProvince: any;
    setPostal: any;
    setCountry: any;
    validate: any;
}

const ShippingCity: React.FC<IProps> = ({setCity, setProvince, setCountry, setPostal, validate}: IProps): any => {
    return (
        <div className="shipping__component__city">
            <div className="shipping__component__city__city">
                <Field
                    name="city"
                    type="text"
                    component="input"
                    validate={validate}
                >
                    {({input, meta}: any): any => {
                        setCity(input.value);
                        return(
                            <div className="shipping__component__city__field">
                                <label className={input.value ? 'shipping__component__label' : 'shipping__component__label close'}>City</label>
                                <input placeholder="City" className={input.value ? 'shipping__component__city__input' : 'shipping__component__city__input border'} {...input} />
                                {meta.error && meta.touched ? <span className="shipping__component__validation">{meta.error}</span> : null}
                            </div>
                        );
                    }}
                </Field>
                <Field
                    name="province"
                    type="text"
                    component="input"
                    validate={validate}
                >
                    {({input, meta}: any): any => {
                        setProvince(input.value);
                        return(
                            <div className="shipping__component__city__field">
                                <label className={input.value ? 'shipping__component__label' : 'shipping__component__label close'}>Province</label>
                                <input placeholder="Province" className={input.value ? 'shipping__component__province__input' : 'shipping__component__province__input border'} {...input} />
                                {meta.error && meta.touched ? <span className="shipping__component__validation">{meta.error}</span> : null}
                            </div>
                        );
                    }}
                </Field>
            </div>
            <div className="shipping__component__city__postal">
                <Field
                    name="postal"
                    type="text"
                    component="input"
                    validate={validate}
                >
                    {({input, meta}: any): any => {
                        setPostal(input.value);
                        return(
                            <div className="shipping__component__city__field">
                                <label className={input.value ? 'shipping__component__label' : 'shipping__component__label close'}>Postal Code</label>
                                <input placeholder="Postal Code" className={input.value ? 'shipping__component__postal__input' : 'shipping__component__postal__input border'} {...input}/>
                                {meta.error && meta.touched ? <span className="shipping__component__validation">{meta.error}</span> : null}
                            </div>
                        );
                    }}
                </Field>
                <Field
                    name="country"
                    type="select"
                    component="input"
                    validate={validate}
                >
                    {({input, meta}: any): any => {
                        setCountry(input.value);
                        return(
                            <div className="shipping__component__city__field border-bottom">
                                <label className={input.value ? 'shipping__component__label' : 'shipping__component__label close'}>Country</label>
                                <select placeholder="Country" className="shipping__component__country__input select border" {...input}>
                                    <option selected={true} value="Canada">Canada</option>
                                    <option value="America">America</option>
                                    <option value="Mexico">Mexico</option>
                                </select>
                                <i className="fas fa-angle-down select" />
                                {meta.error && meta.touched ? <span className="shipping__component__validation">{meta.error}</span> : null}
                            </div>
                        );
                    }}
                </Field>
            </div>
        </div>
    );
};

export default ShippingCity;
