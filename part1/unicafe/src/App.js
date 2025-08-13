import { useState } from 'react'

const Button = ({handleClick,text}) => {
  return <button onClick={handleClick}>{text}</button>
}

const StatisticLine = ({text,value}) => {
  if(text === 'positive') return <tr><td>{text}</td><td>{value}%</td></tr>
  return <tr><td>{text}</td><td>{value}</td></tr>
}

const Statistics = (props) => {
  if(props.good === 0 && props.neutral === 0 && props.bad === 0){
    return <p>No feedback given</p>
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good}></StatisticLine>
        <StatisticLine text="neutral" value={props.neutral}></StatisticLine>
        <StatisticLine text="bad" value={props.bad}></StatisticLine>
        <StatisticLine text="all" value={props.good+props.neutral+props.bad}></StatisticLine>
        <StatisticLine text="average" value={(props.good-props.bad)/(props.good+props.neutral+props.bad)}></StatisticLine>
        <StatisticLine text="positive" value={(props.good)/(props.good+props.neutral+props.bad)*100}></StatisticLine>
      </tbody>
    </table>
  )
}


const App = () => {
  // salve os cliques de cada botão em seu próprio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good+1);
  }

  const handleClickNeutral = () => {
    setNeutral(neutral+1);
  }

  const handleClickBad = () => {
    setBad(bad+1);
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleClickGood} text='good'></Button>
      <Button handleClick={handleClickNeutral} text='neutral'></Button>
      <Button handleClick={handleClickBad} text='bad'></Button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App