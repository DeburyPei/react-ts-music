import React, {memo} from "react";
import type {FC,ReactNode} from "react";
import AreaHeaderV2 from "@/components/area-headerV2";
import {useAppSelector} from "@/store";
import {getImageSize} from "@/utils/format";
import {SingerWrapper} from "@/views/discover/c-views/recommend/c-cpns/settle-singer/style";
interface IProps {
    children?:ReactNode,
}
const SettleSinger:FC<IProps> = () =>{
    const { settleSingers } = useAppSelector((state) => ({
        settleSingers: state.recommend.settleSingers
    }))

    return (
        <SingerWrapper>

          <AreaHeaderV2
            title="入驻歌手"
            moreText="查看全部 &gt;"
            moreLink="#/discover/artist"/>
            <div className="artists">
                {settleSingers.map((item) => {
                    return (
                        <a href="#/discover/artist" className="item" key={item.id}>
                            <img src={getImageSize(item.picUrl, 80)} alt="" />
                            <div className="info">
                                <div className="name">{item.name}</div>
                                <div className="alias">{item.alias.join(' ')}</div>
                            </div>
                        </a>
                    )
                })}
            </div>
            <div className="apply-for">
                <a href="#/">申请成为网易音乐人</a>
            </div>
        </SingerWrapper>
    )
}
export default memo(SettleSinger)


