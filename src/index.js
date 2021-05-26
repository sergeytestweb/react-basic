import React from "react";
import ReactDOM from "react-dom";

import Button from "./components/Button/Button";

const App = () => {
  return (
    <div>
      <Button>Privet 1</Button>
      <Button>Privet 2</Button>
      <Button>Privet 3</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
