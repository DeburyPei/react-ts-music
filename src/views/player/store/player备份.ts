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
        currentSong:any
        lyrics:ILyric[]
        lyricIndex: number
        playSongList: any[]
        playSongIndex: number
        playMode: number
}
const initialState:IPlayerState = {
    currentSong:{},
    lyrics:[],
    lyricIndex: -1,
    playSongList: [
        {
            name: '温柔',
            id: 386538,
            pst: 0,
            t: 0,
            ar: [
                {
                    id: 13193,
                    name: '五月天',
                    tns: [],
                    alias: []
                }
            ],
            alia: [],
            pop: 100,
            st: 0,
            rt: '600902000000534560',
            fee: 8,
            v: 76,
            crbt: null,
            cf: '',
            al: {
                id: 38285,
                name: '我们是五月天',
                picUrl:
                    'https://p2.music.126.net/v4V40sXKnaqsG0ACyY0aDg==/109951164912221924.jpg',
                tns: [],
                pic_str: '109951164912221924',
                pic: 109951164912221920
            },
            dt: 269800,
            h: {
                br: 320000,
                fid: 0,
                size: 10794885,
                vd: -63963,
                sr: 44100
            },
            m: {
                br: 192000,
                fid: 0,
                size: 6476948,
                vd: -61380,
                sr: 44100
            },
            l: {
                br: 128000,
                fid: 0,
                size: 4317980,
                vd: -59700,
                sr: 44100
            },
            sq: {
                br: 1053723,
                fid: 0,
                size: 35536822,
                vd: -63997,
                sr: 44100
            },
            hr: null,
            a: null,
            cd: '1',
            no: 2,
            rtUrl: null,
            ftype: 0,
            rtUrls: [],
            djId: 0,
            copyright: 0,
            s_id: 0,
            mark: 8704,
            originCoverType: 1,
            originSongSimpleData: null,
            tagPicList: null,
            resourceState: true,
            version: 76,
            songJumpInfo: null,
            entertainmentTags: null,
            awardTags: null,
            single: 0,
            noCopyrightRcmd: null,
            rurl: null,
            rtype: 0,
            mst: 9,
            cp: 684010,
            mv: 10929721,
            publishTime: 1049126400000
        },
        {
            name: '起风了',
            id: 1330348068,
            pst: 0,
            t: 0,
            ar: [
                {
                    id: 12085562,
                    name: '买辣椒也用券',
                    tns: [],
                    alias: []
                }
            ],
            alia: [],
            pop: 100,
            st: 0,
            rt: '',
            fee: 8,
            v: 42,
            crbt: null,
            cf: '',
            al: {
                id: 74715426,
                name: '起风了',
                picUrl:
                    'https://p1.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg',
                tns: [],
                pic_str: '109951163699673355',
                pic: 109951163699673360
            },
            dt: 325868,
            h: {
                br: 320000,
                fid: 0,
                size: 13037236,
                vd: -77525,
                sr: 44100
            },
            m: {
                br: 192000,
                fid: 0,
                size: 7822359,
                vd: -74987,
                sr: 44100
            },
            l: {
                br: 128000,
                fid: 0,
                size: 5214920,
                vd: -73504,
                sr: 44100
            },
            sq: {
                br: 985873,
                fid: 0,
                size: 40158105,
                vd: -77524,
                sr: 44100
            },
            hr: {
                br: 2832349,
                fid: 0,
                size: 115371553,
                vd: -77475,
                sr: 88200
            },
            a: null,
            cd: '1',
            no: 1,
            rtUrl: null,
            ftype: 0,
            rtUrls: [],
            djId: 0,
            copyright: 0,
            s_id: 0,
            mark: 536879104,
            originCoverType: 1,
            originSongSimpleData: null,
            tagPicList: null,
            resourceState: true,
            version: 42,
            songJumpInfo: null,
            entertainmentTags: null,
            awardTags: null,
            single: 0,
            noCopyrightRcmd: null,
            mv: 10782615,
            rtype: 0,
            rurl: null,
            mst: 9,
            cp: 1415923,
            publishTime: 0
        }
    ],
    playSongIndex: -1,

    playMode: 0 // 0:顺序播放 1:随机播放 2:单曲循环
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
        },
        changeLyricIndexAction(state, { payload }) {
            state.lyricIndex = payload
        },
        changePlaySongIndexAction(state, { payload }) {
            state.playSongIndex = payload
        },
        changePlaySongListAction(state, { payload }) {
            state.playSongList = payload
        },
        changePlayModeAction(state, { payload }) {
            state.playMode = payload
        }
    }
})
export const {
    changeCurrentSongAction,
    changeLyricsAction,
    changeLyricIndexAction,
    changePlaySongIndexAction,
    changePlaySongListAction,
    changePlayModeAction} = playerSlice.actions
export default playerSlice.reducer