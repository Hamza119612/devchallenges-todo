import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");
  const handleCHange = (e) => {
      setInput(e.target.value)
  }
  const handlesubmit =(e) => { 
      e.preventDefault();
      props.onSubmit({ 
         id : Math.floor(Math.random() * 10000 ),
         text : input
      })
      setInput('');
  };
  return (
    <form className="todo-form" onSubmit={handlesubmit} >
      <input
        className="todo-input"
        type="text"
        name="text"
        value={input}
        placeholder="Add a Todo"
        onChange={handleCHange}
      />
      <button className="btn waves-effect waves-light" type="submit"> Submit</button>
    </form>
  );
}

export default TodoForm;
