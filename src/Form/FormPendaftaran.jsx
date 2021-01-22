// laundry 7500
// laundry 9000
// 

import { Component, Fragment } from "react";
// import HalamanPendaftaran from "./HalamanPendaftaran";

export default class FormPendaftaran extends Component {
  state = {
    biodata: [],
  };

  componentDidMount() {
    console.log('iki komponen did mount')
  }

  submit = (e) => {
    e.preventDefault();
    const { nama, umur, alamat, bapak } = e.target;
    const { biodata } = this.state
    biodata.push({
      nama: nama.value,
      umur: umur.value,
      alamat: alamat.value,
      bapak: bapak.value,
    })
    this.setState({ biodata })
  };

  render() {
    console.log('render', this.state.biodata)
    return (
      <Fragment>
        <div>
          <form onSubmit={this.submit}>
            <div>
              <p>PENDAFTARAN MURID BARU</p>
              <input type="text" name="nama" placeholder="nama" /> <p />
              <input type="text" name="bapak" placeholder="bapak" /> <p />
              <input type="text" name="umur" placeholder="umur" /> <p />
              <input type="text" name="alamat" placeholder="alamat" /> <p />
              <button type="submit">Submit</button><p />
            </div>
          </form>
          <div>
            <p>Murid yang sudah terdaftar</p>
            <table>
              <thead>
                <tr><th>Nama</th><th>Umur</th><th>Alamat</th><th>Bapak</th></tr>
              </thead>
              <tbody>
                {this.state.biodata.map((bio, i) =>
                  <tr key={i}><td>{bio.nama}</td><td>{bio.umur}</td><td>{bio.alamat}</td><td>{bio.bapak}</td></tr>
                )}
              </tbody>
            </table>

          </div>
        </div>
      </Fragment>
    );
  }
}
