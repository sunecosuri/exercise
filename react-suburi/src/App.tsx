import React from 'react';
import logo from './logo.svg';
import './App.css';

type HelloProps = {
  name: string
  age: number
}
const Hello = (props: HelloProps) => {
  return (
    <div>
      <p>Hello { props.name }</p>
      <p>{ props.age } years old</p>
    </div>
  )
}
const App: React.FC = () => {
  const now = new Date()
  const age = 10

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {now.toDateString()}
        </p>
        <Hello name="test" age={3} />
        <Hello name="sample" age={age} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App;
