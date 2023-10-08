import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit"
import {getSongDetail, getSongLyric} from "@/views/player/service/player";
export const fetchCurrentSongAction = createAsyncThunk(
    'currentSong',
    (id:number, {dispatch})=>{
    //     获取song
        getSongDetail(id).then((res)=>{
            if(!res.songs.length) return
            const song = res.songs[0]
            console.log(song)
            dispatch(changeCurrentSongAction(song))
        })
    //     歌词
        getSongLyric(id).then((res)=>{
            console.log(res)
        })
    }
)
interface IPlayerState {
        currentSong:any
}
const initialState:IPlayerState = {
    currentSong:{}
}

const playerSlice = createSlice({
    name:'player',
    initialState,
    reducers:{
        changeCurrentSongAction(state,{payload}){
            state.currentSong = payload
        }
    }
})
export const {changeCurrentSongAction} = playerSlice.actions
export default playerSlice.reducer