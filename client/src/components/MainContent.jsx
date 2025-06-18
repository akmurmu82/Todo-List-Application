// Component: components/MainContent.jsx
import { useState } from "react";
import TodoActions from "./TodoActions";
import TodoList from "./TodoList";
import Pagination from "./Pagination";

const MainContent = ({ onAddTodo, onEditTodo, onDeleteTodo, onAddNote }) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <section className="flex-1 flex flex-col gap-4">
            <TodoActions onAddTodo={onAddTodo} setSearchTerm={setSearchTerm} />
            <TodoList onEditTodo={onEditTodo} handleDeleteTodo={onDeleteTodo} onAddNote={onAddNote}
                searchTerm={searchTerm} />
            <Pagination />
        </section>
    );
};

export default MainContent;