import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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

export const ArmyPickerSlice = createSlice({
  name: "ArmyPicker",
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
    }
  }
});

export const {
  addUnitToArmy,
  addModelToUnit,
  removeModelFromUnit,
  removeUnitFromArmy
} = ArmyPickerSlice.actions;

export const selectArmys = (state) => state.ArmyPickerReducer.armys;

export default ArmyPickerSlice.reducer;
