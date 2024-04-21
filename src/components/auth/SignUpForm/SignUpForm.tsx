import { FormikHelpers, useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '../../common/TextField';
import { useState } from 'react';
import {
    signUpFirebaseApi,
    updateUserFirebaseApi,
} from '../../../utils/auth/firebase-auth';
import { APP_CONSTANTS, replacePlaceholders } from '../../../utils/constants';

interface Values {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignUpForm = ({
    toggleFormType,
}: {
    toggleFormType: (type: string) => void;
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);
    const [errorText, setErrorText] = useState('');

    const validateSignUp = Yup.object().shape({
        name: Yup.string().required(
            replacePlaceholders(APP_CONSTANTS.AUTH.ERRORS.REQUIRED, {
                field: 'Name',
            })
        ),
        email: Yup.string()
            .required(
                replacePlaceholders(APP_CONSTANTS.AUTH.ERRORS.REQUIRED, {
                    field: 'Email',
                })
            )
            .email(APP_CONSTANTS.AUTH.ERRORS.INVALID_EMAIL),
        password: Yup.string()
            .required(
                replacePlaceholders(APP_CONSTANTS.AUTH.ERRORS.REQUIRED, {
                    field: 'Password',
                })
            )
            .min(
                8,
                replacePlaceholders(APP_CONSTANTS.AUTH.ERRORS.MIN_LENGTH, {
                    field: 'Password',
                    min: '8',
                })
            )
            .matches(
                /(?=.*[a-z])(?=.*[A-Z])\w+/,
                APP_CONSTANTS.AUTH.ERRORS.PASSWORD.DUAL_CASING
            )
            .matches(/\d/, APP_CONSTANTS.AUTH.ERRORS.PASSWORD.ONE_NUMBER)
            .matches(
                /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
                APP_CONSTANTS.AUTH.ERRORS.PASSWORD.SPECIAL_CHAR
            ),
        confirmPassword: Yup.string().when(
            'password',
            (password: any, field: any) => {
                if (password) {
                    return field
                        .required(APP_CONSTANTS.AUTH.ERRORS.PASSWORD.MISMATCH)
                        .oneOf(
                            [Yup.ref('password')],
                            APP_CONSTANTS.AUTH.ERRORS.PASSWORD.MISMATCH
                        );
                }
            }
        ),
    });

    const signUpForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: validateSignUp,
        onSubmit: (values: Values, { resetForm }: FormikHelpers<Values>) => {
            console.log(signUpForm.isValid, values);
            signUpFirebaseApi(values.email, values.password)
                .then((res) => {
                    console.log(res);
                    updateUserFirebaseApi(res, signUpForm.values.name).then(
                        (res) => {
                            console.log(res);
                            setErrorText('');
                            toggleFormType('signin');
                        }
                    );
                })
                .catch((err) => {
                    console.log(err);
                    setErrorText(err.toString().split(':')[2]);
                    signUpForm.setSubmitting(false);
                });
        },
        validateOnMount: true,
        validate: (values) => {
            // console.log(signUpForm.errors);
        },
    });

    return (
        <form
            className="flex flex-col gap-4"
            onSubmit={signUpForm.handleSubmit}
            onReset={signUpForm.handleReset}
            onFocus={signUpForm.handleBlur}
        >
            <TextField
                type="text"
                placeholder="Name"
                name="name"
                value={signUpForm.values.name}
                onChange={signUpForm.handleChange}
                styles="px-4 py-2 w-full bg-[rgba(22,22,22,0.7)] border border-[#808080b3] rounded"
                isError={
                    signUpForm.touched.name &&
                    Boolean(signUpForm.errors.name?.length)
                }
                errorText={
                    signUpForm.touched.name &&
                    Boolean(signUpForm.errors.name?.length)
                        ? signUpForm.errors.name
                        : undefined
                }
            />
            <TextField
                type="text"
                placeholder="Email"
                name="email"
                value={signUpForm.values.email}
                onChange={signUpForm.handleChange}
                styles="px-4 py-2 w-full bg-[rgba(22,22,22,0.7)] border border-[#808080b3] rounded"
                isError={
                    signUpForm.touched.email &&
                    Boolean(signUpForm.errors.email?.length)
                }
                errorText={
                    signUpForm.touched.email &&
                    Boolean(signUpForm.errors.email?.length)
                        ? signUpForm.errors.email
                        : undefined
                }
            />
            <TextField
                type="password"
                autoComplete="new-password"
                placeholder="Password"
                name="password"
                value={signUpForm.values.password}
                onChange={signUpForm.handleChange}
                styles="px-4 py-2 w-full bg-[rgba(22,22,22,0.7)] border border-[#808080b3] rounded"
                isError={
                    signUpForm.touched.password &&
                    Boolean(signUpForm.errors.password?.length)
                }
                errorText={
                    signUpForm.touched.password &&
                    Boolean(signUpForm.errors.password?.length)
                        ? signUpForm.errors.password
                        : undefined
                }
                togglePasswordVisibility={
                    signUpForm.values.password?.length > 0
                }
                showPassword={showPassword}
                onTogglePasswordVisibility={() =>
                    setShowPassword(!showPassword)
                }
            />
            <TextField
                type="password"
                autoComplete="new-password"
                placeholder="Re-enter Password"
                name="confirmPassword"
                value={signUpForm.values.confirmPassword}
                onChange={signUpForm.handleChange}
                styles="px-4 py-2 w-full bg-[rgba(22,22,22,0.7)] border border-[#808080b3] rounded"
                isError={
                    signUpForm.touched.confirmPassword &&
                    Boolean(signUpForm.errors.confirmPassword?.length)
                }
                errorText={
                    signUpForm.touched.confirmPassword &&
                    Boolean(signUpForm.errors.confirmPassword?.length)
                        ? signUpForm.errors.confirmPassword
                        : undefined
                }
                togglePasswordVisibility={
                    signUpForm.values.confirmPassword?.length > 0
                }
                showPassword={showRePassword}
                onTogglePasswordVisibility={() =>
                    setShowRePassword(!showRePassword)
                }
            />
            <button
                disabled={!signUpForm.isValid || signUpForm.isSubmitting}
                type="submit"
                className={`p-2 w-full text-center bg-red-600 font-medium rounded transition-all duration-300 ease-in-out ${
                    signUpForm.isValid ? 'hover:bg-red-700' : ''
                }  disabled:opacity-70 disabled:cursor-default`}
            >
                {APP_CONSTANTS.AUTH.BUTTONS.SIGN_UP}
            </button>
            <button
                type="reset"
                className={`p-2 w-full text-center text-gray-500 border border-gray-500 font-medium rounded transition-all duration-300 ease-in-out hover:bg-white hover:text-gray-500 hover:border-white cursor-pointer`}
            >
                {APP_CONSTANTS.GLOBAL.BUTTONS.RESET}
            </button>
            {Boolean(errorText.length) && (
                <div className="text-red-500 text-sm text-end before:content-['⚠'] before:pr-1">
                    {errorText}
                </div>
            )}
            <p
                className="my-4 text-[rgba(255,255,255,0.7)]"
                onClick={(e) => {
                    e.preventDefault();
                    toggleFormType('signin');
                }}
            >
                {APP_CONSTANTS.AUTH.TEXT.ALREADY_REGISTERED}{' '}
                <span className="text-white font-semibold cursor-pointer hover:underline">
                    {APP_CONSTANTS.AUTH.TEXT.SIGN_IN_NOW}
                </span>
                .
            </p>
        </form>
    );
};

export default SignUpForm;
