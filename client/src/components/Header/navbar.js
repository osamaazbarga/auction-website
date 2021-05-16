import{Link} from 'react-router-dom'
import React,{useState,useEffect} from 'react'
import './navbar.css'

const Navbar =()=>{
    const [clicked, setClicked] = useState(false);
    const [userlogin,setUSerlogin]=useState(JSON.parse(localStorage.getItem('user'))||null)
    const handleClick=()=>{
        setClicked(!clicked)
    }
    useEffect(()=>{
        console.log(userlogin);
        
    },[])
    return (
        <nav className="navbaritem">
            
            <Link to="/" className="item"><h1 className="navbar-logo">Action<i className="fab fa-react"></i></h1></Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked?'fas fa-times':'fas fa-bars'}></i>
                
            </div>
            <ul className={clicked?'nav-menu Active':'nav-menu'}>
                 <li>
                     <Link to="/" className="item">Home</Link>
                 </li>
                 <li>
                     <Link to="/" className="item">Products</Link>
                 </li>
                 <li>
                     <Link to="/" className="item">About</Link>
                 </li>
                 <li>
                     <Link to="/" className="item">Contact</Link>
                 </li>
                 <li>
                     {/* <Link to="/" className="item">Account</Link> */}
                     {
                         userlogin?<Link to="/" className="item">Hi <strong>{userlogin.user.username}</strong></Link>:<Link to="/register" className="item">login/signup</Link>
                         
                     }
                 </li>
             </ul>
        </nav>
        
        
    )

}

export default Navbar