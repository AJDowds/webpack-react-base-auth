export interface APIInterface {
    authUrl: string;
    APIUrl: string;
}
export declare const baseApi: APIInterface;
export declare const apiHelper: object;
export interface AuthAPIInterface {
    postLogin(data: any): Promise<object>;
    postRegister(data: any): Promise<object>;
}
export declare const AuthAPI: AuthAPIInterface;
