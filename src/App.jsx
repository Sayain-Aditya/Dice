import { useState } from "react";
import Start from "./Components/Start";
import Gameplay from "./Components/Gameplay";

function App() {
  const [isGame, setisGame] = useState(true);
  const togglegameplay = () => {
    setisGame((prev) => !prev);
  };

  return <>{isGame ? <Gameplay /> : <Start toggle={togglegameplay} />}</>;
}

export default App;
