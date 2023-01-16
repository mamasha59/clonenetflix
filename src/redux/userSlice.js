import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id:null,
    email:null,
    profiles:[],
    currentProfile:[],
}

export const userClise = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state,action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.profiles = action.payload.profiles;
    },
    removeUser: () => initialState,
    
    addProfile: (state,action) => {
      state.profiles.push(action.payload)
    },
    setCurrentProfile: (state,action) => {
    const current = state.profiles.find((profile) => action.payload === profile._id);
     state.currentProfile.splice(0,1, current);
    }
  },
})

export const { setUser, removeUser, addProfile, setCurrentProfile } = userClise.actions;

export default userClise.reducer;