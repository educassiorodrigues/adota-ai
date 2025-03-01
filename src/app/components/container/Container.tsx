import { HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
export function Container({children, ...props} : ContainerProps) { 
    return (
        <div className="max-w-7xl text-primary mx-auto" {...props}>
            {children}
        </div>
    )
}