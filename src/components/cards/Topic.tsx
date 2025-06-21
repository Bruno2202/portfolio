import type { ReactNode } from "react";

type TopicProps = {
    children?: ReactNode;
};

export default function Topic({ children }: TopicProps) {
    return (
        <div className="w-full h-full flex flex-row items-center rounded-8 bg-gradient-to-r bg-[#f5f3e221] backdrop-blur-md">
            <div className="w-full">
                <div className="flex flex-col items-center justify-center w-full h-auto p-4 text-left">
                    {children}
                </div>
            </div>
        </div>
    );
}