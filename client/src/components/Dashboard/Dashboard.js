import React from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import './Dashboard.css'


export default function Dashboard() {
    return (
        <div>
            
            <div className="container">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <div className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline bg-dark h4">Menu</span>
                        </div>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item">
                                <div className="nav-link align-middle px-0">
                                <i className="bi bi-house-door-fill" style={{fontSize: "2rem", color: "rgb(110,94,254)"}}></i><Link className="link ms-1 d-none d-sm-inline text-secondary h5" to={'/'}>Home</Link>
                                </div>
                            </li>
                            <li>
                                <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-speedometer2" style={{fontSize: "2rem", color: "rgb(110,94,254)"}}></i> <Link className="link ms-1 d-none d-sm-inline text-secondary h5" to={'/dashboard'}>Dashboard</Link> </a>
                                <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                    <li className="w-100">
                                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-secondary h5">Item</span> 1 </a>
                                    </li>
                                    <li>
                                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-secondary h5">Item</span> 2 </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-table" style={{fontSize: "2rem", color: "rgb(110,94,254)"}}></i> <span className="ms-1 d-none d-sm-inline text-secondary h5 ">Orders</span></a>
                            </li>
                            <li>
                                <a href="#submenu2" data-toggle="collapse" className="nav-link px-0 align-middle ">
                                    <i className="fs-4 bi bi-cart2" style={{fontSize: "2rem", color: "rgb(110,94,254)"}}></i> <span className="ms-1 d-none d-sm-inline text-secondary h5">Cart</span></a>
                                <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                    <li className="w-100">
                                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-secondary h5">Item</span> 1</a>
                                    </li>
                                    <li>
                                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-secondary h5">Item</span> 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-grid" style={{fontSize: "2rem", color: "rgb(110,94,254)"}}></i> <span className="ms-1 d-none d-sm-inline text-secondary h5">Products</span> </a>
                                    <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                    <li className="w-100">
                                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-secondary h5">Product</span> 1</a>
                                    </li>
                                    <li>
                                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-secondary h5">Product</span> 2</a>
                                    </li>
                                    <li>
                                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-secondary h5">Product</span> 3</a>
                                    </li>
                                    <li>
                                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-secondary h5">Product</span> 4</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-people" style={{fontSize: "2rem", color: "rgb(110,94,254)"}}></i> <span className="ms-1 d-none d-sm-inline text-secondary h5">Profile</span> </a>
                            </li>
                        </ul>
                        <hr/>
                        
                        <div className="dropdown pb-4">
                            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle"/>
                                <span className="d-none d-sm-inline text-secondary h5 mx-1">loser</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                <li><a className="dropdown-item" href="#">New project...</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col py-3">
                    <h3>Left Sidebar with Submenus</h3>
                    <p className="lead">An example 2-level sidebar with collasible menu items. The menu functions like an "accordion" where only a single menu is be open at a time.</p>
                    <ul className="list-unstyled">
                        <li><h5>Responsive</h5> shrinks in width, hides text labels and collapses to icons only on mobile</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}
