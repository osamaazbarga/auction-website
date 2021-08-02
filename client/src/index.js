import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
// import { createStore, applyMiddleware, compose } from 'redux'


// import {combineReducers} from 'redux'

//Action

const store=createStore(reducers,compose(applyMiddleware(thunk)))
const increment=()=>{
    return {
        type:"INC",
        payload:2
    }
}

const decrement=()=>{
    return {
        type:"DEC",
        payload:1
    }
}

//Reducer
// const counter=(state=0,action)=>{
//     switch(action.type){
//         case "INC":return state+action.payload;
//         case "DEC":return state+action.payload;
//         default :return state;
//     }
// };
// let store=createStore(counter)
// store.subscribe(()=>console.log(store.getState()))

// //Dispach
// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(increment())
// const reducers=combineReducers({
//     usersReducer,
//     selectedUserReducer
// })


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(
//   reducers,
//   composeEnhancers(applyMiddleware(thunk))
// )

library.add(fab, faCheckSquare, faCoffee)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
