import React, { useState, useEffect } from 'react'
// import{BrowserRouter,Route} from 'react-router-dom'
// import{Link} from 'react-router-dom'

import './Home.css'
import Header from '../Header/Header'
import { getCategoriesApi } from '../Utilities'
import {Carousel} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.css';
// import Footer from '../Footer/Footer'
// import Navbar from '../Header/navbar'
// import Register from '../Register/Register'

const Home = () => {
    const [categoryList, setCategoryList] = useState(null)  

    useEffect(() => {
        takeapi()
    }, [])

    const takeapi = async () => {
        const data = await getCategoriesApi()
        setCategoryList(data)
    }

    const Carousal=()=>{
        return(
            <Carousel>
            <Carousel.Item>
                <img
                height="300"
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Others/clothes(5)-crop.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                height="300"
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Others/clothes(4)-crop.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                height="300"
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Others/clothes(3)-crop.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        )
    }

    const Feature=()=>{
        return(
            // <!--Section: Content-->
            <section className="text-center">

            {/* <!-- Section heading --> */}
            <h3 className="text-center mb-4">Why is it so great?</h3>
            {/* <!-- Section description --> */}
            <p className="text-center w-sm-75 mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad minima veniam,
                quis nostrum exercitationem ullam. Reprehenderit maiores aperiam assumenda deleniti voluptas ratione hic.</p>

            {/* <!-- Grid row --> */}
            <div className="row">

                {/* <!-- Grid column --> */}
                <div className="col-md-4 mb-5">

                <i className="fas fa-chart-area fa-3x" style={{color:"rgb(110,94,254)"}}></i>
                <h5 className="my-4">Analytics</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                    maiores aperiam minima assumenda deleniti hic.
                </p>

                </div>
                {/* <!-- Grid column -->

                <!-- Grid column --> */}
                <div className="col-md-4 mb-5">

                <i className="fas fa-book fa-3x" style={{color:"rgb(110,94,254)"}}></i>
                <h5 className="my-4">Tutorials</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                    maiores aperiam minima assumenda deleniti hic.
                </p>

                </div>
                {/* <!-- Grid column -->

                <!-- Grid column --> */}
                <div className="col-md-4 mb-5">

                <i className="far fa-comments fa-3x" style={{color:"rgb(110,94,254)"}}></i>
                <h5 className="my-4">Support</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                    aperiam minima assumenda deleniti hic.
                </p>

                </div>
                {/* <!-- Grid column --> */}

            </div>
            {/* <!-- Grid row --> */}

            </section>
            // <!--Section: Content-->
        )
    }

    const Homepage = () => {
        return (

            <div className="mainhomepage">

                <Header />

                <div className="container pt-5">
                    <div className="categorylist d-flex flex-wrap">
                        <div className="row justify-content-center w-100 mb-2">
                            <div className="display-4 form-group">Category</div>
                        </div>
                        <div className="row">
                            {
                                categoryList && categoryList.map((cat) => {
                                    return (
                                        <div className="categorycard " key={cat.categoryID}>
                                            {/* <img width="200" height="200" src={cat.img}/>
                                        <div>{cat.title}</div> */}
                                            <div className="form-group">
                                                <img width="200" height="200" src={cat.img} className="rounded-circle ml-1" />
                                                <br/>
                                                <span className="d-flex justify-content-center w-100 mb-2 h5">{cat.title}</span>
                                            </div>
                                        </div>


                                    )
                                })
                            }
                        </div>
                    </div>


                    
                    <div className="d-flex flex-wrap">
                        <div className="row justify-content-center w-100 mb-2">
                            <div className="display-4 form-group">Category</div>
                        </div>
                            <div className="row">
                                <div className="form-group">
                                <div className="view zoom overlay z-depth-2 rounded">
                                        {/* <img class="img-fluid w-100"
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" alt="Sample"/> */}
                                        <a href="#!">
                                        <div className="text-center mask">
                                            <img width="200" height="200" className=" ml-1"
                                            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"/>
                                            {/* <div class="mask rgba-black-slight"></div> */}
                                        </div>
                                        </a>

                                        <div className="text-center pt-4">

                                            <h5>Fantasy T-shirt</h5>
                                            <h6 className="mb-3">12.99 $</h6>

                                        </div>
                                    </div>
                                </div>




                                

                            </div>
                    </div>



                    <Carousal/>
                    <Feature/>
                    





                </div>
            </div>

        )
    }




    return (
        <div>

            <Homepage />
            {/* <BrowserRouter>
            <div>
                <Navbar/>
                <Route path="/" exact component={homepage}/>
                <Route path="/register" exact component={Register}/>
                




                <Footer/>
            </div>
            </BrowserRouter> */}
        </div>
    )
}

export default Home