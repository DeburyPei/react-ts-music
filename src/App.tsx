import React ,{Suspense} from 'react';
import { useRoutes  } from 'react-router-dom'
import '@/App.css';
import routes from '@/router'

import {shallowEqualApp, useAppDispatch, useAppSelector} from "@/store";

import {changeMessage} from "@/store/modules/counter";
import AppHeader from './components/app-header';
import AppFooter from "@/components/app-footer";

function App() {


    const store = useAppSelector((state)=>({
        count:state.counter.count,
        message:state.counter.message,

    }),
        shallowEqualApp
    )
    const dispatch = useAppDispatch()
    function handleMessage() {
        dispatch(changeMessage('能不能让我找到个工作'))
    }
  return (

    <div className="App">
        <div className="nav">
            <AppHeader />
        </div>
        <div className="body wrap-v2">
            <Suspense fallback="">
                <div className="main">
                    { useRoutes(routes) }
                </div>
            </Suspense>
            <AppFooter />
        </div>


        {/*<h2>{store.count}</h2>*/}
        {/*<h2>{store.message}</h2>*/}
        {/*<button onClick={handleMessage}>改变信息</button>*/}
    </div>

  );
}

export default App;
