import { isSuccess } from "../helpers/NetworkHelpers"
import { takeLatest, delay, put, call, race, select } from "redux-saga/effects"
import { AuthAPI } from "./AuthAPI"
import {
  login,
  loginSuccess,
  register,
  registerSuccess,
  changeDetails,
  changeDetailsSuccess,
  changePassword,
  changePasswordSuccess,
  changeEmail,
  changeEmailSuccess,
  getUserDetails,
  getUserDetailsSuccess,
  setAuthFailure,
  resetPasswordSuccess,
  resetPassword,
  forgotPasswordSuccess,
  forgotPassword,
} from "./AuthSlice"

export const getAuthToken = (state: { auth: { token: any } }) =>
  state.auth.token

export function* loginEffect(action: any) {
  try {
    const data = {
      headers: {
        "content-type": "application/json",
      },
      body: {
        ...action.payload,
      },
    }

    const { timeoutDelay, response } = yield race({
      timeoutDelay: delay(10000),
      response: call(AuthAPI.postLogin, data),
    })

    if (timeoutDelay) {
      yield put(setAuthFailure("Server timed out"))
    }

    if (response) {
      if (isSuccess(response)) {
        const responseJson = yield response.json()
        yield put(loginSuccess(responseJson))
      } else {
        const responseJson = yield response.json()
        yield put(setAuthFailure(responseJson))
      }
    }
  } catch (error) {
    yield put(setAuthFailure(error))
  }
}

export function* registerEffect(action: any) {
  try {
    const data = {
      headers: {
        "content-type": "application/json",
      },
      body: {
        ...action.payload,
      },
    }

    const { timeoutDelay, response } = yield race({
      timeoutDelay: delay(10000),
      response: call(AuthAPI.postRegister, data),
    })

    if (timeoutDelay) {
      yield put(setAuthFailure("Server timed out"))
    }

    if (response) {
      if (isSuccess(response)) {
        const responseJson = yield response.json()
        yield put(registerSuccess(responseJson))
      } else {
        const responseJson = yield response.json()
        yield put(setAuthFailure(responseJson))
      }
    }
  } catch (error) {
    yield put(setAuthFailure(error))
  }
}

export function* changeDetailsEffect(action: any) {
  let authToken = yield select(getAuthToken)
  try {
    const data = {
      headers: {
        Authorization: "Bearer " + authToken,
        "content-type": "application/json",
      },
      body: {
        ...action.payload,
      },
    }

    const { timeoutDelay, response } = yield race({
      timeoutDelay: delay(10000),
      response: call(AuthAPI.putChangeDetails, data),
    })

    if (timeoutDelay) {
      yield put(setAuthFailure("Server timed out"))
    }

    if (response) {
      if (isSuccess(response)) {
        const responseJson = yield response.json()
        yield put(changeDetailsSuccess(responseJson))
      } else {
        const responseJson = yield response.json()
        yield put(setAuthFailure(responseJson))
      }
    }
  } catch (error) {
    yield put(setAuthFailure(error))
  }
}

export function* changeEmailEffect(action: any) {
  let authToken = yield select(getAuthToken)
  try {
    const data = {
      headers: {
        Authorization: "Bearer " + authToken,
        "content-type": "application/json",
      },
      body: {
        ...action.payload,
      },
    }

    const { timeoutDelay, response } = yield race({
      timeoutDelay: delay(100000),
      response: call(AuthAPI.postChangeEmail, data),
    })

    if (timeoutDelay) {
      yield put(setAuthFailure("Server timed out"))
    }

    if (response) {
      if (isSuccess(response)) {
        const responseJson = yield response.json()
        yield put(changeEmailSuccess(responseJson))
      } else {
        const responseJson = yield response.json()
        yield put(setAuthFailure(responseJson))
      }
    }
  } catch (error) {
    yield put(setAuthFailure(error))
  }
}

export function* changePasswordEffect(action: any) {
  let authToken = yield select(getAuthToken)
  try {
    const data = {
      headers: {
        Authorization: "Bearer " + authToken,
        "content-type": "application/json",
      },
      body: {
        ...action.payload,
      },
    }

    const { timeoutDelay, response } = yield race({
      timeoutDelay: delay(10000),
      response: call(AuthAPI.putChangePassword, data),
    })

    if (timeoutDelay) {
      yield put(setAuthFailure("Server timed out"))
    }

    if (response) {
      if (isSuccess(response)) {
        const responseJson = yield response.json()
        yield put(changePasswordSuccess(responseJson))
      } else {
        const responseJson = yield response.json()
        yield put(setAuthFailure(responseJson))
      }
    }
  } catch (error) {
    yield put(setAuthFailure(error))
  }
}

export function* getUserDetailsEffect(action: any) {
  let authToken = yield select(getAuthToken)
  try {
    const data = {
      headers: {
        Authorization: "Bearer " + authToken,
        "content-type": "application/json",
      },
      body: {
        ...action.payload,
      },
    }

    const { timeoutDelay, response } = yield race({
      timeoutDelay: delay(10000),
      response: call(AuthAPI.getUserDetails, data),
    })

    if (timeoutDelay) {
      yield put(setAuthFailure("Server timed out"))
    }

    if (response) {
      if (isSuccess(response)) {
        const responseJson = yield response.json()
        yield put(getUserDetailsSuccess(responseJson))
      } else {
        const responseJson = yield response.json()
        yield put(setAuthFailure(responseJson))
      }
    }
  } catch (error) {
    yield put(setAuthFailure(error))
  }
}

export function* forgotPasswordEffect(action: any) {
  try {
    const data = {
      headers: {
        "content-type": "application/json",
      },
      body: {
        ...action.payload,
      },
    }

    const { timeoutDelay, response } = yield race({
      timeoutDelay: delay(10000),
      response: call(AuthAPI.postForgotPassword, data),
    })

    if (timeoutDelay) {
      yield put(setAuthFailure("Server timed out"))
    }

    if (response) {
      if (isSuccess(response)) {
        yield put(forgotPasswordSuccess(""))
      } else {
        const responseJson = yield response.json()
        yield put(setAuthFailure(responseJson))
      }
    }
  } catch (error) {
    yield put(setAuthFailure(error))
  }
}

export function* resetPasswordEffect(action: any) {
  try {
    const data = {
      headers: {
        "content-type": "application/json",
      },
      body: {
        ...action.payload,
      },
    }

    const { timeoutDelay, response } = yield race({
      timeoutDelay: delay(10000),
      response: call(AuthAPI.postResetPassword, data),
    })

    if (timeoutDelay) {
      yield put(setAuthFailure("Server timed out"))
    }

    if (response) {
      if (isSuccess(response)) {
        yield put(resetPasswordSuccess(""))
      } else {
        const responseJson = yield response.json()
        yield put(setAuthFailure(responseJson))
      }
    }
  } catch (error) {
    yield put(setAuthFailure(error))
  }
}

export const AuthSaga = [
  takeLatest(login, loginEffect),
  takeLatest(register, registerEffect),
  takeLatest(changeDetails, changeDetailsEffect),
  takeLatest(changeEmail, changeEmailEffect),
  takeLatest(changePassword, changePasswordEffect),
  takeLatest(getUserDetails, getUserDetailsEffect),
  takeLatest(forgotPassword, forgotPasswordEffect),
  takeLatest(resetPassword, resetPasswordEffect),
]
