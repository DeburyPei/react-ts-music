import {createSlice} from "@reduxjs/toolkit"


const counterSlice = createSlice({
    name:'counter',
    initialState:{
        count:100,
        message:'Hello Redux',
        address:'广州市',
        height:1.88
    },
    reducers:{
        changeMessage(state,{payload}){
            state.message = payload
        }
    }
})

export const {changeMessage} = counterSlice.actions
export default counterSlice.reducer


