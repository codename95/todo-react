import { useState } from "react";

const CreateTodo = () => {
  const [todo, setTodo]: any = useState({});

  const handleAddTodo = () => {};

  return (
    <form className="mt-4">
      <input
        type="text"
        placeholder="New Todo"
        className="border p-2 w-full"
        value={todo.title}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
    </form>
  );
};

export default CreateTodo;
