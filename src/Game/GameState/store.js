import { configureStore } from "@reduxjs/toolkit";
import GameStateReducer from "./GameStateSlice";
import ArmyPickerReducer from "./ArmyPickerSlice";
export const store = configureStore({
  reducer: { GameStateReducer, ArmyPickerReducer }
});
