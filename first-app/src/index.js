import React from "react";
import ReactDOM from "react-dom";
import Button from './Button';


const App =() =>{
  return ( 
    <div className="App">
      hiiiii 
      <div> hiii second time </div>
      <Button text="important" weight="900"/>
      <Button text="not important"  weight="normal"/>
 

    </div>
  
 // <Button text= "not important" /> 
    
    
    );};

ReactDOM.render(<App />,document.querySelector('#root'))
