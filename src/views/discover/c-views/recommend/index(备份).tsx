import React, {memo, useEffect, useState} from "react";
import type {FC,ReactNode} from "react";
import hyRequest from "@/service";
import NavBar from "../../c-cpns/nav-bar";
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

            setBanners(res.banners)

        }).catch((error)=>{
            console.error(error)
            alert("获取banner失败 请检查api")
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


