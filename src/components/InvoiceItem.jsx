import { Button, Stack } from 'react-bootstrap'
import React, {useState, useEffect, useRef} from 'react'



export default function InvoiceItem({itemId,initialName,initialQuantity,initialPrice, initialSubtotal, initialAmount, taxRate}){

        const [itemSubtotal, setItemSubtotal] = useState(initialSubtotal)
        const [itemTotal, setItemTotal] = useState(initialAmount) //includes vat
        const [itemName, setItemName] = useState(initialName)
        const [itemPrice, setItemPrice] = useState(initialPrice) //monitor price value state
        const [itemQuantity, setItemQuantity] = useState(initialQuantity) //monitor quantity value state


        {/*create refs for each invoice item input*/}
        const nameRef = useRef();
        const quantityRef = useRef();
        const priceRef = useRef();
        const subtotalRef = useRef();
        const amountRef = useRef();

        //Intitial input values from props
       
        /*
         useEffect( ()=> {
            if(nameRef.current) nameRef.current.value = initialName ;
            if(quantityRef.current) quantityRef.current.value = initialQuantity ;
            if(priceRef.current) priceRef.current.value = initialPrice;
            if(subtotalRef.current) subtotalRef.current.value = itemSubtotal;
            if(amountRef.current) amountRef.current.value = itemTotal;

        }, [initialName, initialQuantity, initialPrice, itemSubtotal, itemTotal])

        */

        //Recalculate subtotals and totals when taxrate changes
        useEffect( () => {
            const tax = itemPrice * 0.01 * taxRate * itemQuantity;
            const sub = itemPrice * itemQuantity;
            const total = sub + tax;

            if(subtotalRef.current) subtotalRef.current.value = sub;
            if(amountRef.current) amountRef.current.value = total;
            
        }, [taxRate, itemPrice, itemQuantity])

        {/*function to calculate item totals*/}
           function handleItemTotals(e){
            e.preventDefault()

        
            const price = e.target.id === itemId + "Price" ? parseFloat(e.target.value) || 0  : itemPrice
            setItemPrice(price);
            const quantity = e.target.id === itemId+ "Quantity" ? parseFloat(e.target.value) || 0 : itemQuantity
            setItemQuantity(quantity)

            console.log("price " + price)
            console.log("quantity " + quantity)

            const tax = price * taxRate * 0.01 * quantity
        
            console.log(itemId)
            
            const itemSub = quantity * price
            const itemAmount = itemSub + tax
            setItemSubtotal(itemSub)
            setItemTotal(itemAmount)
           
          } 



    return(
        <>
            <Stack direction="horizontal" className="mx-3 mb-2 d-flex justify-content-between" gap="2">
                {/*Item Name and Description Stack */}
                <Stack direction="vertical">
                    <input ref={nameRef} type="text" placeholder="Enter Item Name" id={itemId+"itemName"} className="form-control mb-2" aria-label="Item name" />
                </Stack>
                {/*Quantity Stack */}
                <Stack direction="vertical">
                    <input ref={quantityRef} placeholder="Enter Qauntity" onChange={handleItemTotals} type="number" id={itemId+"Quantity"} className="form-control mb-2" aria-label="Quantity" />
                </Stack>
                {/*Price Stack */}
                <Stack direction="vertical">
                    <input ref={priceRef} onChange={handleItemTotals} placeholder='Enter Price' type="number" id={itemId+"Price"} className="form-control mb-2" aria-label="Price" />
                </Stack>
                {/*Amount Stack */}
                <Stack direction="vertical">
                    <input ref={subtotalRef} disabled placeholder= {'$'+itemSubtotal}  id={itemId+"subtotal"} className="form-control mb-2" aria-label="subtotal" />
                </Stack>
                <Stack direction="vertical">
                    <input ref={amountRef} placeholder= {'$'+itemTotal}  disabled type="text" id={itemId+"Amount"} className="form-control mb-2" aria-label="Amount" />
             
                </Stack>
                {/*Action Stack */}
                <Stack direction="vertical" className="d-flex align-items-center">
                    <div>{/*Insert Icon*/}</div>
                </Stack>
            </Stack>
    
        </>
    )
}