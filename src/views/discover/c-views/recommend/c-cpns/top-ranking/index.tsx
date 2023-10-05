import React, {memo} from "react";
import type {FC,ReactNode} from "react";
import {RankingWrapper} from "@/views/discover/c-views/recommend/c-cpns/top-ranking/style";
import AreaHeaderV1 from "@/components/area-header";
interface IProps {
    children?:ReactNode,
}
const TopRanking:FC<IProps> = () =>{
    return (
        <RankingWrapper>
            <AreaHeaderV1 title="榜单" />
            <div className="content">

            </div>
        </RankingWrapper>
    )
}
export default memo(TopRanking)


