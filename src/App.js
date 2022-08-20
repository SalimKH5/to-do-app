
import { useState } from 'react';
import './App.css';
import FormTodo from './FormTodo';
import styled from 'styled-components';
import Todo from './Todo';
function App() {


  const [todos,setTodos]=useState([])

  const addTodo=todo=>{
    if(!todo.text ||/^\s*$/.test(todo.text)){
      return
    }

    
    const newTodos=[todo, ...todos]

    setTodos(newTodos)

    console.log(todo,...todos)

  }

  const completeTodo=id=>{
let updateTodo=todos.map(todo=>{
  if(todo.id === id){
    todo.isComplete = !todo.isComplete
  }

 
  return todo
});


setTodos(updateTodo)
}

const removeTodo=id=>{

const removeArr=[...todos].filter(todo=>todo.id!==id)
setTodos(removeArr)
}





const updateTodo=(todoId,newValue)=>{
  if(!newValue.text ||/^\s*$/.test(newValue.text)){
    return
  }

  setTodos(prev=>prev.map(item=>(item.id===todoId ? newValue:item)))
}

  return (
    <Container>
      <Content>
      <h1>What's the plan for Today</h1>
     <FormTodo onSubmit={addTodo}/>
      <Todo removeTodo={removeTodo} todos={todos} completeTodo={completeTodo} 
      updateTodo={updateTodo}
      />
      </Content>
    </Container>
  );
}

export default App;


const Container =styled.div`
width:100vw;
height:100%;
display:flex;
justify-content:start;
flex-direction:column;
background: linear-gradient( 
  90deg,rgba(48, 16, 255, 1) 0%,
  rgba(100, 115, 255, 1) 100%);
@media(max-width:763px){
 
  justify-content:flex-start;
  
}


`


const Content =styled.div`
max-width:70rem;
margin: 128px auto;
border-radius: 10px;
padding-bottom: 32px;



height:auto;
background: #161a2b;
text-align:center;
box-sizing:border-box;
color:#ffff;
display:flex;
align-items:center;
flex-direction:column;
margin-top:30px;
@media(max-width:763px){
  
  max-width:25rem;
  padding:0 10px;
}
@media(max-width:463px){
  
  max-width:19rem;
  padding:0 10px;
}

h1{
  margin-top:15px;
  padding:20px;
}

`
