import React, { useState } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    personsDiv = 
        <Persons
          persons={personsState.persons}
          clicked={deletePersonHandler}
          changed={nameInputHandler} />
  };

  return (
      <div className="App">
        <Cockpit 
          style={styleClasses.join(' ')} 
          display={showPersons} 
          toggle={togglePersonHandler} />
        {personsDiv}
      </div>
  ); 
  }

export default App;