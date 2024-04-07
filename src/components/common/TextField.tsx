import { ChangeEvent } from "react";

const TextField = ({
    type,
    placeholder,
    name,
    value,
    styles,
    onChange,
    onBlur,
    autoFocus,
    autoComplete,
    isError,
    errorText,
    togglePasswordVisibility,
    showPassword,
    onTogglePasswordVisibility,
}: {
    type: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<any>) => void;
    onBlur?: (e: ChangeEvent<any>) => void;
    placeholder?: string;
    styles?: string;
    autoFocus?: boolean;
    autoComplete?: string;
    isError?: boolean;
    errorText?: string;
    togglePasswordVisibility?: boolean;
    showPassword?: boolean;
    onTogglePasswordVisibility?: () => void;
}) => {
    return (
        <div className="flex flex-col w-full text-start relative pb-4">
            <input
                type={showPassword ? "text" : type}
                name={name}
                value={value}
                placeholder={placeholder}
                autoFocus={autoFocus}
                autoComplete={autoComplete}
                className={`${styles}`}
                onChange={onChange}
                onBlur={onBlur}
            />
            {togglePasswordVisibility && (
                <span
                    className="text-xl absolute right-0 px-2 flex h-full items-center bottom-2 cursor-pointer transition-all duration-200 ease-in-out hover:text-blue-400"
                    onClick={onTogglePasswordVisibility}
                >👁
                    {showPassword && <span className="absolute pr-[5px] right-2">/</span>}
                </span>
            )}
            {isError && (
                <div className="text-red-500 text-[70%] absolute top-[80%] leading-[1.1] before:content-['⚠'] before:pr-1">
                    {errorText}
                </div>
            )}
        </div>
    );
};

export default TextField;
