import React, { ChangeEvent, ChangeEventHandler } from "react";
import { text } from "stream/consumers";

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
    errorText
}: {
    type: string,
    name: string,
    value: string,
    onChange: (e: ChangeEvent<any>) => void,
    onBlur?: (e: ChangeEvent<any>) => void,
    placeholder?: string,
    styles?: string,
    autoFocus?: boolean,
    autoComplete?: string,
    isError?: boolean,
    errorText?: string
}) => {
    return (
        <div className="flex flex-col w-full text-start relative pb-4">
            <input type={type} name={name} value={value} placeholder={placeholder} autoFocus={autoFocus} autoComplete={autoComplete} className={`${styles}`} onChange={onChange} onBlur={onBlur}/>
            { isError && <div className="text-red-500 text-xs absolute top-[80%] leading-[1.1] before:content-['⚠'] before:pr-1">{errorText}</div> }
        </div>
    );
};

export default TextField;
