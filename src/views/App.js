import './App.scss';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Home from '../containers/Home';
import Home2 from '../containers/Home2'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Home2 />
    </React.Fragment>

    // <Router>
    //   <Switch>
    //     <Route exact path="/"><Login /></Route>
    //     <Route path="/register"><Register /></Route>
    //     <Route path="/home"><Home /></Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
