import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

export const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(NotesContext);

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
};