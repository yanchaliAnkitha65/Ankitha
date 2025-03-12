import React, {useState} from "react";

function Itscomponents() {

    const [name , setName] = useState("Guest");

    const updateName =  ()=> {
        setName("Ankitha");
    }
    

    return(<div className = "itscomponents">
            <p>Name : {name}</p>
            <button className="setbutton" onClick = {updateName}>setName</button>
           </div>);



}

export default Itscomponents