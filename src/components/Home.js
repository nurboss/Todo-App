import React from 'react';
import '../style/main.css';
import DisplayTodo from './DisplayTodo';
import Todo from './Todo';

const Home = () => {
    return (
    <div className='app'>
      <h1>Todo List</h1>
      <Todo></Todo>
      <DisplayTodo></DisplayTodo>
    </div>
    );
};

export default Home;