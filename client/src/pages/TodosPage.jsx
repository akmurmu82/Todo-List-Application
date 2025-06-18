// ...previous content remains unchanged...

// Component: pages/TodosPage.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import TodoFormModal from "../components/TodoFormModal";
import NoteModal from "../components/NoteModal";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, editTodo, createNote } from "../redux/todosSlice";

const TodosPage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);

  const [isTodoModalOpen, setIsTodoModalOpen] = useState(false);
  const [editTodoData, setEditTodoData] = useState(null);

  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  const [activeTodoId, setActiveTodoId] = useState(null);

  const handleAddTodo = () => {
    setEditTodoData(null);
    setIsTodoModalOpen(true);
  };

  const handleEditTodo = (todo) => {
    setEditTodoData(todo);
    setIsTodoModalOpen(true);
  };

  const handleSubmitTodo = (todoData) => {
    // console.log(todoData, currentUser)
    if (!currentUser) return;
    if (editTodoData) {
      dispatch(editTodo({ id: editTodoData._id, todo: todoData }));
    } else {
      dispatch(createTodo({ user: currentUser.username, todo: todoData }));
    }
    setIsTodoModalOpen(false);
  };

  const handleOpenNote = (todoId) => {
    setActiveTodoId(todoId);
    setIsNoteModalOpen(true);
  };

  const handleSubmitNote = (noteContent) => {
    if (!activeTodoId) return;
    dispatch(createNote({ id: activeTodoId, note: { content: noteContent } }));
    setIsNoteModalOpen(false);
  };

  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex p-4 gap-4">
        <Sidebar />
        <MainContent
          onAddTodo={handleAddTodo}
          onEditTodo={handleEditTodo}
          onAddNote={handleOpenNote}
        />
      </main>

      <TodoFormModal
        isOpen={isTodoModalOpen}
        onClose={() => setIsTodoModalOpen(false)}
        onSubmit={handleSubmitTodo}
        initialData={editTodoData}
      />

      <NoteModal
        isOpen={isNoteModalOpen}
        onClose={() => setIsNoteModalOpen(false)}
        onSubmit={handleSubmitNote}
      />
    </div>
  );
};

export default TodosPage;
