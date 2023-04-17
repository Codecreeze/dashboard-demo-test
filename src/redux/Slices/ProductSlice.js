import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    opporPage: "Opportunities",
    competePage: "My Competitors",
    briefPage: "Briefs",
    savedPage: "Saved",
    settingPage: "Settings",
    helpPage: "Help",
}

export const ProductSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => { },
});

export default ProductSlice.reducer;
