import React, {memo, useEffect, useState} from "react";
import type {FC,ReactNode} from "react";
import hyRequest from "@/service";
interface IProps {
    children?:ReactNode,
}
export interface IBannerData {
    imageUrl: string
    targetId: number
    adid: any
    targetType: number
    titleColor: string
    typeTitle: string
    url: any
    exclusive: boolean
    encodeId: string
    scm: string
    bannerBizType: string
}

const Recommend:FC<IProps> = () =>{
    const [banners,setBanners] = useState<IBannerData[]>([])
    useEffect(()=>{
        hyRequest.get({
            url:'/banner'
        }).then((res)=>{
            console.log(res.banners)
            setBanners(res.banners)

        })
    },[])
    return (
        <div>
            { banners.map((item,index)=>{
                return <div key={index}>{item.imageUrl}</div>
            })}
        </div>
    )
}
export default memo(Recommend)


