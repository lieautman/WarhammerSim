import { configureStore } from "@reduxjs/toolkit";
import BoardReducer from "./BoardSlice";
import ArmyPickerReducer from "./ArmyPickerSlice";
export const store = configureStore({
  reducer: { BoardReducer, ArmyPickerReducer }
});
