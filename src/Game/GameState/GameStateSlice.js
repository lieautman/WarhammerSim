import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  map: {
    X: 0,
    Y: 0
  },
  buildings: [
    { buildingId: 0, XSize: 20, YSize: 30, X: 20, Y: 30, isRuin: true },
    { buildingId: 1, XSize: 20, YSize: 30, X: 80, Y: 130, isRuin: false }
  ],
  lastSelectedModelCoords: {
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
    addBuilding: (state, action) => {
      let buildings = [...state.buildings];
      let newBuilding = { ...action.payload };
      newBuilding.buildingId = buildings[buildings.length - 1].buildingId + 1;
      buildings.push(newBuilding);
      return {
        ...state,
        buildings: buildings
      };
    },
    removeBuilding: (state, action) => {
      let buildings = [...state.buildings];
      buildings.remove((building) => building.buildingId === action.payload);
      return {
        ...state,
        buildings: buildings
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
                      }
                      return model;
                    })
                  };
                }
                return unit;
              })
            };
          }
          return army;
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
    selectUnit: (state, action) => {
      const { armyId, unitId } = action.payload;
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
                      modelX = model.X;
                      modelY = model.Y;
                      return {
                        ...model,
                        isSelected: !model.isSelected // Toggle isSelected for all models in the unit
                      };
                    })
                  };
                }
                return unit;
              })
            };
          }
          return army;
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
  modifyMapCoordinates,
  resetMapCoordinates,
  addBuilding,
  removeBuilding,
  loadModelData,
  selectModel,
  selectUnit,
  moveSelectedModels
} = GameStateSlice.actions;

export const selectMap = (state) => state.map;
export const selectBuildings = (state) => state.buildings;
export const selectLastSelectedModelCoords = (state) =>
  state.lastSelectedModelCoords;
export const selectModelData = (state) => state.modelData;
export const selectArmys = (state) => state.armys;

export default GameStateSlice.reducer;
