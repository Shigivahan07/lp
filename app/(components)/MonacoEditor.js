import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const MonacoEditor = () => {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleEditorChange = (value) => {
    setCode(value);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="bg-white shadow p-6 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">CodingGround</h2>
            <p className="text-gray-600">Practice and improve your coding skills</p>
          </div>
          <div>
            <img src="/path-to-your-avatar-image.jpg" alt="User Avatar" className="w-10 h-10 rounded-full" />
          </div>
        </div>
      </header>

      <main className="p-6 w-full">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Monaco Code Editor</h3>
            <select
              value={language}
              onChange={handleLanguageChange}
              className="bg-gray-200 rounded p-2"
            >
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="csharp">C#</option>
              <option value="cpp">C++</option>
            </select>
          </div>

          <Editor
            height="70vh"
            defaultLanguage="javascript"
            language={language}
            value={code}
            onChange={handleEditorChange}
            theme="vs-dark"
            className="rounded shadow"
          />
        </div>
      </main>
    </div>
  );
};

export default MonacoEditor;
