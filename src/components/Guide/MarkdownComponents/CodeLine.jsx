import React from 'react';
import './CodeLine.css';

function CodeLine({ lineNumber, highlightedContent }) {
  return (
    <div className="CodeLine">
      <span className="LineNumber">{lineNumber}</span>
      <code 
        className="LineContent"
        dangerouslySetInnerHTML={{ __html: highlightedContent }}
      />
    </div>
  );
}

export default CodeLine;