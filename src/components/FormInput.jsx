
import { Stack, Button } from 'react-bootstrap'
import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function FormInput(){

    function setTodaysDate(){
        const today = new Date()

        const f = new Intl.DateTimeFormat("en-us", {
            
            year: 'numeric',
            month: 'short',
            day: '2-digit',
        })

        return f.format(today)
    }

    return(
        <>
        {/*Top Stack logo and review bar*/}
        <Stack direction="horizontal" gap="5" className="d-flex justify-content-between" >
          <div className="d-inline-flex align-items-baseline">
            <i className="px-1"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-receipt"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" /></svg></i>
            <p className="fw-bold font-monospace fs-4" >Invoice Generator</p>
          </div>
          <div className="d-inline-flex align-items-center">
            <Button className="btn btn-primary" >Review Invoice </Button> 
          </div>
        </Stack>

        {/*Invoice number and dates stack*/}
        <Stack direction="horizontal" className="d-flex my-5 justify-content-between">
          <div className="d-inline-flex align-items-center">
            <span className="input-group" id="invoicenum">Invoice Number</span>
            <input type="text" class="form-control" placeholder="Invoice001" aria-label="Invoice001" aria-describedby="invoicenum" />
          </div>
          <div className="d-inline-flex align-items-center">
            <span className="mx-5">Date: {setTodaysDate()}</span>
            <label className='px-3'>Due Date</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Select Date"/> 
            </LocalizationProvider>
          
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
              <input type="text" placeholder="Business Name" id="sender_name" class="form-control mb-2" aria-label="business name" />
              <input type="email" placeholder="Sender Email" id="sender_email" class="form-control mb-2" aria-label="email" />
              <input type="text" placeholder="Address" id="sender_address" class="form-control mb-2" aria-label="address" />
              <input type="number" placeholder="Phone: example (123) 456778" id="sender_phone" class="form-control mb-2" aria-label="phone" />
            </div>
          </Stack>

          {/*From data stack*/}
          <Stack direction="vertical" className="mx-3">
            <div>
              <label className="my-3 fw-semibold">From:</label>
              <input type="text" placeholder="Client Name" id="client_name" class="form-control mb-2" aria-label="business name" />
              <input type="email" placeholder="Client Email" id="client_email" class="form-control mb-2" aria-label="email" />
              <input type="text" placeholder="Address" id="client_address" class="form-control mb-2" aria-label="address" />
              <input type="text" placeholder="Phone: example (123) 456778" id="client_phone" class="form-control mb-2" aria-label="phone" />
            </div>
          </Stack>

        </Stack>
        
        </>
    )
}