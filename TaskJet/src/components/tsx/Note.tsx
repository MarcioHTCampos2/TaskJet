import React, { useState } from 'react';
import '../css/Note.css';

interface NoteProps {
  id: number;
}

const Note: React.FC<NoteProps> = ({ id }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  return (
    <div className="note">
      <input
        className="note-title"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        className="note-text"
        placeholder="Text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </div>
  );
};

export default Note;