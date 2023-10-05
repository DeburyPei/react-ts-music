import React, {memo} from "react";
import type {FC,ReactNode} from "react";
import AreaHeaderV1 from "@/components/area-header";
import {shallowEqualApp, useAppSelector} from "@/store";
import SongMenuItem from "@/components/songs-item";
import {RecommendWrapper} from "@/views/discover/c-views/recommend/c-cpns/hot-recommend/style";
interface IProps {
    children?:ReactNode,
}
const HotRecommend:FC<IProps> = () =>{
    const {hotRecommends} = useAppSelector((state)=>({
        hotRecommends:state.recommend.hotrecommend
    }),shallowEqualApp)
    // console.log(hotRecommends)
    return (
        <RecommendWrapper>
              <AreaHeaderV1 title="热门推荐" keywords={["华语","流行","摇滚","民谣","电子"]} moreLink="/#/discover/songs"/>
                <div  className="recommend-list">
                    {hotRecommends.map(item=>{
                        return (
                                <SongMenuItem key={item.id} itemData={item}/>
                            )
                    })}
                </div>
        </RecommendWrapper>
    )
}
export default memo(HotRecommend)


