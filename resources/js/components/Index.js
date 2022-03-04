
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {BrowserRouter} from 'react-router-dom'

import App from './App'
import { store } from "./store/store";



function Index() {

    return (
        <>
        <Provider store={store}>
        <BrowserRouter>
            <App/>
            </BrowserRouter>
        </Provider>
        </>
    );
}

export default Index;

if (document.getElementById("app")) {
    ReactDOM.render(<Index />, document.getElementById("app"));
}
