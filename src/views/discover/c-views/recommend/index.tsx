import React, {memo, useEffect} from "react";
import type {FC,ReactNode} from "react";
import {useAppDispatch} from "@/store";
import {fetchBannerDataAction} from "@/views/discover/c-views/recommend/store/recommend";
import TopBanner from "./c-cpns/top-banners";
import {RecommendWrapper} from "@/views/discover/c-views/recommend/style";


interface IProps {
    children?:ReactNode,
}
const Recommend:FC<IProps> = () =>{
    /** 发起action(获取数据) */
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(fetchBannerDataAction())
    },[])
    /** render函数的返回jsx */
    return (
        <RecommendWrapper>
          <TopBanner />
            <div className="content wrap-v2">
                <div className="left">left</div>
                <div className="right">right</div>
            </div>
        </RecommendWrapper>
    )
}
export default memo(Recommend)


