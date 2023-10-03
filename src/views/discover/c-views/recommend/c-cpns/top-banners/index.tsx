import React, {memo} from "react";
import type {FC,ReactNode} from "react";
import {
    BannerRight,
    BannerWrapper,
    BannerLeft,
    BannerControl
} from "@/views/discover/c-views/recommend/c-cpns/top-banners/style";
import {shallowEqualApp, useAppSelector} from "@/store";
import {Carousel} from "antd";
interface IProps {
    children?:ReactNode,
}
const TopBanner:FC<IProps> = () =>{
    const {banners} = useAppSelector((state)=>({
        banners:state.recommend.banners
    }),shallowEqualApp)
    return (
        <BannerWrapper>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel autoplay>
                        {banners.map(item=>{
                            return <div className="banner-item" key={item.imageUrl}>
                                <img src={item.imageUrl} alt={item.typeTitle}/>

                            </div>
                        })}
                    </Carousel>

                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className="btn left"></button>
                    <button className="btn right"></button>
                </BannerControl>
            </div>


        </BannerWrapper>
    )
}
export default memo(TopBanner)


