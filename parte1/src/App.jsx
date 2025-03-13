import Header from "../courseInfo/Header";
import Content from "../courseInfo/Content";
import Total from "../courseInfo/Total";



const App = () => {
  const course = "Half Stack application development";
  const partes = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14}
  ]
  const suma= partes[0].exercises + partes[1].exercises + partes[2].exercises


  return (
  <div>
    <Header course={course} />
    <Content partes={partes}/>
    <Total suma={suma}/>
  </div>
  )
}

export default App