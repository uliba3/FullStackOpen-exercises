const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <p>
        {props.part[0]} {props.exercises[0]}
      </p>
      <p>
        {props.part[1]} {props.exercises[1]}
      </p>
      <p>
        {props.part[2]} {props.exercises[2]}
      </p>
    </div>
  )
}

const Total = (props) => {
  let totalExercises = 0;
  for(let i = 0; i < props.exercises.length; i++){
    totalExercises += props.exercises[i];
  }
  return(
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
  )
}

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const part = ['Fundamentals of React', 
                'Using props to pass data',
                'State of a component']
  const exercises = [10, 7, 14]

  return (
    <div>
      <Header course={course} />
      <Content part={part} exercises={exercises} />
      <Total exercises = {exercises} />
    </div>
  )
}

export default App