import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: {
    X: 0,
    Y: 0
  },
  army1: [
    {
      unitId: 1,
      models: [
        {
          modelId: 1,
          baseSize: 25,
          X: 0,
          Y: 0,
          isSelected: false,
          name: "Spore Mine"
        },
        {
          modelId: 2,
          baseSize: 25,
          X: 0,
          Y: 0,
          isSelected: false,
          name: "Spore Mine"
        },
        {
          modelId: 3,
          baseSize: 25,
          X: 0,
          Y: 0,
          isSelected: false,
          name: "Spore Mine"
        }
      ]
    },
    {
      unitId: 2,
      models: [
        {
          modelId: 4,
          baseSize: 28,
          X: 0,
          Y: 0,
          isSelected: false,
          name: "Hormagaunt"
        },
        {
          modelId: 5,
          baseSize: 28,
          X: 0,
          Y: 0,
          isSelected: false,
          name: "Hormagaunt"
        },
        {
          modelId: 6,
          baseSize: 28,
          X: 0,
          Y: 0,
          isSelected: false,
          name: "Hormagaunt"
        }
      ]
    }
  ],
  army2: [
    {
      unitId: 3,
      models: [
        {
          modelId: 7,
          baseSize: 40,
          X: 0,
          Y: 0,
          isSelected: false,
          name: "Tyranid Warrior"
        },
        {
          modelId: 8,
          baseSize: 40,
          X: 0,
          Y: 0,
          isSelected: false,
          name: "Tyranid Warrior"
        }
      ]
    }
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
    },
    removeModelFromUnit: (state, action) => {
      return state;
    },
    removeUnitFromArmy: (state, action) => {
      return state;
    },
    selectModel: (state, action) => {
      return state;
    },
    selectUnit: (state, action) => {
      return state;
    }
  }
});

export const { addUnitToArmy, addModelToUnit } = GameStateSlice.actions;

export const selectArmy1 = (state) => state.army1;
export const selectArmy2 = (state) => state.army2;

export default GameStateSlice.reducer;
