import React, {ElementRef, memo, useRef} from "react";
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
    const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

    const {banners} = useAppSelector((state)=>({
        banners:state.recommend.banners
    }),shallowEqualApp)

    function handlePrevClick(){
        bannerRef.current?.prev()
    }
    function handleNextClick(){
        bannerRef.current?.next()

    }

    return (
        <BannerWrapper>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel autoplay ref={bannerRef}>
                        {banners.map(item=>{
                            return <div className="banner-item" key={item.imageUrl}>
                                <img src={item.imageUrl} alt={item.typeTitle}/>

                            </div>
                        })}
                    </Carousel>

                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className="btn left" onClick={handlePrevClick}></button>
                    <button className="btn right" onClick={handleNextClick} ></button>
                </BannerControl>
            </div>


        </BannerWrapper>
    )
}
export default memo(TopBanner)


