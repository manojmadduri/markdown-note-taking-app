import React from 'react';
import ReactMarkdown from 'react-markdown';

const Preview = ({ note }) => {
  return (
    <div className="p-4 border border-gray-300 rounded">
      <ReactMarkdown>{note}</ReactMarkdown>
    </div>
  );
};

export default Preview;
