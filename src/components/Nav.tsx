const navItems = ["When", "Where", "Who", "How"];

// m-5 text-2xl

export type ThemeProps = {
  dark: boolean;
};

const Nav = ({ dark }: ThemeProps) => {
  return (
    <nav className="flex flex-row">
      {navItems.map((item) => (
        <p
          className={`m-5 text-2xl cursor-pointer ${
            dark
              ? "text-white text-4xl opacity-80 border-b"
              : "text-light text-4xl border-b"
          }`}
        >
          {item}
        </p>
      ))}
    </nav>
  );
};

export default Nav;
