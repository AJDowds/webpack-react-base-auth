import * as React from "react";
import "./styles.scss";
import { AuthSaga } from "./Auth/AuthSaga";
import { AuthSlice } from "./Auth/AuthSlice";
export declare type ITestoProps = {
    test: any;
};
declare const Testo: React.FC<ITestoProps>;
export { Testo, AuthSlice, AuthSaga };
