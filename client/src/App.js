import React,{useEffect} from 'react'
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
import Dashboard from './components/Dashboard/Dashboard';
import Productlist from './components/Product/Productlist';
import Reload from './components/Reload/Reload';
import ReloadLogin from './components/Reload/ReloadLogin';
import DashboardOrder from './components/Dashboard/DashboardOrder';

// import {useDispatch} from 'react-redux'

// import {getPosts} from './actions/post'

// import {Provider} from 'react-redux'
// import {createStore} from 'redux'
// import store from './store'
// import { PrivateRoute } from './helpers/privateRoute';
// import Dashboard from './components/Users/Dashboard';

// import {selectUser} from './actions'

//store(state)
//action
// const increment =()=>{
//   return{
//     type:"INC",
//     payload:2
//   }
// }

// const deccrement =()=>{
//   return{
//     type:"DEC",
//     payload:1
//   }
// }

// let store=createStore


function App() {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getPosts())
  // }, [dispatch])
  return (

    <div>
      <BrowserRouter>
            <div>
                <Navbar/>
                <Route path="/" exact component={Home}/>
                <Route path="/register" component={Register}/>
                <Route path="/me/:username" component={Register}/>
                <Route path="/productlist" component={Productlist}/>
                <Route path="/product/:id" component={Product}/>
                <Route path="/addproduct" component={Addproduct}/>
                {/* <Route path="/addproduct" component={Addproduct}/> */}
                <Route path="/dashboard/:id" exact component={Dashboard}/>
                <Route path="/dashboard/order/:id" component={DashboardOrder}/>
                <Route path="/dashboard/product/:id" component={DashboardOrder}/>



                <Route path="/reloadlogin" component={ReloadLogin}/>
                <Route path="/reload" component={Reload}/>


                <Footer/>
            </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
