import React ,{Suspense} from 'react';
import { useRoutes , Link } from 'react-router-dom'
import '@/App.css';
import routes from '@/router'

import  {shallowEqualApp, useAppSelector} from "@/store";

function App() {


    const store = useAppSelector((state)=>({
        count:state.counter.count,
        message:state.counter.message,

    }),
        shallowEqualApp
    )

  return (

    <div className="App">
        <div className="nav">
            <Link to="/discover">发现音乐</Link>
            <Link to="/mine">我的音乐</Link>
            <Link to="/focus">关注</Link>
            <Link to="/download">下载客户端</Link>
        </div>
        <h2>{store.count}</h2>
        <h2>{store.message}</h2>

        <Suspense fallback="loading">
            <div className="main">
                { useRoutes(routes) }
            </div>
        </Suspense>
    </div>

  );
}

export default App;
