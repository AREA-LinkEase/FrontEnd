import React, { useState } from "react";
import PrimaryInput from "./components/Inputs/PrimaryInput";

const App = () => {

  const [isActive, setIsActive] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const onPressRightIcon = (value) => {
    setIsActive(!value);
  }

  return (
    <div>
      <PrimaryInput rightIconName={isActive ? 'Eye' : 'EyeOff'} inputType={isActive ? 'email' : 'password'} isRightIconIsActive={isActive} onPressRightIcon={onPressRightIcon} inputValue={inputValue} setInputValue={setInputValue}/>
    </div>
  );
}

export default App;
