import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

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
      setPersons(persons.concat(nameObject));
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