import './App.css'
import Note from './components/tsx/Note';
import React, { useState } from 'react';

type NoteData = {
  id: number;
  completed: boolean;
};

function App() {
  const [notes, setNotes] = useState<NoteData[]>([]);

  const addNote = () => {
    setNotes(prev => [...prev, { id: Date.now(), completed: false }]);
  };

  const deleteNote = (id: number) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  const toggleComplete = (id: number) => {
    setNotes(prev =>
      prev.map(note =>
        note.id === id ? { ...note, completed: !note.completed } : note
      )
    );
  };

  return (
    <>
      <div className="app-container">
        <div className="button-container">
          <button onClick={addNote}>
            Add Post-it
          </button>
        </div>
        <div className="notes-scroll-area">
          <div className="notes-container">
            {notes.map(note => (
              <Note
                key={note.id}
                id={note.id}
                completed={note.completed}
                onDelete={deleteNote}
                onToggleComplete={toggleComplete}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App