import {configureStore} from '@reduxjs/toolkit'
import  counterReducer from './modules/counter'
import {TypedUseSelectorHook, useSelector,shallowEqual} from "react-redux";

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const shallowEqualApp = shallowEqual
export default store