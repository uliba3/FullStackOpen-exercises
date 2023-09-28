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
        <Part part={props.parts[0]} exercise={props.exercises[0]}/>
        <Part part={props.parts[1]} exercise={props.exercises[1]}/>
        <Part part={props.parts[2]} exercise={props.exercises[2]}/>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part} {props.exercise}</p>
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
  const parts = ['Fundamentals of React', 
                'Using props to pass data',
                'State of a component']
  const exercises = [10, 7, 14]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises = {exercises} />
    </div>
  )
}

export default App