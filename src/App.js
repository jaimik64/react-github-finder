import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"

// react-router-dom
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { toast, ToastContainer, toastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// firebase 

import firebase from 'firebase/app'
import 'firebase/auth'

// components

import Home from './Pages/Home';
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import pageNotFound from './Pages/pageNotFound'

import { UserContext } from './context/userContext';
import Footer from './Components/Footer';
import Header from './Components/Header';

// init firebase
import firebaseConfig from './config/firebaseConfig';

firebase.initializeApp(firebaseConfig)

const App = () => {
  const [user, setUser] = useState(null)
  
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="*" component={pageNotFound} />
        </Switch>
        <Footer/>
      </UserContext.Provider>

    </Router>
   );
}

export default App;
