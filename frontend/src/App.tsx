// frontend/src/App.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [response, setResponse] = useState('');
  const [theme, setTheme] = useState('system');

  const handleGenerate = async () => {
    try {
      const res = await axios.post('http://localhost:5000/generate', { text });
      setResponse(res.data.result);
    } catch (error) {
      console.error('Error generating response:', error);
      setResponse('Error generating response. Please try again.');
    }
  };

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    if(theme === 'system'){
        document.body.classList.add(systemTheme);
    }
    return () => {
        document.body.classList.remove('dark', 'light');
      };
  }, [theme]);

  useEffect(() => {
    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
        if (theme === 'system') {
            const systemTheme = event.matches ? 'dark' : 'light';
            document.body.classList.add(systemTheme);
        }
    };

    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQueryList.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <h1>Gemini API Client</h1>
      <div className='mode-buttons'>
        <button onClick={() => setTheme('light')}>Light</button>
        <button onClick={() => setTheme('dark')}>Dark</button>
        <button onClick={() => setTheme('system')}>System</button>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleGenerate}>Generate</button>
      <div>
        <h2>Response:</h2>
        <pre>{response}</pre>
      </div>
    </div>
  );
}

export default App;
```

```css
/* frontend/src/App.css */
.App {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-family: sans-serif;
  text-align: center;
}

.App.light {
  background-color: #fff;
  color: #000;
}

.App.dark {
  background-color: #222;
  color: #fff;
}

.App.system {
  background: linear-gradient(45deg, #222, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.mode-buttons button {
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #ddd;
  color: #333;
  transition: background-color 0.3s ease;
}

.mode-buttons button:hover {
    background-color: #bbb;
}

textarea {
  width: 80%;
  min-height: 100px;
  margin: 1rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.3s ease;
}

textarea:focus {
    outline: none;
    border-color: #66afe9;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

pre {
    background-color: #eee;
    padding: 1rem;
    border-radius: 4px;
    overflow: auto;
    white-space: pre-wrap;
    width: 80%;
}

.dark pre{
    background-color: #333;
    color: white;
}

.light pre{
    background-color: #eee;
    color: black;
}