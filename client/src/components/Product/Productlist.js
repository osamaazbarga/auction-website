
import React, { useState, useEffect } from 'react'
import { getCategoriesApi, getProductsApi,getAuctionsApi} from '../Utilities'
import Timerview from './Timerview'

import{Link} from 'react-router-dom'

export default function Productlist() {

    const [categoryList, setCategoryList] = useState(null)
    const [productList, setProductList] = useState(null)
    const [auctionList, setAuctionList] = useState(null)
    

    useEffect(() => {
        takeapi()


    }, [])

    const takeapi = async () => {
        const dataCat = await getCategoriesApi()
        const dataPro = await getProductsApi()
        const dataAuc=await getAuctionsApi()


        setCategoryList(dataCat)
        setProductList(dataPro.reverse())
        setAuctionList(dataAuc)
    }

    const dateCompare=(finishdate)=>{
      const d1=new Date(finishdate)
      const d2=new Date()
      if(d1>d2){
          return (<h4 className="mb-0"><div className="badge badge-success badge-pill badge-news">Active</div></h4>)
      }
      return <h4 className="mb-0"><div className="badge badge-secondary badge-pill badge-news h3">Ended</div></h4>
      console.log(d1,d2);
     

  }


    const countsOfBids=(id)=>{
      if(auctionList){
        const result = auctionList.filter(auction => auction.productID==id);
        return result.length
      }
      return
    }

    const getcategoryById=(id)=>{
        let index=categoryList.find(s=>s.categoryID===id)
        return index.title
    }
    const ProductListView=()=>{
        return productList&&productList.map((pro)=>{
            return(
                <section key={pro.productID}>
    
      <div className="row mb-4">
        <div className="col-md-5 col-lg-3 col-xl-3">
    
          <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
              {
                dateCompare(pro.finishdate)
                  // pro.status=='active'?(<h4 className="mb-0"><span className="badge badge-success badge-pill badge-news">{pro.status}</span></h4>):<h4 className="mb-0"><span className="badge badge-secondary badge-pill badge-news">{pro.status}</span></h4>
              }
          
            <a href="#!">
              <div className="mask">
                  {
                      pro.meta_data.length>0?<img height="200" className="img-fluid w-100"
                      src={`data:${pro.meta_data[0].contentType};base64, ${pro.meta_data[0].ImageBase64}`}/>:<img className="img-fluid w-100"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"/>
                  }
                {/* <img className="img-fluid w-100"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"/> */}
                <div className="mask rgba-black-slight"></div>
              </div>
            </a>
          </div>
    
        </div>
        <div className="col-md-7 col-lg-9 col-xl-9">
          <div className="row">
            <div className="col-lg-7 col-xl-7">
    
              <h5>{pro.title}</h5>
              <p className="mb-2 text-muted text-uppercase small">{getcategoryById(Number(pro.category))}</p>
    
                  <span className="fas fa-star fa-sm text-primary"></span>
    
                  <span className="fas fa-star fa-sm text-primary"></span>
    
                  <span className="fas fa-star fa-sm text-primary"></span>
    
                  <span className="fas fa-star fa-sm text-primary"></span>
    
                  <span className="fas fa-star fa-sm text-primary"></span>
              <hr/>
              <p className="mb-lg-0">{pro.discription}</p>
              <div>{countsOfBids(Number(pro.productID))} bids</div>
    
            </div>
            <div className="col-lg-5 col-xl-5">
    
              <h5 className="mb-3">
                  <span>{pro.priceAuction}$</span>&emsp;
                  <span className="text-grey"><s>{pro.price}$</s></span>
              </h5>
              <h6 className="mb-3">
                  <span>{pro.condition}</span>
              </h6>

              <div className="my-4">
                <button type="button" className="btn btn-primary btn-md mr-1 mb-2"><i
                    className="fas fa-shopping-cart pr-2"></i>Add to cart</button>
                <Link to={`/product/${pro.productID}`} className="btn btn-light btn-md mr-1 mb-2"><i
                    className="fas fa-info-circle pr-2"></i>Details</Link>
              </div>
              <button type="button" className="btn btn-danger btn-md px-3 mb-lg-2 material-tooltip-main"
                data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i
                  className="far fa-heart"></i></button>

            <div className="my-4">
                <div class="h6">
                    <Timerview productInfo={pro}/>
                                    
                </div >
                </div>
    
            </div>
          </div>
        </div>
      </div>
    
      
    
    
    
    </section>
            )
        })
        
    }
    return (
        <div className="container">
            <ProductListView/>
        </div>
    )
}
