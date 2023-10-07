import React, {memo} from "react";
import type {FC,ReactNode} from "react";
import {BarControl, BarOperator, BarPlayerInfo, PlayerBarWrapper} from "@/views/player/app-player-bar/style";
import {Link} from "react-router-dom";
import {Slider} from 'antd'
interface IProps {
    children?:ReactNode,
}
const AppPlayerBar:FC<IProps> = () =>{
    return (
        <PlayerBarWrapper className="sprite_playbar">
            <div className="content wrap-v2">
                <BarControl isPlaying={false}>
                    <button className="sprite_playbar btn prev"></button>
                    <button className="sprite_playbar btn play"></button>
                    <button className="sprite_playbar btn next"></button>
                </BarControl>
                <BarPlayerInfo>
                    <Link to="/player">
                        <img src="https://p2.music.126.net/QnOEdLUSTsrzs7janOTdIw==/109951168910224159.jpg?param=34y34" alt=""/>
                    </Link>
                    <div className="info">
                        <div className="song">
                            <div className="song-name">日落大道</div>
                            <div className="song-singer">梁博</div>

                        </div>
                        <div className="progress">
                            <Slider />
                            <div className="time">
                                <div className="current">0:52</div>
                                <div className="divider">/</div>
                                <div className="duration">4.36</div>
                            </div>
                            
                        </div>
                    </div>
                </BarPlayerInfo>
                <BarOperator playMode={1}>
                    <div className="left">
                        <button className="btn pip"></button>
                        <button className="btn sprite_playbar favor"></button>
                        <button className="btn sprite_playbar share"></button>
                    </div>
                    <div className="right sprite_playbar">
                        <button className="btn sprite_playbar volume"></button>
                        <button className="btn sprite_playbar loop"></button>
                        <button className="btn sprite_playbar playlist"></button>
                    </div>
                </BarOperator>
            </div>

        </PlayerBarWrapper>
    )
}
export default memo(AppPlayerBar)


