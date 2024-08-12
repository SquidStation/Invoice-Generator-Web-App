import React, { useContext, useState } from 'react'
import {v4 as uuidV4} from 'uuid'

const InvoiceContext = React.createContext()

export function useInvoice(){
    return useContext(InvoiceContext)
}

export const InvoiceProvider = ( {children} ) => {

    const [senderDetails, setSenderDetails] = useState()
    const [recieverDetails, setReceiverDetials] = useState()
    const [invoiceItems, setInvoiceItems] = useState() 
    const [invoiceTotals, setInvoiceTotals] = useState() 

    const [invoiceForm, setInvoiceForm] = useState() //Track all invoice items in one state

    //a function with all invoice form details 
    function addInvoice({
        invoiceNum,
        invoiceDate, 
        invoiceDueDate,
        senderName, 
        senderEmail, 
        senderAddress, 
        senderPhone,
        clientName, 
        clientEmail, 
        clientAddress, 
        clientPhone, notes}){

    }
    

    function addSenderDetails({senderName, senderEmail, senderAddress, senderPhone, notes}){
        setSenderDetails( (prevSenderDetails) => {
            return [...prevSenderDetails, {senderName, senderEmail, senderAddress, senderPhone, notes}]
        } )
    }

    function addRecieverDetails({clientName, clientEmail, clientAddress, clientPhone}){
        setReceiverDetials((prevRecieverDetails)=>{ 
            return [...prevRecieverDetails, {clientName, clientEmail, clientAddress, clientPhone}]
        })
    }

    function addInvoiceItems({itemsName, itemDescription, itemQuantity, itemRate, itemAmount, itemId}){
        setInvoiceItems((prevInvoiceItems) => {
            return [...prevInvoiceItems, {itemsName, itemDescription, itemQuantity, itemRate, itemAmount, id: uuidV4()}]
        })

    }

    function addInvoiceTotals({subtotal, discount, tax, total}){
        setInvoiceTotals( (prevInvoiceTotals) => {
            return [...prevInvoiceTotals, { subtotal, discount, tax, total}]
        })

    }

    
    //delete invoice item
    function removeInvoiceItem({itemId}){
        setInvoiceItems( prevInvoiceItems => {
            return prevInvoiceItems.filter( invoiceItem => invoiceItem.id !== itemId)
        })
    }

    //find or search invoice item
    function getInvoiceId(itemId){
        invoiceItems.filter((invoiceItem) => (invoiceItem.id=== itemId) )
    }






    return(
        <InvoiceContext.Provider value={ {
            getInvoiceId,
            addSenderDetails,
            addRecieverDetails,
            removeInvoiceItem,
            addInvoiceItems,
            addInvoiceTotals
        } }>
            
            {children}
        </InvoiceContext.Provider>
    )

}