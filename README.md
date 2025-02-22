# Student Registration Form

## Overview
This is a **Student Registration Form** built using **React** with **Formik** and **Yup** for form handling and validation. The form allows students to input their details such as Name, Age, Email, and Course selection, ensuring valid inputs with proper validation messages.

## Features
- Responsive UI with **Tailwind CSS**.
- **Formik** for efficient form handling.
- **Yup** for schema-based form validation.
- Clear and interactive validation messages.
- Auto-reset form upon successful submission.

## Tech Stack
- **React** (JavaScript Library)
- **Formik** (Form Handling)
- **Yup** (Validation)
- **Tailwind CSS** (Styling)

## Project Live Vercel Link
https://registration-form-8pxoog3be-kunal-rajnishs-projects.vercel.app/

## Installation & Usage
Follow these steps to run the project:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/student-form.git
   ```
2. Navigate to the project directory:
   ```sh
   cd student-form
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Form Fields & Validation
- **Name**: Required (Must be a valid string).
- **Age**: Required (Between 5 and 25 years old).
- **Email**: Required (Must be a valid email format).
- **Course**: Required (User must select a course).

## Project Structure
```
student-form/
├── src/
│   ├── components/
│   │   ├── StudentForm.js  # Main form component
│   ├── App.js  # Entry point
│   ├── index.js  # React DOM rendering
├── public/
├── package.json  # Dependencies & scripts
└── README.md  # Project Documentation
```





