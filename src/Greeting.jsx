function Greeting(props){
    
    
    return(props.isLoggedIn ? <h2 className="welcome">Welcome{props.username}</h2>
                             :  <h2 className="login">please login</h2>
    
    );

}

export default Greeting