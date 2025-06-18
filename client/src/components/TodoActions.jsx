// Component: components/TodoActions.jsx
import React from "react";

const TodoActions = ({ onAddTodo, setSearchTerm }) => {
    return (
        <div className="flex justify-between items-center">
            <button
                onClick={onAddTodo}
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
                + Add Todo
            </button>
            <div className="flex">
                <input
                    type="text"
                    placeholder="Search todos..."
                    className="border px-3 py-2 rounded-l-md"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="bg-blue-600 text-white px-4 rounded-r-md">
                    🔍
                </button>
            </div>
        </div>
    );
};

export default TodoActions;