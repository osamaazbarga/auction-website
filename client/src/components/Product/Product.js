import './Product.css'
import './Productresponsive.css'
import { useParams } from 'react-router'
import React, {useRef, useState,useEffect ,StrictMode} from 'react'



import Api from '../Api/MainAPI';
export default function Product() {
    let {id}=useParams();
    const [productInfo,setProductInfo]=useState([])
    const [productImages,setProductImages]=useState([])
    // const [timeLeft, setTimeLeft] = useState();
    const [isRunningTime, setIsRunningTime] = useState(true);
    let difference = new Date(productInfo.finishdate) - new Date();
    // W

    
    const getProductByID=async()=>{
        const req=await Api.get(`products/${id}`)
        console.log(req.data);
        setProductInfo(req.data)
        setProductImages(req.data.meta_data[0])
        //console.log("data:"+productInfo.meta_data[0].contentType+";base64 "+productInfo.meta_data[0].ImageBase64);
        
    }
    useEffect(() => {
        console.log(id);
        getProductByID()
        
    }, [])
    useEffect(() => {
        console.log(isRunningTime);
        if(difference>0){
            const timer=setInterval(()=>{
                console.log(isRunningTime);
                setTimeLeft(calculateTimeLeft());
            },1000)
            return (()=>clearInterval(timer))
        }
            // const timer = setTimeout(() => {
            //     setTimeLeft(calculateTimeLeft());
            //   }, 1000);
              //return () => clearTimeout(timer);

      });
      const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        console.log(productInfo.finishdate);
        
        // let difference = new Date(productInfo.finishdate) - new Date();

        console.log(difference);
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
              d: Math.floor(difference / (1000 * 60 * 60 * 24)),
              h: Math.floor((difference / (1000 * 60 * 60)) % 24),
              m: Math.floor((difference / 1000 / 60) % 60),
              s: Math.floor((difference / 1000) % 60)
            };
        }
        if(timeLeft == null){
            setIsRunningTime(false)
            console.log("here");
        }
        // else setIsRunningTime(false)
        console.log(timeLeft);
        return timeLeft;
    }
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    


      const timerComponents = [];

        Object.keys(timeLeft).forEach((interval) => {
            // console.log(timeLeft['d']);
            if(timeLeft['d']<=0&&timeLeft['h']<=0&&timeLeft['m']<=0&&timeLeft['s']<=0 && isRunningTime==true){

                setIsRunningTime(false)
                console.log(isRunningTime);
            }
            
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
            {timeLeft[interval]} {interval}{" "}
            </span>
        );
        });
        

    
    // const timerunning=()=>{
    //     if(timerComponents.length){
    //         return timerComponents
    //     }
        
    //         setIsDisable(true)
    //     return <span>Finish Time's up!</span>
        
    //     // timerComponents.length ? timerComponents  : <span>Time's up!</span>
    // }
    return (
        <div>
            <section class="section-content padding-y bg">
        <div class="container">
    
        <article class="card">
            <div class="card-body">
                    <div class="row">
                        <aside class="col-md-6">
                                <article class="gallery-wrap">
                                    <div class="card img-big-wrap">
                                        <a href="#"> <img src={`data:${productImages.contentType};base64, ${productImages.ImageBase64}`} /></a>
                                        {/* {"data:"+productInfo.meta_data[0].contentType+";base64,"+productInfo.meta_data[0].ImageBase64} */}
                                    </div> 
                                    <div class="thumbs-wrap">
                                        {
                                            // console.log(productInfo.meta_data)
                                           
                                            productInfo.meta_data && productInfo.meta_data.map((imageP,index)=>{
                                                // console.log(imageP.ImageBase64);
                                                // if(index>0){
                                                    
                                                    return<a href="#" class="item-thumb"> <img src={`data:${imageP.contentType};base64, ${imageP.ImageBase64}`} /></a>
                                                // }
                                                
                                            })
                                        }
                                        {/* <a href="#" class="item-thumb"> <img src="assets/images/items/3.jpg" /></a>
                                        <a href="#" class="item-thumb"> <img src="assets/images/items/3.jpg" /></a>
                                        <a href="#" class="item-thumb"> <img src="assets/images/items/3.jpg" /></a>
                                        <a href="#" class="item-thumb"> <img src="assets/images/items/3.jpg" /></a> */}
                                    </div>
                                </article>
                        </aside>
                        <main class="col-md-6">
                            <article>
                                <a href="#" class="text-primary btn-link">Seller name</a>
                                <h3 class="title">{productInfo.title}</h3>
                                <div>
                                    <ul class="rating-stars">
                                        <li  class="stars-active"> 
                                            <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                            <i class="fa fa-star"></i>  
                                            
                                        </li>
                                        <li>
                                            <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                            <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                            <i class="fa fa-star"></i> 
                                        </li>
                                    </ul>
                                    <span class="label-rating mr-3 text-muted">7/10</span>
                                    <a href="#" class="btn-link  mr-3 text-muted"> <i class="fa fa-heart"></i> Save for later </a>
                                    <a href="#" class="btn-link text-muted"> <i class="fa fa-book-open"></i> Compare </a>
                                </div> 
        
                                <hr />
                                <div class="mb-3">
                                <div class="h6">Condition: </div>
                                <div class="h6">Time left:  <span class="h5 font-weight-bold">{
                                            // timerunning()
                                            timerComponents.length ? timerComponents  : <span>Time's up!</span>
                                    }
                                    </span>
                                    
                                </div >
                                <div class="h6">Finish Date: {productInfo.finishdate}</div>
                                </div>
                                <div class="mb-3">
                                    <h6>Short description</h6>
                                    <ul class="list-dots mb-0">
                                        <li>Made in Russia</li>
                                        <li>Wolf leather </li>
                                        <li>Rubber material bottom</li>
                                        <li>Dark blue color</li>
                                    </ul>
                                </div>
                                
                                <div class="form-group">
                                    <label class="text-muted">Available sizes</label>
                                    <div>
                                    {/* {
                                            timerComponents.length ? timerComponents : <span>Time's up!</span>
                                    } */}
                                        {/* <label class="js-check btn btn-check active mr-1">
                                            <input type="radio" name="option_size" value="option1" checked="" />
                                            <span>Small</span>
                                        </label>
                                        <label class="js-check btn btn-check mr-1">
                                            <input type="radio" name="option_size" value="option1" />
                                            <span>Medium</span>
                                        </label>
                                        <label class="js-check btn btn-check mr-1">
                                            <input type="radio" name="option_size" value="option1" />
                                            <span>Large</span>
                                        </label>
                                        <label class="js-check btn btn-check disabled">
                                            <input type="radio" name="option_size" disabled="" value="option1" />
                                            <span>Babies</span>
                                        </label>   */}
                                    </div>            
                                </div>

                                <div class="mb-3">
                                    <var class="h5">Starting bid:</var> <var class="price h4">$230.00</var> <br />
                                    {/* <span class="monthly">$32.00 / monthly <a href="#" class="btn-link">installment </a></span> */}
                                </div> 

                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">$</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
                                    {/* <div class="input-group-append">
                                        <span class="input-group-text">.00</span>
                                    </div> */}
                                    {
                                        difference>=0?<button class="btn btn-primary mr-1">Place Bid</button>:<button disabled class="btn btn-primary mr-1">Place Bid</button>
                                    }
                                    {/* <button class="btn btn-primary mr-1">Place Bid</button> */}
                                    <a href="#" class="btn btn-light">Add to card</a>
                                    </div> 
                                <div class="mb-3">
                                <var class="h5">Price:</var><var class="price h4">$230.00</var> <br />
                                    {/* <span class="monthly">$32.00 / monthly <a href="#" class="btn-link">installment </a></span> */}
                                </div> 
        
                                
                                
                            </article> 
                        </main>
                    </div> 
            </div> 
        </article>
        <article class="card mt-5">
            <div class="card-body">
                <div class="row">
                    <aside class="col-md-6">
                        <h5>Parameters</h5>
                        <dl class="row">
                              <dt class="col-sm-3">Display</dt>
                              <dd class="col-sm-9">13.3-inch LED-backlit display with IPS</dd>
        
                              <dt class="col-sm-3">Processor</dt>
                              <dd class="col-sm-9">2.3GHz dual-core Intel Core i5</dd>
        
                              <dt class="col-sm-3">Camera</dt>
                              <dd class="col-sm-9">720p FaceTime HD camera</dd>
        
                              <dt class="col-sm-3">Memory</dt>
                              <dd class="col-sm-9">8 GB RAM or 16 GB RAM</dd>
                              
                              <dt class="col-sm-3">Graphics</dt>
                              <dd class="col-sm-9">Intel Iris Plus Graphics 640</dd>
                        </dl>
                    </aside>
                    <aside class="col-md-6">
                        <h5>Features</h5>
                        <ul class="list-check">
                            <li>Best performance of battery</li>
                            <li>5 years warranty for this product</li>
                            <li>Amazing features and high quality</li>
                            <li>Best performance of battery</li>
                            <li>5 years warranty for this product</li>
                        </ul>
                    </aside>
                </div> 
                <hr />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div> 
        </article>
        </div>
        
    
    </section>
        </div>
    )
}
