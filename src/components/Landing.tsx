import { useState } from "react";

import logo from "/jandm.png";

import "../App.css";
import Nav from "./Nav";
import Button from "./Button";

const Landing = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [seeDate, setSeeDate] = useState(false);
  return (
    <>
      <main
        className={`h-screen w-screen ${
          darkMode ? "bg-green" : "bg-white opacity-75"
        } flex flex-col items-center justify-start`}
      >
        <img
          src={logo}
          className="logo"
          alt="Logo"
          onClick={() => setDarkMode(!darkMode)}
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
        <Button dark={darkMode} />
      </main>
    </>
  );
};

export default Landing;
