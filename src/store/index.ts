import {configureStore} from "@reduxjs/toolkit";
import thunk, {ThunkAction} from "redux-thunk";
import reducer, {RootState} from "../reducers/todoReducer";
import api from "../middlewares/api";
import {Action} from "redux";

const store = (preloadedState?: RootState) => configureStore({
    reducer, preloadedState, middleware: [thunk, api],
})
const mStore = store()

export type AppState = ReturnType<typeof mStore.getState>
export type AppDispatch = typeof mStore.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>
export default mStore