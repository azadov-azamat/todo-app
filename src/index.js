import React from 'react'
import App from "./App"
import {createRoot} from "react-dom/client"
import {store} from "./redux/store"
import {Provider} from "react-redux"
import "./index.css"

const app = (<Provider store={store}><App/></Provider>)

const container = document.getElementById("root")
const root = createRoot(container)

root.render(app)