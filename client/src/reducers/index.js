import {combineReducers} from 'redux'

import action from '../actions/index'
import Api from '../components/Api/MainAPI'
import posts from './posts'
export default combineReducers({posts})
// import itemReducer from './itemReducer'

// export default combineReducers({
//     item:itemReducer,
// })

// const initialState = {
//     users: [],
//     error: null,
// }





// const usersReducer=async ()=>{
//     const req=await Api.get('api/customers');
//     // console.log(req.data);

//     // console.log(Api.get('/customers')
//     //     .then(res => dispatch({
//     //         type: 'FETCH_USERS',
//     //         payload: res.data
//     //     })) 
//     // );
//     return req.data;
// };

// const selectedUserReducer=(SelectedUser=initialState,action)=>{
//     if(action.type==='USER_SELECTED'){
//         console.log("selected users"+action.type);
//         return action.payload
//     }

//     if(action.type==='FETCH_USERS'){
//         console.log("action"+action);
//         return action.payload
//     }
//     // console.log("selected users"+action.type);
//     return SelectedUser
// }

// export default combineReducers({
//     users:usersReducer,
//     SelectedUser:selectedUserReducer
// })

// // export default{
// //     usersReducer:usersReducer,
// //     selectedUserReducer:selectedUserReducer
// // }