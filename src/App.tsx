import { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoItem from "./components/TodoItem";

function App() {

  const [todos, setTodos] = useState([
    {
      "id": 1,
      "title" : "Make a book and cover",
      "description" : "Some random description...",
      "isCompleted" : true
    },
    {
      "id": 2,
      "title" : "Make a book and cover",
      "description" : "Some random description...",
      "isCompleted" : true
    }
  ]);



  return (
    <>
      <div className="mt-5 max-w-md mx-auto bg-white rounded p-4 shadow">
        <h1 className="text-2xl font-semibold mb-4 uppercase text-red-600">Todo List</h1>
        <ul className="space-y-2">
         {todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
        </ul>

       <CreateTodo />
      </div>
    </>
  );
}

export default App;
