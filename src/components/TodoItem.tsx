const TodoItem = ({ todo }: any) => {
  return (
    <li className="flex justify-between items-center border-b py-2">
      <div>
        <span className="text-lg font-medium">
          {todo.title} -{" "}
          <span className="text-xs text-cyan-700  uppercase pl-5">
            {todo.isCompleted ? "Completed" : "Pending"}
          </span>
        </span>
        <p className="text-gray-500">{todo.description}</p>
      </div>
      <button className="text-sm text-red-500 hover:text-red-700 font-bold">Delete</button>
    </li>
  );
};

export default TodoItem;
