import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import TextField from "../../common/TextField";

const SignInForm = ({ toggleFormType }: { toggleFormType: (type: string) => void }) => {

    const navigate = useNavigate();

    const validateSignIn = Yup.object().shape({
        email: Yup.string().required("Email is required!").email("Invalid email address!"),
        password: Yup.string()
            .required("Password is required")
    });

    const signInForm = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validateSignIn,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            if(
                signInForm.values.email === 'test@test.com'
                && signInForm.values.password === 'Test@1234'
            ) {
                navigate('/browse');
            }
            else {
                console.log('Invalid email or password!');
            }
        },
        validateOnMount: true,
        validate: (values) => {
            console.log(values);
            console.log(signInForm, signInForm.dirty, signInForm.touched, signInForm.errors);
        }
    });

    return (
        <form className="flex flex-col gap-4" onSubmit={signInForm.handleSubmit}>
            <TextField
                autoFocus
                type="text"
                placeholder="Email"
                name="email"
                value={signInForm.values.email}
                onChange={(e) => {signInForm.handleBlur(e);signInForm.handleChange(e)}}
                styles="p-4 w-full bg-[rgba(22,22,22,0.7)] border border-[#808080b3] rounded"
                isError={signInForm.touched.email && Boolean(signInForm.errors.email?.length)}
                errorText={signInForm.touched.email && Boolean(signInForm.errors.email?.length) ? signInForm.errors.email : undefined}
            />
            <TextField
                type="password"
                autoComplete="new-password"
                placeholder="Password"
                name="password"
                value={signInForm.values.password}
                onChange={(e) => {signInForm.handleBlur(e);signInForm.handleChange(e)}}
                styles="p-4 w-full bg-[rgba(22,22,22,0.7)] border border-[#808080b3] rounded"
                isError={signInForm.touched.password && Boolean(signInForm.errors.password?.length)}
                errorText={signInForm.touched.password && Boolean(signInForm.errors.password?.length) ? signInForm.errors.password : undefined}
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
