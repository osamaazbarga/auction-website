import{Link} from 'react-router-dom'
import React,{useState,useEffect} from 'react'
import './navbar.css'

const Navbar =()=>{
    const [clicked, setClicked] = useState(false);
    const handleClick=()=>{
        setClicked(!clicked)
    }
    return (
        <nav className="navbaritem">
            <h1 className="navbar-logo">Action<i className="fab fa-react"></i></h1>
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
                     <Link to="/" className="item">Account</Link>
                 </li>
             </ul>
        </nav>
        
        
    )

}

export default Navbar