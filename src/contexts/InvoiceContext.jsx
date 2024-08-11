import React, { useContext } from 'react'

const InvoiceContext = React.useContext()

export function useInvoice(){
    return useContext(InvoiceContext)
}

export const InvoiceProvider = ( {children} ) => {


    return(
        <InvoiceContext.Provider value={ {} }>
            {children}
        </InvoiceContext.Provider>
    )

}