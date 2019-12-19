import React, {useEffect, useState, useContext} from 'react'
import CartPage from '../CartPage/CartPage'

const CartCheckOut = () => {
   
    const [switchComponent, setSwitchComponent] = useState(true)

    return (
            <React.Fragment>
                <CartPage 
                    switchComponent={switchComponent}
                    setSwitchComponent={setSwitchComponent}
                />
            </React.Fragment>
    )
}

export default CartCheckOut
