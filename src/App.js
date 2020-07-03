import React, { useState  } from "react";  
import Items from './items' 
import { useForm } from "react-hook-form";
import styled from 'styled-components';
 import 'bootstrap/dist/css/bootstrap.css';  
 
function App() {
  const { register, handleSubmit  } = useForm();
  const [items, setItems] = useState(["first", "second"]); 
  const onSubmit = data => { 
   setItems(items => items.concat(data));  
 
  };  
  const Buttons = styled.button`
  margin :10em;
  margin-left:50%;
  width:10%;
  border : 1px solid #2FA4E7;
  background: none;
 
`;
const Inputs = styled.input`
margin-left:20em;
  padding: 0.5em; 
  border: none  ;
  border-radius: none;
  border-bottom: 1px solid #2FA4E7;
  margin-bottom: 1em;
  width:70%;
`;

const Labels = styled.label`

  margin-left:20em;
  padding: 0.5em; 
  border: none  ; 
  margin-bottom: 1em;
  color:#2FA4E7;
`;

const Textareas = styled.textarea`
  width:70%;
  margin-left: 20em;
  padding: 0.5em; 
  margin-bottom: 2em; 
  border: none  ;
  border-radius: none;
  border-bottom: 1px solid #2FA4E7;
`;

const Lis = styled.li`
    list-style-type: none;
`;
const Titl = styled.h1({ 
  marginTop: "2em",
  textAlign: "center"

});
const Card = styled.div({ 
  color:  "palevioletred",
  borderRadius: '3px'
 });  
 const Formscard = styled.form`
 marginTop: "10em",
 display: block; 
 `;
 
  return (
    <>
    <div>  
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="_blank">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="_blank">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="_blank">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="_blank">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="_blank">About</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</div>
    <Card>
      <Titl>Videos List</Titl> 
      <Formscard onSubmit={handleSubmit(onSubmit)}>
        <Lis>
      <div className="form-group">
      <Labels className="col-form-label" htmlFor="inputDefault">Name</Labels>
      <Inputs   name="Name" ref={register({
      required: true,
      maxLength: 20,
      pattern: /^[A-Za-z]+$/i
      })} type="text" className="form-control" placeholder="input Name" id="inputDefault"/>
      </div>  
      </Lis>
      <Lis>
  
      <div className="form-group">
      <Labels htmlFor="exampleTextarea">Description</Labels>
      <Textareas   name="Description"  ref={register({
      required: true, 
      })}  className="form-control" id="exampleTextarea" rows="3"></Textareas>
      </div> 
      </Lis> 
      <Lis> 
      <div className="form-group">
      <Labels className="col-form-label" htmlFor="inputDefault">Url</Labels>
      <Inputs   name="Url"   ref={register({ required: true,  })} type="text" className="form-control" placeholder="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" id="inputDefault"     />
      </div>  
      </Lis>
   <div>
      <Buttons type="submit" className="btn btn-primary" > ✅</Buttons>
      </div>
    </Formscard>
      {
        <Items
          items={items} 
          removeHandler={index =>
            setItems(items => items.filter((_, idx) => idx !== index))
          }
        />
      }
      </Card>
      </div>
    </>
  );
}

export default App;
