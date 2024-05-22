import React, { useState } from 'react';
import { saveAs } from 'file-saver';

const NoteEditor = ({ saveNote, currentNote }) => {
  const [note, setNote] = useState(currentNote || '');

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const handleSave = () => {
    saveNote(note);
  };

  const handleExport = () => {
    const blob = new Blob([note], { type: 'text/markdown;charset=utf-8' });
    saveAs(blob, 'note.md');
  };

  return (
    <div className="flex flex-col">
      <textarea
        value={note}
        onChange={handleChange}
        className="border border-gray-300 p-2 flex-1"
        placeholder="Write your note here..."
      ></textarea>
      <div className="mt-2 flex justify-between">
        <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        <button onClick={handleExport} className="bg-green-500 text-white px-4 py-2 rounded">Export as Markdown</button>
      </div>
    </div>
  );
};

export default NoteEditor;
