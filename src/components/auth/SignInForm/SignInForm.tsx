import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignInForm = ({ toggleFormType }: { toggleFormType: (type: string) => void }) => {
    const validateSignIn = Yup.object().shape({
        email: Yup.string().required("Email is required!").email("Invalid email address!"),
        password: Yup.string()
            .required("Password is required")
            // .min(8, "Pasword must be 8 or more characters")
            // .matches(
            //     /(?=.*[a-z])(?=.*[A-Z])\w+/,
            //     "Password ahould contain at least one uppercase and lowercase character"
            // )
            // .matches(/\d/, "Password should contain at least one number")
            // .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character"),
    });

    const signInForm = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validateSignIn,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
        },
        validate: (values) => {
            console.log(signInForm.errors);
        }
    });

    return (
        <form className="flex flex-col gap-4" onSubmit={signInForm.handleSubmit}>
            <input
                type="text"
                placeholder="Email"
                name="email"
                value={signInForm.values.email}
                onChange={signInForm.handleChange}
                className="p-4 w-full bg-[rgba(22,22,22,0.7)] border border-[#808080b3] rounded"
            />
            <input
                type="password"
                autoComplete="new-password"
                placeholder="Password"
                name="password"
                value={signInForm.values.password}
                onChange={signInForm.handleChange}
                className="p-4 w-full bg-[rgba(22,22,22,0.7)] border border-[#808080b3] rounded"
            />
            <button
                disabled={!signInForm.isValid}
                type="submit"
                className={`p-2 w-full text-center bg-red-600 roun font-medium rounded transition-all ${signInForm.isValid ? 'hover:bg-red-700': '' }  disabled:opacity-70 disabled:cursor-default`}
            >
                Sign In
            </button>
            <p className="my-4 text-[rgba(255,255,255,0.7)]" onClick={() => toggleFormType("signup")}>
                New to Netflix?{" "}
                <span className="text-white font-semibold cursor-pointer hover:underline">Sign up now</span>.
            </p>
        </form>
    );
};

export default SignInForm;
