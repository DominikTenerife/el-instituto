// src/redux/slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  currentUsername: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  currentUsername: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<{ username: string }>) => {
      state.isLoggedIn = true;
      state.currentUsername = action.payload.username;
    },
    setLoggedOut: (state) => {
      state.isLoggedIn = false;
      state.currentUsername = null;
    },
  },
});

export const { setLoggedIn, setLoggedOut } = authSlice.actions;
export default authSlice.reducer;