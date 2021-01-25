import { Component } from "react";
import "./Panel.css";
import ButtonTambah from "./ButtonTambah";
import ButtonKurang from "./ButtonKurang";
import ButtonKali from "./ButtonKali";
import ButtonBagi from "./ButtonBagi";

function A(){
  return (<ButtonTambah/>)  
}

function B(){
    return (<ButtonKurang/>)  
}

function C(){
  return (<ButtonKali/>)  
}

function D(){
  return (<ButtonBagi/>)  
}

class App extends Component{

state={
    array:[<A/>, <B/>, <C/>, <D/>]  ,
    count:0
  }

add=()=>{
  this.setState((pre)=>{
  if(pre.count===3){
  return {
    ...this,count:0
  }
  }
  else{
  return{
    ...this,count:pre.count+1 
  }
  }
  })
} 

render(){
  return(
    <div>
      <button className="button-ganti" onClick={this.add}>GANTI KOMPONEN HITUNGAN</button>
      <h1>{this.state.array[ this.state.count]}</h1>
    </div>)
}
}

export default App
