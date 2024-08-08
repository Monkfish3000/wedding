import { Formik, Form, Field, ErrorMessage } from "formik";

import Container from "./Container";
import {
  buttonStylesDark,
  buttonStylesLight,
  buttonStylesBase,
} from "../components/Button";
import { useTheme } from "../context/ThemeContext";

const RSVP = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  const inputStyles = "my-3 rounded text-xs p-3 w-full bg-light text-green";

  const initialValues = {
    fName: "",
    lName: "",
    email: "",
    attending: "",
    names: "",
    diet: "",
  };

  return (
    <div>
      <Container>
        <section className="w-full max-w-md mx-auto my-0 p-8 text-2xl ">
          <h1 className="m-6 text-8xl border-b-2 title">R.S.V.P.</h1>
          <p className="text-sm mb-7">
            Please confirm your attendance by January 31st, 2025
          </p>
          <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
              const userSubmission = JSON.stringify(values, null, 2);
              console.log(userSubmission);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col">
                <div className="flex">
                  <div className="flex-row w-full text-start  mr-1 p-0">
                    <label className="text-sm" htmlFor="fName">
                      First name
                    </label>
                    <Field
                      className={`${inputStyles}`}
                      type="text"
                      name="fName"
                      placeholder="Please enter your first name..."
                    />
                  </div>

                  <div className="flex-row w-full text-start p-0">
                    <label className=" text-sm" htmlFor="fName">
                      Last name
                    </label>
                    <Field
                      className={`${inputStyles} w-full`}
                      type="text"
                      name="lName"
                      placeholder="Please enter your last name..."
                    />
                  </div>
                </div>

                <div className="flex-row w-full text-start ml-0 p-0">
                  <label className="text-sm" htmlFor="email">
                    Email
                  </label>
                  <Field
                    className={`${inputStyles} w-full`}
                    type="email"
                    name="email"
                    placeholder="Please enter your email..."
                  />
                </div>

                <div className="w-full flex flex-col items-start mt-2">
                  <label className="text-sm" htmlFor="radio">
                    Will you be attending the wedding?
                  </label>
                  <div>
                    <Field
                      type="radio"
                      name="attending"
                      value="yes"
                      id="attendingYes"
                    />
                    <label htmlFor="attendingYes" className="m-4 text-sm">
                      Yes
                    </label>
                  </div>

                  <div>
                    <Field
                      type="radio"
                      name="attending"
                      value="no"
                      id="attendingNo"
                    />
                    <label htmlFor="attendingNo" className="m-4 text-sm">
                      No
                    </label>
                  </div>
                </div>
                <div className="flex-row w-full text-start ml-0 p-0">
                  <label className="text-sm" htmlFor="names">
                    What are the names of all people in your party?
                  </label>
                  <Field
                    className={`${inputStyles} w-full`}
                    type="text"
                    name="names"
                    placeholder="Please enter everybody's name"
                  />
                </div>

                <div className="flex-row w-full text-start ml-0 p-0">
                  <label className="text-sm" htmlFor="diet">
                    Do you have any special dietry requirements?
                  </label>
                  <Field
                    className={`${inputStyles} w-full`}
                    type="text"
                    name="diet"
                    placeholder="Please write them here if so"
                  />
                </div>

                <button
                  className={`${
                    darkMode ? buttonStylesDark : buttonStylesLight
                  } ${buttonStylesBase} w-full`}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
          <p className="mt-7 border-t-2 title m-6 text-8xl">
            We cannot wait to celebrate with you!
            <br />♡
          </p>
        </section>
      </Container>
    </div>
  );
};

export default RSVP;
