import { render } from "@testing-library/react";
import React from "react";

class App extends React.Component{
  state={
    count: 0,

  };
  add = ()=>{
    console.log('add');
  };
  minus = ()=>{
    console.log('minus');
  };
  render(){
    
    return( 
      <div>
    <h1>the number is:{this.state.count}</h1>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
