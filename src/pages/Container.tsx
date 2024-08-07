import { useTheme, ThemeProvider } from "../context/ThemeContext";

import logo from "/jandm.png";

type ContainerProps = {
  children: React.ReactNode;
};

const ContainerContent = ({ children }: ContainerProps) => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <>
      <main
        className={`h-screen w-screen ${
          darkMode ? "bg-green" : "bg-light opacity-75"
        } flex flex-col items-center justify-start`}
      >
        <img src={logo} className="logo" alt="Logo" onClick={toggleDarkMode} />
        <section
          className={`flex justify-center items-center text-center ${
            darkMode ? "text-white text-4xl opacity-80" : "text-light text-4xl"
          }`}
        >
          {children}
        </section>
      </main>
    </>
  );
};

const Container = ({ children }: ContainerProps) => {
  return (
    <ThemeProvider>
      <ContainerContent>{children}</ContainerContent>
    </ThemeProvider>
  );
};

export default Container;
