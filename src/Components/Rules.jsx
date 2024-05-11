import React from 'react'
import styled from 'styled-components'

function Rules() {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className='text'>
            <p>Select any Number</p>
            <p>Click on the dice image</p>
            <p>
                after click on the dice if selcted number is equal to dice number you willget same point as dice
            </p>
            <p>if you get wrong guess tthen 2 points will be deducted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
max-width: 800px;
margin: 0 auto;
margin-top: 40px;
background-color: #fbf1f1;
padding:20px;
border-radius: 10px;
h2{
    font-size: 24px;
}
.text{
    margin-top:24px;
}
`;