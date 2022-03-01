export interface AuthAPIInterface {
    getUserDetails(data: any): Promise<object>;
    postLogin(data: any): Promise<object>;
    postRegister(data: any): Promise<object>;
    putChangeDetails(data: any): Promise<object>;
    putChangePassword(data: any): Promise<object>;
    postChangeEmail(data: any): Promise<object>;
    postForgotPassword(data: any): Promise<object>;
    postResetPassword(data: any): Promise<object>;
}
export declare const AuthAPI: AuthAPIInterface;
