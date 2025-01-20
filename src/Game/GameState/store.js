import { configureStore } from "@reduxjs/toolkit";
import MapReducer from "./MapSlice";
import BuildingReducer from "./BuildingSlice";
import ArmyPickerReducer from "./ArmyPickerSlice";
export const store = configureStore({
  reducer: { MapReducer, BuildingReducer, ArmyPickerReducer }
});
