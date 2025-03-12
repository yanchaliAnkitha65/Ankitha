
import Header from './Header.jsx'
import Button from './Button.jsx'
import Student from './student.jsx'
import Greeting from './Greeting.jsx'
import List from './List'
import Profilephoto from './Profilephoto.jsx'
import Itscomponents from './Itscomponents.jsx'
import Counter from './Counter'
import Onchange from './Onchange.jsx'
import Colorpicker from './Colorpicker.jsx'
import Array from './Array.jsx'
import Cars from './Cars.jsx'
import ToDoList from './ToDoList.jsx'
import UseEffects from './UseEffects.jsx'
import ComponentA from './ComponentA.jsx'
import StopWatch from './StopWatch.jsx'


function App() {
       
        const fruits = [{id:1, name: "apple", calories: 95},
          {id:2, name: "myfruit", calories: 45},
          {id:3, name: "banana", calories: 105},
          {id:4, name: "coconut", calories: 159},
          {id:5, name: "pineapple", calories: 37}
                       ]; 

         const vegetables = [{id:6, name: "onion", calories: 99},
                            {id:7, name: "tomato", calories: 46},
                            {id:8, name: "carrot", calories: 100},
                            {id:9, name: "patato", calories: 158},
                            {id:10, name: "ladiesfinger", calories: 87}] ;             
                        
        return(
          <>
          <Header/>
          <Button/>
          <Student name="Ankitha" age={21} isStudent={true}/>
          <Greeting isLoggedIn ={false} username="yanchali"/>
          {fruits.length>0  && <List items ={fruits} category="fruits"/>}
          {vegetables.length> 0  && <List items ={vegetables} category="vegetables"/>}
          <Profilephoto/>
          <Itscomponents/>
          <Counter/>
          <Onchange/>
          <Colorpicker/>
          <Array/>
          <Cars/>
          <ToDoList/>
          <UseEffects/>
          <ComponentA/>
          <StopWatch/>
          </>
        );


}
  

 

export default App
