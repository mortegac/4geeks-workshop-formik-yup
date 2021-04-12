import React from "react";
import { Form, Button } from "react-bootstrap";
import { Formik } from 'formik';
import * as yup from 'yup';
import './form.css';


const validationSchema = yup.object().shape({
  formName: yup.string()
  .min(2, "*Names must have at least 2 characters")
  .max(100, "*Names can't be longer than 100 characters")
  .required("*Name is required"),
  formEmail: yup.string()
  .email("*Must be a valid email address")
  .max(100, "*Email must be less than 100 characters")
  .required("*Email is required"),
	formPassword: yup.string()
  .min(2, "*Password must have at least 2 characters")
  .max(100, "*Password can't be longer than 100 characters")
  .required("*Password is required"),
  // phone: yup.string()
  // .matches(phoneRegExp, "*Phone number is not valid")
  // .required("*Phone number required"),
  // blog: yup.string()
  // .url("*Must enter URL in http://www.example.com format")
  // .required("*URL required")
});

const FormLogin = () => {
  return (
		<Formik 
			initialValues={{ formName:"", formEmail:"", formPassword:""}} 
			validationSchema={validationSchema}
			onSubmit={(values, {setSubmitting, resetForm}) => {
				// When button submits form and form is in the process of submitting, submit button is disabled
				setSubmitting(true);
				alert(JSON.stringify(values, null, 2));
				// Resets form after submission is complete
				// resetForm();

				// Sets setSubmitting to false after form is reset
				// setSubmitting(false);

				// Simulate submitting to database, shows us values submitted, resets form
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					resetForm();
					setSubmitting(false);
				}, 500);

		}}
		
		>
        {/* Callback function containing Formik state and helpers that handle common form actions */}
      {( {values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting }) => (
			<Form onSubmit={handleSubmit}  className='p-lg-4'>
				{console.log('<VALUES>: ', values)}
				<Form.Group controlId="formName">
					<Form.Label>Name</Form.Label>
					<Form.Control
              type="text"
							size="lg"
              /* This name property is used to access the value of the form element via values.nameOfElement */
              name="formName"
              placeholder="Full Name"
              /* Set onChange to handleChange */
              onChange={handleChange}
              /* Set onBlur to handleBlur */
              onBlur={handleBlur}
              /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
              value={values.formName}
              /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
              className={touched.formName && errors.formName ? "error" : null}
					/>
					{/* Applies the proper error message from validateSchema when the user has clicked the element and there is an error, also applies the .error-message CSS class for styling */}
					<Form.Text className="text-muted">
						{touched.formName && errors.formName ? (
							<div className="error-message">{errors.formName}</div>
						): null}
					</Form.Text>
				</Form.Group>

				<Form.Group controlId="formEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
              type="text"
							size="lg"
              name="formEmail"
              placeholder="Enter email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.formEmail}
              className={touched.formEmail && errors.formEmail ? "error" : null}
					/>
					<Form.Text className="text-muted">
						{touched.formEmail && errors.formEmail ? (
							<div className="error-message">{errors.formEmail}</div>
						): null}
					</Form.Text>
				</Form.Group>
							

				<Form.Group controlId="formPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
              type="password"
							size="lg"
              name="formPassword"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.formPassword}
              className={touched.formPassword && errors.formPassword ? "error" : null}
					/>
					<Form.Text className="text-muted">
						{touched.formPassword && errors.formPassword ? (
							<div className="error-message">{errors.formPassword}</div>
						): null}
					</Form.Text>
				</Form.Group>
			
				<Button variant="primary" type="submit" disabled={isSubmitting}>
					Submit
				</Button>
			</Form>
			)}
      </Formik>
  );
};

export default FormLogin;
