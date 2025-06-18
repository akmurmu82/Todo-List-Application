// Component: components/MainContent.jsx
import React from "react";
import TodoActions from "./TodoActions";
import TodoList from "./TodoList";
import Pagination from "./Pagination";

const MainContent = ({ onAddTodo, onEditTodo, onAddNote }) => {
    return (
        <section className="flex-1 flex flex-col gap-4">
            <TodoActions onAddTodo={onAddTodo} />
            <TodoList onEditTodo={onEditTodo} onAddNote={onAddNote} />
            <Pagination />
        </section>
    );
};

export default MainContent;