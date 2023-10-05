import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {getBanners, getHotRecommend} from "@/views/discover/c-views/recommend/service/recommend";

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
interface IRecommendState{
    banners:any[],
    hotrecommend:any[]
}

const initialState:IRecommendState = {
    banners: [],
    hotrecommend:[]

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
        }
    }
})
export const {changeBannersAction,changeHotRecommendAction} = recommendSlice.actions
export  default recommendSlice.reducer