import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface AuthState {
  isLoggedIn: boolean
  token: string
  id: number
  username: string
  firstname: string | null
  lastname: string | null
  roles: string[]
  error: string
  email: string
  emailConfirmed: boolean
}

const initialState: AuthState = {
  isLoggedIn: false,
  token: "",
  id: 0,
  username: "",
  firstname: "",
  lastname: "",
  roles: [""],
  error: "",
  email: "",
  emailConfirmed: false,
}

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    "organisation/setupOrganisationSuccess": (
      state,
      action: PayloadAction<any>
    ) => {
      state.token = action.payload.token

      state.email = action.payload.user.email
      state.emailConfirmed = action.payload.user.emailConfirmed
      state.firstname = action.payload.user.firstName
      state.lastname = action.payload.user.lastName
      state.id = action.payload.user.id
      state.username = action.payload.user.name
      state.roles = action.payload.user.roles
    },
  },
  reducers: {
    login: (state, action: PayloadAction<any>) => {},
    loginSuccess: (state, action: PayloadAction<any>) => {
      console.log("!!action", action)
      state.isLoggedIn = true
      state.token = action.payload.token
      state.id = action.payload.user.id
      state.username = action.payload.user.name
      state.firstname = action.payload.user.firstName
      state.lastname = action.payload.user.lastName
      state.roles = action.payload.user.roles
      state.email = action.payload.user.email
      state.emailConfirmed = action.payload.user.emailConfirmed
    },

    changeDetails: (state, action: PayloadAction<any>) => {},
    changeDetailsSuccess: (state, action: PayloadAction<any>) => {
      state.firstname = action.payload.firstName
      state.lastname = action.payload.lastName
    },

    changePassword: (state, action: PayloadAction<any>) => {},
    changePasswordSuccess: (state, action: PayloadAction<any>) => {},

    changeEmail: (state, action: PayloadAction<any>) => {},
    changeEmailSuccess: (state, action: PayloadAction<any>) => {
      state.email = action.payload.email
    },

    getUserDetails: (state) => {},
    getUserDetailsSuccess: (state, action: PayloadAction<any>) => {
      state.id = action.payload.id
      state.username = action.payload.name
      state.firstname = action.payload.firstName
      state.lastname = action.payload.lastName
      state.roles = action.payload.roles
      state.email = action.payload.email
      state.emailConfirmed = action.payload.emailConfirmed
    },

    register: (state, action: PayloadAction<any>) => {},
    registerSuccess: (state, action: PayloadAction<any>) => {},

    forgotPassword: (state, action: PayloadAction<any>) => {},
    forgotPasswordSuccess: (state, action: PayloadAction<any>) => {},

    resetPassword: (state, action: PayloadAction<any>) => {},
    resetPasswordSuccess: (state, action: PayloadAction<any>) => {},

    logout: (state) => {
      state.isLoggedIn = false
    },

    setAuthFailure: (state, action: PayloadAction<any>) => {
      state.error = action.payload
    },
  },
})

export const {
  login,
  loginSuccess,
  changeDetails,
  changeDetailsSuccess,
  changePassword,
  changePasswordSuccess,
  changeEmail,
  changeEmailSuccess,
  getUserDetails,
  getUserDetailsSuccess,
  register,
  registerSuccess,
  forgotPassword,
  forgotPasswordSuccess,
  resetPassword,
  resetPasswordSuccess,
  logout,
  setAuthFailure,
} = AuthSlice.actions

export default AuthSlice.reducer
