import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  map: {
    X: 0,
    Y: 0
  },
  buildings: [
    { buildingId: 0, XSize: 20, YSize: 30, X: 20, Y: 30, isRuin: true },
    { buildingId: 1, XSize: 20, YSize: 30, X: 80, Y: 130, isRuin: false }
  ]
};

export const GameStateSlice = createSlice({
  name: "GameState",
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
    },
    addBuilding: (state, action) => {
      let buildings = [...state.buildings];
      let newBuilding = { ...action.payload };
      if (buildings.length !== 0)
        newBuilding.buildingId = buildings[buildings.length - 1].buildingId + 1;
      else newBuilding.buildingId = 0;
      buildings.push(newBuilding);
      return {
        ...state,
        buildings: buildings
      };
    },
    removeBuilding: (state, action) => {
      let buildings = [...state.buildings];
      buildings = buildings.filter(
        (building) => building.buildingId !== action.payload
      );
      return {
        ...state,
        buildings: buildings
      };
    }
  }
});

export const {
  modifyMapCoordinates,
  resetMapCoordinates,
  addBuilding,
  removeBuilding
} = GameStateSlice.actions;

export const selectMap = (state) => state.GameStateReducer.map;
export const selectBuildings = (state) => state.GameStateReducer.buildings;

export default GameStateSlice.reducer;
