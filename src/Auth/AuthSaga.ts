import { takeLatest, delay, put, call, race } from "redux-saga/effects";
import { AuthAPI } from "./AuthAPI";
import {
  login,
  loginSuccess,
  register,
  registerSuccess,
  setAuthFailure,
} from "./AuthSlice";

export function* loginEffect(action: any): Generator<any, any, any> {
  try {
    const data = {
      headers: {
        "content-type": "application/json",
      },
      body: {
        ...action.payload,
      },
    };

    const { timeoutDelay, response } = yield race({
      timeoutDelay: delay(10000),
      response: call(AuthAPI.postLogin, data),
    });

    if (timeoutDelay) {
      yield put(setAuthFailure("Server timed out"));
    }

    if (response) {
      if (response.status === 200) {
        const responseJson = yield response.json();
        yield put(loginSuccess(responseJson));
      } else {
        const responseJson = yield response.json();
        yield put(setAuthFailure(responseJson));
      }
    }
  } catch (error) {
    yield put(setAuthFailure(error));
  }
}

export function* registerEffect(action: any): Generator<any, any, any> {
  try {
    const data = {
      headers: {
        "content-type": "application/json",
      },
      body: {
        ...action.details,
      },
    };

    const { timeoutDelay, response } = yield race({
      timeoutDelay: delay(10000),
      response: call(AuthAPI.postRegister, data),
    });

    if (timeoutDelay) {
      yield put(setAuthFailure("Server timed out"));
    }

    if (response) {
      if (response.status === 200) {
        // const responseJson = yield response.json();
        yield put(registerSuccess());
      } else {
        const responseJson = yield response.json();
        yield put(setAuthFailure(responseJson));
      }
    }
  } catch (error) {
    yield put(setAuthFailure("Something went wrong. Try again later."));
  }
}

export const AuthSaga = [
  takeLatest(login, loginEffect),
  takeLatest(register, registerEffect),
];
