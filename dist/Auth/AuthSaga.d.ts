export declare const getAuthToken: (state: {
    auth: {
        token: any;
    };
}) => any;
export declare function loginEffect(action: any): Generator<any, void, {
    timeoutDelay: any;
    response: any;
}>;
export declare function registerEffect(action: any): Generator<any, void, {
    timeoutDelay: any;
    response: any;
}>;
export declare function changeDetailsEffect(action: any): Generator<any, void, {
    timeoutDelay: any;
    response: any;
}>;
export declare function changeEmailEffect(action: any): Generator<any, void, {
    timeoutDelay: any;
    response: any;
}>;
export declare function changePasswordEffect(action: any): Generator<any, void, {
    timeoutDelay: any;
    response: any;
}>;
export declare function getUserDetailsEffect(action: any): Generator<any, void, {
    timeoutDelay: any;
    response: any;
}>;
export declare function forgotPasswordEffect(action: any): Generator<any, void, {
    timeoutDelay: any;
    response: any;
}>;
export declare function resetPasswordEffect(action: any): Generator<any, void, {
    timeoutDelay: any;
    response: any;
}>;
export declare const AuthSaga: import("redux-saga/effects").ForkEffect<never>[];
