import { configureStore } from "@reduxjs/toolkit";
import MapReducer from "./MapSlice";
import BuildingReducer from "./BuildingSlice";
import ArmyReducer from "./ArmySlice";
export const store = configureStore({
  reducer: { MapReducer, BuildingReducer, ArmyReducer }
});
