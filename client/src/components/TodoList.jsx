// Component: components/TodoList.jsx

import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

const TodoList = ({ onEditTodo, onAddNote }) => {
    const todos = useSelector((state) => state.todos.list);

    return (
        <div className="bg-white rounded-lg shadow p-4">
            {todos.length === 0 ? (
                <div>No todos found.</div>
            ) : (
                todos.map((todo) => (
                    <TodoCard
                        key={todo._id}
                        todo={todo}
                        onEdit={() => onEditTodo(todo)}
                        onAddNote={() => onAddNote(todo._id)}
                    />
                ))
            )}
        </div>
    );
};

export default TodoList;