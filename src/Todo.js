import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import FormTodo from './FormTodo';


function Todo({todos,completeTodo,removeTodo,updateTodo}) {

  const [edit,setEdit]=useState({
    id:null,
    value:""
  })

const style1={
  textDecoration:"line-through",
  opacity: "0.4",
  width:"90%",
  padding: "16px",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "4px auto",
  marginTop:"20px",
  height:"50px",
 
 
}

const style2={
  width:"90%",
  padding: "16px",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "4px auto",
  marginTop:"20px",
  height:"50px",

}




const submitUpdate=value=>{
  updateTodo(edit.id,value)
  setEdit({
    id:null,
    value:'',
  })
  
}
if(edit.id){
  return <FormTodo edit={edit} onSubmit={submitUpdate}/>
}




  return todos.map((todo,index)=>(
    <Container
    style={
      todo.isComplete? style1
      :
    style2
  }
    key={index}
    >
        <div
        key={todo.id}
        onClick={()=>{
         
          completeTodo(todo.id)}}
          >
            {todo.text}
        </div>
        <IconContent>
        <HighlightOffIcon
        onClick={()=>removeTodo(todo.id)}

        style={{cursor:"pointer"}}
        />
        <EditIcon
         onClick={()=>setEdit({id:todo.id,value:todo.text})}
         style={{cursor:"pointer"}}
        />
        </IconContent>
    </Container>
  ))
}

export default Todo


const Container=styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 118, 20, 1) 0%,
    rgba(255, 84, 17, 1) 100%
  );
:nth-child(4n + 1) {
  background: linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
  );
  @media(max-width:763px){
  
  max-width:25rem;
  padding:0 10px;
}
@media(max-width:463px){
  
  max-width:19rem;
  padding:0 10px;
}
}

:nth-child(4n + 2) {
  background: linear-gradient(
    90deg,
    rgba(255, 12, 241, 1) 0%,
    rgba(250, 0, 135, 1) 100%
  );
}

:nth-child(4n + 3) {
  background: linear-gradient(
    90deg,
    rgba(20, 159, 255, 1) 0%,
    rgba(17, 122, 255, 1) 100%
  );
}
div{
    
  
    height:20px;
    
    font:inherit;
}

`


const IconContent=styled.div`
display:flex;
align-items:center;
padding:2px;
gap:5px;
`
