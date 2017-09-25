import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// reducers可以一次匯入用解構的組合
import thunk from 'redux-thunk'
import reducer from './reducers'

const middleware = [ thunk ];
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
