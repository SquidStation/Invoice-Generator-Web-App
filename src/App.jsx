import { Container, Stack, Button } from "react-bootstrap";

export default function App() {

  return (
    <>
      <Container className="mt-4">
        <Stack direction="horizontal" gap="5" className="d-flex justify-content-between" >
          <div className="d-flex">
            <i className="align-self-baseline px-1"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-receipt"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" /></svg></i>
            <p className="fw-bold font-monospace fs-5" >Invoice Generator</p>
          </div>
          <div className="d-flex">
            <Button className=" d-inline w-75 btn btn-primary mx-2" >Review Invoice </Button>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">Currency</span>
              <select className="form-select" aria-label="default select">
              <option selected>$ USD</option>
            </select>
            </div>
          </div>
        </Stack>
      </Container>
     
    </>
  )
}

