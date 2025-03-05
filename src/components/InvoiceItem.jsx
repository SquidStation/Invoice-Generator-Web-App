import { Button, Stack } from 'react-bootstrap'
import React, {useState, useEffect} from 'react'



export default function InvoiceItem({itemIdRef, nameRef,quantityRef,priceRef,subtotalRef,amountRef,taxRateRef}){

        const [itemSubtotal, setItemSubtotal] = useState(0)
        const [itemTotal, setItemTotal] = useState(0) //includes vat
        const [itemPrice, setItemPrice] = useState(0) //monitor price value state
        const [itemQuantity, setItemQuantity] = useState(0) //monitor quantity value state

    

           {/*function to calculate item totals*/}
           function handleItemTotals(e){
            e.preventDefault()

        

            let itemAmount = 0;
            let itemSub = 0;
            let price = e.target.id === itemIdRef + "Price" ? e.target.value : itemPrice
            setItemPrice(price);
            let quantity = e.target.id === itemIdRef + "Quantity" ? e.target.value : itemQuantity
            setItemQuantity(quantity)

            console.log("price " + price)
            console.log("quantity " + quantity)

            const tax = price * taxRateRef * 0.01 * quantity
        
            console.log(itemIdRef)
            
            itemSub = quantity * price
            itemAmount = itemSub + tax
            setItemSubtotal(itemSub)
            setItemTotal(itemAmount)

            
          }


    return(
        <>
            <Stack direction="horizontal" className="mx-3 mb-2 d-flex justify-content-between" gap="2">
                {/*Item Name and Description Stack */}
                <Stack direction="vertical">
                    <input ref={nameRef} type="text" placeholder="Enter Item Name" id={itemIdRef+"itemName"} className="form-control mb-2" aria-label="Item name" />
                </Stack>
                {/*Quantity Stack */}
                <Stack direction="vertical">
                    <input ref={quantityRef} placeholder="Enter Qauntity" onChange={handleItemTotals} type="number" id={itemIdRef+"Quantity"} className="form-control mb-2" aria-label="Quantity" />
                </Stack>
                {/*Price Stack */}
                <Stack direction="vertical">
                    <input ref={priceRef} onChange={handleItemTotals} placeholder='Enter Price' type="number" id={itemIdRef+"Price"} className="form-control mb-2" aria-label="Price" />
                </Stack>
                {/*Amount Stack */}
                <Stack direction="vertical">
                    <input ref={subtotalRef} disabled placeholder= {'$'+itemSubtotal}  id={itemIdRef+"subtotal"} className="form-control mb-2" aria-label="subtotal" />
                </Stack>
                <Stack direction="vertical">
                    <input ref={amountRef} placeholder= {'$'+itemTotal}  disabled type="text" id={itemIdRef+"Amount"} className="form-control mb-2" aria-label="Amount" />
             
                </Stack>
                {/*Action Stack */}
                <Stack direction="vertical" className="d-flex align-items-center">
                    <div>{/*Insert Icon*/}</div>
                </Stack>
            </Stack>
    
        </>
    )
}