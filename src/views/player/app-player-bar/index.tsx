import React, {memo, useEffect, useRef, useState} from "react";
import type {FC,ReactNode} from "react";
import {BarControl, BarOperator, BarPlayerInfo, PlayerBarWrapper} from "@/views/player/app-player-bar/style";
import {Link} from "react-router-dom";
import {message, Slider} from 'antd'
import {shallowEqualApp, useAppDispatch, useAppSelector} from "@/store";
import {formatTime, getImageSize} from "@/utils/format";
import {getSongPlayUrl} from "@/utils/handle-player";
import {changeLyricIndexAction} from "@/views/player/store/player";

interface IProps {
    children?:ReactNode,
}
const AppPlayerBar:FC<IProps> = () =>{
    const [isPlaying,setIsPlaying] = useState(false)
    // 进度
    const [progress,setProgress] = useState(0)
    // 总时间
    const [duration,setDuration] = useState(0)
    //当前播放事件
    const [currentTime,setCurrentTime] = useState(0)
    // 是否在滑动
    const [isSliding, setIsSliding] = useState(false)
    const audioRef = useRef<HTMLAudioElement>(null)
    // 从 redux 中获取数据
    const {currentSong,lyrics,lyricIndex} = useAppSelector((state)=>({
        currentSong:state.player.currentSong,
        lyrics:state.player.lyrics,
        lyricIndex: state.player.lyricIndex,
    }),shallowEqualApp)
    const dispatch = useAppDispatch()
    // 组件内副作用操作
    useEffect(()=>{

    //     1 播放音乐
        audioRef.current!.src = getSongPlayUrl(currentSong.id)
        audioRef.current
            ?.play()
            .then(() => {
                setIsPlaying(true)
                console.log('歌曲播放成功')
            })
            .catch((err) => {
                setIsPlaying(false)
                console.log('歌曲播放失败:', err)
            })

        //     2 获取音乐总时长
        setDuration(currentSong.dt)

    },[currentSong])
    // 音乐播放得进度处理
    function handleTimeUpdate() {
        const currentTime = audioRef.current!.currentTime * 1000


        // 计算当前歌曲进度
        // api 给的数据是毫秒 但是 currentTime是秒 所以 x1000  除以总进度 然后计算百分比
        if(!isSliding){
            const progress = (currentTime  /duration) * 100
            setProgress(progress)
            setCurrentTime(currentTime)
        }
    //     根据当前的时间匹配对应的歌词
        let index = lyrics.length - 1   // 能播放最后一句歌词 也就是大于所有时间 默认值
        for(let i=0;i<lyrics.length;i++){
            const lyric = lyrics[i]
            if(lyric.time>currentTime){
                index = i - 1
                break
            }
        }


        // 记录index 省得一直输出
        if (lyricIndex === index || index === -1) return

        dispatch(changeLyricIndexAction(index))
        console.log(lyrics[index].text)
        // 展示歌词

        message.open({
            content: lyrics[index].text,
            key: 'lyric',
            duration: 0
        })
    }

    // 组件内部事件处理
    function handlePlayBtnClick() {
        // 控制播放器得播放与暂停
        isPlaying
            ? audioRef.current?.pause()
            : audioRef.current?.play().catch(()=>setIsPlaying(false))

        setIsPlaying(!isPlaying)
    }
    // 处理拖拽状态 onChaning
    function handleSliderChanging(value:number){
        // 处于拖拽状态
        setIsSliding(true)
    //      设置 progress
        setProgress(value)
    //     获取value对应位置的时间
        const currentTime = (value/100) * duration
        setCurrentTime(currentTime)
    }
    // 处理滚动条 改变后事件
    function handleSliderChanged(value:number) {
        // 获取点击位置的时间  百分比 * 总时间
        const currentTime = (value/100) * duration
        // 设置当前播放得时间
        audioRef.current!.currentTime = currentTime / 1000
        //  current / progress / slider
        setCurrentTime(currentTime)
        setProgress(value)
        setIsSliding(false)
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
                        <img className="image" src={getImageSize(currentSong.al?.picUrl,50)} alt=""/>
                    </Link>
                    <div className="info">
                        <div className="song">
                            <span className="song-name">{currentSong.name}</span>
                            <span className="singer-name">{currentSong?.ar?.[0]?.name}</span>
                        </div>
                        <div className="progress">
                            <Slider
                                step={0.5}
                                value={progress}
                                tooltip={{formatter:null}}
                                onAfterChange={handleSliderChanged}
                                onChange={handleSliderChanging}

                            />
                            <div className="time">
                                <span className="current">{formatTime(currentTime)}</span>
                                <span className="divider">/</span>
                                <span className="duration">{formatTime(duration)}</span>
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
            <audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
            />
        </PlayerBarWrapper>
    )
}
export default memo(AppPlayerBar)


