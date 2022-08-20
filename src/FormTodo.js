import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
function FormTodo(props) {

    const [input,setInput]=useState(props.edit? props.edit.value:'')
    const handleChange=e=>{
        setInput(e.target.value)
    }




    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus()
    })



    const handlsubmit=e=>{
        e.preventDefault();
        props.onSubmit({

            id:Math.floor(Math.random()*10000),
            text:input
        });
       setInput('');
    }



  return (
    < InputContent onSubmit={handlsubmit}>
    {
    props.edit?(
        <>
        <input 
      type="text"
      placeholder='update your item'
      value={input}
      name="text"
      onChange={handleChange}
      ref={inputRef }
      />
      <button>update</button>
      </>
      )
      :
      (<>
          <input 
        type="text"
        placeholder='add to do'
        value={input}
        name="text"
        onChange={handleChange}
        ref={inputRef }
        />
        <button>Add Todo</button>
        </>
        )}

</InputContent>
  )
}

export default FormTodo


const InputContent=styled.form`
display: flex;
flex-direction: row;

position: relative;
margin-top:15px;
min-width:24rem;

@media(max-width:763px){
  min-width:23rem;
  
  padding:0 10px;
}
@media(max-width:463px){
  
  
  min-width:19rem;
  padding:0 10px;
}

input{
  padding: 14px 32px 14px 16px;
  border-radius: 4px 0 0 4px;
  border: 2px solid #5d0cff;
  outline: none;
  flex:1;
  background: transparent;
  color: #fff;
}
button{
  padding: 16px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  background: linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
  );
  color: #fff;
  text-transform: capitalize;

  }



`