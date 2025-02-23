'use client';

import { redirect, usePathname, useSearchParams } from "next/navigation";
import { createContext, ReactNode, useContext } from "react";
import { WalletList } from "../components/ssr/wallet/wallet-list";


type MyWalletContextType = {
    walletId: string | null; 
}

export const MyWalletContext = createContext({} as MyWalletContextType);

export const useMyWalletContext = () => useContext(MyWalletContext);

export type MyWalletProviderProps = {
    children: ReactNode;
}

export const MyWalletProvider = ({children}:MyWalletProviderProps) => {
    const searchParams = useSearchParams();
    const walletId = searchParams.get("wallet_id");

	const pathname = usePathname();

    if(!walletId && !pathname.includes("wallets"))
        redirect("/wallets")
    
    return (
        <MyWalletContext.Provider value={{walletId}}>
            {children}
        </MyWalletContext.Provider>
    )

}