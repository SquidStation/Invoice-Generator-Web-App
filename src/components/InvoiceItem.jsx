import { Stack } from 'react-bootstrap'
import React, {useState} from 'react'



export default function InvoiceItem({nameRef,quantityRef,priceRef,subtotalRef,amountRef,taxRate}){

        const [itemSubtotal, setItemSubtotal] = useState(0)
        const [itemTotal, setItemTotal] = useState(0) //includes vat

           {/*function to calculate item totals*/}
           function handleItemTotals(){
            let itemAmount = 0;
            let itemSub = 0;
            const tax = priceRef.current.value * taxRate * 0.01 * quantityRef.current.value
            console.log(tax)
            itemSub = quantityRef.current.value * priceRef.current.value 
            itemAmount = itemSub + tax
            setItemSubtotal(itemSub)
            setItemTotal(itemAmount)
          }
          
    return(
        <>
            <Stack direction="horizontal" className="mx-3 mb-2 d-flex justify-content-between" gap="2">
                {/*Item Name and Description Stack */}
                <Stack direction="vertical">
                    <input ref={nameRef} type="text" placeholder="Enter Item Name" id="Item_name" className="form-control mb-2" aria-label="Item name" />
                </Stack>
                {/*Quantity Stack */}
                <Stack direction="vertical">
                    <input ref={quantityRef} placeholder="Enter Qauntity" onChange={handleItemTotals} type="number" id="Quantity" className="form-control mb-2" aria-label="Quantity" />
                </Stack>
                {/*Price Stack */}
                <Stack direction="vertical">
                    <input ref={priceRef} onChange={handleItemTotals} placeholder='Enter Price' type="number" id="Price" className="form-control mb-2" aria-label="Price" />
                </Stack>
                {/*Amount Stack */}
                <Stack direction="vertical">
                    <input ref={subtotalRef} disabled placeholder= {'$'+itemSubtotal}  id="subtotal" className="form-control mb-2" aria-label="Amount" />
                </Stack>
                <Stack direction="vertical">
                    <input ref={amountRef} placeholder= {'$'+itemTotal}  disabled type="text" id="Amount" className="form-control mb-2" aria-label="Amount" />
                </Stack>
                {/*Action Stack */}
                <Stack direction="vertical" className="d-flex align-items-center">
                    <div>{/*Insert Icon*/}</div>
                </Stack>
            </Stack>
    
        </>
    )
}