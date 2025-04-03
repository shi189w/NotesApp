import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

export const NoteDetail = () => {
  const { id } = useParams();
  const { notes, deleteNote, darkMode } = useContext(NotesContext);
  const note = notes.find(note => note.id === Number(id));

  if (!note) {
    return (
      <div className={`min-h-screen p-4 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4 dark:text-white">Note not found</h1>
          <Link to="/" className="text-blue-500 dark:text-blue-400">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen p-4 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="text-blue-500 dark:text-blue-400">
            ← Back to Notes
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-4 dark:text-white">{note.title}</h1>
        <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line mb-8">
          {note.content}
        </p>
        
        <button
          onClick={() => {
            deleteNote(note.id);
            window.location.href = '/';
          }}
          className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete Note
        </button>
      </div>
    </div>
  );
};