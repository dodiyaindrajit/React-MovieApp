import {createSlice} from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favoriteList: [],
    hideList: [],
  },
  reducers: {
    setFavoriteList: (state, action) => {
      state.favoriteList = action.payload;
    },
    setHideList: (state, action) => {
      state.hideList = action.payload;
    },
  },
});

export const {setFavoriteList, setHideList} = favoriteSlice.actions;

export const getFavoriteList = state => state.favorite.favoriteList;
export const getHideList = state => state.favorite.hideList;

export default favoriteSlice.reducer;
