import React, {memo, useEffect, useRef, useState} from "react";
import type {FC,ReactNode} from "react";
import {BarControl, BarOperator, BarPlayerInfo, PlayerBarWrapper} from "@/views/player/app-player-bar/style";
import {Link} from "react-router-dom";
import {Slider} from 'antd'
import {shallowEqualApp, useAppSelector} from "@/store";
import {getImageSize} from "@/utils/format";
interface IProps {
    children?:ReactNode,
}
const AppPlayerBar:FC<IProps> = () =>{
    const [isPlaying,setIsPlaying] = useState(false)
    // 进度
    const [progress,setProgress] = useState(0)
    // 总时间
    const [duration,setDuration] = useState(0)

    const audioRef = useRef<HTMLAudioElement>(null)
    // 从 redux 中获取数据
    const {currentSong} = useAppSelector((state)=>({
        currentSong:state.player.currentSong
    }),shallowEqualApp)
    // 组件内副作用操作
    useEffect(()=>{

    //     1 播放音乐
    //     2 获取音乐总时长
        setDuration(currentSong.dt)

    },[currentSong])
    // 音乐播放得进度处理
    function handleTimeUpdate() {
        const currentTime = audioRef.current!.currentTime
        console.log("currentTime",currentTime)

        // 计算当前歌曲进度
        // api 给的数据是毫秒 但是 currentTime是秒 所以 x1000  除以总进度 然后计算百分比
        const progress = ((currentTime * 1000)/duration) * 100
        setProgress(progress)
    }
    // 组件内部事件处理
    function handlePlayBtnClick() {
        // 控制播放器得播放与暂停
        isPlaying
            ? audioRef.current?.pause()
            : audioRef.current?.play().catch(()=>setIsPlaying(false))

        setIsPlaying(!isPlaying)
    }
    return (
        <PlayerBarWrapper className="sprite_playbar">
            <div className="content wrap-v2">
                <BarControl isPlaying={isPlaying}>
                    <button className="sprite_playbar btn prev"></button>
                    <button className="sprite_playbar btn play"
                    onClick={handlePlayBtnClick}></button>
                    <button className="sprite_playbar btn next"></button>
                </BarControl>
                <BarPlayerInfo>
                    <Link to="/player">
                        <img className="image" src={getImageSize(currentSong.al.picUrl,50)} alt=""/>
                    </Link>
                    <div className="info">
                        <div className="song">
                            <span className="song-name">{currentSong.name}</span>
                            <span className="singer-name">{currentSong?.ar[0]?.name}</span>
                        </div>
                        <div className="progress">
                            <Slider
                                step={0.5}
                                // value={progress}
                                tooltip={{formatter:null}}


                            />
                            <div className="time">
                                <span className="current">0:52</span>
                                <span className="divider">/</span>
                                <span className="duration">4.36</span>
                            </div>
                            
                        </div>
                    </div>
                </BarPlayerInfo>
                <BarOperator playMode={0}>
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
            <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}/>
        </PlayerBarWrapper>
    )
}
export default memo(AppPlayerBar)


