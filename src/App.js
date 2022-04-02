import './App.css';
import Header from './MyComponents/Header'
import {AddTodos} from './MyComponents/AddTodos'
import {Todos} from './MyComponents/Todos'
import {About} from './MyComponents/About'
import {Footer} from './MyComponents/Footer'
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [todos, setTodos] =  useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to buy the vegetable 1."
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the market to get the item 2."
    },
    {
      sno: 3,
      title: "Go to the movie",
      desc: "You need to go to the market to wath the flim 3."
    }
  ]);

  const onDelete = (todo) => {
    console.log("I am on delete", todo);
    setTodos(todos.filter( (val) =>{
      return val !== todo;
    }));
  }

  const addTodo = (title, desc) => {
    console.log("I am on add", title, desc);
    let sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, newTodo]);
  }

  return (
    <>
      <Router>
        <Header title="Todos List"/>
          <Routes>
          <Route exact path="/" element={
              <>
                <AddTodos addTodo={addTodo}/>
                <Todos todos={todos} onDelete={onDelete}/>
              </>
            }>
          </Route>
          <Route exact path="/about" element={<About />} ></Route>
          </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
