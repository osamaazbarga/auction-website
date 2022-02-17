import axios from "axios";
// const url='http://localhost:5000/'
const url='https://auctionapp-osama.herokuapp.com/'

export default axios.create({
    baseURL:url
})

