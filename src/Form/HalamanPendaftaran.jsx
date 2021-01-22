// import React, { Component, useState } from "react";
import FormPendaftaran from "./FormPendaftaran";

class HalamanPendaftaran extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "budi",
    };
    console.log(document.URL);
  }

  componentDidMount() {}
  gantiNama = (value) => {
    this.setState({ nama: value });
  };
  
  render() {
    console.log("render");
    const { nama } = this.state;
    return (
      <div>
        <div>
          <h1>BAPAK!!</h1>
          Nama Bapak: {this.state.nama}
          <br />
          <input
            type="text"
            name="nama"
            placeholder="Nama Bapak"
            onChange={(e) => this.setState({ nama: e.target.value })}
            value={this.state.nama}
          />
          <br />
          <FormPendaftaran nama={nama} ganti={this.gantiNama} />
        </div>
      </div>
    );
  }
}
export default HalamanPendaftaran;
