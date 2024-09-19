import { Modal } from 'react-bootstrap'
import { useInvoice } from '../contexts/InvoiceContext'


import "../ReviewPage.css"


export default function ReviewInvoice({show, handleClose}){

  const {getInvoice, invoiceData} = useInvoice()

  const currentInvoiceData = invoiceData.slice(-1)

  console.log(currentInvoiceData[0].clientName)



    return(
    
    <Modal className='mx-auto' show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className='d-flex align-items-center'> Invoice</Modal.Title>
      </Modal.Header>
          <div className="py-4">
            <div className="px-14 py-6">
              <table className="w-full border-collapse border-spacing-0">
                <tbody>
                  <tr>
                    <td className="w-full align-top">
                      <div>
                        <img src="https://raw.githubusercontent.com/templid/email-templates/main/templid-dynamic-templates/invoice-02/brand-sample.png" className="h-12" />
                      </div>
                    </td>

                    <td className="align-top">
                      <div className="text-sm">
                        <table className="border-collapse border-spacing-0">
                          <tbody>
                            <tr>
                              <td className="border-r pr-4">
                                <div>
                                  <p className="whitespace-nowrap text-slate-400 text-right">Date</p>
                                  <p className="whitespace-nowrap font-bold text-main text-right">{currentInvoiceData[0].invoiceDate}</p>
                                </div>
                              </td>
                              <td className="pl-4">
                                <div>
                                  <p className="whitespace-nowrap text-slate-400 text-right">Invoice #</p>
                                  <p className="whitespace-nowrap font-bold text-main text-right">{currentInvoiceData[0].invoiceNum}</p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-slate-100 px-14 py-6 text-sm">
              <table className="w-full border-collapse border-spacing-0">
                <tbody>
                  <tr>
                    <td className="w-1/2 align-top">
                      <div className="text-sm text-neutral-600">
                        <p className="font-bold">From: {currentInvoiceData[0].senderName}</p>
                        <p> Email: {currentInvoiceData[0].senderEmail}</p>
                        <p>Phone: {currentInvoiceData[0].senderPhone}</p>
                        <p>Address: {currentInvoiceData[0].senderAddress}</p>
                      </div>
                    </td>
                    <td className="w-1/2 align-top text-right">
                      <div className="text-sm text-neutral-600">
                        <p className="font-bold">To: {currentInvoiceData[0].clientName}</p>
                        <p>Email: {currentInvoiceData[0].clientEmail}</p>
                        <p>Phone: {currentInvoiceData[0].clientPhone}</p>
                        <p>Address: {currentInvoiceData[0].clientAddress}</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="px-14 py-10 text-sm text-neutral-700">
              <table className="w-full border-collapse border-spacing-0">
                <thead>
                  <tr>
                    <td className="border-b-2 border-main pb-3 pl-3 font-bold text-main">#</td>
                    <td className="border-b-2 border-main pb-3 pl-2 font-bold text-main">Item details</td>
                    <td className="border-b-2 border-main pb-3 pl-2 text-right font-bold text-main">Price</td>
                    <td className="border-b-2 border-main pb-3 pl-2 text-center font-bold text-main">Qty.</td>
                    <td className="border-b-2 border-main pb-3 pl-2 text-center font-bold text-main">VAT</td>
                    <td className="border-b-2 border-main pb-3 pl-2 text-right font-bold text-main">Subtotal</td>
                    <td className="border-b-2 border-main pb-3 pl-2 pr-3 text-right font-bold text-main">Subtotal + VAT</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b py-3 pl-3">1.</td>
                    <td className="border-b py-3 pl-2">{currentInvoiceData[0].itemName}</td>
                    <td className="border-b py-3 pl-2 text-right">{currentInvoiceData[0].itemQuantity}</td>
                    <td className="border-b py-3 pl-2 text-center">{currentInvoiceData[0].itemPrice}</td>
                    {/*<td className="border-b py-3 pl-2 text-center">{currentInvoiceData[0].itemVAT}</td>*/}
                    <td className="border-b py-3 pl-2 text-right">{currentInvoiceData[0].itemSubtotal}</td>
                    <td className="border-b py-3 pl-2 pr-3 text-right">{currentInvoiceData[0].itemTotal}</td>
                  </tr>

                  <tr>
                    <td colSpan="7">
                      <table className="w-full border-collapse border-spacing-0">
                        <tbody>
                          <tr>
                            <td className="w-full"></td>
                            <td>
                              <table className="w-full border-collapse border-spacing-0">
                                <tbody>
                                  <tr>
                                    <td className="border-b p-3">
                                      <div className="whitespace-nowrap text-slate-400">Subtotal:</div>
                                    </td>
                                    <td className="border-b p-3 text-right">
                                      <div className="whitespace-nowrap font-bold text-main">{currentInvoiceData[0].subtotal}</div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-3">
                                      <div className="whitespace-nowrap text-slate-400">VAT total:</div>
                                    </td>
                                    <td className="p-3 text-right">
                                      <div className="whitespace-nowrap font-bold text-main">$64.00</div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="bg-main p-3">
                                      <div className="whitespace-nowrap font-bold text-white">Total:</div>
                                    </td>
                                    <td className="bg-main p-3 text-right">
                                      <div className="whitespace-nowrap font-bold text-white">{currentInvoiceData[0].total}</div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

{/*            <div className="px-14 text-sm text-neutral-700">
              <p className="text-main font-bold">PAYMENT DETAILS</p>
              <p>Banks of Banks</p>
              <p>Bank/Sort Code: 1234567</p>
              <p>Account Number: 123456678</p>
              <p>Payment Reference: BRA-00335</p>
            </div> */}

            <div className="px-14 py-10 text-sm text-neutral-700">
              <p className="text-main font-bold">Notes</p>
              <p className="italic">{currentInvoiceData[0].notes}</p>
            </div>

              <footer className="fixed bottom-0 left-0 bg-slate-100 w-full text-neutral-600 text-center text-xs py-3">
                {currentInvoiceData[0].senderName}
                <span className="text-slate-300 px-2">|</span>
                {currentInvoiceData[0].senderAddress}
                <span className="text-slate-300 px-2">|</span>
                {currentInvoiceData[0].senderPhone}
              </footer>
            </div>

    </Modal>
           
    )
}