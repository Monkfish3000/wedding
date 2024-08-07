import { ThemeProps } from "./Nav";

const buttonStylesBase =
  "px-6 py-3 my-10 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105";
const buttonStylesLight = "bg-green";
const buttonStylesDark = "bg-light text-green";

const Button = ({ dark }: ThemeProps) => {
  return (
    <button
      className={`${
        dark ? buttonStylesDark : buttonStylesLight
      } ${buttonStylesBase}`}
    >
      Confirm your Attendance
    </button>
  );
};

export default Button;
