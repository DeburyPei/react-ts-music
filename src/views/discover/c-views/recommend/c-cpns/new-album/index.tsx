import React, {ElementRef, memo, useRef} from "react";
import type {FC,ReactNode} from "react";
import {AlbumWrapper} from "@/views/discover/c-views/recommend/c-cpns/new-album/style";
import AreaHeaderV1 from "@/components/area-header";
import {Carousel} from 'antd'
import newAlbum from "@/views/discover/c-views/recommend/c-cpns/new-album/index";
import {useAppSelector} from "@/store";
interface IProps {
    children?:ReactNode,
}
const NewAlbum:FC<IProps> = () =>{
    const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
    // 从redux里面获取数据
    const {newAlbums} = useAppSelector((state)=>({
        newAlbums:state.recommend.newAlbums
    }))

        //事件处理函数
    function handlePrevClick(){
        bannerRef.current?.prev()
    }
    function handleNextClick(){
        bannerRef.current?.next()
    }
    return (
        <AlbumWrapper>
           <AreaHeaderV1 title="新碟首发" moreLink="/#/discover/album"/>
            <div className="content">
                <button className="arrow arrow-left sprite_02" onClick={handlePrevClick}></button>
                <div className="banner">
                    <Carousel ref={bannerRef} dots={false} speed={1500}>
                        {[0,1].map((item) => (
                            <div className="album-list" key={item}>
                                {newAlbums.slice(item*5,(item+1)*5).map(album=>{
                                    return <div key={album.id}>{album.name}</div>
                                })}
                            </div>
                        ))}
                    </Carousel>
                </div>
                <button className="arrow arrow-right sprite_02" onClick={handleNextClick}></button>

            </div>
        </AlbumWrapper>
    )
}
export default memo(NewAlbum)


