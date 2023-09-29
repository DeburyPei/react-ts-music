import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {getBanners} from "@/views/discover/c-views/recommend/service/recommend";

export const fetchBannerDataAction = createAsyncThunk(
    'banners',
    async (arg,{dispatch})=>{
    const res = await getBanners()
        // console.log(res)
    dispatch(changeBannersAction(res.banners))
})
interface IRecommendState{
    banners:any[]
}

const initialState:IRecommendState = {
    banners: []
}


const recommendSlice = createSlice({
    name:'recommend',
    initialState,
    reducers:{
        changeBannersAction(state,{payload}){
            state.banners = payload
        }
    }
})
export const {changeBannersAction} = recommendSlice.actions
export  default recommendSlice.reducer