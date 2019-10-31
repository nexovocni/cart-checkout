import React, {useState} from 'react'
import Email from '../../../components/Email/Email'
import './Form.scss'

interface IProps {
    products: any,
    changeProducts: any,
    deleteProduct: any
}

const Form:React.FC<IProps> = ({products, deleteProduct, changeProducts}) => {

    const [component, openComponent] = useState(true)

    return (
        <main className="main">
            <Email 
                component={component}
                openComponent={openComponent}
            />
        </main>
    )
}

export default Form
