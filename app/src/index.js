import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './App';
import { createStore, applyMiddleware } from "redux";
import { appReducer } from "./reducers";
import { Provider } from "react-redux";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
