import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  token: string;
  userId: number;
  username: string;
  firstname: string | null;
  lastname: string | null;
  roles: [string];
  error: string;
}

const initialState: AuthState = {
  token: "",
  userId: 0,
  username: "",
  firstname: "",
  lastname: "",
  roles: [""],
  error: "",
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: () => {},
    loginSuccess: (state, action: PayloadAction<any>) => {
      console.log("!!action", action);
      state.token = action.payload.token;
      state.userId = action.payload.user.id;
      state.username = action.payload.user.name;
      state.firstname = action.payload.user.firstName;
      state.lastname = action.payload.user.lastName;
      state.roles[0] = action.payload.user.role;
    },

    register: () => {},
    registerSuccess: () => {},

    logout: () => {},

    setAuthFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const {
  login,
  loginSuccess,
  register,
  registerSuccess,
  logout,
  setAuthFailure,
} = AuthSlice.actions;

export const selectUser = (state: AuthState) => state;

export default AuthSlice.reducer;
