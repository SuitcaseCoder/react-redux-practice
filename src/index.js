import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore } from 'redux';
import allReducers from './reducers/index';

// connects global state to our entire app (wrap <APP /> with Provider )
import {Provider} from 'react-redux';

const myStore = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// // let store = createStore(reducer);

// // STORE --> globalized state

// // ACTION INCREMENT 
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }

// // REDUCER

// const counter = (state=0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state +1;
//     case 'DECREMENT':
//       return state - 1;
//   }
// };

// let store = createStore(counter);

// // DISPLAY IT IN THE CONSOLE
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH

// store.dispatch(increment());
// store.dispatch(decrement());




ReactDOM.render(
  <Provider store={myStore} >
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
