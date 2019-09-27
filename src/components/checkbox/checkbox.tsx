import React from 'react'
import './checkbox.scss'

const Checkbox = () => {
    return (
        <div className="checkbox">
                <div className="checkbox__component">
                    <div className="ship">
                        <label>
                        <input type="radio" name="ship" value="ship"/>
                        <span className="circle"></span>
                        Ship to an adress</label> 
                    </div>
                    <p>$10</p>
                </div>
                <div className="checkbox__component">
                    <div className="store">
                        <label>
                        <input type="radio" name="ship" value="store"/>
                        <span className="circle"></span>
                        Pick up in store</label> 
                    </div>
                    <p>Free</p>
                </div>    
        </div>
    )
}

export default Checkbox
