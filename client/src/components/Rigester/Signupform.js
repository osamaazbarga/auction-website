import React from 'react'
import './Common.css'
import { Formik, Field, Form } from "formik";
import { useContext } from 'react';
import { AccountContext } from './accountContext';


export default function Signupform(props) {
    const {switchToSignin}=useContext(AccountContext)
    return (
        <div className="boxcontainer">
            
            <Formik
        initialValues={{ username:"",email: "", passwword: "",passwwordconf:"" }}
        onSubmit={async values => {
            console.log(values)

        //   await new Promise(resolve => setTimeout(resolve, 500));
        //   alert(JSON.stringify(values, null, 2));
        }}
      >
          <Form>
          <form className="formcontainer">
          <Field className="input" name="username" type="text" placeholder="UserName"/>
          <Field className="input" name="email" type="email" placeholder="Email"/>
          <Field className="input" name="password" type="password" placeholder="Password"/>
          <Field className="input" name="password" type="password" placeholder="Confirm Password"/>

          </form>
          <button className="submitbutton" type="submit">Signup</button>
          <a className="mutedlink" href="#">Already have an account? <a className="boldlink" href="#" onClick={switchToSignin}>Signin</a></a>
        </Form>
      </Formik>
            
            
        </div>
    )
}
