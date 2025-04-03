import { Link } from 'react-router-dom';

export const NoteCard = ({ note, onDelete }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-4 transition-all hover:shadow-lg">
      <h3 className="text-xl font-bold dark:text-white mb-2">{note.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {note.content.substring(0, 100)}...
      </p>
      <div className="flex justify-between">
        <Link
          to={`/note/${note.id}`}
          className="text-blue-500 hover:text-blue-700 dark:text-blue-400"
        >
          View
        </Link>
        <button
          onClick={() => onDelete(note.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};