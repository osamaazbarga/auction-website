import React,{Fragment,useState,useEffect} from 'react'
import './Common.css'
import { Formik, Field, Form } from "formik";
import { AccountContext } from './accountContext';
import { useContext } from 'react';
import Api from '../Api/MainAPI'
import{Link,Redirect, useHistory} from 'react-router-dom'
// import{BrowserRouter,Route} from 'react-router-dom'
// import {createStore} from 'redux'
import { useDispatch, useSelector } from 'react-redux';

import {selectUser} from '../../actions'


import { connect } from 'react-redux'
import ReloadLogin from '../Reload/ReloadLogin';


 function Loginform(props) {
    const {switchToSignup}=useContext(AccountContext)
    const [loginError,setLoginError]=useState("")
    const [user,setUser]=useState("")
    const history=useHistory()
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    // const { username, password } = inputs;
    // const loggingIn = useSelector(state => state.authentication.loggingIn);
    // const dispatch = useDispatch();
    // const location = useLocation();

    useEffect(() => {
        setLoginError("")
        // dispatch(userActions.logout()); 
        
    },[])
    const loginApi=async(values)=>{
        const req=await Api.post('api/customers/login',{
            email:String(values.email),
            password:String(values.password)
        })
        if(req.data.error){
            setLoginError(req.data.error)
        }
        else {
            setLoginError("")
            localStorage.setItem("user",JSON.stringify(req.data))
            setUser(req.data)
            selectUser(user)
            // setInputs({username:})
            console.log(req.data);


            history.push("/reloadlogin")
            history.push(<ReloadLogin/>)

            

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

    // const login=()=>{
    //     if(user!=""){
    //         setFrom("/")
    //     }
    // }

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
          {/* <Link to="/" type="submit" className="submitbutton d-sm-inline mx-1">Signin</Link> */}
          <a className="mutedlink" href="#">Don't have an account <a className="boldlink" onClick={switchToSignup}>Signup</a></a>
          <div className="mutedlink" style={{color:"red"}} href="#">{loginError}</div>
        </Form>
      </Formik>
            
            
        </div>
    )
}

const mapStateToProps=(state)=>{

    console.log(state);
    return {users:state.users}
}



export default connect(mapStateToProps,{ selectUser })(Loginform)
