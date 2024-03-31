import React from "react";

const SignInForm = ({ toggleFormType }: { toggleFormType: (type: string) => void }) => {
    return (
        <form className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="Email"
                className="p-4 w-full bg-[rgba(22,22,22,0.7)] border border-[#808080b3] rounded"
            />
            <input
                type="password"
                autoComplete="new-password"
                placeholder="Password"
                className="p-4 w-full bg-[rgba(22,22,22,0.7)] border border-[#808080b3] rounded"
            />
            <button type="submit" className="p-2 w-full text-center bg-red-600 roun font-medium rounded">
                Sign In
            </button>
            <p className="my-4 text-[rgba(255,255,255,0.7)]" onClick={() => toggleFormType('signup')}>
                New to Netflix?{" "}
                <span className="text-white font-semibold cursor-pointer hover:underline">
                    Sign up now
                </span>
                .
            </p>
        </form>
    );
};

export default SignInForm;
