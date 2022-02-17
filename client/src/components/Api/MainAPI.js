import axios from "axios";
// const url='http://localhost:5000/'
const url='http://auctionapp-osama.herokuapp.com/'

export default axios.create({
    baseURL:url
})

