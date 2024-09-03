import { createSlice } from "@reduxjs/toolkit"

const detectMode = () => {
        try {
            const data = localStorage.getItem('tab')
            return data !== null ? JSON.parse(data) : true
        } catch (error) {
            console.log(error)
            return true
        }
}



const initialState = {
    toggle: detectMode()
}

const modeSlices = createSlice({
    name:'mode',
    initialState,
    reducers:{
        changemode(state,action){
            const newmode = action.payload
            state.toggle = newmode
            localStorage.setItem('tab',JSON.stringify(newmode))
        }
    }
})

export const {changemode} = modeSlices.actions
export default modeSlices.reducer
