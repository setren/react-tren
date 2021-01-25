import { Component } from "react";
import "./ButtonKurang.css";

class ButtonKurang extends Component{
  // constructor(props) {}
    // super(props);
    state = {
      bilangan : "",
      hasil : ""
    }
  

  buttonAngka = (e) => {
    // e.preventDefault();
    // const bilangan = this.state.bilangan
    const angka = e.target.id
    this.setState({bilangan: this.state.bilangan + angka})
    console.log(e.target)
  }

  buttonKurang = (e) => {
    // e.preventDefault();
    // const bilangan = this.state.bilangan
    const kurang = e.target.id
    this.setState({bilangan: this.state.bilangan + kurang})
  }

  buttonZ = () => {
    // e.preventDefault();
    // const bilangan = this.state.bilangan
    this.setState({bilangan: this.state.bilangan.slice(0, -1)})
  }

  buttonSamaDengan = (e) => {
    // e.preventDefault();
    // const bilangan = this.state.bilangan
    const hasil = this.state.hasil
    const indexOperator = this.state.bilangan.indexOf("-")
    const bilangan1 = parseInt(this.state.bilangan.slice(0, indexOperator))
    const bilangan2 = parseInt(this.state.bilangan.slice(indexOperator+1))
    const hasil12 = bilangan1 - bilangan2
    this.setState({hasil: hasil12})
    console.log(hasil)
  }
  

  render(){
    return(
      <div>
        <div className="result-place">
        {this.state.bilangan}<br></br>
        </div>      
        <div className="result-place">
        {this.state.hasil}<br></br>
        </div>
        <div className="button-kurang-place">
          <button id="7" onClick={this.buttonAngka} className="button-kurang">7</button>
          <button id="8" onClick={this.buttonAngka} className="button-kurang">8</button>
          <button id="9" onClick={this.buttonAngka} className="button-kurang">9</button>
          <button id="Z" onClick={this.buttonZ} className="button-kurang">Z</button><br></br>
          <button id="4" onClick={this.buttonAngka} className="button-kurang">4</button>
          <button id="5" onClick={this.buttonAngka} className="button-kurang">5</button>
          <button id="6" onClick={this.buttonAngka} className="button-kurang">6</button>
          <button id="-" onClick={this.buttonKurang} className="button-kurang">−</button><br></br>
          <button id="1" onClick={this.buttonAngka} className="button-kurang">1</button>
          <button id="2" onClick={this.buttonAngka} className="button-kurang">2</button>
          <button id="3" onClick={this.buttonAngka} className="button-kurang">3</button>
          <button id="=" onClick={this.buttonSamaDengan} className="button-kurang">=</button><br></br>
        </div>        
      </div>
    )
  }
}

export default ButtonKurang