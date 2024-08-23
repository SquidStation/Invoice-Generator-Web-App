import React, { useContext, useState } from 'react'
import {v4 as uuidV4} from 'uuid'
import useLocalStorage from '../hooks/useLocalStorage'

const InvoiceContext = React.createContext()

export function useInvoice(){
    return useContext(InvoiceContext)
}

export const InvoiceProvider = ( {children} ) => {

 
    const [invoiceData, setInvoiceData] = useLocalStorage('invoiceData', [])
    
    //a function with all invoice form details 
    function addInvoice({ invoiceNum, invoiceDate, invoiceDueDate, senderName, senderEmail, senderAddress, 
        senderPhone, clientName, clientEmail, clientAddress, clientPhone, notes, itemName, itemDescription,
        itemQuantity, itemRate, itemAmount, subtotal, discount, tax, total})
        {

            setInvoiceData( prevInvoiceData => {
                //make sure invoice exists or not
                if(prevInvoiceData.find(data => data.invoiceNum === invoiceNum )){
                    return prevInvoiceData
                } else

                return [...prevInvoiceData, { id: uuidV4(), invoiceNum, invoiceDate, 
                    invoiceDueDate, senderName, senderEmail, senderAddress, senderPhone,
                    clientName, clientEmail, clientAddress, clientPhone,
                    notes, itemName, itemDescription, itemQuantity,
                    itemRate, itemAmount, subtotal, discount, tax, total}] })

        }
    
    
    //delete invoice
    function deleteInvoiceData({invoiceId}){
        setInvoiceData( prevInvoiceData => {
            return prevInvoiceData.filter( invoiceData => invoiceData.id !== invoiceId)
        })
    }

    //delete invoice data items
    function removeInvoiceItem(){

    }

    //find or search invoice item
    function getInvoice(invoiceId){
        invoiceData.filter((invoiceItem) => (invoiceItem.id=== invoiceId) )
    }



    return(
        <InvoiceContext.Provider value={ {
            invoiceData,
            getInvoice,
            deleteInvoiceData,
            removeInvoiceItem,
            addInvoice
        } }>
            
            {children}
        </InvoiceContext.Provider>
    )

}