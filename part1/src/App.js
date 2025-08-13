const Hello = (props) => {
  console.log(props);
  return(
    <div>
      <p>Olá {props.nome}, você tem {props.idade} anos.</p>
    </div>
  )
}

const App = () => {
  return(
    <>
      <h1>Olá a todos!</h1>
      <Hello nome='George' idade='10'/>
      <Hello nome='Daisy' idade={16+10}/>
    </>
  )
}

export default App;