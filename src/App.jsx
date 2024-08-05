import { Container, Stack, Button, Row, Col } from "react-bootstrap";

export default function App() {

  return (
    <>
      <Container className="mt-5">
        {/*Top Stack logo and review bar*/}
        <Stack direction="horizontal" gap="5" className="d-flex justify-content-between" >
          <div className="d-flex align-items-center">
            <i className="align-items-center px-1"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-receipt"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" /></svg></i>
            <p className="fw-bold font-monospace fs-4" >Invoice Generator</p>
          </div>
          <div className="d-flex">
            <Button className="btn btn-primary" >Review Invoice </Button> 
          </div>
        </Stack>

        {/*Invoice number and dates stack*/}
        <Stack direction="horizontal" className="d-flex my-5 justify-content-between">
          <div className="input-group-sm d-inline-flex">
            <span class="input-group-text" id="basic-addon2">Invoice Number</span>
            <input type="text" class="form-control" placeholder="Invoice001" aria-label="Invoice001" aria-describedby="basic-addon2" />
          </div>
          <div className="align-self-center">
            <span className="mx-4">Current Date</span>
            <span>Due Date</span>
          </div>
        </Stack>
        
        {/*Section divider*/}
        <Stack direction="horizontal" className="mx-2">
          <div className="border-top border-primary w-100"></div>          
        </Stack>

        {/*Invoice to and from stack*/}
        <Stack direction="horizontal" className="my-4 mb-4">

          {/*To data stack*/}
          <Stack direction="vertical" className="mx-3">
            <div>
              <label className="my-3">To:</label>
              <input type="text" placeholder="Business Name" id="sender_name" class="form-control mb-2" aria-label="business name" />
              <input type="email" placeholder="Sender Email" id="sender_email" class="form-control mb-2" aria-label="email" />
              <input type="text" placeholder="Address" id="sender_address" class="form-control mb-2" aria-label="address" />
              <input type="number" placeholder="Phone: example (123) 456778" id="sender_phone" class="form-control mb-2" aria-label="phone" />
            </div>
          </Stack>

          {/*From data stack*/}
          <Stack direction="vertical" className="mx-3">
            <div>
              <label className="my-3">From:</label>
              <input type="text" placeholder="Client Name" id="client_name" class="form-control mb-2" aria-label="business name" />
              <input type="email" placeholder="Client Email" id="client_email" class="form-control mb-2" aria-label="email" />
              <input type="text" placeholder="Address" id="client_address" class="form-control mb-2" aria-label="address" />
              <input type="text" placeholder="Phone: example (123) 456778" id="client_phone" class="form-control mb-2" aria-label="phone" />
            </div>
          </Stack>

        </Stack>


        {/*Section divider*/}
        <Stack direction="horizontal"  className="mx-2">
          <div className="border-top border-primary my-4 w-100"></div>          
        </Stack>


        {/*Assing Invoice Items Stack */}
        <Stack direction="horizontal" className="mx-3" gap="2">
          {/*Item Name and Description Stack */}
          <Stack direction="vertical">
            <label htmlFor="" className="mb-4">Item</label>
            <input type="text" placeholder="Item Name" id="Item_name" class="form-control mb-2" aria-label="Item name" />
            <textarea className="form-control" placeholder="Item Description" aria-label="description"></textarea>
          </Stack>
          {/*Quantity Stack */}
          <Stack direction="vertical">
            <label htmlFor="" className="mb-4">Qty</label>
            <input type="number" id="Quantity" class="form-control mb-2" aria-label="Quantity" />
          </Stack>
          {/*Price Stack */}
          <Stack direction="vertical">
            <label htmlFor="" className="mb-4">Rate</label>
            <input type="number" id="Price" class="form-control mb-2" aria-label="Price" />
          </Stack>
          {/*Amount Stack */}
          <Stack direction="vertical">
            <label htmlFor="" className="mb-4">Amount</label>
            <input type="text" id="Amount" class="form-control mb-2" aria-label="Amount" />
          </Stack>
          {/*Action Stack */}
          <Stack direction="vertical" className="d-flex align-items-center">
            <label htmlFor="" className="mb-4">Action</label>
            <div><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg></div>
          </Stack>
        </Stack>
        
        {/*Add Items Button Stack */}
        <Stack direction="horizontal" className="mx-3 my-4 mb-4">
          <Button className="btn btn-primary d-flex align-items-center"><span className="px-1"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg></span>Add Item</Button>
        </Stack>

        {/*Section divider*/}
        <Stack direction="horizontal" className="mx-2">
          <div className="border-top border-primary my-4 w-100"></div>          
        </Stack>

        
         {/*Currency, tax rate and discount rate stack*/}
        <Stack direction="horizontal" gap="5" className="d-flex mx-3 my-4 justify-content-center align-items-center " >

            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">Currency</span>
              <select className="form-select" aria-label="default select">
                <option selected>$ USD</option>
              </select>
            </div>
            
            <div className="input-group">
              <span className="input-group-text">Tax Rate</span>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
              <span className="input-group-text">%</span>
            </div>

            <div className="input-group">
              <span className="input-group-text">Discount Rate</span>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
              <span className="input-group-text">%</span>
            </div>
        </Stack>

        {/*Section divider*/}
        <Stack direction="horizontal" className="mx-2">
          <div className="border-top border-primary my-4 w-100"></div>          
        </Stack>


        {/*Invoice total summary stack*/}

        <Stack direction="horizontal" className="d-flex justify-content-between mx-2 my-4 mb-4">
            <Stack direction="vertical" className="mx-3">
              <div>
                <span className="">Note:</span>
                <textarea className="form-control my-2" placeholder="Add a relevant note or terms " aria-label="note"></textarea>
              </div>
            </Stack>

            <Stack direction="horizontal" className="w-25">
              <Stack direction="vertical" className="align-items-end">
                  <span className="mb-3">Subtotal: </span>             
                  <span className="mb-3">Discount: </span>              
                  <span className="mb-3">Tax: </span>            
                  <span className="mb-3">Total: </span>
              </Stack>

              <Stack direction="vertical" className="align-items-end">                
                <span className="mb-3">$250.00</span>            
                <span className="mb-3">5%</span>            
                <span className="mb-3">0%</span>           
                <span className="mb-3">$237.50</span>
              </Stack>      
            </Stack>
        </Stack>

      </Container>
     
    </>
  )
}

