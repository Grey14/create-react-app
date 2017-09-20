import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
// reducers可以一次匯入用解構的組合
import reducer from './reducers'
import { getAllStudents } from './actions/index'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

// @Store
//
// store = createStore(reducer)
// 使用redux dev tools
// 如果要正常使用是使用 const store = createStore(studentReducer)
// const store = createStore(studentReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(
    reducer,
    applyMiddleware(...middleware)
  )
store.dispatch(getAllStudents());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
