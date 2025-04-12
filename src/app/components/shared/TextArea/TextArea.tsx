import { HTMLAttributes, TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    groupClass?: HTMLAttributes<HTMLDivElement>;  
}
export default function TextArea({ label, groupClass, ...props }: TextAreaProps) {
    return (
        <div className="flex flex-col gap-2 w-full" {...groupClass}>
            <label htmlFor={label}>{label}</label>
            <textarea className="border rounded border-secondary bg-white h-12 px-4 py-2" id={label} {...props}/>
        </div>
    )
}