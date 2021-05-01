import * as React from "react";
import "./styles.scss";
import { AuthSaga } from "./Auth/AuthSaga";
import { AuthSlice } from "./Auth/AuthSlice";

export type ITestoProps = {
  test: any;
};

const Testo: React.FC<ITestoProps> = () => {
  console.log("!!AuthSlice", AuthSlice);
  console.log("!!AuthSaga", AuthSaga);

  return (
    <div>
      <h1>My Auth Library</h1>
    </div>
  );
};

export { Testo, AuthSlice, AuthSaga };
