import React, { useState } from 'react';
import '../css/Note.css';

interface NoteProps {
  id: number;
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
  completed: boolean;
}

const Note: React.FC<NoteProps> = ({ id, onDelete, onToggleComplete, completed }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  return (
    <div className={`note${completed ? ' note-completed' : ''}`}>
      <input
        className="note-title"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        disabled={completed}
      />
      <textarea
        className="note-text"
        placeholder="Text"
        value={text}
        onChange={e => setText(e.target.value)}
        disabled={completed}
      />
      <div className="note-actions">
        <button onClick={() => onToggleComplete(id)}>
          {completed ? 'Desmarcar' : 'Concluída'}
        </button>
        <button onClick={() => onDelete(id)}>
          Deletar
        </button>
      </div>
    </div>
  );
};

export default Note;