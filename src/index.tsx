import * as React from "react";
import "./styles.scss";
import { AuthSaga } from "./Auth/AuthSaga";
import { AuthSlice } from "./Auth/AuthSlice";

export type ITestoProps = {
  title?: string;
};

const Testo: React.FC<ITestoProps> = ({ title }) => {
  console.log("!!AuthSlice", AuthSlice);
  console.log("!!AuthSaga", AuthSaga);

  return (
    <div>
      <h1>My Auth Library + {title}</h1>
    </div>
  );
};

export { Testo, AuthSlice, AuthSaga };
