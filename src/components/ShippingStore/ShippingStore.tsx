import React, {useContext} from 'react';
import {Form} from 'react-final-form';
import ShippingName from '../ShippingName/ShippingName';
import ShippingPhone from '../../components/ShippingPhone/ShippingPhone';
import ShippingSelect from '../../components/ShippingSelect/ShippingSelect';
import {FormComponentContext} from '../../contexts/FormComponentContext';
import './ShippingStore.scss';

interface IProps {
    setFirstName: any;
    setLastName: any;
    setPhone: any;
    validate: any;
    submitBtn: any;
}

const ShippingStore: React.FC<IProps> = ({setFirstName, setLastName, setPhone, validate, submitBtn}: IProps): any => {

    const formContext: any = useContext(FormComponentContext);
    const {formComponents} = formContext;
    const {componentShipping} = formComponents;

    return (
        <Form onSubmit={submitBtn}
            render={(props:any): any => {
                return(
                    <form onSubmit={props.handleSubmit} className={componentShipping ? 'shipping__component__form' : 'close'}>
                        <p>Please ensure that your first bane and last name is identical to a valid id card. The phone number will be used to contact you once your order has been received in your selected store.</p>
                        <ShippingName
                            setFirstName={setFirstName}
                            setLastName={setLastName}
                            validate={validate}
                        />
                        <ShippingPhone
                            setPhone={setPhone}
                            validate={validate}
                        />
                        <ShippingSelect
                            validate={validate}
                        />
                        <button onSubmit={props.handleSubmit} className="shipping__component__submit" type="submit">Continue to payment method</button>
                    </form>
                );
            }}
        />
    );
};

export default ShippingStore;
