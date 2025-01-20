import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  map: {
    X: 0,
    Y: 0
  }
};

export const BoardSlice = createSlice({
  name: "BoardState",
  initialState,
  reducers: {
    modifyMapCoordinates: (state, action) => {
      return {
        ...state,
        map: { ...state.map, X: action.payload.X, Y: action.payload.Y }
      };
    },
    resetMapCoordinates: (state) => {
      return {
        ...state,
        map: { ...state.map, X: 0, Y: 0 }
      };
    }
  }
});

export const { modifyMapCoordinates, resetMapCoordinates } = BoardSlice.actions;

export const selectMap = (state) => state.BoardReducer.map;

export default BoardSlice.reducer;
