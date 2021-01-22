import React from "react";
import "./BapakAnak.css";

class BapakAnak extends React.Component{
    constructor(props) {
        super(props);
        this.state = {namaAnak: ""};
        this.state = {namaBapak: ""};
    
        this.fungsiAnak = this.fungsiAnak.bind(this);
        this.fungsiBapak = this.fungsiBapak.bind(this);
        this.klikKlikan = this.klikKlikan.bind(this);
    }
    
    fungsiAnak(event) {
        this.setState({namaAnak: event.target.value});
    }
     
    fungsiBapak(event) {
        this.setState({namaBapak: event.target.value});
    }

    klikKlikan(event) {
        alert('Selamat datang di website kami ' + this.state.namaAnak + " bin " + this.state.namaBapak);
        event.preventDefault();
    }

    render() {
    return (
        <Fragment>
            <div className="kontener">
                <p className="paragrap">Assalamualaikum &#128519;</p>
                <input placeholder="Siapa namamu ?" type="text" value={this.state.namaAnak} onChange={this.fungsiAnak} />
                <p/>
                <input placeholder="Siapa nama ayahmu ?" type="text" value={this.state.namaBapak} onChange={this.fungsiBapak} />
                <p/>       
                <button onClick={this.klikKlikan}>Masuk</button>
            </div>
        </Fragment>
        );
    }
}
export default BapakAnak