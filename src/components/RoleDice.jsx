import { useState } from "react";
import styled from "styled-components"
function RoleDice({currentDice,roleDice}){
    return(
        <DiceContainer>
            <div className="dice" onClick={roleDice}>
                <img src={`/images/dices/dice_${currentDice}.png`} alt="Dices" />
            </div>
            <p>Click on Dice to roll </p>
        </DiceContainer>
    )
}
export default RoleDice
const DiceContainer=styled.div`
margin-top:10px;
display:flex;
flex-direction:column;
align-items:center;
img{
height:170px;
cursor:pointer;
width:170px;}
p{
    font-size:24px;
}
`