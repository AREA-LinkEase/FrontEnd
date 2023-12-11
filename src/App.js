import PrimaryInput from "./components/Inputs/PrimaryInput";
import IconButton from "./components/buttons/IconButton";
import TitleTextChildButton from "./components/buttons/TitleTextChildButton";

const App = () => {
  
  return (
    <div>
      <TitleTextChildButton ComponentChildren={() => <PrimaryInput />}/>
    </div>
  );
}

export default App;
