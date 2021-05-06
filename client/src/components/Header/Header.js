// import{Link} from 'react-router-dom'
import './Header.css'
// import Navbar from './navbar'
import Des from '../images/pngegg.png'

const Header =()=>{
   

    return (
        <div className="main">
            
            {/* <img src={Des}/> */}
            <div className="row">
                <div className="col-2">
                    <h1>Best Price , Fast selling!</h1>
                    <p>
                        INVEST WITH SUCCESS BUY FROM AUCTION.COM
                        <i className="fab fa-react"></i>
                    </p>
                    <a href="" className="btnn">SignUp Now</a>
                </div>
                <div className="col-2">
                    <img className="barimg" src={Des}/>
                </div>
            </div>
        </div>
        
        
    )

}

export default Header