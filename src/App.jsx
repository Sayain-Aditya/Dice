import { useState } from "react";
import Start from "./Components/Start";
import Gameplay from "./Components/Gameplay";

function App() {
  const [isGame, setisGame] = useState(false);
  const togglegameplay = () => {
    setisGame((prev) => !prev);
  };

  return <>{isGame ? <Gameplay /> : <Start toggle={togglegameplay} />}</>;
}

export default App;
