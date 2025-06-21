import { createContext, useState, type ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface HeaderContextType {
    isOpenHeader: boolean;
    setIsOpenHeader: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderContext = createContext<HeaderContextType | null>(null);

export default function HeaderProvider({ children }: Props) {
    const [isOpenHeader, setIsOpenHeader] = useState<boolean>(true);

    return (
        <HeaderContext.Provider
            value={{
                isOpenHeader,
                setIsOpenHeader
            }}
        >
            {children}
        </HeaderContext.Provider>
    )
}