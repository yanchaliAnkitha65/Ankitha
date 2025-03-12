import React, {useState} from "react";


function ToDoList() {

     const[tasks , setasks] = useState(["eat breakfast","go for a walk"]);
     const [newtask ,setnewtask] =useState("") 
     
     function handleInputChange(event) {
        setnewtask(event.target.value);
     }

     function addtask() {

          if(newtask.trim() !==""){
           setasks(t => [...t, newtask]);
           setnewtask("");
          }

     }

     function deletetask(index) {

          const updatetask = tasks.filter((_,i)=>i !== index)
          setasks(updatetask);
      }


     function movetaskup(index) {
        if(index > 0){
          const updatetask =[...tasks];
          [updatetask[index], updatetask[index - 1]] = 
          [updatetask[index - 1], updatetask[index]];
          setasks(updatetask);
        }
     }

     function movetaskdown(index) {
        if (index < tasks.length -1) {
          const updatetask = [...tasks];
          [updatetask[index], updatetask[index +1]] = 
          [updatetask[index +1], updatetask[index]];
          setasks(updatetask);
        }
     }


     return(<div className="to-do-list">

        <h1>To-Do-List</h1>
        <div>
            <input
                type="text"
                placeholder="Ener a task"
                value={newtask}
                onChange={handleInputChange} />
                <button
                className="add-button"
                onClick ={addtask}>
                Add
                </button>
        </div>

        <ol>
            {tasks.map((task,index)=>
                  <li key= {index}>
                      <span className="text">{task}</span>
                      <button
                          className="delete-button"
                          onClick={() => deletetask(index)}>
                            Delete
                          </button>
                          <button
                            className ="move-button"
                            onClick ={() => movetaskup(index)}>
                             👆
                          </button>
                          <button
                            className ="move-button"
                            onClick ={() => movetaskdown(index)}>
                             👇
                          </button>
                      </li>
                    )}
        </ol>
     </div>);
}

export default ToDoList