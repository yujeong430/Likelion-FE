import { useState, useEffect } from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TodoContainer = styled.div`
  background-color: #DDF7FB;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 750px;
  min-height: 500px;
  border-radius: 20px;
  margin-top: 50px;
  @media (max-width: 600px) {
    width: 400px;
    min-height: 800px;
  }
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`

const Input = styled.input`
  width: 450px;
  height: 35px;
  margin-right: 10px;
  border-radius: 10px;
  padding: 0px 5px;
  border-color: grey;
  @media (max-width: 600px) {
    width: 300px;
  }
`

const InputBtn = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  font-size: 20px;
  border-color: grey;
`

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  @media (max-width: 600px) {
    width: 350px;
  }
`

const TodoList = styled.li`
  width: 100%;
  display: flex;
  margin-top: 15px;
  font-size: 20px;
  cursor: pointer;
  
`
const TodoListText = styled.span`
  font-size: 20px;
  color: ${(props) => props.completed === 'true' ? 'grey' : 'black'};
  text-decoration: ${(props) => props.completed === 'true' ? 'line-through' : 'none'};
`
const DeleteBtn = styled.button`
  font-size: 20px;
  background-color: transparent;
  border: none;;
`


function App() {
  
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = window.localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onChange = event => {
    setTodo(event.target.value);
  };

  const addTodo = () => {
    if(todo === "")
      return;
    setTodos([...todos, {id:uuid(), task: todo, completed: false}]);
    setTodo("");
  };
  
  const onKeyDown = event => {
    if(event.keyCode === 13) {
      addTodo();
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleComplete = (id) => {
    setTodos((todos) =>
        todos.map((todo => todo.id === id? {...todo, completed: !todo.completed} : todo)));
  };

  return (
    <Body>
      <TodoContainer>
        <h1>Todo List!</h1>
        <InputContainer>
          <Input type="text" placeholder="할 일을 입력하세요!" onChange={onChange} onKeyDown={onKeyDown} value = {todo}/>
          <InputBtn onClick={addTodo}>+</InputBtn>
        </InputContainer>
        <TodoListContainer>
          {todos.map((item, index) =>(
            <TodoList key={item.id} completed={item.completed.toString()} onClick={()=> toggleComplete(item.id)}> 
              <TodoListText completed={item.completed.toString()}>{item.task}</TodoListText>
              <DeleteBtn onClick={() => deleteTodo(index)}>🗑️</DeleteBtn>
            </TodoList>))}
        </TodoListContainer>
      </TodoContainer>
    </Body>
  );
}

export default App;