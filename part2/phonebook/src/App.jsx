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
  const [filterValue, setFilterValue] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber
    }
    console.log(nameObject.name, persons);
    const i = persons.findIndex(person => person.name == nameObject.name);
    if(i > -1){
      alert(`${nameObject.name} is already added to phonebook`);
    }else {
      const newPersons = persons.concat(nameObject);
      setPersons(newPersons);
      noteService
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setSuccessMessage(`Added ${returnedPerson.name}`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      })
    }
    setNewName('')
    setNewNumber('')
  }

  const personsToShow = persons.filter(person => person.name.includes(filterValue));

  const deletePerson = (personToDelete) => {
    
    if(window.confirm(`Delete ${personToDelete.name}?`)){
      noteService
      .deleteOne(personToDelete.id)
      .then(
        setPersons(persons.filter(person => person.id!==personToDelete.id))
      )
    }
  }

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
      <Notification message={successMessage}/>
      <Filter filterValue={filterValue} handleFilterValueChange={handleFilterValueChange}/>
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deletePerson={deletePerson}/>
    </div>
  )
}

const Notification = (message) => {
  const success = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    border: 'none'
  }
  if (message.message === '') {
    return
  }

  return (
    <div style={success}>
      {message.message}
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

const Persons = ({personsToShow, deletePerson}) => {
  return (
    <>
      {personsToShow.map((person, i) =>
        <div key={i} >{person.name} {person.number}<button onClick={()=>deletePerson(person)}>delete</button></div>
      )}
    </>
  )
}

export {App}