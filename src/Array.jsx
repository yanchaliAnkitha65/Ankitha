import React, {useState} from "react";

function Array() {
    
    const [fruits , setFruits] = useState(["Apple", "Orange" , "Banana"]);

    function handleAddFruits(){
         
        const newFruits = document.getElementById("fruitsInput").value ;
        document.getElementById("fruitsInput").value = "";

        setFruits(f =>[...f , newFruits]);


    }

    function handleRemoveFruits(index){
        setFruits(fruits.filter((_,i) => i !==index));
    }



        return(<div>
                   <h2>List of Fruits</h2>
                   <ul>
                    {fruits.map((fruits,index) => 
                                     <li key ={index} onClick={() =>handleRemoveFruits(index)}>
                                        {fruits}
                                        
                       </li>)}
                   </ul>
                   <input type="text" id="fruitsInput" placeholder = "Enter Fruits Name"/>
                   <button onClick ={handleAddFruits} >Add fruits</button>
                   
                   </div>);
    
}

export default Array