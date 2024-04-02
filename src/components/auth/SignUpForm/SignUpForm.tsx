import { FormikHelpers, useFormik } from "formik";
import React from "react";
import * as Yup from "yup"

interface Values {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignUpForm = ({toggleFormType} : {toggleFormType: (type: string) => void}) => {

    const validateSignUp = Yup.object().shape({
        name: Yup.string().required("Name is required!"),
        email: Yup.string().required("Email is required!").email("Invalid email address!"),
        password: Yup.string()
            .required("Password is required"),
            // .min(8, "Pasword must be 8 or more characters")
            // .matches(
            //     /(?=.*[a-z])(?=.*[A-Z])\w+/,
            //     "Password ahould contain at least one uppercase and lowercase character"
            // )
            // .matches(/\d/, "Password should contain at least one number")
            // .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character"),
        confirmPassword: Yup.string().when("password", (password: any, field: any) => {
            if (password) {
                return field.required("The passwords do not match").oneOf([Yup.ref("password")], "The passwords do not match");
            }
        }),
    });

    const signUpForm = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: validateSignUp,
        onSubmit: (values: Values, { resetForm }: FormikHelpers<Values>) => {
            console.log(signUpForm.isValid, values);
        },
        validate: (values) => {
            console.log(signUpForm.errors);
        }
    });

    return (
        <form className="flex flex-col gap-4" onSubmit={signUpForm.handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={signUpForm.values.name}
                onChange={signUpForm.handleChange}
                className="p-4 w-full bg-[rgba(22,22,22,0.7)] border border-[#808080b3] rounded"
            />
            <input
                type="text"
                placeholder="Email"
                name="email"
                value={signUpForm.values.email}
                onChange={signUpForm.handleChange}
                className="p-4 w-full bg-[rgba(22,22,22,0.7)] border border-[#808080b3] rounded"
            />
            <input
                type="password"
                autoComplete="new-password"
                placeholder="Password"
                name="password"
                value={signUpForm.values.password}
                onChange={signUpForm.handleChange}
                className="p-4 w-full bg-[rgba(22,22,22,0.7)] border border-[#808080b3] rounded"
            />
            <input
                type="password"
                autoComplete="new-password"
                placeholder="Re-enter Password"
                name="confirmPassword"
                value={signUpForm.values.confirmPassword}
                onChange={signUpForm.handleChange}
                className="p-4 w-full bg-[rgba(22,22,22,0.7)] border border-[#808080b3] rounded"
            />
            <button disabled={!signUpForm.isValid} type="submit" className={`p-2 w-full text-center bg-red-600 roun font-medium rounded transition-all ${signUpForm.isValid ? 'hover:bg-red-700': '' }  disabled:opacity-70 disabled:cursor-default`}>
                Sign Up
            </button>
            <p className="my-4 text-[rgba(255,255,255,0.7)]" onClick={() => toggleFormType('signin')}>
                Already Registered?{" "}
                <span className="text-white font-semibold cursor-pointer hover:underline">
                    Sign in now
                </span>
                .
            </p>
        </form>
    );
};

export default SignUpForm;
