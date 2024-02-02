import { ButtonHTMLAttributes } from "react";

export default function Button({
    className = "",
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `inline-flex gap-2 items-center px-4 py-2 bg-primary border-2 border-primary rounded-full font-semibold text-xs text-primary-foreground hover:text-primary uppercase tracking-widest hover:bg-transparent focus:bg-transparent active:bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
