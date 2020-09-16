import React, {Component} from 'react'
import TodoList from './Components/TodoList';

class App extends Component {
  
   
  render() { 
    return ( 
      <div className="todo-app container">
            <TodoList />  
                   
      </div>
    );
  }
}
 
export default App;
