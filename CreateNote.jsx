import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotesContext } from '../context/NotesContext';

export const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addNote, darkMode } = useContext(NotesContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    addNote({ title, content });
    navigate('/');
  };

  return (
    <div className={`min-h-screen p-4 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 dark:text-white">Create Note</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 dark:text-white">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
              required
            />
          </div>
          
          <div>
            <label className="block mb-2 dark:text-white">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="6"
              className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Save Note
          </button>
        </form>
      </div>
    </div>
  );
};