import React, { type InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
};

export default function Input({ label, ...props }: InputProps) {
    return (
        <div className="w-full flex flex-col items-start justify-center mb-7 ">
            <label className="mb-1">{label}</label>
            <input
                {...props}
                className="ring-2 ring-grey focus:ring-2 focus:ring-lightPurple outline-none w-full rounded-8 p-2 text-white placeholder:text-grey transition-all duration-200 ease-in-out"
            />
        </div>
    );
}
