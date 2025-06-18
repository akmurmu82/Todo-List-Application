// Component: components/TodoList.jsx
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const TodoList = ({ onEditTodo, onAddNote, handleDeleteTodo, searchTerm = "" }) => {
    const todos = useSelector((state) => state.todos.list);

    const filteredTodos = todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-white rounded-lg shadow p-4">
            {filteredTodos.length === 0 ? (
                <div>No todos found.</div>
            ) : (
                filteredTodos.map((todo) => (
                    <TodoCard
                        key={todo._id}
                        todo={todo}
                        onEdit={() => onEditTodo(todo)}
                        onAddNote={() => onAddNote(todo._id)}
                        onDelete={(id) => handleDeleteTodo(id)}
                    />
                ))
            )}
        </div>
    );
};

export default TodoList;