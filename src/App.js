import { useEffect, useState } from 'react';
import PrimaryInput from './components/Inputs/PrimaryInput';

const App = () => {

  const [inputEmailValue, setInputEmailValue] = useState('');

  useEffect(() => {
    console.log(inputEmailValue);
  }, [inputEmailValue])

  return (
    <div>
      <PrimaryInput inputValue={inputEmailValue} setInputValue={setInputEmailValue} />
    </div>
  );
}

export default App;
