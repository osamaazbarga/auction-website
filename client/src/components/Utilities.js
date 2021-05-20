// const getCategoriesApi=async()=>{
//     const req=await Api.get('categories')
//     // console.log(req.data);
//     // setCategoryList(req.data)
//     return req.data
// }
import Api from './Api/MainAPI';
// export default getCategoriesApi



export async function getCategoriesApi() {
        const req=await Api.get('api/categories')
    return req.data
}

export async function getProductsApi() {
    const req=await Api.get('api/products')
    return req.data
}

export async function getProductsByCustomerID(id) {
    const req=await Api.get(`api/products/productsbycustomerid/${id}`)
    console.log(req);
    return req.data
}

export async function getAuctionsApi() {
    const req=await Api.get('api/auctions')

    return req.data
}

export async function getCustomerApi() {
    const req=await Api.get('api/customers')

    return req.data
}

export async function getCustomerByID(id) {
    const req=await Api.get(`api/customers/${id}`)
    return req.data
}



export async function getAuctionsByIDProduct(id) {
    const req=await Api.get(`api/auctions/byproduct/${id}`)

    return req.data
}

export async function getCategoryByIDApi(id) {
    const req=await Api.get(`api/categories/${id}`)
    console.log(req);
    return req.data

}

export async function changeStatusProduct(id) {
    const req=await Api.get(`api/products/updatestatus/${id}`)
    return req.data

}

export async function countsOfBids(id) {
    const req=await Api.get(`api/auctions/byproduct/${id}`)
    console.log(req);
    return req.data
}





