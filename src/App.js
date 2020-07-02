import React, { useState, useEffect } from "react";  
import Items from './items'
import _ from "lodash/fp";
import { useForm } from "react-hook-form";
import styled from 'styled-components'; 

function App() {
  const { register, handleSubmit  } = useForm();
  const [items, setItems] = useState(["first", "second"]); 
  const onSubmit = data => { 
   setItems(items => items.concat(data));  
 
  };  
  const Button = styled.button`

  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin-left: 16em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  width: 160px;
  height: 30px
  
`;


const Inputs = styled.input`
margin-left: 6em;
  padding: 0.5em;
  color:   "palevioletred";
  color: palevioletred;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin-bottom: 1em;
`;

const Textareas = styled.textarea`
margin-left: 3em;
  padding: 0.5em;
  color:   "palevioletred"; 
  margin-bottom: 1em;
  color: palevioletred;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

 
const Titl = styled.h1({ 
  textAlign: "center"

});



const card = styled.div({ 

  color:  "palevioletred",
  borderRadius: '3px'
 

});
 
  return (
    <>
    <card>
      <Titl>Movies List</Titl> 
      <form onSubmit={handleSubmit(onSubmit)}>
        <li>
      <label>Name</label>
      <Inputs
       class="form-control"
        name="Name"
        ref={register({
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i
        })}
      /> 
      </li>
      <li>
      <label>Description</label> 
      
      <Textareas
        name="Description" 
        ref={register({
          required: true, 
        })}
      /> </li> 
      <li>
      <label>Url</label>
      <Inputs
       class="form-control-lg"
        name="Url" 
        value={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"} 
        ref={register({
          required: true, 
        })}
      /> 
      </li>
   
       
      <Button type="submit"   >'New project ✅'</Button>
 
    </form>
      {
        <Items
          items={items} 
          removeHandler={index =>
            setItems(items => items.filter((_, idx) => idx !== index))
          }
        />
      }
      </card>
    </>
  );
}

export default App;
