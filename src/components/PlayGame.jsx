import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import Rules from "./Rules";
import { useState } from "react";
import styled from "styled-components";
function PlayGame(){
    const[score,setScore]=useState(0);
    const[selectedNumber,setSelectedNumber]=useState();
    const[currentDice,setCurrentDice]=useState(1);
    const[showRules,setShowRules]=useState(false);
    const[err,SetErr]=useState(" ");
    const roleDice=()=>{
        if(!selectedNumber) {
            SetErr("You have not selected any number");
            return;
        }
        SetErr("")
        let randomNo=Math.floor(Math.random()*6+1);
        setCurrentDice(randomNo);
        if(selectedNumber===randomNo){
            setScore((prev)=>prev+randomNo);
        }else{
            setScore((prev)=>prev-2);
        }
        setSelectedNumber(undefined);
        setShowRules(false);
     }
     const scoreHandler=()=>{
        setScore(0);
     }
    return(
         <Main>
            <div className="topSection">
            <TotalScore score={score}/>
            <NumberSelector  setError={SetErr} error={err}selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
            </div>
            <RoleDice  currentDice={currentDice} roleDice={roleDice}/>
            <div className="btns">
            <Button className="btn" onClick={scoreHandler}>Reset Score</Button>
            <Button onClick={()=>setShowRules((prev)=>!prev)} >{showRules ? "Hide" : "Show"} Rules</Button>
            </div>
            {showRules && <Rules/>}
        </Main>
        
    )
}
export default PlayGame;

const Main=styled.div`
padding-top:20px;
.topSection{
    display:flex;
    justify-content:space-around;
}
    .btns{
    margin-top:20px;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:20px;
    }
        .btn{
        border:1px solid black;
        color:black;
        cursor:pointer;
        transition:0.4s background ease-in;
        background:white;
        &:hover{
    background-color:black;
    border:1px solid white;
    color:white;
    transition:0.3s background ease-in;
}
        }
`;

const Button = styled.button`
color:white;
padding : 10px 18px;
background:#000000;
min-width:220px;
border:none;
border-radius:5px;
font-size:16px;
border:1px solid transparent;
cursor:pointer;
transition:0.4s background ease-in;
&:hover{
    background-color:white;
    border:1px solid black;
    color:black;
    transition:0.3s background ease-in;
}
`;