
import { Stack, Button } from 'react-bootstrap'
import React, { useRef, useState} from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function FormInput(){

  
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

    function getSender({senderName, senderEmail, senderAddress, senderPhone}){
      console.log(sendernameRef.current.value)
    }
    function getReciever({clientName, clientEmail, clientAddress, clientPhone}){
      
    }

    

    return(
        <>
        {/*Invoice number and dates stack*/}
        <Stack direction="horizontal" className="d-flex my-5 justify-content-between">
          <div className="d-inline-flex align-items-center">
            <span className="input-group" id="invoicenum">Invoice Number</span>
            <input type="text" className="form-control" placeholder="INV001" aria-label="Invoice001" aria-describedby="invoicenum" />
          </div>
          <div className="d-inline-flex align-items-center">
            <span className="mx-5 d-flex align-items-center"> <strong className='px-3'>Invoice Date:</strong> {
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Select Date"/> 
                </LocalizationProvider>}
            </span>
            <span className="d-flex align-items-center"> <strong className='px-3'>Due Date:</strong> {
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Select Date"/> 
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
              <label className="my-3 fw-semibold">To:</label>
              <input type="text" ref={sendernameRef} placeholder="Business Name" id="sender_name" className="form-control mb-2" aria-label="business name" required />
              <input type="email" ref={senderemailRef} placeholder="Sender Email" id="sender_email" className="form-control mb-2" aria-label="email" required/>
              <input type="text" ref={senderaddressRef} placeholder="Address" id="sender_address" className="form-control mb-2" aria-label="address" required/>
              <input type="number" ref={senderphoneRef} placeholder="Phone: example (123) 456778" id="sender_phone" className="form-control mb-2" aria-label="phone" required/>
            </div>
          </Stack>

          {/*From data stack*/}
          <Stack direction="vertical" className="mx-3">
            <div>
              <label className="my-3 fw-semibold">From:</label>
              <input type="text" ref={clientnameRef} placeholder="Client Name" id="client_name" className="form-control mb-2" aria-label="business name" required />
              <input type="email" ref={clientemailRef} placeholder="Client Email" id="client_email" className="form-control mb-2" aria-label="email" required />
              <input type="text" ref={clientaddressRef} placeholder="Address" id="client_address" className="form-control mb-2" aria-label="address" required />
              <input type="text" ref={clientphoneRef} placeholder="Phone: example (123) 456778" id="client_phone" className="form-control mb-2" aria-label="phone" required />
            </div>
          </Stack>

        </Stack>
        
        </>
    )
}