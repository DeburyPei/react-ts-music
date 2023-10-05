import React, {memo, useEffect} from "react";
import type {FC,ReactNode} from "react";
import {useAppDispatch} from "@/store";
import {
   fetcgRecommendDataAction,

} from "@/views/discover/c-views/recommend/store/recommend";
import TopBanner from "./c-cpns/top-banners";
import {RecommendWrapper} from "@/views/discover/c-views/recommend/style";
import HotRecommend from "@/views/discover/c-views/recommend/c-cpns/hot-recommend";
import NewAlbum from "@/views/discover/c-views/recommend/c-cpns/new-album";


interface IProps {
    children?:ReactNode,
}
const Recommend:FC<IProps> = () =>{
    /** 发起action(获取数据) */
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(fetcgRecommendDataAction())
        // dispatch(fetchBannerDataAction())
        // dispatch(fecchHotRecommendAction())
        // dispatch(fetchNewAlbumAction())
    },[])
    /** render函数的返回jsx */
    return (
        <RecommendWrapper>
          <TopBanner />
            <div className="content wrap-v2">
                <div className="left">
                    <HotRecommend />
                    <NewAlbum />
                </div>
                <div className="right">right</div>
            </div>
        </RecommendWrapper>
    )
}
export default memo(Recommend)


