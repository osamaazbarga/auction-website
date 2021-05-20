import React from 'react'
import { Link } from 'react-router-dom'
export default function SidebarDashboard({idnumber}) {
    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light align-self-start">
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
                                    <i className="fs-4 bi-speedometer2" style={{fontSize: "2rem", color: "rgb(110,94,254)"}}></i> <Link className="link ms-1 d-none d-sm-inline text-secondary h5" to={`/dashboard/${idnumber}`}>Dashboard</Link> </a>
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
                                    <i className="fs-4 bi-table" style={{fontSize: "2rem", color: "rgb(110,94,254)"}}></i><Link className="link ms-1 d-none d-sm-inline text-secondary h5" to={`/dashboard/order/${idnumber}`}>Orders</Link></a>
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
                            {/* <li>
                                <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-grid" style={{fontSize: "2rem", color: "rgb(110,94,254)"}}></i> <Link className="link ms-1 d-none d-sm-inline text-secondary h5" to={`/dashboard/product/${idnumber}`}>Products</Link> </a>
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
                            </li> */}
                            <li>
                                <a href="#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-people" style={{fontSize: "2rem", color: "rgb(110,94,254)"}}></i> <span className="ms-1 d-none d-sm-inline text-secondary h5">Profile</span> </a>
                            </li>
                        </ul>
                        <hr/>
                        
                        
                    </div>
                </div>
    )
}
