import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotesProvider } from './context/NotesContext';
import { Home } from './pages/Home';
import { CreateNote } from './pages/CreateNote';
import { NoteDetail } from './pages/NoteDetail';

function App() {
  return (
    <NotesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/note/:id" element={<NoteDetail />} />
        </Routes>
      </Router>
    </NotesProvider>
  );
}

export default App;