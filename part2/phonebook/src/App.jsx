import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName
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
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) =>
        <div key={i} >{person.name}</div>
      )}
    </div>
  )
}

export default App;