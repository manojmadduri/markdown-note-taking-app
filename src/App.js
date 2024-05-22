import React, { useState, useEffect } from 'react';
import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';
import Preview from './components/Preview';
import './index.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  const saveNote = (note) => {
    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const selectNote = (index) => {
    setCurrentNote(notes[index]);
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Markdown Note-Taking App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <NoteEditor saveNote={saveNote} currentNote={currentNote} />
        </div>
        <div>
          <NoteList notes={notes} selectNote={selectNote} deleteNote={deleteNote} />
          {currentNote && <Preview note={currentNote} />}
        </div>
      </div>
    </div>
  );
};

export default App;
