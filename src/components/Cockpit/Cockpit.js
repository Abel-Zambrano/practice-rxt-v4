import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.alternative ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: ${props => props.alternative ? 'salmon' : 'lightgreen'};
    color: black
  }
`;



const Cockpit = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p className={props.style}>This is really working!</p>
            <StyledButton alternative={props.display} onClick={props.toggle}>Toggle Persons</StyledButton>
        </div>
    );
};

export default Cockpit;