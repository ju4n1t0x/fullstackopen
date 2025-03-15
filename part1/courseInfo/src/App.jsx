import Header from "../courseInfo/Header";
import Content from "../courseInfo/Content";
import Total from "../courseInfo/Total";



const App = () => {
  const course = 
  {
  name: "Half Stack application development",

  parts:
   [
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of a component', exercises: 14}
  ]
}

  const suma = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises


  return (
  <div>
    <Header course={course.name} />
    <Content partes={course.parts}/>
    <Total suma={suma}/>
  </div>
  )
}

export default App