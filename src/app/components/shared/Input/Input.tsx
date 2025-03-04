import {  HTMLAttributes, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    groupClass?: HTMLAttributes<HTMLDivElement>
}

export default function Input({ label, type, ...props }: InputProps) {
    return (
        <div className="flex flex-col gap-2 w-full" {...props.groupClass}>
            <label htmlFor={label}>{label}</label>
            <input className="border rounded border-secondary bg-white h-12 px-4 py-2" id={label} type={type} {...props}/>
        </div>
    )
}