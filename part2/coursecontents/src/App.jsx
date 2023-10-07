import React from 'react'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      {courses.map((course, i) =>
        <Course key={i} course={course}></Course>
      )}
    </>
  )
}

const Course = ({course}) => {
  return (
    <>
      <Header name={course.name}></Header>
      <Content parts={course.parts}></Content>
    </>
  )
}
const Header = ({name}) => {
  return <h1>{name}</h1>
}

const Content = ({parts}) => {
  return (
    <>
      {parts.map(part => 
        <Part key={part.id} name={part.name} exercises={part.exercises}></Part>
      )}
      <Total parts={parts}></Total>
    </>
  )
}

const Part = ({name, exercises}) => {
  return (
    <div>{name} {exercises}</div>
  )
}

const Total = ({parts}) => {
  const total = parts.reduce((s, p) => {
    return s + p.exercises;
  }, 0);
  return (
    <b>total of {total} exercises</b>
  )
}

export default App