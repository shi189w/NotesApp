import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts?_limit=5'
        );
        setNotes(response.data.map(note => ({
          id: note.id,
          title: note.title,
          content: note.body
        })));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching notes:', error);
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const addNote = (newNote) => {
    setNotes([...notes, { 
      id: Date.now(), 
      ...newNote 
    }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        loading,
        darkMode,
        addNote,
        deleteNote,
        toggleDarkMode
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};