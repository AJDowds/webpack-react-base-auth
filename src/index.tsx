import * as React from "react";
import "./styles.scss";

export type ICounterProps = {
  className?: string;
};

const App: React.FC<ICounterProps> = () => {
  console.log("Hello");

  return (
    <div>
      <h1>My Library</h1>
    </div>
  );
};

export default App;
