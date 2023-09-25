import React from 'react';

import '@/index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "@/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
// eslint-disable-next-line react/no-deprecated
root.render(
    <Provider store={store}>
    <HashRouter>
        <App />
    </HashRouter>
    </Provider>
);
