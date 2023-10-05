import React, {memo} from "react";
import type {FC,ReactNode} from "react";
import AreaHeaderV1 from "@/components/area-header";
interface IProps {
    children?:ReactNode,
}
const HotRecommend:FC<IProps> = () =>{
    return (
        <div>
          <AreaHeaderV1 title="热门推荐" keywords={["华语","流行","摇滚","民谣","电子"]} moreLink="/#/discover/songs"/>
        </div>
    )
}
export default memo(HotRecommend)

