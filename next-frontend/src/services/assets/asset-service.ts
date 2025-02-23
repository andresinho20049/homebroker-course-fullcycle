import { Asset } from "@/my-app/models/asset";
import { fetchNestApi } from "../nest-api-base";


export const getAssets = async ():Promise<Asset[]> => {
    const response = await fetchNestApi(`assets`);
    return response.json();
}

export const getAssetBySymbol = async (symbol: string):Promise<Asset> => {
    const response = await fetchNestApi(`assets/${symbol}`);
    return response.json();
}