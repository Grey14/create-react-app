import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
// reducers可以一次匯入用解構的組合
import reducer from './reducers'
import { getAllDropdowns } from './actions/index'

const store = createStore(reducer);
// 一開始給值
store.dispatch(getAllDropdowns());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
