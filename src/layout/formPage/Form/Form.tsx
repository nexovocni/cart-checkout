import React from 'react'

interface IProps {
    products: any,
    changeProducts: any,
    deleteProduct: any
}

const Form:React.FC<IProps> = ({products, deleteProduct, changeProducts}) => {
    return (
        <main className="main">
            <p>Hello</p>
        </main>
    )
}

export default Form
