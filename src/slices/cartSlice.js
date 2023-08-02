import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    totalItems: localStorage.getItem("totalItems")?JSON.parse(localStorage.getItem("totalItems")): 0
}

const cartSclice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        setTotalItems(state,value)
        {
            state.totalItems=value.payload;
        }
    }
})

export const {setTotalItems} = cartSclice.actions;

export default cartSclice.reducer