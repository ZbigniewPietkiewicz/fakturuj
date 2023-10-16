import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList: []
}

const HomeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {

    }
})

export const {} = HomeSlice.actions;
export default HomeSlice.reducer;