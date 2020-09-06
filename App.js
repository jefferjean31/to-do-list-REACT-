import React, { useState, useEffect } from 'react';
import { Button, FormControl, FormLabel, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo.js';
import db from './firebase.js';
import firebase from 'firebase'

function App() {
  const [todos,setTodos]=useState([]);
  const [input,setInput]=useState('');
  
  //useEffect(function,dependices)
  useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id,todo:doc.data().todo})))
    })
  },[]);

  const addtodo =(event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos,input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>hello world </h1>
      <form>
      <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      <Button disabled={!input} type="submit" onClick={addtodo} variant="contained" color="primary">
      Add todo
      </Button>
      {/* <button ></button> */}
      </form>

      <ul>
        {todos.map(todo =>(
          <Todo todo={todo}/>
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
