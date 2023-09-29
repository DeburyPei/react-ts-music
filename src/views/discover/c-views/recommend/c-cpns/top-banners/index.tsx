import React, {memo} from "react";
import type {FC,ReactNode} from "react";
import {BannerWrapper} from "@/views/discover/c-views/recommend/c-cpns/top-banners/style";
import {shallowEqualApp, useAppSelector} from "@/store";
interface IProps {
    children?:ReactNode,
}
const TopBanner:FC<IProps> = () =>{
    const {banners} = useAppSelector((state)=>({
        banners:state.recommend.banners
    }),shallowEqualApp)
    return (
        <BannerWrapper>
            {banners.map(item=>{
                return <div key={item.key}>
                    {item.imageUrl}
                </div>
            })}
        </BannerWrapper>
    )
}
export default memo(TopBanner)


