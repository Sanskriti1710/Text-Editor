import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {useState} from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode,setMode] = useState('light');
  const toggleMode = ()=> {
    if (mode === 'light')
     { 
      setMode('dark');
      document.body.style.backgroundColor = "black";
      document.title = "Dark Mode";
      setInterval(() =>
      {
        document.title ="Your device is infected with a virus";
      },2000);
      setInterval(() =>
        {
          document.title ="Install an antivirus software";
        },1500);
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.title = "Light Mode";
    }
  }
  return (
<>
<Router>
<Navbar title = "Pineapple" aboutText = "Cutieee" mode = {mode} toggleMode = {toggleMode}/>
<div className='container my-3'>
  <Switch>
    <Route exact path = "/">
  <Textform heading = "Happy Writing" mode = {mode}/>
    </Route>
<Route exact path = "/about">
  <About/>
</Route>
  </Switch>
</div>
</Router>
</>
  );
}
export default App;
