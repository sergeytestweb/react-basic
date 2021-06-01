import React, { useState } from "react";
import ReactDOM from "react-dom";

import Button from "./components/Button/Button";
import ButtonsGroup from "./components/ButtonsGroup/ButtonsGroup";
import Progress from "./components/Progress/Progress"

const App = () => {
  const [percent, setPercent] = useState(0);
  const interval = setInterval(() => {
    if (percent >= 100) {
      setPercent(100);
    } else {
    setPercent(percent + 20)
  }
  clearInterval(interval);
  }, 1000);

  return (
    <div>
      {/* <Button>По умолчанию</Button>
      <Button mode="secondary" size='small'>Второстепенная</Button>
      <Button mode="success" size='large'>Успех</Button>
      <Button mode="danger" disabled className="evilClass">Лажа</Button> */}
      {/* <Button counter={5}>Счётчик</Button> */}

      {/* <ButtonsGroup>
        <Button>Left part</Button>
        <Button>Middle part</Button>
        <Button>Right part</Button>
      </ButtonsGroup> */}


      <Progress percent={50}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
