import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        token:null
    },
    reducers:{
        setUser(state, { payload }){
            // payload.lastUpdate = new Date(payload.lastUpdate);
            // payload.signinDate = new Date(payload.signinDate);
            state.user = payload;
        },
        setToken(state, { payload }){
            try {
                global.cookieStore.set("token",payload);
            } catch (err) {
                console.warn("les cookies ne sont pas accessibles :", err);
            }
            state.token = payload;
        },
    }
})

export const { setUser, setToken } = UserSlice.actions;


export default UserSlice.reducer;