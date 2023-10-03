import React, {ElementRef, memo, useRef, useState} from "react";
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
    const [currentIndex,setCurrentIndex] = useState(0) 
    const {banners} = useAppSelector((state)=>({
        banners:state.recommend.banners
    }),shallowEqualApp)
    
    function handleAfterChange(count:number) {
        setCurrentIndex(count)
    }
    function handlePrevClick(){
        bannerRef.current?.prev()
    }
    function handleNextClick(){
        bannerRef.current?.next()

    }
    // 获取背景图片
    let bgImageUrl = banners[currentIndex]?.imageUrl
    if(bgImageUrl){
        bgImageUrl = bgImageUrl + "?imageView&blur=40x20"
    }

    return (
        <BannerWrapper style={{
            background:`url('${bgImageUrl}') center center / 6000px`
        }}>


            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel autoplay ref={bannerRef} afterChange={handleAfterChange}>
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


