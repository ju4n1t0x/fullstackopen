import { useState } from "react"
import Button from "./components/Button"
import Statistics from "./components/Statistics"



const App = () => {

 const [good, setGood] = useState(0)
 const [neutral, setNeutral] = useState(0)
 const [bad, setBad] = useState(0)


 const sumaValores = (good + neutral + bad )
 const average = sumaValores ? (good-bad) / sumaValores : 0
 const positivePercent = sumaValores ? (good * 100 / sumaValores) + "%" : "0.00%"


  return (
    <div>
    <h1>Give feedback</h1>
    <Button handleClick={() => setGood(good + 1)} text="Good" />
    <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
    <Button handleClick={() => setBad(bad + 1)} text="Bad" />

    <h1>Statistics</h1>
      {!sumaValores ? (<p>No feedback Given</p>)
        :(  
          <Statistics 
          good={good}
          neutral = {neutral}
          bad ={bad}
          average={average}
          positivePercent={positivePercent}
          />
            
          )
      }

    </div>
  )
}

export default App

