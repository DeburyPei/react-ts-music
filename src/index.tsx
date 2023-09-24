import React from 'react';

import '@/index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
// eslint-disable-next-line react/no-deprecated
root.render(
    <HashRouter>
        <App />
    </HashRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
