import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';

import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,

//   Routes,
//   Route,

// } from "react-router-dom";

function App() {
  const [sBtn, setsBtn] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const Toggle = () => {
    setsBtn(sBtn === 'light' ? 'dark' : 'light')
    if (sBtn === 'light') {
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "success")
    } else {
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success")
    }
  }

  return (
    <>
      {/* <Router> */}
      <nav><Navbar title="tUtils" About="About" Toggle={Toggle} sBtn={sBtn} /></nav>
      <Alert alert={alert} />
        <div className="container my-3">
        <TextForm heading="Enter text for analyse" showAlert={showAlert} sBtn={sBtn} />
          
          

          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route exact path="/" element={} /> */}
          {/* </Routes> */}

        </div>
      {/* </Router> */}
    </>
  );
}

export default App;