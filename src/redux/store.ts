import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import logger from "./middlewars/logger";
import taskReducer from "./features/counter/task/taskSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: taskReducer,
  },
  middleware : (getDefaultMiddleware => getDefaultMiddleware().concat(logger))
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch