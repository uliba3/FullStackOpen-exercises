import { useState } from 'react'
import Select from 'react-select';
import { useMutation } from '@apollo/client'
import { EDIT_AUTHOR, ALL_BOOKS, ALL_AUTHORS } from '../queries'

const AuthorForm = ({allAuthors}) => {
  const [authorOption, setAuthorOption] = useState(null)
  const [born, setBorn] = useState('')

  const [ editAuthor ] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [ { query: ALL_BOOKS }, { query: ALL_AUTHORS } ],
    onError: (error) => {
      const messages = error.graphQLErrors.map(e => e.message).join('\n')
    }
  })

  const options = []
  allAuthors.forEach(author => options.push(
      {
        value: author.name,
        label: author.name
    }))

  const submit = async (event) => {
    event.preventDefault()
    const name = authorOption.value

    editAuthor({  variables: { name, born } })

    console.log('add book...', name, born)
    setBorn('')
    setAuthorOption(null)
  }

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <Select
            value={authorOption}
            onChange={setAuthorOption}
            options={options}
          />
        </div>
        <div>
          born
          <input
            type="number"
            value={born}
            onChange={({ target }) => setBorn(parseInt(target.value))}
          />
        </div>
        <button type="submit">edit Author</button>
      </form>
    </div>
  )
}

export default AuthorForm