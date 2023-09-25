import React ,{Suspense} from 'react';
import { useRoutes , Link } from 'react-router-dom'
import '@/App.css';
import routes from '@/router'

import  {shallowEqualApp, useAppSelector} from "@/store";
import {useDispatch} from "react-redux";
import {changeMessage} from "@/store/modules/counter";

function App() {


    const store = useAppSelector((state)=>({
        count:state.counter.count,
        message:state.counter.message,

    }),
        shallowEqualApp
    )
    const dispatch = useDispatch()
    function handleMessage() {
        dispatch(changeMessage('能不能让我找到个工作'))
    }
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
        <button onClick={handleMessage}>改变信息</button>
        <Suspense fallback="loading">
            <div className="main">
                { useRoutes(routes) }
            </div>
        </Suspense>
    </div>

  );
}

export default App;
