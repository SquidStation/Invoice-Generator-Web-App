import { Container, Stack, Form, Button, Row, Col } from "react-bootstrap";
import FormInput from "./components/FormInput";
import {useState } from 'react'
import ReviewInvoice from "./components/ReviewInvoice";
import { useInvoice } from "./contexts/InvoiceContext";

export default function App() {

  const { senderDetails } = useInvoice()

    //State to show Invoice preview window
  const [showPreview, setShowPreview ] = useState()

  function showPreviewWindow(){
    setShowPreview(true)
    console.log(senderDetails)
  }


  return (
    <>
      <Container className="mt-5">
        <Form>
        {/*Top Stack logo and review bar*/}
        <Stack direction="horizontal" gap="5" className="d-flex justify-content-between" >
          <div className="d-inline-flex">
           
            <p className="fw-bold font-monospace fs-4" >Invoice Generator</p>
          </div>
          <div className="d-inline-flex align-items-center">
            <Button className="btn btn-primary" type='submit' onClick = {() => showPreviewWindow()} >Review Invoice </Button> 
          </div>
        </Stack>

        <FormInput />

              
        {/*Section divider*/}
        <Stack direction="horizontal"  className="mx-2">
          <div className="border-top border-light-subtle my-4 w-100"></div>          
        </Stack>
        </Form>

        <ReviewInvoice show={showPreview} handleClose={()=> setShowPreview(false)} />
      </Container>

    </>
  )
}

