import { Component } from "react";
import "./ButtonKali.css";

class ButtonKali extends Component{
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

  buttonKali = (e) => {
    // e.preventDefault();
    // const bilangan = this.state.bilangan
    const kali = e.target.id
    this.setState({bilangan: this.state.bilangan + kali})
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
    const indexOperator = this.state.bilangan.indexOf("*")
    const bilangan1 = parseInt(this.state.bilangan.slice(0, indexOperator))
    const bilangan2 = parseInt(this.state.bilangan.slice(indexOperator+1))
    const hasil12 = bilangan1 * bilangan2
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
        <div className="button-kali-place">
          <button id="7" onClick={this.buttonAngka} className="button-kali">7</button>
          <button id="8" onClick={this.buttonAngka} className="button-kali">8</button>
          <button id="9" onClick={this.buttonAngka} className="button-kali">9</button>
          <button id="Z" onClick={this.buttonZ} className="button-kali">Z</button><br></br>
          <button id="4" onClick={this.buttonAngka} className="button-kali">4</button>
          <button id="5" onClick={this.buttonAngka} className="button-kali">5</button>
          <button id="6" onClick={this.buttonAngka} className="button-kali">6</button>
          <button id="*" onClick={this.buttonKali} className="button-kali">✘</button><br></br>
          <button id="1" onClick={this.buttonAngka} className="button-kali">1</button>
          <button id="2" onClick={this.buttonAngka} className="button-kali">2</button>
          <button id="3" onClick={this.buttonAngka} className="button-kali">3</button>
          <button id="=" onClick={this.buttonSamaDengan} className="button-kali">=</button><br></br>
        </div>        
      </div>
    )
  }
}

export default ButtonKali