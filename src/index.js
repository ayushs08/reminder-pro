import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import registerServiceWorker from './registerServiceWorker'
import { requestNotificationPermission, displayNotification } from './pushNotifications'
import reducer from './Reducers'
import './index.css'
import App from './App'

const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'))
registerServiceWorker()
requestNotificationPermission()
displayNotification('Reminder', 'Time left')
