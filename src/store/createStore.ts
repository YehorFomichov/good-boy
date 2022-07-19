import { combineReducers, configureStore } from "@reduxjs/toolkit";
import donateFormReducer from "./donateFormSlice";
export const rootReducer = combineReducers({
  donateForm: donateFormReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export function createStore() {
  return configureStore({ reducer: rootReducer });
}
