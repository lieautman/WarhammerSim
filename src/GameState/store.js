import { configureStore } from "@reduxjs/toolkit";
import GameStateReducer from "./GameStateSlice";
export const store = configureStore({
  reducer: GameStateReducer
});
