import { useState } from "react";

import logo from "/jandm.png";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [seeDate, setSeeDate] = useState(true);
  return (
    <>
      <main
        className={`h-screen w-screen ${
          darkMode ? "bg-green" : "bg-white opacity-75"
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
              ? "text-white text-4xl opacity-80 border-b border-white"
              : "text-light  text-4xl border-b border-green"
          }`}
        >
          <span onClick={() => setSeeDate(!seeDate)}>
            {seeDate ? <h1>11.10.25</h1> : <h1>Michael & Jade</h1>}
          </span>
        </h1>
      </main>
    </>
  );
}

export default App;
