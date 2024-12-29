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
          models: []
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
          models: []
        }
      ]
    }
  ]
};
const sizeDict = new Map([
  [25, 0.98425196],
  [28, 1.10236219],
  [32, 1.25984251],
  [40, 1.57480314],
  [50, 1.96850393],
  [60, 2.36220472],
  [70, 2.75590551],
  [80, 3.14960629],
  [90, 3.54330708],
  [100, 3.93700787],
  [130, 5.11811023],
  [160, 6.29921259]
]);
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

      // Determine the next unitId
      if (units.length !== 0) {
        newUnit.unitId = units[units.length - 1].unitId + 1;
      } else {
        newUnit.unitId = 0;
      }

      // Fetch the model's base width from modelData (redundant after we incorporate oval bases)
      const newUnitModelName = newUnit.models[0].name;
      const newUnitModelDataEntry = state.modelData.find(
        (model) => model.name === newUnitModelName
      );
      const newUnitModelWidth =
        sizeDict.get(
          parseInt(
            newUnitModelDataEntry.base_size.substring(
              0,
              newUnitModelDataEntry.base_size.length - 2
            )
          )
        ) * 10;
      if (!newUnitModelName || !newUnitModelWidth || !newUnitModelDataEntry) {
        console.log(
          "Model not supported! The size for that model is not yet implemented!"
        );
        return state;
      }
      // Calculate X and Y coordinates
      if (units.length !== 0) {
        // Fetch the model's base width from modelData (for last unit)
        const lastUnit = units[units.length - 1];
        const lastUnitModelName = lastUnit.models[0].name;
        const lastUnitModelDataEntry = state.modelData.find(
          (model) => model.name === lastUnitModelName
        );
        const lastUnitModelWidth =
          sizeDict.get(
            parseInt(
              lastUnitModelDataEntry.base_size.substring(
                0,
                lastUnitModelDataEntry.base_size.length - 2
              )
            )
          ) * 10;
        newUnit.models[0].X = lastUnit.models[0].X + lastUnitModelWidth + 5;
      } else {
        newUnit.models[0].X = 5;
      }
      newUnit.models[0].Y = 5;

      // Add the new unit to the army's units
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
