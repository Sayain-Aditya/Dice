import React, { useState } from "react";
import styled from "styled-components";

function Rolldice({ rollDice, current }) {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice/dice_${current}.png`} alt="Dice 1" />
      </div>
      <p>Click on the Dice to Roll</p>
    </DiceContainer>
  );
}

export default Rolldice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
