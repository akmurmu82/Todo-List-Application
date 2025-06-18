// Component: components/TodoCard.jsx

const TodoCard = ({ todo, onEdit, onAddNote, onDelete }) => {
    return (
        <div className="flex justify-between border-b py-4">
            <div>
                <h3 className="text-lg font-semibold">{todo.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                    <span className={`priority-${todo.priority}`}>{todo.priority}</span>
                    {todo.tags.map((tag) => (
                        <span
                            key={tag}
                            className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs"
                        >
                            {tag}
                        </span>
                    ))}
                    {todo.assignedUsers?.map((u) => (
                        <span
                            key={u}
                            className="bg-gray-200 px-2 py-1 rounded-full text-xs"
                        >
                            {u}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex gap-2 items-start">
                <button title="Note" onClick={onAddNote}>📝</button>
                <button title="Edit" onClick={onEdit}>✏️</button>
                <button title="Delete" onClick={() => onDelete(todo._id)}>🗑️</button>
            </div>
        </div>
    );
};

export default TodoCard;
