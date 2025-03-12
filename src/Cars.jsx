import React, {useState} from "react";

function Cars(){

    const [cars , setCars] = useState([]);
    const [caryear , setCaryear] = useState(new Date().getFullYear());
    const [carMake , setMake] = useState("");
    const [carModel,setModel] = useState(""); 
    
    function handleAddCar(){
        const newCar={year : caryear,
            Make : carMake , 
            Model : carModel};

        setCars(c => [...c , newCar]);
         
        setCaryear(new Date().getFullYear());
        setMake(""); 
        setModel("");   

    }
    function handleRemoveCar(index){
           setCars(c => c.filter((_,i) =>i !== index));
    }

    function handleyearChange(event ) {
        setCaryear(event.target.value);
    }

    function handleMakeChange(event){
        setMake(event.target.value);
    }

    function handlemodelChange(event){
        setModel(event.target.value);
    }

    return(<div>
              <h2> List the Car Objects</h2>
              <ul>
                   {cars.map((car, index)=>
                    <li key = {index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.Make} {car.Model}
                    </li>
                
                )}

              </ul>

              <input type ="number" value={caryear} onChange={handleyearChange}/> <br/>
              <input type ="text" value={carMake} onChange={handleMakeChange}
                 placeholder="Enter car Make"/> <br/>
              <input type ="text" value={carModel} onChange={handlemodelChange}
                 placeholder="Enter car Model"/><br/>
                 <button onClick = {handleAddCar}>Add car</button> 
    </div>); 

}

export default Cars
