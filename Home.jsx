import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NotesContext } from '../context/NotesContext';
import { NoteCard } from '../components/NoteCard';
import { ThemeToggle } from '../components/ThemeToggle';

export const Home = () => {
  const { notes, loading, deleteNote, darkMode } = useContext(NotesContext);

  return (
    <div className={`min-h-screen p-4 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center my-8 dark:text-blue">
          My Notes
        </h1>
        
        <Link
          to="/create"
          className="block w-full mb-8 p-3 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600"
        >
          Create New Note
        </Link>

        {loading ? (
          <p className="text-center dark:text-blue">Loading...</p>
        ) : (
          <div className="grid gap-4">
            {notes.map(note => (
              <NoteCard key={note.id} note={note} onDelete={deleteNote} />
            ))}
          </div>
        )}
      </div>
      <ThemeToggle />
    </div>
  );
};