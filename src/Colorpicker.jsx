import React, {useState} from "react";

function Colorpicker() {

   const [color , setColor] = useState("#FFFFFF");

   function handleColorChange(event) {
    setColor(event.target.value);
   }

    
  return(<div className = "color-picker-container">
                <h1> Color Picker</h1>
                <div className ="color-display" style = {{backgroundColor : color}}>
                    <p>Selected Color : {color}</p>
                </div>
                <lable>Select the color : </lable>
                <input type = "Color" value={color} onChange = {handleColorChange}/>
      </div>);
}

export default Colorpicker