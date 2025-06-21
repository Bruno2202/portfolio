import type { ReactNode } from 'react';

type HighlightProps = {
    children: ReactNode;
};

export default function Highlight({ children }: HighlightProps) {
    return (
        <strong className="text-white">
            {children}
        </strong>
    );
}