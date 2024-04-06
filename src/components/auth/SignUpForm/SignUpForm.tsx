import { FormikHelpers, useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup"
import TextField from "../../common/TextField";

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
            .required("Password is required")
            .min(8, "Pasword must be 8 or more characters")
            .matches(
                /(?=.*[a-z])(?=.*[A-Z])\w+/,
                "Password ahould contain at least one uppercase and lowercase character"
            )
            .matches(/\d/, "Password should contain at least one number")
            .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character"),
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
            toggleFormType('signin');
        },
        validateOnMount: true,
        validate: (values) => {
            // console.log(signUpForm.errors);
        }
    });

    return (
        <form className="flex flex-col gap-4" onSubmit={signUpForm.handleSubmit} onReset={signUpForm.handleReset}>
            <TextField
                type="text"
                placeholder="Name"
                name="name"
                autoFocus
                value={signUpForm.values.name}
                onChange={(e) => {signUpForm.handleBlur(e);signUpForm.handleChange(e)}}
                styles="p-4 w-full bg-[rgba(22,22,22,0.7)] border border-[#808080b3] rounded"
                isError={signUpForm.touched.name && Boolean(signUpForm.errors.name?.length)}
                errorText={signUpForm.touched.name && Boolean(signUpForm.errors.name?.length) ? signUpForm.errors.name : undefined}
            />
            <TextField
                type="text"
                placeholder="Email"
                name="email"
                value={signUpForm.values.email}
                onChange={(e) => {signUpForm.handleBlur(e);signUpForm.handleChange(e)}}
                styles="p-4 w-full bg-[rgba(22,22,22,0.7)] border border-[#808080b3] rounded"
                isError={signUpForm.touched.email && Boolean(signUpForm.errors.email?.length)}
                errorText={signUpForm.touched.email && Boolean(signUpForm.errors.email?.length) ? signUpForm.errors.email : undefined}
            />
            <TextField
                type="password"
                autoComplete="new-password"
                placeholder="Password"
                name="password"
                value={signUpForm.values.password}
                onChange={(e) => {signUpForm.handleBlur(e);signUpForm.handleChange(e)}}
                styles="p-4 w-full bg-[rgba(22,22,22,0.7)] border border-[#808080b3] rounded"
                isError={signUpForm.touched.password && Boolean(signUpForm.errors.password?.length)}
                errorText={signUpForm.touched.password && Boolean(signUpForm.errors.password?.length) ? signUpForm.errors.password : undefined}
            />
            <TextField
                type="password"
                autoComplete="new-password"
                placeholder="Re-enter Password"
                name="confirmPassword"
                value={signUpForm.values.confirmPassword}
                onChange={(e) => {signUpForm.handleBlur(e);signUpForm.handleChange(e)}}
                styles="p-4 w-full bg-[rgba(22,22,22,0.7)] border border-[#808080b3] rounded"
                isError={signUpForm.touched.confirmPassword && Boolean(signUpForm.errors.confirmPassword?.length)}
                errorText={signUpForm.touched.confirmPassword && Boolean(signUpForm.errors.confirmPassword?.length) ? signUpForm.errors.confirmPassword : undefined}
            />
            <button disabled={!signUpForm.isValid} type="submit" className={`p-2 w-full text-center bg-red-600 font-medium rounded transition-all duration-300 ease-in-out ${signUpForm.isValid ? 'hover:bg-red-700': '' }  disabled:opacity-70 disabled:cursor-default`}>
                Sign Up
            </button>
            <button type="reset" className={`p-2 w-full text-center text-gray-500 border border-gray-500 font-medium rounded transition-all duration-300 ease-in-out hover:bg-white hover:text-gray-500 hover:border-white cursor-pointer`}>
                Reset
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
