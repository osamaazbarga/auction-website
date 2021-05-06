import React,{useState,useEffect} from 'react'
import './Common.css'
import { Formik, Field, Form } from "formik";
import { AccountContext } from './accountContext';
import { useContext } from 'react';
import Api from '../Api/MainAPI'
import{Link} from 'react-router-dom'
import{BrowserRouter,Route} from 'react-router-dom'


export default function Loginform(props) {
    const {switchToSignup}=useContext(AccountContext)
    const [loginError,setLoginError]=useState("")
    const [user,setUser]=useState("")
    useEffect(() => {
        setLoginError("")
        
    },[])
    const loginApi=async(values)=>{
        const req=await Api.post('customers/login',{
            email:String(values.email),
            password:String(values.password)
        })
        if(req.data.error){
            setLoginError(req.data.error)
        }
        else {
            setLoginError("")
            setUser(req.data)

        }
        // try {
        //     const req=await Api.post('customers/login',{
        //         email:String(values.email),
        //         password:String(values.password)
        //     })
        //     if(req.data.error){
        //         setLoginError(req.data.error)
        //     }
        //     else {
        //         setLoginError("")
        //         setUser(req.data)
        //     }
        // } catch (error) {
        //     setLoginError(req.data.error)
        // }
        
        
    }
    return (
        <div className="boxcontainer">
            
            <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async values => {
            loginApi(values)

        //   await new Promise(resolve => setTimeout(resolve, 500));
        //   alert(JSON.stringify(values, null, 2));
        }}
      >
          <Form>
          <form className="formcontainer">
          <Field className="input" name="email" type="email" placeholder="Enter an Email"/>
          <Field className="input" name="password" type="password" placeholder="Enter a Password"/>
          </form>
          <a className="mutedlink" href="#">Forget Your Password?</a>
          <button className="submitbutton" type="submit">Signin</button>
          <a className="mutedlink" href="#">Don't have an account <a className="boldlink" onClick={switchToSignup}>Signup</a></a>
          <div className="mutedlink" style={{color:"red"}} href="#">{loginError}</div>
        </Form>
      </Formik>
            
            
        </div>
    )
}
