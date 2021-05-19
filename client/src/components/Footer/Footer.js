// import{Link} from 'react-router-dom'
import './Footer.css'
// import Navbar from './navbar'
// import Footerimg from '../images/footerimg.png'

const Footer =()=>{
   

    return (
        <nav className="fotbaritem">
            <footer className="footer">
                {/* <div className="footer-left">
                    <img className="footerimg" src={Footerimg}/>
                    <p>lorem ghdfgfddg  gd fg df gdfs g gfsgsg  gsgsgs
                    </p>
                    
                </div> */}
                <ul className="footer-right">
                    <li>
                        <h2>Category</h2>
                        <ul className="boxs">
                            <li><a className="link" href="#">Cars</a></li>
                            <li><a className="link" href="#">Hand Made</a></li>
                            <li><a className="link" href="#">Sports & Outdoor</a></li>
                            <li><a className="link" href="#">Animals</a></li>
                            <li><a className="link" href="#">Books</a></li>
                            <li><a className="link" href="#">Clothes</a></li>
                            <li><a className="link" href="#">Electronics</a></li>
                        </ul>
                    </li>

                    <li className="features">
                        <h2>Useful Links</h2>
                        <ul className="boxs">
                            <li><a className="link" href="#">Cars</a></li>
                            <li><a className="link" href="#">Hand Made</a></li>
                            <li><a className="link" href="#">Sports & Outdoor</a></li>
                            <li><a className="link" href="#">Animals</a></li>
                            <li><a className="link" href="#">Books</a></li>
                            <li><a className="link" href="#">Clothes</a></li>
                            <li><a className="link" href="#">Electronics</a></li>
                        </ul>
                    </li>

                    <li className="address">
                        <h2>Address</h2>
                        <ul className="boxs">
                            <li><a className="link" href="#">108 , st' 43</a></li>
                            <li><a className="link" href="#">Ksifa</a></li>
                            <li><a className="link" href="#">Negev</a></li>
                            <li><a className="link" href="#">Israel</a></li>
                        </ul>
                    </li>
                </ul>
                <div className="footer-bottom">
                <div className="socials">
                        <a className="link" href="#"><i className="fab fa-linkedin"></i></a>
                        <a className="link" href="#"><i className="fab fa-github"></i></a>
                        <a className="link" href="#"><i className="fab fa-whatsapp"></i></a>

                    </div>
                    <p>All Right reserved by &copy; conceptial 2021</p>
                </div>
            </footer>
            
            {/* <h1 className="navbar-logo">Action<i className="fab fa-react"></i></h1> */}
            {/* <div className="menu-icon" onClick={handleClick}>
                <i className={clicked?'fas fa-times':'fas fa-bars'}></i>
                
            </div> */}
        </nav>
        
        
    )
}

export default Footer