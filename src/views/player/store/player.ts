import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit"
import {getSongDetail, getSongLyric} from "@/views/player/service/player";
import {ILyric, parseLyric} from "@/utils/parse-lyric";
export const fetchCurrentSongAction = createAsyncThunk(
    'currentSong',
    (id:number, {dispatch})=>{
    //     获取song
        getSongDetail(id).then((res)=>{
            if(!res.songs.length) return
            const song = res.songs[0]

            dispatch(changeCurrentSongAction(song))
        })
    //     歌词
        getSongLyric(id).then((res)=>{
            // 获取歌词字符串
            const lyricString = res.lrc.lyric
        //     对歌词进行解析 一个个对象
            const lyrics = parseLyric(lyricString)
        //     将歌词放到state中
            dispatch(changeLyricsAction(lyrics))
        })
    }
)
interface IPlayerState {
        currentSong:any,
        lyrics:ILyric[]
}
const initialState:IPlayerState = {
    currentSong:{},
    lyrics:[]

}

const playerSlice = createSlice({
    name:'player',
    initialState,
    reducers:{
        changeCurrentSongAction(state,{payload}){
            state.currentSong = payload
        },
        changeLyricsAction(state,{payload}){
            state.lyrics = payload
        }
    }
})
export const {changeCurrentSongAction,changeLyricsAction} = playerSlice.actions
export default playerSlice.reducer