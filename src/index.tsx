import * as React from "react";
import "./styles.scss";
import { AuthSaga } from "./Auth/AuthSaga";
import { AuthSlice } from "./Auth/AuthSlice";

export type ICounterProps = {
  authSlice: any;
  test: any;
};

const Testo: React.FC<ICounterProps> = () => {
  console.log("!!Hello");
  console.log("!!AuthSlice", AuthSlice);

  return (
    <div>
      <h1>My Auth Library</h1>
    </div>
  );
};

export { Testo, AuthSlice, AuthSaga };
