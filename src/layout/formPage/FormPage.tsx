import React, {useState} from 'react'
import Email from './Email/Email'

const FormPage = () => {

const [component, openComponent] = useState(true)

    return (
        <div className="form">
            <Email component={component} openComponent={openComponent}/>
        </div>
    )
}
export default FormPage
