import React,{useState,useEffect} from 'react'
// import{BrowserRouter,Route} from 'react-router-dom'
// import{Link} from 'react-router-dom'

import './Home.css'
import Header from '../Header/Header'
// import Footer from '../Footer/Footer'
// import Navbar from '../Header/navbar'
// import Register from '../Register/Register'

const Home=()=>{
    // useEffect(()=>{

    // })

    const Homepage =()=>{
        return (
            
            <div className="mainhomepage">

                <Header/>

                hi
                </div>

        )
    }




    return (
        <div>

            <Homepage/>
            {/* <BrowserRouter>
            <div>
                <Navbar/>
                <Route path="/" exact component={homepage}/>
                <Route path="/register" exact component={Register}/>
                




                <Footer/>
            </div>
            </BrowserRouter> */}
        </div>
    )
}

export default Home