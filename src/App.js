import './App.css';
import Navbar from './components/Navbar';
import TextApp from './components/TextApp';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      typ:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
 


  const [mode,setMode] = useState('light');

  const toggleMode = ()=>{

    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#020022';
      showAlert('Dark mode enabled','success');
      document.title = "Text App - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode enabled','success');
      document.title = "Text App - Light Mode";
    }
  }

  return (

    <>
      <BrowserRouter>
      <Navbar title="Menu" search="Find" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />
      
      <div className="container my-100">
      
            <Routes>
            <Route exact path="/about"  element={<About  mode={mode} />} />
          </Routes>
          <Routes>
            <Route exact path="/" element={
                <TextApp heading=" Enter text to convert" UCase="Upper Case" LCase="Lower Case" RemoveSpace="Remove Extra Space" mode={mode} showAlert={showAlert}/>
              }
            />
          </Routes>

      
      </div>
     
    </BrowserRouter>
    </>
);
}

export default App;
