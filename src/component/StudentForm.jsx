import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  age: "",
  email: "",
  course: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  age: Yup.number().required("Age is required").min(5, "Age must be at least 5").max(25, "Age must be max 25"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
  course: Yup.string().required("Select a course"),
});

const handleSubmit = (values, { resetForm }) => {
  console.log("Form Data", values);
  resetForm();
};

function StuFormReg() {
  return (
    <div className="bg-[#EFE2BA] p-6 sm:p-10 flex justify-center items-center flex-col container mx-auto min-h-screen">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-8 text-center font-bold">
        Student Registration Form
      </h1>
      <div className="border-2 rounded-2xl bg-amber-50 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-6 sm:p-10 shadow-lg">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="text-lg space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name">Name:</label>
              <Field
                type="text"
                name="name"
                className="border-2 p-2 rounded-md w-full"
              />
              <div className="min-h-[20px] text-red-500 text-sm">
                <ErrorMessage name="name" />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="age">Age:</label>
              <Field
                type="number"
                name="age"
                className="border-2 p-2 rounded-md w-full"
              />
              <div className="min-h-[20px] text-red-500 text-sm">
                <ErrorMessage name="age" />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                name="email"
                id="email"
                className="border-2 p-2 rounded-md w-full"
              />
              <div className="min-h-[20px] text-red-500 text-sm">
                <ErrorMessage name="email" />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="course">Course:</label>
              <Field
                as="select"
                name="course"
                className="border-2 p-2 rounded-md w-full"
              >
                <option value="">Please select a course</option>
                <option value="CSE-CS">
                  Computer Science (Cyber Security)
                </option>
                <option value="ECE">Electronics & Communication</option>
                <option value="IT">Information Technology</option>
                <option value="BT">Bio Tech</option>
                <option value="Civil">Civil</option>
                <option value="Mech">Mechanical</option>
              </Field>
              <div className="min-h-[20px] text-red-500 text-sm">
                <ErrorMessage name="course" />
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <button type="submit" className="relative inline-flex items-center justify-center p-2 px-5 text-lg font-medium text-gray-900 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default StuFormReg;
