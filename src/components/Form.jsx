import React from 'react';

import { Field, Form, withFormik } from 'formik';
import * as Yup from 'yup';



function getCookie(name) {
    if (!document.cookie) {
      return null;
    }
    const token = document.cookie.split(';')
      .map(c => c.trim())
      .filter(c => c.startsWith(name + '='));

    if (token.length === 0) {
      return null;
    }
    return decodeURIComponent(token[0].split('=')[1]);
  }

const csrftoken = getCookie('csrftoken');
//   console.log(csrftoken)


const FormikForm = ({
    // from Fromik
    // Formik passes props to this functional component
    values,
    errors,
    touched,
    isSubmitting
}) => (
    
    <Form className="sign-up">
        <h1>Stop Drinking Alone</h1>
        <React.Fragment>
            { touched.username && errors.username && <p>{errors.username}</p>}
            <Field type="text" name="username" placeholder="Username" style={{borderColor: touched.username && errors.username && "red"}} />
        </React.Fragment>
        <React.Fragment>
            { touched.email && errors.email && <p>{errors.email}</p>}
            <Field type="email" name="email" placeholder="Email" style={{borderColor: touched.email && errors.email && "red"}} />
        </React.Fragment>
         <React.Fragment>
            { touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password" style={{borderColor: touched.password && errors.password && "red"}} />
        </React.Fragment>
         <React.Fragment>
            { touched.confirm_password && errors.confirm_password && <p>{errors.confirm_password}</p>}
            <Field type="password" name="confirm_password" placeholder="Confirm Password" style={{borderColor: touched.confirm_password && errors.confirm_password && "red"}} />
        </React.Fragment>
{/*        <label htmlForm="newsletter">
            <Field type="checkbox" name="newsletter" checked={values.newsletter} />
            <span> Get beer suggestions</span>
        </label>
        <Field component="select" name="plan">
            <option value="free">Free</option>
            <option value="premium">Premium</option>
        </Field>
*/}
        <label htmlFor="policy">
            
            <span className="policy"><Field type="checkbox" name="policy" checked={values.policy} /> I accept the Terms of Use & Privacy Policy.</span>
        </label>
        
        <button type="submit" disabled={isSubmitting}>Submit</button>
    </Form>
); // FormikForm


const CustomForm = withFormik({
    // deconstruced and pssed in from ForikForm
    // mapPropsToValues: options object
    // keys are input names
    // has initial values
    // validation
    // form submit
    mapPropsToValues({ username, email, password, confirm_password, plan, policy, newsletter}) {
        // email, password gotten from FormikForm's name identifer field
        return {
            username: username || '',
            email: email || '',
            password: password || '',
            confirm_password: confirm_password || '',
            plan: plan || 'free',
            policy: policy || false,
            newsletter: newsletter || true
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .min(8, 'Username much be 8 charactesr or more')
            .required('Username Required'),
        email: Yup.string()
            .email('Email Invalid')
            .required('Email Required'),
        password: Yup.string()
            .min(9, 'Password must be 9 characters or more')
            .required('Password Required'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Comfirmation required')
    }), // validationSchema
    handleSubmit(values, { resetForm, setErrors, setSubmitting, props }) {
        /*
            From FormikBag inside handleSubmit
                resetForm: reset form after valid submittion
                setErrors: set errors
                setSutmitting: diable submit button until asynchronous request actually completes
        */
        // call api here
        // const url = 'http://127.0.0.1:8000/api/v1/users/create/';
        const url = 'https://beermeanother.herokuapp.com/api/v1/users/create/'
        // const url = 'http://beermeanother.herokuapp.com/api/v1/users/create/'

        const { history } = props;

        const payload = {
            username: values.username,
            email: values.email,
            password: values.password
        };
        console.log('in postData');
        let request = fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            }
        });
        // Do stuff with the response from your backend.
        // Don't forget to handle errors/exceptions.
        request.then(response => {
            console.log('in request then');
            console.debug(response.data);
            console.log(JSON.stringify(response));
            console.log(JSON.stringify(response.data));
            window.alert("Congrats -- redirecting");
            history.push(`/user/${values.username}`);
        })
        .catch(error => {
            console.log('in error');
            console.error(error);
            setErrors({
                username: "Username unavailable for use",
                email: "Email unavailable for use"
            });
            window.alert("Congrats -- redirecting");
            history.push(`/user/${values.username}`);
        });
        resetForm();

        console.log("values are: \n", values);
        // setTimeout(() => {
        //     if (values.email === 'a@b.com') {
        //         setErrors({
        //             email: "Email unavailable for use"
        //         });
        //     } else {
        //         // "valid" daata submitted
        //         // maybe redirect to loggined in page here
        //         resetForm();
        //     }
        //     // with asynchronous functions, need to tell formkik you're done
        //     // and can
        //     // allow user to submit form again
        //     setSubmitting(false);
        // }, 2000);  // setTimeout
    }
})(FormikForm); // Form


{/*
const FormikForm = ({
    // from Fromik
    // Formik passes props to this functional component
    values,
    handleChange,
    handleSubmit
}) => (
    
    <form onSubmit={handleSubmit}>
    call prop from formik as middleware, then do fucntio
        Where email comes from the mapPropsToValues object
        <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange} />
        <button>Submit</button>
    </form>
); // FormikForm

const Form = withFormik({
    // deconstruced and pssed in from ForikForm
    // mapPropsToValues: options object
    // keys are input names
    // has initial values
    // validation
    // form submit
    mapPropsToValues({ email, password}) {
        // email, password gotten from FormikForm's name identifer field
        return {
            email: email || '',
            password: password || '',
        }
    },
    handleSubmit(values) {
        // call api here
        console.log(values);
    }
})(FormikForm); // Form
*/}


export default CustomForm;