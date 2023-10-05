import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {getBanners, getHotRecommend, getNewAlbum} from "@/views/discover/c-views/recommend/service/recommend";

export const fetchBannerDataAction = createAsyncThunk(
    'banners',
    async (arg,{dispatch})=>{
    const res = await getBanners()

    dispatch(changeBannersAction(res.banners))
})

export const fecchHotRecommendAction = createAsyncThunk(
    'hotRecommends',
    async (arg,{dispatch})=>{
        const res = await getHotRecommend(8)
        dispatch(changeHotRecommendAction(res.result))
    }
)
export const fetchNewAlbumAction = createAsyncThunk(
    'newAlbum',
    async (arg,{dispatch})=>{
        const res = await getNewAlbum()

        dispatch(changeNewAlbumsAction(res.albums))
    })

interface IRecommendState{
    banners:any[],
    hotrecommend:any[],
    newAlbums: any[]
}

const initialState:IRecommendState = {
    banners: [],
    hotrecommend:[],
    newAlbums:[],

}


const recommendSlice = createSlice({
    name:'recommend',
    initialState,
    reducers:{
        changeBannersAction(state,{payload}){
            state.banners = payload
        },
        changeHotRecommendAction(state,{payload}){
            state.hotrecommend = payload
        },
        changeNewAlbumsAction(state,{payload}){
            state.newAlbums = payload
        }
    }
})
export const {changeBannersAction,changeHotRecommendAction,changeNewAlbumsAction} = recommendSlice.actions
export  default recommendSlice.reducer