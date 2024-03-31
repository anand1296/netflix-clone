import {useState} from "react"
import SignUpForm from "../../components/auth/SignUpForm/SignUpForm";
import SignInForm from "../../components/auth/SignInForm/SignInForm";

const Login = () => {

  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="login-page">
      <div className="pre-auth-bg bg-black fixed w-full min-h-screen flex flex-col text-white overflow-hidden z-[-1] top-0 left-0">
        <div className="block w-full h-full min-h-screen overflow-hidden absolute bg-cover z-[-1] opacity-50 pointer-events-none">
          <img
            className=" min-h-full min-w-full"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="bg"
          />
        </div>
      </div>

      <div className="login-form-container text-white relative z-[1] py-12 px-16 bg-[#030603]/80 rounded max-w-md mx-auto">
        <header>
          <h1 className="mb-7">{ isSignUp ? 'Sign Up' : 'Sign In'}</h1>
        </header>
        {
          isSignUp ? <SignUpForm toggleFormType={(type) => setIsSignUp(type === 'signup')} /> : <SignInForm toggleFormType={(type) => setIsSignUp(type === 'signup')}/>
        }
      </div>
    </div>
  );
};

export default Login;
