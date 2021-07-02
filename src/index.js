import React from "react"
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import { createEpicMiddleware } from "redux-observable"
import { createStore, applyMiddleware, compose } from "redux"

import reducers from "./reducers"
import App from "./components/App"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(createEpicMiddleware())),
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
)