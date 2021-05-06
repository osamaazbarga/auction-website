import React,{useState} from 'react'
import Loginform from './Loginform';
import {motion} from 'framer-motion'
// // import{Link} from 'react-router-dom'
import './Register.css'
import { AccountContext } from './accountContext';
import Signupform from './Signupform';
// import styled from "styled-components"

// const Register=()=>{

//     <div className="registerpage">
//         register
//     </div>
// }


// export default Register

// import React from 'react'
const backdropvariants={
	expanded:{
		width:"233%",
		height:"1200px",
		borderRadius:"20%",
		transform:"rotate(60deg)"
	},
	collapsed:{
		width:"160%",
		height:"550px",
		borderRadius:"50%",
		transform:"rotate(60deg)"
	}
}

const expandingTransition={
	type:"spring",
	duration:2.3,
	stiffness:30
}


export default function Register() {
	//const [clicked, setClicked] = useState(false);
    // const handleClick=()=>{
    //     setClicked(!clicked)
    // }
	const [isExpanded,setExpended]=useState(false)
	const [active,setActive]=useState("signin");


	const playExpandedAnimation=()=>{
		setExpended(true);
		setTimeout(()=>{
			setExpended(false)
		},expandingTransition.duration*1000-1500);
	}
	const switchToSignup=()=>{
		playExpandedAnimation();
		setTimeout(()=>{
			setActive("signup")
		},400)
	}
	const switchToSignin=()=>{
		playExpandedAnimation();
		setTimeout(()=>{
			setActive("signin")
		},400)
	}
	const contextValue={
		switchToSignin,switchToSignup
	}

	

    return (
		// <div>rrr</div>
        <div className="main-container">
			<AccountContext.Provider value={contextValue}>
			<div className="box-container">
				<div className="topcontainer">
					<motion.div transition={expandingTransition} initial={false} animate={isExpanded?"expanded":"collapsed"} variants={backdropvariants} className="backDrop"></motion.div>
					{active==="signin"&& <div className="headercontainer">
						<h2 className="headertext">
							Welcome Back
						</h2>
						<h5 className="smalltext">
							Please sign-in to continue!
						</h5>
					</div>}

					{active==="signup"&& <div className="headercontainer">
						<h2 className="headertext">
							Create Account
						</h2>
						<h5 className="smalltext">
							Please sign-up to continue!
						</h5>
					</div>}
					
				</div>
				<div className="innercontainer">
					{active==="signin"&&<Loginform/>}
					{active==="signup"&&<Signupform/>}

					{/* <p onClick={playExpandedAnimation}>clickme</p> */}
				</div>
			</div>
			</AccountContext.Provider>
			
		</div>
    )
}
