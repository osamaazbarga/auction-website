import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import {Provider} from 'react-redux'
// import {createStore} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
// import {combineReducers} from 'redux'
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
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
    , document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
