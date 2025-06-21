interface TextareaProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea({ label, value, onChange }: TextareaProps) {
    return (
        <div className="w-full flex flex-col items-start justify-center mb-7">
            <label className="mb-1">{label}</label>
            <textarea
                className="resize-none border-none outline-none w-full rounded-8 p-2 font-normal text-white ring-2 ring-grey focus:ring-2 focus:ring-lightPurple placeholder:text-grey transition-all duration-200 ease-in-out"
                cols={5}
                rows={5}
                maxLength={400}
                onChange={onChange}
                value={value}
            />
        </div>
    );
}