import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  factionData: [],
  modelData: [],
  lastSelectedModelData: {
    X: 0,
    Y: 0,
    baseHeight: 0,
    baseWidth: 0,
    movement: 0
  },
  armys: [
    {
      armyId: 0,
      factionId: null,
      factionName: "",
      units: []
    },
    {
      armyId: 1,
      factionId: null,
      factionName: "",
      units: []
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

const AddUnitToUnitList = (newUnit, unitList, state) => {
  // Determine the next unitId
  if (unitList.length !== 0) {
    newUnit.unitId = unitList[unitList.length - 1].unitId + 1;
  } else {
    newUnit.unitId = 0;
  }

  // Fetch the model's base width from modelData (redundant after we incorporate oval bases)
  const newUnitModelName = newUnit.models[0].name;
  const newUnitModelDataEntry = state.modelData.find(
    (model) => model.name.toUpperCase() === newUnitModelName.toUpperCase()
  );
  const newUnitModelWidth = sizeDict.get(
    parseInt(
      newUnitModelDataEntry.base_size.substring(
        0,
        newUnitModelDataEntry.base_size.length - 2
      )
    )
  );
  if (!newUnitModelName || !newUnitModelWidth || !newUnitModelDataEntry) {
    console.log(
      "Model not supported! The size for that model is not yet implemented!"
    );
    return state;
  }
  newUnit.models[0].baseWidth = newUnitModelWidth;
  newUnit.models[0].baseHeight = newUnitModelWidth;
  newUnit.models[0].movement = newUnitModelDataEntry.M;
  // Calculate X and Y coordinates
  if (unitList.length !== 0) {
    // Fetch the model's base width from modelData (for last unit)
    const lastUnit = unitList[unitList.length - 1];
    newUnit.models[0].X =
      lastUnit.models[0].X + lastUnit.models[0].baseWidth * 10 + 5;
  } else {
    newUnit.models[0].X = 5;
  }
  newUnit.models[0].Y = 5;

  // Add the new unit to the army's units
  unitList.push(newUnit);
  return unitList;
};

export const ArmySlice = createSlice({
  name: "ArmyState",
  initialState,
  reducers: {
    loadFactionData: (state, action) => {
      return { ...state, factionData: action.payload };
    },
    loadModelData: (state, action) => {
      return { ...state, modelData: action.payload };
    },
    importFromNewRecruit: (state, actions) => {
      const { factionName, units, armyId } = actions.payload;
      const factionNameShort = factionName.split(" - ")[1];
      const faction = state.factionData.find(
        (faction) => faction.name === factionNameShort
      );

      let currentUnits = [
        ...state.armys.find((army) => army.armyId === armyId).units
      ];

      units.forEach((unitName) => {
        let newUnit = {
          models: [
            {
              modelId: 1,
              X: 0,
              Y: 0,
              isSelected: false,
              name: unitName
            }
          ]
        };

        currentUnits = AddUnitToUnitList(newUnit, currentUnits, state);
      });

      return {
        ...state,
        armys: state.armys.map((army) => {
          if (army.armyId === armyId) {
            return {
              ...army,
              factionId: faction.id,
              factionName: faction.name,
              units: currentUnits
            };
          } else {
            return { ...army };
          }
        })
      };
    },
    selectFaction: (state, action) => {
      const { armyId, factionId, factionName } = action.payload;
      return {
        ...state,
        armys: state.armys.map((army) => {
          if (army.armyId === armyId) {
            return { ...army, factionId, factionName, units: [] };
          } else {
            return { ...army };
          }
        })
      };
    },
    addUnitToArmy: (state, action) => {
      let currentUnits = [
        ...state.armys.find((army) => army.armyId === action.payload.armyId)
          .units
      ];
      let newUnit = { ...action.payload.newUnit };

      currentUnits = AddUnitToUnitList(newUnit, currentUnits, state);

      return {
        ...state,
        armys: state.armys.map((army) => {
          if (army.armyId === action.payload.armyId) {
            return { ...army, units: currentUnits };
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
      let modelX, modelY, modelBaseHeight, modelBaseWidth, modelMovement;
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
                        modelBaseHeight = model.baseHeight;
                        modelBaseWidth = model.baseWidth;
                        modelMovement = model.movement;
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
        lastSelectedModelData: {
          ...state.lastSelectedModelData,
          X: modelX,
          Y: modelY,
          baseHeight: modelBaseHeight,
          baseWidth: modelBaseWidth,
          movement: modelMovement
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
    //     lastSelectedModelData: {
    //       ...state.lastSelectedModelData,
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
  importFromNewRecruit,
  selectFaction,
  addUnitToArmy,
  addModelToUnit,
  removeModelFromUnit,
  removeUnitFromArmy,
  selectModel,
  //selectUnit,
  moveSelectedModels
} = ArmySlice.actions;

export const selectFactionData = (state) => state.ArmyReducer.factionData;
export const selectModelData = (state) => state.ArmyReducer.modelData;
export const selectArmys = (state) => state.ArmyReducer.armys;
export const selectLastSelectedModelData = (state) =>
  state.ArmyReducer.lastSelectedModelData;

export default ArmySlice.reducer;
