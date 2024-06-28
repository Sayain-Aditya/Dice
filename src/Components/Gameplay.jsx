import React from "react";
import Score from "./Score";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import Rolldice from "./Rolldice";
import { useState } from "react";
import { Button, OutlineButton } from "../style/button";
import Rules from "./Rules";

function Gameplay() {
  const [score, setScore] = useState(0);
  const [select, setSelect] = useState();
  const [current, setCurrent] = useState(1);
  const [error, setError] = useState("");
  const [rules, setRules] = useState(false);

  const generateNumber = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  const rollDice = () => {
    if (!select) {
      setError("You have not selected any number");
      return;
    }
    const randomNumber = generateNumber(1, 7);
    setCurrent((prev) => randomNumber);

    if (select == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelect(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="topsection">
        <Score score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          select={select}
          setSelect={setSelect}
        />
      </div>
      <Rolldice current={current} rollDice={rollDice} />
      <div className="btn">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setRules((prev) => !prev)}>
          {rules ? "Hide" : "Show"} Rule
        </Button>
      </div>
      {rules && <Rules />}
    </MainContainer>
  );
}

export default Gameplay;

const MainContainer = styled.main`
  .topsection {
    margin-top: -50pxpx;
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btn {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
