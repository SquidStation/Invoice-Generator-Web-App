
import { Stack, Button } from 'react-bootstrap'
import React, { useEffect, useRef, useState} from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useInvoice } from '../contexts/InvoiceContext'
import InvoiceItem from './InvoiceItem';
import {v4 as uuidV4 }from 'uuid'



export default function FormInput(){

  //Declare usecontext states to this child component
  const { invoiceData, addInvoice } = useInvoice()

    {/*Default Currency value*/}
    const defaultValue = "USD"
    const defaultRef = useRef()

    {/*Invoice number and dates refs*/}
    const invoiceNumRef = useRef();
    const dateRef = useRef();
    const dueDateRef = useRef();

    {/*Invoice notes refs*/}
    const notesRef = useRef();

  
    {/*Invoice Sender(From) info ref*/}
    const sendernameRef = useRef();
    const senderemailRef = useRef();
    const senderaddressRef = useRef();
    const senderphoneRef = useRef();
    {/*Invoice Reciever (To) info ref*/}
    const clientnameRef = useRef();
    const clientemailRef = useRef();
    const clientaddressRef = useRef();
    const clientphoneRef = useRef();
 

     {/*tax rate*/}
     const vatRateRef = useRef();
     const discountRef = useRef();
     

    //State to manage dates
    const [dateValue, setDateValue] = useState(null)
    const [dueDateValue, setDueDateValue] = useState (null)

    //State to monitor current InvoiceName/Id
    const [invoiceName, setInvoiceName] = useState()

    //State to monitor current VAT rate
    const [taxRate, setTaxRate] = useState(0)

    //State to monitor current discount rate
    const [discountRate, setDiscountRate] = useState(0)

    {/*state to update total and subtotal of items*/}
    const [itemSub, setItemSub] = useState(0) //set item subtotal
    const [itemTotalAmount, setItemTotalAmount] = useState(0) //set item total amount

    {/*State to track added invoice items in an array*/}
    const [invoiceItems, setInvoiceItems] = useState([])

    {/*State to track delete click action*/}
    const [deleteButtonClicked, SetDeleteButtonClicked] = useState(false)
    

    {/*state to update invoice totals and subtotal*/}
    const [invoiceSubtotal, setInvoiceSubtotal] = useState(0)
    const [invoiceTotal, setInvoiceTotal] = useState(0)


    function getInvoiceName(){
      setInvoiceName(invoiceNumRef.current.value)
    }

  {/*function to add all form input values to invoice*/}
    function handleUserInput(e){
      e.preventDefault()

      addInvoice({
          invoiceNum: invoiceNumRef.current.value,
          invoiceDate: dateValue !== null? dateValue.$D +"/"+dateValue.$M+"/"+dateValue.$y: "",
          invoiceDueDate: dateValue !== null? dueDateValue.$D +"/"+dueDateValue.$M+"/"+dueDateValue.$y: "",
          senderName: sendernameRef.current.value,
          senderEmail: senderemailRef.current.value, 
          senderAddress: senderaddressRef.current.value,
          senderPhone: senderphoneRef.current.value,
          clientName: clientnameRef.current.value,
          clientEmail: clientemailRef.current.value,
          clientAddress: clientaddressRef.current.value,
          clientPhone: clientphoneRef.current.value,
          notes: notesRef.current.value,
          item: {
            itemName: itemNameRef.current.value,
            itemDescription: itemDescriptionRef.current.value,
            itemQuantity: itemQuantityRef.current.value,
            itemPrice: itemPriceRef.current.value,
            itemSubtotal: itemQuantityRef.current.value * itemPriceRef.current.value,
            itemAmount: itemQuantityRef.current.value * itemPriceRef.current.value * 0 + itemQuantityRef.current.value * itemPriceRef.current.value
          },

          subtotal: invoiceSubtotal,
          discount: 0,
          tax: 0,
          total: invoiceTotal

          })

          console.log(invoiceData)
   
    }

       {/*function to calculate and update tax rate*/}
    function updateTax(e){
      e.preventDefault()
      const newTaxRate = e.target.id === "vatRate" ? parseFloat(e.target.value ) : taxRate
      setTaxRate(newTaxRate)
      //update tax on all invoiceitems by mapping all items on every change

      setInvoiceItems( (prevItems) => ( prevItems.map( (item) => (
        { ...item, 
        item: item.item.map( (subItem) => {
          const tax = subItem.price * 0.01 * newTaxRate * subItem.quantity;
          const subtotal = subItem.price * subItem.quantity;
          const total = subtotal + tax;

          return { ...subItem, taxRate: newTaxRate, subtotal, total}
        })
      }))))



    }

    {/*function to calculate invoice totals*/}
    function handleInvoiceTotals(){
      setInvoiceSubtotal()
      setInvoiceTotal()
    }

  
    function addNewInvoiceItem(){
      setInvoiceItems( (prevItems) => {
  
        //generate random unique id for each item
        const itemId = uuidV4()

        //create an newItem object that passes values to our invoiceitem state
        const newItem = {
                itemId: itemId,
                name: '', //initial empty values
                quantity: '',
                price: '',
                subtotal: '',
                amount: '',
                taxRate: taxRate,
                deltemStatus: deleteButtonClicked,
                delItemCallBack: deleteInvoiceItem,
              };

          
        return [...prevItems, {id: itemId, item: [newItem]}]
      }) 

      console.log("Invoice Items Before Tax Update"+invoiceItems)

    }

    function updateDiscount(){
      let discount = discountRef.current.value
      setDiscountRate(discount)
    }

  {/*call back function to delete invoice items*/}
  function deleteInvoiceItem(clickedStatus, id){
    SetDeleteButtonClicked(clickedStatus)
    setInvoiceItems((prevItems)=> (prevItems.map( (item)=> {
      console.log(item.id)
      if(item.id === id){
        prevItems.splice ( prevItems.indexOf(item), 1) 
        return {...item} //return all other values after correct match
      } else {
        return {...item} //prevent app from running undefined state values if no match happens
      }


      
    })))  
  }

  {/*force refresh/update delete button state*/}
  useEffect( ()=>{
    deleteInvoiceItem()
  },[ deleteButtonClicked])

    return(
        <>
        {/*Invoice number and dates stack*/}
        <Stack direction="horizontal" className="d-flex my-5 justify-content-between">
          <div className="d-inline-flex align-items-center">
            <span className="input-group" id="invoicenum">Invoice Number</span>
            <input type="text" ref={invoiceNumRef} onChange={handleUserInput} className="form-control" placeholder="INV001" aria-label="Invoice001" aria-describedby="invoicenum" required />
          </div>
          <div className="d-inline-flex align-items-center">
            <span className="mx-5 d-flex align-items-center"> <strong className='px-3'>Invoice Date:</strong> {
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker ref={dateRef} value={dateValue} onChange={(newDateValue) => setDateValue(newDateValue)} label="Select Date"/> 
                </LocalizationProvider>}
            </span>
            <span className="d-flex align-items-center"> <strong className='px-3'>Due Date:</strong> {
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker ref={dueDateRef} value={dueDateValue} onChange={(newDueDateValue) => setDueDateValue(newDueDateValue)} label="Select Date"/> 
                </LocalizationProvider>}
            </span>
          </div>
        </Stack>

        {/*Section divider*/}
        <Stack direction="horizontal" className="mx-2">
          <div className="border-top border-light-subtle w-100"></div>          
        </Stack>

        {/*Invoice to and from stack*/}
        <Stack direction="horizontal" className="my-4 mb-4">

          {/*To data stack*/}
          <Stack direction="vertical" className="mx-3">
            <div>
              <label className="my-3 fw-semibold">From:</label>
              <input type="text" ref={sendernameRef} onChange={handleUserInput} placeholder="Business Name" id="sender_name" className="form-control mb-2" aria-label="business name" required />
              <input type="email" ref={senderemailRef} onChange={handleUserInput} placeholder="Sender Email" id="sender_email" className="form-control mb-2" aria-label="email" required/>
              <input type="text" ref={senderaddressRef} onChange={handleUserInput} placeholder="Address" id="sender_address" className="form-control mb-2" aria-label="address" required/>
              <input type="number" ref={senderphoneRef} onChange={handleUserInput} placeholder="Phone: example (123) 456778" id="sender_phone" className="form-control mb-2" aria-label="phone" required/>
            </div>
          </Stack>

          {/*From data stack*/}
          <Stack direction="vertical" className="mx-3">
            <div>
              <label className="my-3 fw-semibold">Client:</label>
              <input type="text" ref={clientnameRef} placeholder="Client Name" id="client_name" className="form-control mb-2" aria-label="business name" required />
              <input type="email" ref={clientemailRef} placeholder="Client Email" id="client_email" className="form-control mb-2" aria-label="email" required />
              <input type="text" ref={clientaddressRef} placeholder="Address" id="client_address" className="form-control mb-2" aria-label="address" required />
              <input type="text" ref={clientphoneRef} placeholder="Phone: example (123) 456778" id="client_phone" className="form-control mb-2" aria-label="phone" required />
            </div>
          </Stack>
        </Stack>

         {/*Section divider*/}
         <Stack direction="horizontal"  className="mx-2">
          <div className="border-top border-light-subtle my-4 w-100"></div>          
        </Stack>


        {/*Adding Invoice Item Headers */}
        <Stack direction="horizontal" className="mx-3 d-flex justify-content-between">
          {/*Item Name and Description Stack */}
          <Stack direction="vertical" className='align-items-start'>
            <label className="mb-4 fw-semibold">Item</label>
          </Stack>
          {/*Quantity Stack */}
          <Stack direction="vertical" className='align-items-center'>
            <label className="mb-4 fw-semibold">Qty</label>
          </Stack>
          {/*Price Stack */}
          <Stack direction="vertical" className='align-items-end'>
            <label className="mb-4 fw-semibold">Price</label>
          </Stack>
          {/*Amount Stack */}
          <Stack direction="vertical" className='align-items-end'>
            <label className="mb-4 fw-semibold">Item Subtotal</label>
          </Stack>
          <Stack direction="vertical" className='align-items-end'>
            <label className="mb-4 fw-semibold d-flex">Amount+VAT</label>
          </Stack>
          {/*Action Stack */}
          <Stack direction="vertical" className="d-flex align-items-end">
            <label className="mb-4 fw-semibold">Action</label>
          </Stack>
        </Stack> 

        {/*Item List */}
              
      { invoiceItems.map( (item) => (
          
          <div key={item.id}>

          {item.item.map( (subItem) => (
            <InvoiceItem 

              key={subItem.itemId}
              itemId={subItem.itemId}
              initialName={subItem.name}
              initialQuantity={subItem.quantity}
              initialPrice={subItem.price}
              initialSubtotal={subItem.subtotal}
              initialAmount={subItem.amount}
              taxRate={subItem.taxRate}
              deleteItemStatus={subItem.deltemStatus}
              deleteItemCallBack={subItem.delItemCallBack} //callback function to handle needed return input from the invoiceitem component for deletion
            
            />

            
          ))}

        </div>
        ))

      }

     
        {/*Add Items Button Stack */}
        <Stack direction="horizontal" className="mx-3 my-4 mb-4">
          <Button className="btn btn-primary d-flex align-items-center" onClick={addNewInvoiceItem}>{/*insert icon*/}Add Item</Button>
        </Stack>

        {/*Section divider*/}
        <Stack direction="horizontal" className="mx-2">
          <div className="border-top border-light-subtle my-4 w-100"></div>          
        </Stack>

        
         {/*Currency, tax rate and discount rate stack*/}
        <Stack direction="horizontal" gap="5" className="d-flex mx-3 my-4 justify-content-center align-items-center " >

            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">Currency</span>
              <select className="form-select" aria-label="default select">
                <option ref={defaultRef} defaultValue={defaultValue}>$ USD</option>
              </select>
            </div>
            
            <div className="input-group">
              <span className="input-group-text">VAT Rate</span>
                <input ref={vatRateRef} type="number" onChange={updateTax} id='vatRate' className="form-control" aria-label="Amount (to the nearest dollar)" />
              <span className="input-group-text">%</span>
            </div>

            <div className="input-group">
              <span className="input-group-text">Discount </span>
                <input ref={discountRef} onChange={updateDiscount} type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
              <span className="input-group-text">%</span>
            </div>
        </Stack>

        {/*Section divider*/}
        <Stack direction="horizontal" className="mx-2">
          <div className="border-top border-light-subtle my-4 w-100"></div>          
        </Stack>


        {/*Invoice total summary stack*/}

        <Stack direction="horizontal" className="d-flex justify-content-between mx-2 my-4 mb-4">
            <Stack direction="vertical" className="mx-3">
              <div>
                <span className="fw-semibold">Note:</span>
                <textarea className="form-control my-2" ref={notesRef} onChange={handleUserInput} placeholder="Add a relevant note or terms " aria-label="note"></textarea>
              </div>
            </Stack>

            <Stack direction="horizontal" className="w-25">
              <Stack direction="vertical" className="align-items-end fw-semibold">
                  <span className="mb-3">Subtotal: </span>             
                  <span className="mb-3">Discount: </span>              
                  <span className="mb-3">VAT: </span>            
                  <span className="mb-3">Total: </span>
              </Stack>

              <Stack direction="vertical" className="align-items-end">                
                <span className="mb-3">${invoiceSubtotal}</span>            
                <span className="mb-3">{discountRate}%</span>            
                <span className="mb-3">0</span>           
                <span className="mb-3">${invoiceTotal}</span>
              </Stack>      
            </Stack>
        </Stack>

        
        </>
    )
}