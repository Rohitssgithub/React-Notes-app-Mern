import React from 'react';
import './App.css'
import Todos from './components/Todos';
import TodoFrom from './components/TodoFrom';
const App = () => {
  return (
    <>
      <TodoFrom />
      <Todos />
    </>
  )
}

export default App
