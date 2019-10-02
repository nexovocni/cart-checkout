import React, {useState, createContext} from 'react'

export const CodeContext = createContext<any>((undefined as any) as any);

export const CodeProvider = (props:any) => {

    const[disabledCode, setDisabledCode] = useState(false)
    
    return(
        <CodeContext.Provider value={[disabledCode, setDisabledCode]}>
            {props.children}
        </CodeContext.Provider>
    )
}