import { SelectHTMLAttributes } from "react";

interface SelectOptionsProps {
    value: string;
    label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    label: string;
    options: SelectOptionsProps[];
}

export default function Select({label, options, ...props}: SelectProps) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor="Tipo">{label}</label>

            <select className="border rounded border-secondary bg-white h-12 px-4 py-2" name="type" id="Tipo" {...props}>
                <option value="">Selecione</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.value}</option>
                ))}
            </select>
        </div>
    )
}
