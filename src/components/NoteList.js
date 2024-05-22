import React from 'react';

const NoteList = ({ notes, selectNote, deleteNote }) => {
  return (
    <div className="space-y-2">
      {notes.map((note, index) => (
        <div key={index} className="flex justify-between items-center border border-gray-300 p-2 rounded">
          <div onClick={() => selectNote(index)} className="flex-1 cursor-pointer">{note.slice(0, 20)}...</div>
          <button onClick={() => deleteNote(index)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
