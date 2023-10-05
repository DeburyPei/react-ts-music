import React, {memo} from "react";
import type {FC,ReactNode} from "react";
import AreaHeaderV1 from "@/components/area-header";
import {shallowEqualApp, useAppSelector} from "@/store";
interface IProps {
    children?:ReactNode,
}
const HotRecommend:FC<IProps> = () =>{
    const {hotRecommends} = useAppSelector((state)=>({
        hotRecommends:state.recommend.hotrecommend
    }),shallowEqualApp)
    // console.log(hotRecommends)
    return (
        <div>
          <AreaHeaderV1 title="热门推荐" keywords={["华语","流行","摇滚","民谣","电子"]} moreLink="/#/discover/songs"/>
            {hotRecommends.map(item=>{
                return <div key={item}>
                    {item.name}
                </div>
            })}
        </div>
    )
}
export default memo(HotRecommend)


