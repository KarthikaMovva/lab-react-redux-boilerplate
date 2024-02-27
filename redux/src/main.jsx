// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import {legacy_createStore as createStore} from "redux";
import Reduce from './Components/Reducer.jsx'

const data=createStore(Reduce)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={data}>
    <App />
  </Provider>,
)
