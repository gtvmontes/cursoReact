import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'Se fazer algo dói, faça isso com mais frequência.',
    'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    'Otimização prematura é a raiz de todo o mal.',
    'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
    'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    'A única maneira de ir rápido é ir bem.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [pontos, setPontos] = useState(Array(anecdotes.length).fill(0))
  const [indexOfHighestValue, setIndexOfHighestValue] = useState(0)

  const selectAnedcodte = () => {
    let randNum = Math.floor(Math.random()*anecdotes.length);
    setSelected(randNum);
  }

  const addVotes = () => {
    const copia = [...pontos];
    copia[selected] += 1;
    setPontos(copia);

    const maxValue = Math.max(...copia);
    console.log(maxValue);
    const index = copia.indexOf(maxValue);
    setIndexOfHighestValue(index);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {pontos[selected]} votes</p>
      <button onClick={addVotes}>vote</button>
      <button onClick={selectAnedcodte}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[indexOfHighestValue]}</p>
      <p>has {pontos[indexOfHighestValue]} votes</p>
    </div>
  )
}

export default App