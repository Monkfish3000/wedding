import { useNavigate } from "react-router-dom";

import { ThemeProps } from "./Nav";

export const buttonStylesBase =
  "px-6 py-3 my-10 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105";
export const buttonStylesLight = "bg-green";
export const buttonStylesDark = "bg-light text-green";

const Button = ({ dark }: ThemeProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/rsvp");
      }}
      className={`${
        dark ? buttonStylesDark : buttonStylesLight
      } ${buttonStylesBase}`}
    >
      Confirm your Attendance
    </button>
  );
};

export default Button;
