import React, { useState } from 'react';

function App() {
  const [files, setFiles] = useState([]);
  const [prompt, setPrompt] = useState('');

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleUpload = async () => {
    if (files.length === 0) return;
    // Implement the logic to upload files and prompt to your backend here
    alert('Files and prompt ready to be uploaded!');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Data Transformation Portal</h1>
      <input type="file" multiple onChange={handleFileChange} />
      <br /><br />
      <textarea
        placeholder="Enter your prompt here"
        value={prompt}
        onChange={handlePromptChange}
        rows="5"
        cols="50"
      />
      <br /><br />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default App;
