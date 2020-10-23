import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Person from '../components/Persons/Person/Person';

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

const App = () => {

// STATE ===========================================================================
  const [ personsState, setPersonsState ] = useState({
    persons: [
            {id: 128943, name: 'Ethan', age: 6},
            {id: 635648, name: 'Chloe', age: 3},
            {id: 998384, name: 'Kirby', age: 1}
          ]
  });
  
  const [ showPersons, setShowpersons ] = useState(false);

//  EVENT HANDLERS =================================================================
  const nameInputHandler = (event, id) => {
    // Check if "id" arguement passed in matches with person's id
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    });

    // Access person by personIndex
    const person = {
      ...personsState.persons[personIndex]
    };

    // Assign dynamic value and update name
    person.name = event.target.value;

    // Update 1 index, value of person being assigned to persons[personIndex]
    const persons = [...personsState.persons];
    persons[personIndex] = person;
    
    // Update Array, State
    setPersonsState( {persons: persons})
  }
  
  const togglePersonHandler = () => {
    setShowpersons(!showPersons);
  }

  const deletePersonHandler = (personIndex) => {
    //const persons = personsState.persons.slice();
    const persons = [...personsState.persons] // Copy array before manipulating
    persons.splice(personIndex, 1);
    setPersonsState({persons: persons})

  }

// Styling ================================================================================
  const styleClasses = [] // ['red', 'bold'].join(' '); output: 'red bold'
  if (personsState.persons.length <= 2) {
    styleClasses.push('red'); // styleClasses = ['red']
  }
  if (personsState.persons.length <=1) {
    styleClasses.push('bold'); // styleClasses = ['red', 'bold']
  }
  
// RENDER ==========================================================================
  let personsDiv = null;

  if (showPersons) {
    personsDiv = (
      <div >
        {personsState.persons.map((person, index) => {
          return <Person 
          key={person.id} 
          click={() => deletePersonHandler(index)} 
          name={person.name} 
          age={person.age}
          inputName={(event) => nameInputHandler(event, person.id)} />
        })}
      </div>
    );
  }

  return (
      <div className="App">
        <h1>This is a React App</h1>
        <p className={styleClasses.join(' ')}>This is really working!</p>
        <StyledButton alternative={showPersons} onClick={togglePersonHandler}>Toggle Persons</StyledButton>
        {personsDiv}
      </div>
  ); 
  }

export default App;