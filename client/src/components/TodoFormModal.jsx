// Component: components/TodoFormModal.jsx
import React, { useState } from "react";
import { useSelector } from "react-redux";

const TodoFormModal = ({ isOpen, onClose, onSubmit, initialData = {} }) => {
  const { loading, error } = useSelector((state) => state.todos);
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [priority, setPriority] = useState(initialData?.priority || "medium");
  const [tags, setTags] = useState(initialData?.tags?.join(", ") || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, priority, tags: tags.split(",").map(t => t.trim()) });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">{initialData?._id ? "Edit Todo" : "New Todo"}</h2>
        <input value={title} onChange={e => setTitle(e.target.value)} className="w-full mb-3 p-2 border rounded" placeholder="Title" required />
        <textarea value={description} onChange={e => setDescription(e.target.value)} className="w-full mb-3 p-2 border rounded" placeholder="Description" />
        <select value={priority} onChange={e => setPriority(e.target.value)} className="w-full mb-3 p-2 border rounded">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <input value={tags} onChange={e => setTags(e.target.value)} className="w-full mb-3 p-2 border rounded" placeholder="Tags (comma separated)" />
        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded disable">{loading ? "Saving..." : "Save"}</button>
        </div>
      </form>
    </div>
  );
};

export default TodoFormModal;