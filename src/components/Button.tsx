import type { LucideIcon } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    id?: string;
    text: string;
    onClick?: () => void;
    icon?: LucideIcon;
};

export default function Button({ id, text, onClick, icon: Icon }: ButtonProps) {
    return (
        <div onClick={onClick} className="flex select-none md:select-auto flex-row gap-2 items-center justify-center bg-gradient-to-r from-lightPurple to-purple transition-all duration-200 ease-in-out px-5 py-3 rounded-2xl text-base border-none cursor-pointer hover:scale-105 active:scale-100">
            {Icon && <Icon size={20} />}
            <button
                id={id}
                className="text-white select-none md:select-auto cursor-pointer font-bold"
            >
                {text}
            </button>
        </div>
    );
}
