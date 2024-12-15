import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  map: {
    X: 0,
    Y: 0
  },
  modelData: [],
  armys: [
    {
      armyId: 0,
      units: [
        {
          unitId: 0,
          models: [
            {
              modelId: 1,
              X: 10,
              Y: 10,
              isSelected: false,
              name: "Spore Mines"
            },
            {
              modelId: 2,
              X: 10,
              Y: 10,
              isSelected: false,
              name: "Spore Mines"
            },
            {
              modelId: 3,
              X: 10,
              Y: 10,
              isSelected: false,
              name: "Spore Mines"
            }
          ]
        },
        {
          unitId: 1,
          models: [
            {
              modelId: 4,
              X: 10,
              Y: 10,
              isSelected: false,
              name: "Hormagaunts"
            },
            {
              modelId: 5,
              X: 10,
              Y: 10,
              isSelected: false,
              name: "Hormagaunts"
            },
            {
              modelId: 6,
              X: 10,
              Y: 10,
              isSelected: false,
              name: "Hormagaunts"
            }
          ]
        }
      ]
    },
    {
      armyId: 1,
      units: [
        {
          unitId: 0,
          models: [
            {
              modelId: 7,
              X: 10,
              Y: 10,
              isSelected: false,
              name: "Tyranid Warriors With Melee Bio-weapons"
            },
            {
              modelId: 8,
              X: 10,
              Y: 10,
              isSelected: false,
              name: "Tyranid Warriors With Ranged Bio-weapons"
            }
          ]
        }
      ]
    }
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
    loadModelData: (state, action) => {
      return { ...state, modelData: action.payload };
    },
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
      return { ...state };
    },
    selectUnit: (state, action) => {
      return state;
    }
  }
});

export const {
  modifyMapCoordinates,
  resetMapCoordinates,
  loadModelData,
  selectModel,
  selectUnit
} = GameStateSlice.actions;

export const selectMap = (state) => state.map;
export const selectModelData = (state) => state.modelData;
export const selectArmys = (state) => state.armys;

export default GameStateSlice.reducer;
