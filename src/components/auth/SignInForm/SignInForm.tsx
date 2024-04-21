import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import TextField from '../../common/TextField';
import { useState } from 'react';
import { signInFirebaseApi } from '../../../utils/auth/firebase-auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../utils/store/user.slice';
import { setToken } from '../../../utils/auth/storage';
import { APP_CONSTANTS, replacePlaceholders } from '../../../utils/constants';

const SignInForm = ({
    toggleFormType,
}: {
    toggleFormType: (type: string) => void;
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [errorText, setErrorText] = useState('');

    const validateSignIn = Yup.object().shape({
        email: Yup.string()
            .required(
                replacePlaceholders(APP_CONSTANTS.AUTH.ERRORS.REQUIRED, {
                    field: 'Email',
                })
            )
            .email(APP_CONSTANTS.AUTH.ERRORS.INVALID_EMAIL),
        password: Yup.string().required(
            replacePlaceholders(APP_CONSTANTS.AUTH.ERRORS.REQUIRED, {
                field: 'Password',
            })
        ),
    });

    const signInForm = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validateSignIn,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            signInFirebaseApi(values.email, values.password)
                .then((res: any) => {
                    // console.log(res);
                    setErrorText('');
                    dispatch(
                        setUser({
                            uid: res.uid,
                            displayName: res.displayName,
                            email: res.email,
                        })
                    );
                    setToken(res.accessToken);
                    navigate(`/${APP_CONSTANTS.ROUTES.BROWSE}`);
                })
                .catch((err) => {
                    console.log(err);
                    setErrorText(err.toString().split(':')[2]);
                    signInForm.setSubmitting(false);
                });
        },
        validateOnMount: true,
        validate: (values) => {
            // console.log(values);
            // console.log(signInForm, signInForm.dirty, signInForm.touched, signInForm.errors);
        },
    });

    return (
        <form
            className="flex flex-col gap-4"
            onSubmit={signInForm.handleSubmit}
            onFocus={signInForm.handleBlur}
        >
            <TextField
                type="text"
                placeholder="Email"
                name="email"
                disabled={signInForm.isSubmitting}
                value={signInForm.values.email}
                onChange={signInForm.handleChange}
                styles="p-4 bg-[rgba(22,22,22,0.7)] border border-[#808080b3] rounded"
                isError={
                    signInForm.touched.email &&
                    Boolean(signInForm.errors.email?.length)
                }
                errorText={
                    signInForm.touched.email &&
                    Boolean(signInForm.errors.email?.length)
                        ? signInForm.errors.email
                        : undefined
                }
            />
            <TextField
                type="password"
                autoComplete="new-password"
                placeholder="Password"
                name="password"
                disabled={signInForm.isSubmitting}
                value={signInForm.values.password}
                onChange={signInForm.handleChange}
                styles="p-4 bg-[rgba(22,22,22,0.7)] border border-[#808080b3] rounded"
                isError={
                    signInForm.touched.password &&
                    Boolean(signInForm.errors.password?.length)
                }
                errorText={
                    signInForm.touched.password &&
                    Boolean(signInForm.errors.password?.length)
                        ? signInForm.errors.password
                        : undefined
                }
                togglePasswordVisibility={
                    signInForm.values.password?.length > 0
                }
                showPassword={showPassword}
                onTogglePasswordVisibility={() =>
                    setShowPassword(!showPassword)
                }
            />
            <button
                disabled={!signInForm.isValid || signInForm.isSubmitting}
                type="submit"
                className={`p-2 w-full text-center bg-red-600 roun font-medium rounded transition-all ${signInForm.isValid ? 'hover:bg-red-700' : ''}  disabled:opacity-70 disabled:cursor-default`}
            >
                {APP_CONSTANTS.AUTH.BUTTONS.SIGN_IN}
            </button>
            {Boolean(errorText.length) && (
                <div className="text-red-500 text-sm text-start before:content-['⚠'] before:pr-1">
                    {errorText}
                </div>
            )}
            <p
                className="my-4 text-[rgba(255,255,255,0.7)]"
                onClick={(e) => {
                    e.preventDefault();
                    toggleFormType('signup');
                }}
            >
                {APP_CONSTANTS.AUTH.TEXT.NEW_TO_NETFLIX}{' '}
                <span className="text-white font-semibold cursor-pointer hover:underline">
                    {APP_CONSTANTS.AUTH.TEXT.SIGN_UP_NOW}
                </span>
                .
            </p>
        </form>
    );
};

export default SignInForm;
