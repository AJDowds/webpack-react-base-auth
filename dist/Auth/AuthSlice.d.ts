import { PayloadAction } from "@reduxjs/toolkit";
export interface AuthState {
    token: string;
    userId: number;
    username: string;
    firstname: string | null;
    lastname: string | null;
    roles: [string];
    error: string;
}
export declare const AuthSlice: import("@reduxjs/toolkit").Slice<AuthState, {
    login: () => void;
    loginSuccess: (state: import("immer/dist/internal").WritableDraft<AuthState>, action: PayloadAction<any>) => void;
    register: () => void;
    registerSuccess: () => void;
    logout: () => void;
    setAuthFailure: (state: import("immer/dist/internal").WritableDraft<AuthState>, action: PayloadAction<string>) => void;
}, "auth">;
export declare const login: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, loginSuccess: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, register: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, registerSuccess: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, logout: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, setAuthFailure: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>;
export declare const selectUser: (state: AuthState) => AuthState;
declare const _default: import("redux").Reducer<AuthState, import("redux").AnyAction>;
export default _default;
