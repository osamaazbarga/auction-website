import React from 'react'
// import './App.css';
import { Route } from 'react-router';

// import Home from './components/Home/Home';

import { BrowserRouter } from 'react-router-dom';
// import Register from './components/Register/Register';
import Navbar from './components/Header/navbar';
import Footer from './components/Footer/Footer';
import Register from './components/Rigester/Register';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Addproduct from './components/Product/Addproduct';
import Dashboard from './components/User/Dashboard';

// import {Provider} from 'react-redux'
// import {createStore} from 'redux'
// import store from './store'
// import { PrivateRoute } from './helpers/privateRoute';
// import Dashboard from './components/Users/Dashboard';

// import {selectUser} from './actions'

//store(state)
//action
const increment =()=>{
  return{
    type:"INC",
    payload:2
  }
}

const deccrement =()=>{
  return{
    type:"DEC",
    payload:1
  }
}

// let store=createStore


function App() {

  return (

    <div>
      <BrowserRouter>
            <div>
                <Navbar/>
                <Route path="/" exact component={Home}/>
                <Route path="/register" component={Register}/>
                <Route path="/me/:username" component={Register}/>
                <Route path="/product/:id" component={Product}/>
                <Route path="/addproduct" component={Addproduct}/>
                {/* <Route path="/addproduct" component={Addproduct}/> */}
                <Route path="/dashboard" component={Dashboard}/>
                <Footer/>
            </div>
            </BrowserRouter>

    </div>
  );
}

export default App;
