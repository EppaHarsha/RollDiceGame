import styled from "styled-components";
function Rules(){
    return (
        <RulesDiv>
            <h2>How to play dice game</h2>
            <div className="text">
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted </p>
            </div>
        </RulesDiv>
    )
}
export default Rules;
const RulesDiv=styled.div`
background-color:#FBF1F1;
max-width:800px;
margin:0 auto;
margin-top:20px;
padding:20px;
h2{
font-size:24px;
}
.text{
margin-top:24px;
}
`