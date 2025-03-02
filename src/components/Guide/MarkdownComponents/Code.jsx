import React from 'react';
import './Code.css';

function Code({ children, language }) {
  // 只有当语言不是C时才显示语言标签
  const showLanguage = language && language !== 'c';
  
  return (
    <div className="CodeBlock">
      {showLanguage && (
        <div className="CodeHeader">
          <span className="CodeLanguage">{language}</span>
        </div>
      )}
      <pre className="CodeContent">
        {children}
      </pre>
    </div>
  );
}

export default Code;