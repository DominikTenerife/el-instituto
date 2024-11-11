import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import darkModeReducer from './slices/darkModeSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    darkMode: darkModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;