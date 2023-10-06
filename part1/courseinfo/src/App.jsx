const Header = (props) => {

  console.log(props)
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return(
    <div>
        <Part part={props.parts[0]} />
        <Part part={props.parts[1]} />
        <Part part={props.parts[2]} />
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part.name} {props.part.exercise}</p>
    </div>
  )
}

const Total = (props) => {
  let totalExercises = 0;
  for(let i = 0; i < props.parts.length; i++){
    totalExercises += props.parts[i].exercises;
  }
  return(
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
  )
}

const App = () => {
  // const-definitions
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App