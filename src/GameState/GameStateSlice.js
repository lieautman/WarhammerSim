import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  army1: [
    [
      { baseSize: 25, X: 0, Y: 0, isSelected: false, name: "Spore Mine" },
      { baseSize: 25, X: 0, Y: 0, isSelected: false, name: "Spore Mine" },
      { baseSize: 25, X: 0, Y: 0, isSelected: false, name: "Spore Mine" }
    ],
    [
      { baseSize: 28, X: 0, Y: 0, isSelected: false, name: "Hormagaunt" },
      { baseSize: 28, X: 0, Y: 0, isSelected: false, name: "Hormagaunt" },
      { baseSize: 28, X: 0, Y: 0, isSelected: false, name: "Hormagaunt" }
    ]
  ],
  army2: [
    [
      { baseSize: 40, X: 0, Y: 0, isSelected: false, name: "Tyranid Warrior" },
      { baseSize: 40, X: 0, Y: 0, isSelected: false, name: "Tyranid Warrior" }
    ]
  ]
};

export const GameStateSlice = createSlice({
  name: "GameState",
  initialState,
  reducers: {
    addUnitToArmy: (state, action) => {
      return state;
    },
    addModelToUnit: (state, action) => {
      return state;
    }
  }
});

export const { addUnitToArmy, addModelToUnit } = GameStateSlice.actions;

export const selectArmy1 = (state) => state.army1;
export const selectArmy2 = (state) => state.army2;

export default GameStateSlice.reducer;
