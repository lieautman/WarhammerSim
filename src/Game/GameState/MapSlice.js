import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  map: {
    X: 0,
    Y: 0
  }
};

export const MapSlice = createSlice({
  name: "MapState",
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

export const { modifyMapCoordinates, resetMapCoordinates } = MapSlice.actions;

export const selectMap = (state) => state.MapReducer.map;

export default MapSlice.reducer;
