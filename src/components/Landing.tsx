import { useState } from "react";

import { useTheme } from "../context/ThemeContext";

import logo from "/jandm.png";

import Nav from "./Nav";
import Button from "./Button";

const Landing = () => {
  // const [darkMode, setDarkMode] = useState(true);
  const [seeDate, setSeeDate] = useState(false);

  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <>
      <main
        className={`h-screen w-screen ${
          darkMode ? "bg-green" : "bg-light opacity-75"
        } flex flex-col items-center justify-start`}
      >
        <img
          src={logo}
          className="logo"
          alt="Logo"
          onClick={() => toggleDarkMode()}
        />
        <section
          className={`flex justify-center items-center text-center ${
            darkMode ? "text-white text-4xl opacity-80" : "text-light text-4xl"
          }`}
        >
          <span onClick={() => setSeeDate(!seeDate)}>
            {seeDate ? (
              <h1 className="title text-7xl mb-28">11.10.25</h1>
            ) : (
              <h1 className="title text-7xl mb-28">
                Michael <br /> - & - <br /> Jade
              </h1>
            )}
          </span>
        </section>
        <Nav dark={darkMode} />
        <Button dark={darkMode} toggleDarkMode={toggleDarkMode} />
      </main>
    </>
  );
};

export default Landing;
