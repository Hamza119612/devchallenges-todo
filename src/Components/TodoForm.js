import React, { useState,useEffect, useRef } from "react";
function TodoForm(props) {
  const [input, setInput] = useState("");
  const ref = useRef(null)
  const handleCHange = (e) => {
      setInput(e.target.value)
  }

  useEffect(() => {
    ref.current.focus()
  })
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
        ref={ref}
      />
      <button className='todo-button' type="submit"> Submit</button>
    </form>
  );
}

export default TodoForm;
