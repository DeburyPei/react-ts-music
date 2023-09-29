import {configureStore} from '@reduxjs/toolkit'
import  counterReducer from './modules/counter'
import {TypedUseSelectorHook, useSelector, shallowEqual, useDispatch} from "react-redux";
import recommendReducer from '@/views/discover/c-views/recommend/store/recommend'
const store = configureStore({
    reducer: {
        counter: counterReducer,
        recommend:recommendReducer
    }
})

type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch:()=>DispatchType = useDispatch
export const shallowEqualApp = shallowEqual
export default store