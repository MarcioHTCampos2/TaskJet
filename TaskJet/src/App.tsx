import './App.css'
import Note from './components/tsx/Note';
import React, { useState } from 'react';

function App() {
  const [notes, setNotes] = useState<number[]>([]);

  const addNote = () => {
    setNotes(prev => [...prev, Date.now()]);
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
            {notes.map(id => (
              <Note key={id} id={id} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App