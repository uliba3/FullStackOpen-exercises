import { useState, useEffect } from 'react'
import noteService from './services/notes'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    noteService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('');

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber
    }
    console.log(nameObject);
    const i = persons.findIndex(person => person.name == nameObject.name);
    console.log(i);
    if(i > -1){
      alert(`${nameObject.name} is already added to phonebook`);
    }else {
      const newPersons = persons.concat(nameObject);
      setPersons(newPersons);
      noteService
      .create(nameObject)
      .then(response => {
        setPersons(persons.concat(response))
      })
    }
    setNewName('')
    setNewNumber('')
  }

  const personsToShow = persons.filter(person => person.name.includes(filterValue));

  const handleFilterValueChange = (event) => {
    setFilterValue(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue={filterValue} handleFilterValueChange={handleFilterValueChange}/>
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

const Filter = ({filterValue, handleFilterValueChange}) => {
  return <div>filter shown with<input value={filterValue} onChange={handleFilterValueChange}/></div>
}

const PersonForm = ({addName, newName, handleNameChange, newNumber, handleNumberChange}) => {
  return (
    <form onSubmit={addName}>
    <div>
      name: <input value={newName} onChange={handleNameChange}/>
    </div>
    <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

const Persons = ({personsToShow}) => {
  return (
    <>
      {personsToShow.map((person, i) =>
        <div key={i} >{person.name} {person.number}</div>
      )}
    </>
  )
}

export default App;