import { PayloadAction } from "@reduxjs/toolkit";
export interface AuthState {
    isLoggedIn: boolean;
    token: string;
    id: number;
    username: string;
    firstname: string | null;
    lastname: string | null;
    roles: string[];
    error: string;
    email: string;
    emailConfirmed: boolean;
}
export declare const AuthSlice: import("@reduxjs/toolkit").Slice<AuthState, {
    login: (state: import("immer/dist/internal").WritableDraft<AuthState>, action: PayloadAction<any>) => void;
    loginSuccess: (state: import("immer/dist/internal").WritableDraft<AuthState>, action: PayloadAction<any>) => void;
    changeDetails: (state: import("immer/dist/internal").WritableDraft<AuthState>, action: PayloadAction<any>) => void;
    changeDetailsSuccess: (state: import("immer/dist/internal").WritableDraft<AuthState>, action: PayloadAction<any>) => void;
    changePassword: (state: import("immer/dist/internal").WritableDraft<AuthState>, action: PayloadAction<any>) => void;
    changePasswordSuccess: (state: import("immer/dist/internal").WritableDraft<AuthState>, action: PayloadAction<any>) => void;
    changeEmail: (state: import("immer/dist/internal").WritableDraft<AuthState>, action: PayloadAction<any>) => void;
    changeEmailSuccess: (state: import("immer/dist/internal").WritableDraft<AuthState>, action: PayloadAction<any>) => void;
    getUserDetails: (state: import("immer/dist/internal").WritableDraft<AuthState>) => void;
    getUserDetailsSuccess: (state: import("immer/dist/internal").WritableDraft<AuthState>, action: PayloadAction<any>) => void;
    register: (state: import("immer/dist/internal").WritableDraft<AuthState>, action: PayloadAction<any>) => void;
    registerSuccess: (state: import("immer/dist/internal").WritableDraft<AuthState>, action: PayloadAction<any>) => void;
    forgotPassword: (state: import("immer/dist/internal").WritableDraft<AuthState>, action: PayloadAction<any>) => void;
    forgotPasswordSuccess: (state: import("immer/dist/internal").WritableDraft<AuthState>, action: PayloadAction<any>) => void;
    resetPassword: (state: import("immer/dist/internal").WritableDraft<AuthState>, action: PayloadAction<any>) => void;
    resetPasswordSuccess: (state: import("immer/dist/internal").WritableDraft<AuthState>, action: PayloadAction<any>) => void;
    logout: (state: import("immer/dist/internal").WritableDraft<AuthState>) => void;
    setAuthFailure: (state: import("immer/dist/internal").WritableDraft<AuthState>, action: PayloadAction<any>) => void;
}, "auth">;
export declare const login: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, loginSuccess: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, changeDetails: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, changeDetailsSuccess: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, changePassword: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, changePasswordSuccess: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, changeEmail: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, changeEmailSuccess: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, getUserDetails: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, getUserDetailsSuccess: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, register: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, registerSuccess: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, forgotPassword: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, forgotPasswordSuccess: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, resetPassword: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, resetPasswordSuccess: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, logout: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, setAuthFailure: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>;
declare const _default: import("redux").Reducer<AuthState, import("redux").AnyAction>;
export default _default;
