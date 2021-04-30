import * as React from "react";
import "./styles.scss";
import { AuthSaga } from "./Auth/AuthSaga";
import { AuthSlice } from "./Auth/AuthSlice";
export declare type ICounterProps = {
    authSlice: any;
    test: any;
};
declare const Testo: React.FC<ICounterProps>;
export { Testo, AuthSlice, AuthSaga };
