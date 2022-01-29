import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import { useState } from 'react';
import Alert from './Components/Alert';
function App() {
  const [modeText, setModeText] = useState('Enable Dark Mode'); //Set Text of Switch 
  const [textColor, setTextColor] = useState('black'); //Set Text of Other Components
  const [mode, setMode] = useState('light');  //For Dark Mode 
  const toggleMode = ()=>{
    //Set Margin, Padding == 0
    document.body.style.margin = "0"
    document.body.style.padding = "0"

    //-------Function for Dark Mode--------
    if(mode ==='light'){
      document.body.style.backgroundColor = "#22272e"
      document.getElementById('nav').style.borderBottom = "1px solid red"
      setMode('dark')
      setModeText('Disable Dark Mode')
      setTextColor('white')
      showAlert("success", "Dark Mode Enabled")
    }
    else{
      document.body.style.backgroundColor = "white"
      document.getElementById('nav').style.border ="0px"
      setMode('light')
      setModeText('Enable Dark Mode')
      setTextColor('black')
      showAlert("success", "Dark Mode Disabled")

    }
  }

  //---------For Alert-------------
  const [alert, setAlert] = useState(null)
  const showAlert = (type, message)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1000);
  }
  
  return (
    <>
      <Navbar  mode = {mode} title = "TxtUtils" navItem1 = "Home" navItem2 = "About-TxtUtils" changeMode = {toggleMode} modeText = {modeText} textColor = {textColor}  />
      <Alert alert = {alert}/>
      <div className="container my-3">
      <TextArea heading = "Enter the text to analyze" textColor = {textColor} show = {showAlert}/>
      </div>
      
    </>
  );
}

export default App;
