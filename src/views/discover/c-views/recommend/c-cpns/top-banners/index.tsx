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
import classNames from 'classNames'
interface IProps {
    children?:ReactNode,
}
const TopBanner:FC<IProps> = () =>{
    const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
    const [currentIndex,setCurrentIndex] = useState(0)

    //从store 获取数据
    const {banners} = useAppSelector((state)=>({
        banners:state.recommend.banners
    }),shallowEqualApp)

    //事件处理函数
    // function handleBeforeChange() {
    //     setCurrentIndex(-1)
    // }
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
    let bgImageUrl
    if(currentIndex>=0&&banners.length>0){
        bgImageUrl = banners[currentIndex]?.imageUrl + "?imageView&blur=40x20"
    }

    return (
        <BannerWrapper style={{
            background:`url('${bgImageUrl}') center center / 6000px`
        }}>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel
                        autoplay
                        ref={bannerRef}
                        afterChange={handleAfterChange}
                        // beforeChange={handleBeforeChange}
                        dots={false}
                        effect="fade"
                    >
                        {banners.map(item=>{
                            return <div className="banner-item" key={item.imageUrl}>
                                <img className="image" src={item.imageUrl} alt={item.typeTitle}/>

                            </div>
                        })}
                    </Carousel>

                        <ul className="dots">
                            {
                                banners.map((item,index)=>{
                                    return (
                                        <li key={item.imageUrl}>
                                            <span className={classNames("item",
                                            {active:index===currentIndex}
                                            )}></span>
                                        </li>
                                    )
                                })
                            }
                        </ul>

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


