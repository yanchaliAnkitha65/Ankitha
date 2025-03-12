import React, {useState} from "react";


function Onchange() {

    const [name , setName] = useState("Guest");
    const [Quantity ,setQuantity] = useState(0);
    const [Comment , setComment]  = useState("");
    const [Payment , setpayment] = useState ("");
    const [Shipping ,setShipping] = useState("")


    function handleNameChange(event)  {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setpayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }
     
    return(<div className="Onchanges">
               <input value={name} onChange={handleNameChange}/>
               <p>Name : {name}</p>
    
               <input value={Quantity} onChange={handleQuantityChange} type = "number" />
               <p>Quantity : {Quantity}</p>

               <textarea value={Comment} onChange ={handleCommentChange}
                 placeholder="Enter the instruction"/>
                 <p>Comment : {Comment}</p>

               <select value={Payment} onChange={handlePaymentChange}>
               <option value =""> "Select an Option" </option>
               <option value ="visa">visa</option>
               <option value ="Mastercard">MasterCard</option>
               <option value ="GiftCard">Giftcard</option>
               <option value ="UPI">UPI</option>
               </select>
               <p> Payment :{Payment}</p>

               <lable>
                <input type="radio" value="pick up"
                         checked={Shipping === "pick up"}
                         onChange = {handleShippingChange}/>
                    pick up     
               </lable><br></br>
               <lable>
                <input type="radio" value=" Delivery   "
                         checked={Shipping === " Delivery   "}
                         onChange = {handleShippingChange}/>
                   Delivery   
               </lable>
               <p> Shipping : {Shipping}</p>
    </div>);
}

export default Onchange