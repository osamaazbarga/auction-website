import{Link} from 'react-router-dom'
import React,{useState,useEffect} from 'react'
import './navbar.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from 'react-router'

const Navbar =()=>{
    const [clicked, setClicked] = useState(false);
    const [userlogin,setUSerlogin]=useState(JSON.parse(localStorage.getItem('user'))||null)
    const history = useHistory()
    const handleClick=()=>{
        setClicked(!clicked)
    }
    useEffect(()=>{
        console.log(userlogin);
        
    },[])

    const logindrop=()=>{
        return(
            <div className="dropdown">

                            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle"/>
                                <span className="item d-none d-sm-inline h5 mx-1">Hi <strong>{userlogin.user.username}</strong></span>
                            </a>

                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            {/* <Link to="/" className="item d-sm-inline h5 mx-1">Hi <strong>{userlogin.user.username}</strong></Link> */}
                                <li><Link to="/addproduct" className="dropdown-item d-sm-inline mx-1">Add Product</Link></li>
                                <li><Link to="/dashboard" className="dropdown-item d-sm-inline mx-1">Dashboard</Link></li>
                                <li><Link to="/" className="dropdown-item d-sm-inline mx-1">Profile</Link></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><Link to="/reload"  className="dropdown-item d-sm-inline mx-1">Sign out</Link></li>
                            </ul>
                        </div>
        )
    }

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
                     <Link to="/productlist" className="item">Products</Link>
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
                         userlogin?logindrop():<Link to="/register" className="item">login/signup</Link>
                         
                     }
                 </li>
             </ul>
        </nav>
        
        
    )

}

export default Navbar