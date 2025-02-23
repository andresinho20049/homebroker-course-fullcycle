import { Asset } from "@/my-app/models/asset";
import { fetchNestApi } from "../nest-api-base";
import { Order } from "@/my-app/models/order";


export const getOrders = async (walletId: string):Promise<Order[]> => {
    const response = await fetchNestApi(`orders?walletId=${walletId}`);
    return response.json();
}