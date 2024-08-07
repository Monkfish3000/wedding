import { Link } from "react-router-dom";

const navItems = [
  { title: "When", link: "/when" },
  { title: "Where", link: "/where" },
  { title: "Who", link: "/who" },
  { title: "How", link: "/how" },
];

export type ThemeProps = {
  dark: boolean;
};

const Nav = ({ dark }: ThemeProps) => {
  return (
    <nav className="flex flex-row">
      {navItems.map(({ title, link }) => (
        <Link key={title} to={link}>
          <p
            className={`m-5 text-2xl cursor-pointer ${
              dark
                ? "text-white text-4xl opacity-80 border-b"
                : "text-light text-4xl border-b"
            }`}
          >
            {title}
          </p>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
