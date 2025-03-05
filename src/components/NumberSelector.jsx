import { useState } from "react";
import styled from "styled-components";
function NumberSelector({setError, error,selectedNumber,setSelectedNumber}){
    const arr=[1,2,3,4,5,6];
    const selectNumberHandler=(val)=>{
        setSelectedNumber(val)
        setError("")
    }
    return(
        
        <NumberSelectorConatiner>
            <p style={{color:"red"}}>{error}</p>
            <div className="flex">
                {arr.map((val,i)=>(
                <Box
                    isSelectedNumber={val===selectedNumber} 
                    key={i}
                    onClick={()=>selectNumberHandler(val)}
                >
                    {val}
            </Box>
        ))}   
        </div>
        <p>Select Number</p>
        </NumberSelectorConatiner>
    )
}
export default NumberSelector;
const NumberSelectorConatiner=styled.div`
display:flex;
flex-direction:column;
align-items:end;
.flex {
display:flex;
gap:24px;
}
p{
font-size:24px;
font-weight:700px;
}

`
const Box = styled.div`
    width:72px;
    cursor:pointer;
    height:72px;
    border:2px solid black;
    display:grid;
    place-items:center;
    font-size:24px;
    font-weight:700;
    background:${(props)=>(props.isSelectedNumber ? "black":"white")};
    color:${(props)=>(props.isSelectedNumber ? "white":"black")};
`;