import React, {memo} from "react";
import type {FC,ReactNode} from "react";
import {RankingWrapper} from "@/views/discover/c-views/recommend/c-cpns/top-ranking/style";
import AreaHeaderV1 from "@/components/area-header";
import {shallowEqualApp, useAppSelector} from "@/store";
import TopRankingItem from "@/views/discover/c-views/recommend/c-cpns/top-ranking-item";
import ranking from "@/views/discover/c-views/ranking";
interface IProps {
    children?:ReactNode,
}
const TopRanking:FC<IProps> = () =>{
    const {rankings = []} = useAppSelector((state)=>({
        rankings:state.recommend.rankings
    }),shallowEqualApp)

    return (
        <RankingWrapper>
            <AreaHeaderV1 title="榜单" />
            <div className="content">
                {rankings.map(item=>{
                    return <TopRankingItem key={item.id} itemData={item}/>
                })}
            </div>
        </RankingWrapper>
    )
}
export default memo(TopRanking)


