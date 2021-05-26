import React from "react";
import ReactDOM from "react-dom";

import Button from "./components/Button/Button";

const App = () => {
  return (
    <div>
      <Button>По умолчанию</Button>
      <Button mode="secondary" size='small'>Второстепенная</Button>
      <Button mode="success" size='large'>Успех</Button>
      <Button mode="danger" disabled className="evilClass">Лажа</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
