import { useEffect, useState } from "react";
import PrimaryInput from "./components/Inputs/PrimaryInput";
import IconButton from "./components/buttons/IconButton";
import TitleTextChildButton from "./components/buttons/TitleTextChildButton";
import SwitchButton from "./components/switches/SwitchButton";

const App = () => {
  
  const [isSwitched, setIsSwitched] = useState(false);

  useEffect(()=> {
    console.log(isSwitched);
  }, [isSwitched])

  return (
    <div>
      {/* <PrimaryInput/> */}
      <TitleTextChildButton width="200px" height='150px' ComponentChildren={() => <SwitchButton width="150px" height="50px" isSwitched={isSwitched} setIsSwitched={setIsSwitched}/>}/>
    </div>
  );
}

export default App;
