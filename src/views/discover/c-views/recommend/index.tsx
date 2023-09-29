import React, {memo, useEffect} from "react";
import type {FC,ReactNode} from "react";
import {useAppDispatch} from "@/store";
import {fetchBannerDataAction} from "@/views/discover/c-views/recommend/store/recommend";
interface IProps {
    children?:ReactNode,
}
const Recommend:FC<IProps> = () =>{
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(fetchBannerDataAction())
    },[])
    return (
        <div>
          Recommend
        </div>
    )
}
export default memo(Recommend)


