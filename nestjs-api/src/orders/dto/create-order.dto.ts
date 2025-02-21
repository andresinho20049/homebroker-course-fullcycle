import { OrderType } from "../entities/order.entity";

export class CreateOrderDto {
    wallet: string;
    asset: string;
    shares: number;
    price: string;
    type: OrderType;
}
