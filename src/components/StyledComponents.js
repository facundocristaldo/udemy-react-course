import React, { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: grey;
  width: 80%;
  text-align: center;
  padding: 1.2em;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const StyledButton = styled.button`
  width: 120px;
  font-size:1.2em;
  background-color: ${props=>props.bgcolor??"ligthgrey"};
  &:hover{
      background-color: ${props=>props.hoverbgcolor??"white"};
  }
`;

const StyledComponents = () => {
    const [color,setColor] = useState("green")
  return (
    <StyledDiv>
      <h3>Styled Component</h3>
      <p>Hi, my name is Olaf and i love warm hugs</p>
      <StyledButton bgcolor="red"hoverbgcolor="salmon">Click me</StyledButton>
    </StyledDiv>
  );
};

export default StyledComponents;
