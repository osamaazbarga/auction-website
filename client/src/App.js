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


function App() {

  return (
    <div>
      <BrowserRouter>
            <div>
                <Navbar/>
                <Route path="/" exact component={Home}/>
                <Route path="/register" component={Register}/>
                <Route path="/me/:username" component={Register}/>

                





                <Footer/>
            </div>
            </BrowserRouter>

    </div>
  );
}

export default App;
