import { configureStore } from "@reduxjs/toolkit";
import BoardReducer from "./BoardSlice";
import BuildingReducer from "./BuildingSlice";
import ArmyPickerReducer from "./ArmyPickerSlice";
export const store = configureStore({
  reducer: { BoardReducer, BuildingReducer, ArmyPickerReducer }
});
