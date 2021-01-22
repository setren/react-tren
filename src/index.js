import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import StateLessComponent from "./component/statelesscomponent";
// import StateFullComponent from "./container/statefullcomponent";
// import YoutubeComp from './component/youtubecomp/youtubecomp';
// import Home from "./container/home/Home";
// import BapakAnak from "./BapakAnak/BapakAnak";
// import Table from './Form/ReactDynamicTable';
import FormPendaftaran from './Form/FormPendaftaran';





ReactDOM.render(<FormPendaftaran/>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
