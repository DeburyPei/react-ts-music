import React, {memo,Suspense} from "react";
import type {FC,ReactNode} from "react";
import {Link, Outlet,} from "react-router-dom";
import NavBar from "./c-cpns/nav-bar";
interface IProps {
    children?:ReactNode,
}
const Discover:FC<IProps> = () =>{
    return (
        <div>
                    <NavBar />
            <div className="wrap-v2">
                <Suspense fallback="">
                    <Outlet />
                </Suspense>
            </div>



        </div>
    )
}
export default memo(Discover)


