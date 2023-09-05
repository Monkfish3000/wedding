import { useState } from 'react';

import logo from '/jandm.png';

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <main
        className={`h-screen w-screen ${
          darkMode ? 'bg-pink' : 'bg-white opacity-75'
        } flex flex-col items-center justify-center`}
      >
        <img
          src={logo}
          className="logo"
          alt="Logo"
          onClick={() => setDarkMode(!darkMode)}
        />
        <h1
          className={`${
            darkMode
              ? 'text-white text-4xl opacity-80 border-b border-white'
              : 'text-light dark:text-dark text-4xl border-b border-pink'
          }`}
        >
          Michael & Jade
        </h1>
      </main>
    </>
  );
}

export default App;
