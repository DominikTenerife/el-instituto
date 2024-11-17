import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import darkModeReducer from './slices/darkModeSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    darkMode: darkModeReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;