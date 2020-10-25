import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Welcome from './components/Routes/Welcome';
import 'bootstrap/dist/css/bootstrap.css';
import SignInSide from './components/log/materiallogin';

class App extends Component {
  render(){
    return (
     
      <div className="App">
        <Router>
        <Welcome/>
        </Router> 
       
      {/* <SignInSide/> */}
       
      </div>
   
    );
  }
 
}

export default App;
