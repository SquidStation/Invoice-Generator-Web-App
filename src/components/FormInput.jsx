
import { Stack, Button } from 'react-bootstrap'
import React, { useRef, useState} from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useInvoice } from '../contexts/InvoiceContext'



export default function FormInput(){

  //Pass all the defined states to this child component
  const { invoiceData, addInvoice } = useInvoice()

    {/*Default Cuurency value*/}
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
     {/*Invoice Items ref*/}
     const itemNameRef = useRef();
     const itemDescriptionRef = useRef();
     const itemQuantityRef = useRef();
     const itemPriceRef = useRef();
     const itemSubtotalRef = useRef();
     const itemAmountRef = useRef();

     {/*tax rate*/}
     const vatRateRef = useRef();
     

    //State to manage dates
    const [dateValue, setDateValue] = useState(null)
    const [dueDateValue, setDueDateValue] = useState (null)

    //State to monitor current InvoiceName/Id
    const [invoiceName, setInvoiceName] = useState()

    {/*state to update added items*/}
    const [itemSub, setItemSub] = useState(0) //set item subtotal
    const [itemTotalAmount, setTotalAmount] = useState(0) //set item total amount

    {/*state to update invoice totals*/}
    const [invoiceSubtotal, setInvoiceSubtotal] = useState(0)
    const [invoiceTotal, setInvoiceTotal] = useState(0)

    function getInvoiceName(){
      setInvoiceName(invoiceNumRef.current.value)
    }





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
          itemName: itemNameRef.current.value,
          itemDescription: itemDescriptionRef.current.value,
          itemQuantity: itemQuantityRef.current.value,
          itemPrice: itemPriceRef.current.value,
          itemSubtotal: itemQuantityRef.current.value * itemPriceRef.current.value,
          itemAmount: itemQuantityRef.current.value * itemPriceRef.current.value * 0 + itemQuantityRef.current.value * itemPriceRef.current.value,
          subtotal: 2040,
          discount: 0,
          tax: 0,
          total: 2040

          })

          console.log(invoiceData)
   
    }

       {/*function to calculate item totals*/}
    function handleItemTotals(){
      let itemTotal = 0;
      let itemSub = 0;
      const tax = itemPriceRef.current.value * vatRateRef.current.value * 0.01 * itemQuantityRef.current.value
      console.log(tax)
      itemSub = itemQuantityRef.current.value * itemPriceRef.current.value 
      itemTotal = itemSub + tax
      setItemSub(itemSub)
      setTotalAmount(itemTotal)
    }

    {/*function to calculate invoice totals*/}
    function handleInvoiceTotals(total, subtotal){
      setInvoiceSubtotal(subtotal)
      setInvoiceTotal(total)
    }
 
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


        {/*Adding Invoice Items Stack */}
        <Stack direction="horizontal" className="mx-3" gap="2">
          {/*Item Name and Description Stack */}
          <Stack direction="vertical">
            <label className="mb-4 fw-semibold">Item</label>
            <input ref={itemNameRef} type="text" placeholder="Item Name" id="Item_name" className="form-control mb-2" aria-label="Item name" />
            <textarea ref={itemDescriptionRef} className="form-control" placeholder="Item Description" aria-label="description"></textarea>
          </Stack>
          {/*Quantity Stack */}
          <Stack direction="vertical">
            <label className="mb-4 fw-semibold">Qty</label>
            <input ref={itemQuantityRef} onChange={handleItemTotals} type="number" id="Quantity" className="form-control mb-2" aria-label="Quantity" />
          </Stack>
          {/*Price Stack */}
          <Stack direction="vertical">
            <label className="mb-4 fw-semibold">Price</label>
            <input ref={itemPriceRef} onChange={handleItemTotals} placeholder='$' type="number" id="Price" className="form-control mb-2" aria-label="Price" />
          </Stack>
          {/*Amount Stack */}
          <Stack direction="vertical">
            <label className="mb-4 fw-semibold">Item Subtotal</label>
            <input ref={itemSubtotalRef} disabled placeholder= {'$'+itemSub}  id="subtotal" className="form-control mb-2" aria-label="Amount" />
          </Stack>
          <Stack direction="vertical">
            <label className="mb-4 fw-semibold">Amount+VAT</label>
            <input ref={itemAmountRef} placeholder= {'$'+itemTotalAmount}  disabled type="text" id="Amount" className="form-control mb-2" aria-label="Amount" />
          </Stack>
          {/*Action Stack */}
          <Stack direction="vertical" className="d-flex align-items-center">
            <label className="mb-4 fw-semibold">Action</label>
            <div>{/*Insert Icon*/}</div>
          </Stack>
        </Stack>
        
        {/*Add Items Button Stack */}
        <Stack direction="horizontal" className="mx-3 my-4 mb-4">
          <Button className="btn btn-primary d-flex align-items-center">{/*insert icon*/}Add Item</Button>
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
                <input ref={vatRateRef} type="number" onChange={handleItemTotals} className="form-control" aria-label="Amount (to the nearest dollar)" />
              <span className="input-group-text">%</span>
            </div>

            <div className="input-group">
              <span className="input-group-text">Discount </span>
                <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
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
                <span className="mb-3">5%</span>            
                <span className="mb-3">0</span>           
                <span className="mb-3">${invoiceTotal}</span>
              </Stack>      
            </Stack>
        </Stack>

        
        </>
    )
}