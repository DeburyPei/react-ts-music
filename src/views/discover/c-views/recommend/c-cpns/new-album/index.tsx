import React, {memo} from "react";
import type {FC,ReactNode} from "react";
import {AlbumWrapper} from "@/views/discover/c-views/recommend/c-cpns/new-album/style";
import AreaHeaderV1 from "@/components/area-header";
interface IProps {
    children?:ReactNode,
}
const NewAlbum:FC<IProps> = () =>{
    return (
        <AlbumWrapper>
           <AreaHeaderV1 title="新碟首发" moreLink="/#/discover/album"/>
            <div className="content">
                <button className="arrow arrow-left sprite_02"></button>
                <button className="arrow arrow-right sprite_02"></button>

            </div>
        </AlbumWrapper>
    )
}
export default memo(NewAlbum)


