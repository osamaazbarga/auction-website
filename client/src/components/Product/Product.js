import './Product.css'
import './Productresponsive.css'
import { useParams } from 'react-router'
import React, {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { changeStatusProduct,getAuctionsByIDProduct,getCustomerApi} from '../Utilities'



import Api from '../Api/MainAPI';
export default function Product() {
    let {id}=useParams();
    const user = JSON.parse(localStorage.getItem('user'))
    const [productInfo,setProductInfo]=useState([])
    const [productAuctions,setProductAuctions]=useState([])
    const [productImages,setProductImages]=useState([])

    const [priceAuction,setPriceAuction]=useState(null)
    const [sellerInfo,setSellerInfo]=useState([])
    const [allCustomers,setAllCustomers]=useState([])


    const [isRunningTime, setIsRunningTime] = useState(true);
    let difference = new Date(productInfo.finishdate) - new Date();

    const takeapi = async () => {
        const dataCus = await getCustomerApi()
        setAllCustomers(dataCus)
    }
    
    const getProductByID=async()=>{
        const req=await Api.get(`api/products/${id}`)
        console.log(req.data);
        setProductInfo(req.data)
        setProductImages(req.data.meta_data[0])
        const seller=await getCustomerByID(req.data.customerID)
        setSellerInfo(seller)

        
    }
    const getAuctionPayments=async(id)=>{
        const dataAuc=await getAuctionsByIDProduct(id)
        console.log(dataAuc);
        setProductAuctions(dataAuc)
       
        
    }
    const getCustomerByID=async(customerIDnum)=>{
        const req=await Api.get(`api/customers/${customerIDnum}`)
        return req.data
        
    }
    const getUsernameByID=(id)=>{
        console.log(allCustomers);
        let user=null
        while(user==null){
            user=allCustomers.find(s=>s.customerID===id)
        }
        user=allCustomers.find(s=>s.customerID===id)
        console.log(user);
        return user.username
    }
    useEffect(() => {
        console.log(user);
        getProductByID()
        takeapi()
        getAuctionPayments(id)

        
    }, [])
    useEffect(() => {
        if(difference>0){
            const timer=setInterval(()=>{
                setTimeLeft(calculateTimeLeft());
            },1000)
            return (()=>clearInterval(timer))
        }

      });
      const calculateTimeLeft = () => {
        let year = new Date().getFullYear();


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

        }
        return timeLeft;
    }
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    


      const timerComponents = [];

        Object.keys(timeLeft).forEach((interval) => {
            if(timeLeft['d']<=0&&timeLeft['h']<=0&&timeLeft['m']<=0&&timeLeft['s']<=0 && isRunningTime==true){
                changeStatusProduct(productInfo.productID)
                setIsRunningTime(false)
            }
            
        if (!timeLeft[interval]) {
            return <div key={timeLeft}></div>;
        }

        timerComponents.push(
            <span>
            {timeLeft[interval]} {interval}{" "}
            </span>
        );
        });

    const updatePriceAuctions=async(productIDnum,amount)=>{
        const req=await Api.post(`api/products/updatepriceauctions/${productIDnum}`,{
            priceAuction:Number(amount)
        })
        await getProductByID()
    }

    const handlePayment=async()=>{
        if(user){
            const req=await Api.post(`api/auctions`,{
                productID:Number(productInfo.productID),
                customerID:Number(user.user.customerID),
                paymentamount:Number(priceAuction)

            })
            console.log(req.data)
            if(req.data.error){
                console.log("error");
            }
            else{
                updatePriceAuctions(productInfo.productID,priceAuction)
            }

        }
        else{
            console.log("noname");
        }
    }
        
    return (
        <div>
            <section className="section-content padding-y bg">
        <div className="container">
    
        <article className="card">
            <div className="card-body">
                    <div className="row">
                        <aside className="col-md-6">
                                <article className="gallery-wrap">
                                    <div className="card img-big-wrap">
                                        <a href="#"> <img src={`data:${productImages.contentType};base64, ${productImages.ImageBase64}`} /></a>
                                        {/* {"data:"+productInfo.meta_data[0].contentType+";base64,"+productInfo.meta_data[0].ImageBase64} */}
                                    </div> 
                                    <div className="thumbs-wrap">
                                        {
                                            // console.log(productInfo.meta_data)
                                           
                                            productInfo.meta_data && productInfo.meta_data.map((imageP,index)=>{
                                                // console.log(imageP.ImageBase64);
                                                // if(index>0){
                                                    
                                                    return<a href="#" className="item-thumb"> <img src={`data:${imageP.contentType};base64, ${imageP.ImageBase64}`} /></a>
                                                // }
                                                
                                            })
                                        }
                                    </div>
                                </article>
                        </aside>
                        <main className="col-md-6">
                            <article>
                                <a href="#" className="text-primary btn-link">{sellerInfo.username}</a>
                                <h3 className="title">{productInfo.title}</h3>
                                <div>
                                    <ul className="rating-stars">
                                        <li  className="stars-active"> 
                                            <i className="fa fa-star"></i> <i className="fa fa-star"></i> 
                                            <i className="fa fa-star"></i>  
                                            
                                        </li>
                                        <li>
                                            <i className="fa fa-star"></i> <i className="fa fa-star"></i> 
                                            <i className="fa fa-star"></i> <i className="fa fa-star"></i> 
                                            <i className="fa fa-star"></i> 
                                        </li>
                                    </ul>
                                    <span className="label-rating mr-3 text-muted">7/10</span>
                                    <a href="#" className="btn-link  mr-3 text-muted"> <i className="fa fa-heart"></i> Save for later </a>
                                    <a href="#" className="btn-link text-muted"> <i className="fa fa-book-open"></i> Compare </a>
                                </div> 
        
                                <hr />
                                <div className="mb-3">
                                <div className="h6">Condition:{productInfo.condition} </div>
                                <div className="h6">Time left:  <span className="h5 font-weight-bold">{
                                            // timerunning()
                                            timerComponents.length ? timerComponents  : <span style={{color:"red"}}>Ended</span>
                                    }
                                    </span>
                                    
                                </div >
                                <div className="h6">Finish Date: {productInfo.finishdate}</div>
                                </div>
                                <div className="mb-3">
                                    <h6>Short description</h6>
                                    <ul className="list-dots mb-0">
                                        <li>Ship From : <strong>{productInfo.country}</strong></li>
                                        <li>Shipping Price : <strong>{productInfo.shippingprice}</strong> </li>
                                        <li>Shipping With : <strong>{productInfo.shippingwith}</strong></li>
                                        <li>Dark blue color</li>
                                    </ul>
                                </div>
                                
                                <div className="form-group">
                                    <label className="text-muted">Available sizes</label>
                                    <div>
                                    </div>            
                                </div>

                                <div className="mb-3">
                                    <var className="h5">Starting bid:</var> <var className="price h4">${productInfo.price}</var><span> + ${productInfo.shippingprice} Shipping</span>  <br />
                                    {/* <span className="monthly">$32.00 / monthly <a href="#" className="btn-link">installment </a></span> */}
                                </div> 

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">$</span>
                                    </div>
                                    <input type="text" onChange={event => setPriceAuction(event.target.value)} className="form-control" aria-label="Amount (to the nearest dollar)"/>
                                    {/* <div className="input-group-append">
                                        <span className="input-group-text">.00</span>
                                    </div> */}
                                    {
                                        difference>=0?<button onClick={handlePayment} className="btn btn-primary mr-1">Place Bid</button>:<button disabled className="btn btn-primary mr-1">Place Bid</button>
                                    }
                                    {/* <button className="btn btn-primary mr-1">Place Bid</button> */}
                                    <a href="#" className="btn btn-light">Add to card</a>
                                    </div> 
                                <div className="mb-3">
                                <var className="h5">Price:</var><var className="price h4">${productInfo.priceAuction}</var> <span> + ${productInfo.shippingprice} Shipping</span> <br />
                                    {/* <span className="monthly">$32.00 / monthly <a href="#" className="btn-link">installment </a></span> */}
                                </div> 
        
                                
                                
                            </article> 
                        </main>
                    </div> 
            </div> 
        </article>

        <article className="card mt-5">
            <div className="card-body justify-center">
                <p>
                    {
                        productInfo.discription
                    }
                </p>
            </div> 
        </article>

        <article className="card mt-5">
            <div className="card-body justify-center">
                <p>
                    {
                        productAuctions&&productAuctions.map((auc)=>{
                            const username=getUsernameByID(Number(auc.customerID))
                            return(<div className="d-flex justify-content-between">

                                    <div>
                                        {
                                            username
                                        }
                                    </div>
                                    <div>
                                        {
                                            auc.paymentamount
                                        } $
                                    </div>
                                    <div>
                                        {
                                            auc.createdAt

                                        }
                                    </div>
                                        


                            </div>)
                        })
                    }
                </p>
            </div> 
        </article>



        <article className="card mt-5">
            <div className="card-body">
                <div className="row">
                    <aside className="col-md-6">
                        <h5>Parameters</h5>
                        <dl className="row">
                              <dt className="col-sm-3">Display</dt>
                              <dd className="col-sm-9">13.3-inch LED-backlit display with IPS</dd>
        
                              <dt className="col-sm-3">Processor</dt>
                              <dd className="col-sm-9">2.3GHz dual-core Intel Core i5</dd>
        
                              <dt className="col-sm-3">Camera</dt>
                              <dd className="col-sm-9">720p FaceTime HD camera</dd>
        
                              <dt className="col-sm-3">Memory</dt>
                              <dd className="col-sm-9">8 GB RAM or 16 GB RAM</dd>
                              
                              <dt className="col-sm-3">Graphics</dt>
                              <dd className="col-sm-9">Intel Iris Plus Graphics 640</dd>
                        </dl>
                    </aside>
                    <aside className="col-md-6">
                        <h5>Features</h5>
                        <ul className="list-check">
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
