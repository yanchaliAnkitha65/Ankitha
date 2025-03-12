import React , {useState , useEffect} from "react";

function UseEffects() {

    const [count,setCount] = useState(0);
    const [color , setColor] =useState("green");

     useEffect(() =>{
           document.title = `Ankitha `;  // ${count} ${color}//

     }, [count,color]
    );

      function addcount() {
        setCount(c => c+1);
      }

      function subtractcount() {
        setCount(c => c-1);
      }

      function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
      }



      return(<>
              <p style ={{color : color}} >Count : {count}</p>
              <button onClick ={addcount}> Add </button>
              <button onClick ={subtractcount}> Substract </button>
              <button onClick ={changeColor}> Color Change </button>
      
      </>);


}

export default UseEffects