import { get, post, put } from "../helpers/NetworkHelpers"
import { baseApi } from "../baseApiService"

export interface AuthAPIInterface {
  getUserDetails(data: any): Promise<object>
  postLogin(data: any): Promise<object>
  postRegister(data: any): Promise<object>
  putChangeDetails(data: any): Promise<object>
  putChangePassword(data: any): Promise<object>
  postChangeEmail(data: any): Promise<object>
  postForgotPassword(data: any): Promise<object>
  postResetPassword(data: any): Promise<object>
}

export const AuthAPI: AuthAPIInterface = {
  async getUserDetails(data: any): Promise<object> {
    const getUserDetailsURL: string = `${baseApi.authUrl}/getuserdetails`
    return get(getUserDetailsURL, data)
  },
  async postLogin(data: any): Promise<object> {
    const postLoginUrl: string = `${baseApi.authUrl}/login`
    return post(postLoginUrl, data)
  },
  async postRegister(data: any): Promise<object> {
    const postRegisterUrl: string = `${baseApi.authUrl}/register`
    return post(postRegisterUrl, data)
  },
  async putChangeDetails(data: any): Promise<object> {
    const putChangeDetailsUrl: string = `${baseApi.authUrl}/ChangeUserDetails`
    return put(putChangeDetailsUrl, data)
  },
  async putChangePassword(data: any): Promise<object> {
    const putChangePasswordUrl: string = `${baseApi.authUrl}/ChangePassword`
    return put(putChangePasswordUrl, data)
  },
  async postChangeEmail(data: any): Promise<object> {
    const postChangeEmailUrl: string = `${baseApi.APIUrl}/email`
    return post(postChangeEmailUrl, data)
  },
  async postForgotPassword(data: any): Promise<object> {
    const postForgotPasswordUrl: string = `${baseApi.authUrl}/forgotpassword`
    return post(postForgotPasswordUrl, data)
  },
  async postResetPassword(data: any): Promise<object> {
    const postResetPasswordUrl: string = `${baseApi.authUrl}/resetpassword`
    return post(postResetPasswordUrl, data)
  },
}
