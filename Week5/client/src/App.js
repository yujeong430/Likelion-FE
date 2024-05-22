import { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Line = styled.div`
  width: 500px;
  border-bottom: 2px solid grey;
  margin: 30px 0px 20px 0px;
`
const InputContainer = styled.form`
  display: flex;
  align-items: center;
`

const Input = styled.input`
  width: 350px;
  height: 25px;
  background-color: #FEFFE7;
  border: 2px solid grey;
  border-radius: 5px;
  padding: 0px 5px;
`

const CheckBox = styled.input`
  width: 30px;
  height: 30px;
  accent-color: #00d26a;
  margin: 0px 5px;
`

const SubmitBtn = styled.button`
  height: 30px;
`

const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-bottom: 10px;
`

const TodoId = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 12px;
  border-right: 1.5px solid grey;
`

const SERVER_URL = 'http://localhost:4000/api/todo';
function App() {
  const [todoList, setTodoList] = useState(null);

  const fetchData = async() => {
    const response = await axios.get(SERVER_URL);
    setTodoList(response.data);
    
    /*fetch('http://localhost:4000/api/todo')
    .then((response) => response.json())
    .then((data) => setTodoList(data));*/
  };
  
  useEffect(()=> { fetchData() }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    await axios.post(SERVER_URL, {text, done});
    fetchData();

    /*fetch('http://localhost:4000/api/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      text,
      done,
      }),
    }).then(() => fetchData());*/
  };

  return (
    <Container className="App">
      <h1>TODO LIST</h1>
      <InputContainer onSubmit={onSubmitHandler}>
        <Input name="text" placeholder="할 일을 입력하세요!"/>
        <CheckBox name="done" type='checkbox'/>
        <SubmitBtn type='submit'>추가</SubmitBtn>
      </InputContainer>
      <Line/>
      {todoList?.map((todo) => (
        <TodoItem key={todo.id} style={{display: 'flex'}}>
          <TodoId>{todo.id}</TodoId>
          <div>{todo.text}</div>
          <div>{todo.done ? '✅' : '❎'}</div>
        </TodoItem>
      ))}
    </Container>
  );
}

export default App;
