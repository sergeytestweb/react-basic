import React from "react";
import ReactDOM from "react-dom";

import Button from "./components/Button/Button";
import ButtonsGroup from "./components/ButtonsGroup/ButtonsGroup";

const App = () => {
  return (
    <div>
      {/* <Button>По умолчанию</Button>
      <Button mode="secondary" size='small'>Второстепенная</Button>
      <Button mode="success" size='large'>Успех</Button>
      <Button mode="danger" disabled className="evilClass">Лажа</Button> */}
      {/* <Button counter={5}>Счётчик</Button> */}

      <ButtonsGroup>
        <Button>Left part</Button>
        <Button>Middle part</Button>
        <Button>Right part</Button>
      </ButtonsGroup>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
