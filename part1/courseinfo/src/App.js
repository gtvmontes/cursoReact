const Header = (props) => {
  return <h1>{props.course.name}</h1>;
}

const Part = (props) => {
  return <p>{props.part} {props.exercise}</p>;
}

const Content = (props) => {
  const parts = props.course.parts;
  return (
    <>
      <Part part={parts[0].name} exercise={parts[0].exercises} />
      <Part part={parts[1].name} exercise={parts[1].exercises} />
      <Part part={parts[2].name} exercise={parts[2].exercises} />
    </>
  );
}

const Total = (props) => {
  const parts = props.course.parts;
  const totalNumber = parts[0].exercises + parts[1].exercises + parts[2].exercises;
  return <p>Number of exercises {totalNumber}</p>
}

const App = () => {
  const course = {
    name: 'Desenvolvimento de aplicação Half Stack',
    parts: [
      {
        name: 'Fundamentos da biblioteca React',
        exercises: 10
      },
      {
        name: 'Usando props para passar dados',
        exercises: 7
      },
      {
        name: 'Estado de um componente',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App;