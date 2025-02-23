import { Wallet } from "@/my-app/models/wallet";
import { fetchNestApi } from "../nest-api-base";


export const getMyWallet = async (walletId: string):Promise<Wallet> => {
    const response = await fetchNestApi(`wallets/${walletId}`);
    return response.json();
}

export const getListWallet = async ():Promise<Wallet[]> => {
    const response = await fetchNestApi("wallets");
    return response.json();
}