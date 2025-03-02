import { HTMLAttributes } from "react";

interface BaseButtonProps extends HTMLAttributes<HTMLButtonElement> {
    label: string;
}

interface ButtonProps extends BaseButtonProps {
    label: string;
    variant: "primary" | "secondary";
}

export default function Button({ label, variant, ...props }: ButtonProps) {
    const Button = {
        primary : <PrimaryButton label={label} {...props}/>,
        secondary : <SecondaryButton label={label} {...props}/>
    }

    return Button[variant];
}

function PrimaryButton({ label, ...props } : BaseButtonProps) {
    return (
        <button className={`bg-primary text-white px-4 py-2 rounded-lg cursor-pointer hover:opacity-80`} {...props}>
            {label}
        </button>
    )
}

function SecondaryButton({ label, ...props } : BaseButtonProps) {
    return (
        <button className={`bg-secondary text-white px-4 py-2 rounded-lg hover:opacity-80`} {...props}>
            {label}
        </button>
    )
}
