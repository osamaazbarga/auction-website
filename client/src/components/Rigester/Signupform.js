import React, { useState,useEffect } from 'react'
import './Common.css'
import { Formik, Field, Form } from "formik";
import { useContext } from 'react';
import Api from '../Api/MainAPI';
import { AccountContext } from './accountContext';
import { useHistory } from 'react-router';


export default function Signupform(props) {
    const {switchToSignin}=useContext(AccountContext)
    const [signupError,setSignupError]=useState("")
    const [user,setUser]=useState("")
    const history=useHistory()
    useEffect(() => {
        setSignupError("")
        
    },[])

    const signupApi=async(values)=>{
        const req=await Api.post('api/customers',{
            username:String(values.username),
            email:String(values.email),
            password:String(values.password)
        })
        console.log(req);
        if(req.data.error){
            setSignupError(req.data.error)
        }
        else {
            setSignupError("")
            setUser(req.data)
            history.push("/")

        }
    }
    return (
        <div className="boxcontainer">
            
            <Formik
        initialValues={{ username:"",email: "", passwword: "",passwwordconf:"" }}
        onSubmit={async values => {
            if(values.password!=values.passwwordconf){
                setSignupError('the password is unconfirm')
            }
            else{
                signupApi(values)
            }

        //   await new Promise(resolve => setTimeout(resolve, 500));
        //   alert(JSON.stringify(values, null, 2));
        }}
      >
          <Form>
          <form className="formcontainer">
          <Field className="input" name="username" type="text" placeholder="UserName"/>
          <Field className="input" name="email" type="email" placeholder="Email"/>
          <Field className="input" name="password" type="password" placeholder="Password"/>
          <Field className="input" name="passwwordconf" type="password" placeholder="Confirm Password"/>

          </form>
          <button className="submitbutton" type="submit">Signup</button>
          <a className="mutedlink" href="#">Already have an account? <a className="boldlink" href="#" onClick={switchToSignin}>Signin</a></a>
          <div className="mutedlink" style={{color:"red"}} href="#">{signupError}</div>
        </Form>
      </Formik>
            
            
        </div>
    )
}
