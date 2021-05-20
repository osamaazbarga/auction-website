
import Api from '../components/Api/MainAPI'


export const users = async dispatch => {
    // const req=await Api.get('customers')
    //     .then(res => dispatch({
    //         type: FETCH_USERS,
    //         payload: res.data
    // })) 
    console.log("from user");
    console.log(Api.get('api/customers')
        .then(res => dispatch({
            type: 'FETCH_USERS',
            payload: res.data
        })) 
    );

    // try {
    //     const req=await Api.get('customers')
    //     const res=req.data
    //     dispatch({
    //         type: FETCH_USERS,
    //         payload: res.data
    //     })
    // } catch (error) {
    //     console.log(error);
        
    // }
}



export const selectUser=(user)=>{
   
    return {
        type:'USER_SELECTED',
        payload:user
    }
}

// export default {selectUser,fetchUsers}