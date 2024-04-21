import { useState } from 'react';
import SignUpForm from '../../components/auth/SignUpForm/SignUpForm';
import SignInForm from '../../components/auth/SignInForm/SignInForm';
import { APP_CONSTANTS } from '../../utils/constants';

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div className="login-page">
            <div className="pre-auth-bg bg-black fixed w-full min-h-screen flex flex-col text-white overflow-hidden z-[-1] top-0 left-0">
                <div className="block w-full h-full min-h-screen overflow-hidden absolute bg-cover z-[-1] opacity-50 pointer-events-none">
                    <img
                        className=" min-h-full min-w-full"
                        src={APP_CONSTANTS.GLOBAL.IMAGES.PRE_AUTH_BG}
                        alt="bg"
                    />
                </div>
            </div>

            <div className="login-form-container text-white relative z-[1] py-12 px-16 bg-[#030603]/80 rounded max-w-md mx-auto mb-4">
                <header>
                    <h1 className="mb-7">
                        {isSignUp
                            ? APP_CONSTANTS.AUTH.HEADERS.SIGN_UP
                            : APP_CONSTANTS.AUTH.HEADERS.SIGN_IN}
                    </h1>
                </header>
                {isSignUp ? (
                    <SignUpForm
                        toggleFormType={(type) =>
                            setIsSignUp(type === 'signup')
                        }
                    />
                ) : (
                    <SignInForm
                        toggleFormType={(type) =>
                            setIsSignUp(type === 'signup')
                        }
                    />
                )}
            </div>
        </div>
    );
};

export default Login;
