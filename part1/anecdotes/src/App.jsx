import { useState } from 'react'
import RandomButton from './components/RandomButton'
import VotesButton from './components/votesButton'
import DisplayVotes from './components/DisplayVotes'
import DisplayMaxVotes from './components/DisplayMaxVotes'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, votesSelected] = useState(Array(anecdotes.length).fill(0))

  const getRandomNum = () => {
    const randomNum = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNum)
  }


  const votesAnecdotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    votesSelected(copy)
  }

  const maxVotes = Math.max(...votes)
  const maxVotesIndex = votes.indexOf(maxVotes)

  
    return (
    <div>
      {anecdotes[selected]}
      <DisplayVotes addVotes={votes[selected]} />
      <RandomButton handleClick={getRandomNum} />
      <VotesButton handleClick={votesAnecdotes} />
      <DisplayMaxVotes anecdotes={anecdotes} maxVotesIndex={maxVotesIndex} />
    </div>
  )
}

export default App