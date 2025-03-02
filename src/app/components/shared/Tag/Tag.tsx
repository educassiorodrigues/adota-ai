import { HTMLAttributes } from "react";

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
    value: string;
}
export default function Tag({value, ...props} : TagProps) { 
    return (
        <span className="border-2 border-secondary px-4 rounded-full text-[12px] text-secondary" {...props}>{value}</span>
    )
}
