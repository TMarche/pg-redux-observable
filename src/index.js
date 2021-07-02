import React from "react"
import ReactDOM from 'react-dom'

import { createEpicMiddleware } from "redux-observable"
import { createStore, applyMiddleware, compose } from "redux"

import reducers from "./reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware()),
    applyMiddleware(createEpicMiddleware())
)


const App = () => {
    return <div>App</div>
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)