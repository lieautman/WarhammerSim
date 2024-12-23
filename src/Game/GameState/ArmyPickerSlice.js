import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  factionData: [],
  modelData: [],
  lastSelectedModelCoords: {
    X: 0,
    Y: 0
  },
  armys: [
    {
      armyId: 0,
      factionId: null,
      factionName: "",
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
              X: 20,
              Y: 10,
              isSelected: false,
              name: "Spore Mines"
            },
            {
              modelId: 3,
              X: 30,
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
              modelId: 1,
              X: 40,
              Y: 10,
              isSelected: false,
              name: "Hormagaunts"
            },
            {
              modelId: 2,
              X: 50,
              Y: 10,
              isSelected: false,
              name: "Hormagaunts"
            },
            {
              modelId: 3,
              X: 60,
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
      factionId: null,
      factionName: "",
      units: [
        {
          unitId: 0,
          models: [
            {
              modelId: 1,
              X: 10,
              Y: 10,
              isSelected: false,
              name: "Tyranid Warriors With Melee Bio-weapons"
            },
            {
              modelId: 2,
              X: 30,
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
    loadFactionData: (state, action) => {
      return { ...state, factionData: action.payload };
    },
    loadModelData: (state, action) => {
      return { ...state, modelData: action.payload };
    },
    selectFaction: (state, action) => {
      const { armyId, factionId, factionName } = action.payload;
      return {
        ...state,
        armys: state.armys.map((army) => {
          // Find the target army
          if (army.armyId === armyId) {
            return { ...army, factionId, factionName, units: [] };
          } else {
            return { ...army };
          }
        })
      };
    },
    addUnitToArmy: (state, action) => {
      let units = [
        ...state.armys.find((army) => army.armyId === action.payload.armyId)
          .units
      ];
      let newUnit = { ...action.payload.newUnit };
      if (units.length !== 0)
        newUnit.unitId = units[units.length - 1].unitId + 1;
      else newUnit.unitId = 0;
      units.push(newUnit);
      return {
        ...state,
        armys: state.armys.map((army) => {
          if (army.armyId === action.payload.armyId) {
            return { ...army, units: units };
          } else {
            return { ...army };
          }
        })
      };
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
      const { armyId, unitId, modelId } = action.payload;
      let modelX, modelY;
      let returnObj = {
        ...state,
        armys: state.armys.map((army) => {
          // Find the target army
          if (army.armyId === armyId) {
            return {
              ...army,
              units: army.units.map((unit) => {
                // Find the target unit
                if (unit.unitId === unitId) {
                  return {
                    ...unit,
                    models: unit.models.map((model) => {
                      // Find the target model and toggle its isSelected property
                      if (model.modelId === modelId) {
                        modelX = model.X;
                        modelY = model.Y;
                        return {
                          ...model,
                          isSelected: !model.isSelected
                        };
                      } else {
                        return {
                          ...model,
                          isSelected: false
                        };
                      }
                    })
                  };
                } else {
                  return {
                    ...unit,
                    models: unit.models.map((model) => {
                      return {
                        ...model,
                        isSelected: false
                      };
                    })
                  };
                }
              })
            };
          } else {
            return {
              ...army,
              units: army.units.map((unit) => {
                return {
                  ...unit,
                  models: unit.models.map((model) => {
                    return {
                      ...model,
                      isSelected: false
                    };
                  })
                };
              })
            };
          }
        })
      };
      returnObj = {
        ...returnObj,
        lastSelectedModelCoords: {
          ...state.lastSelectedModelCoords,
          X: modelX,
          Y: modelY
        }
      };
      return returnObj;
    },
    // selectUnit: (state, action) => {
    //   const { armyId, unitId } = action.payload;
    //   let modelX, modelY;
    //   let returnObj = {
    //     ...state,
    //     armys: state.armys.map((army) => {
    //       // Find the target army
    //       if (army.armyId === armyId) {
    //         return {
    //           ...army,
    //           units: army.units.map((unit) => {
    //             // Find the target unit
    //             if (unit.unitId === unitId) {
    //               return {
    //                 ...unit,
    //                 models: unit.models.map((model) => {
    //                   modelX = model.X;
    //                   modelY = model.Y;
    //                   return {
    //                     ...model,
    //                     isSelected: !model.isSelected // Toggle isSelected for all models in the unit
    //                   };
    //                 })
    //               };
    //             }
    //             return unit;
    //           })
    //         };
    //       }
    //       return army;
    //     })
    //   };
    //   returnObj = {
    //     ...returnObj,
    //     lastSelectedModelCoords: {
    //       ...state.lastSelectedModelCoords,
    //       X: modelX,
    //       Y: modelY
    //     }
    //   };
    //   return returnObj;
    // },
    moveSelectedModels: (state, action) => {
      const { X, Y } = action.payload;
      return {
        ...state,
        armys: state.armys.map((army) => {
          return {
            ...army,
            units: army.units.map((unit) => {
              return {
                ...unit,
                models: unit.models.map((model) => {
                  if (model.isSelected)
                    return {
                      ...model,
                      X: X,
                      Y: Y
                    };
                  return model;
                })
              };
            })
          };
        })
      };
    }
  }
});

export const {
  loadFactionData,
  loadModelData,
  selectFaction,
  addUnitToArmy,
  addModelToUnit,
  removeModelFromUnit,
  removeUnitFromArmy,
  selectModel,
  //selectUnit,
  moveSelectedModels
} = ArmyPickerSlice.actions;

export const selectFactionData = (state) => state.ArmyPickerReducer.factionData;
export const selectModelData = (state) => state.ArmyPickerReducer.modelData;
export const selectArmys = (state) => state.ArmyPickerReducer.armys;
export const selectLastSelectedModelCoords = (state) =>
  state.ArmyPickerReducer.lastSelectedModelCoords;

export default ArmyPickerSlice.reducer;
