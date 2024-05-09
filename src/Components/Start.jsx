import React from "react";
import styled from "styled-components";

function Start({ toggle }) {
  return (
    <Container>
      <div>
        <img src="/images/Dice.png" alt="dice" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
}

export default Start;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content h1 {
    font-size: 96px;
    white-space: nowrap;
    margin-bottom: -5px;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px 18px;
  background: black;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  min-width: 226px;
  border: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
