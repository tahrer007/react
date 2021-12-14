import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

const App = () => {
  
   
      window.navigator.geolocation.getCurrentPosition(
         (position) =>
      console.log(position),
      (err) => console.log(err))


    return <Button text="important" weight="900"/>

    //<Button text= "not important" />
    //<Button text="important" weight="900"/>
    //<Button text="not important"  weight="normal"/>
 
};

ReactDOM.render(<App />, document.querySelector("#root"));
