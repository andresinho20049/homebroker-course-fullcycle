import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersService } from './orders.service';

@WebSocketGateway({cors: true})
export class OrdersGateway {

  constructor(private ordersService: OrdersService) {}

  @SubscribeMessage('orders/create')
  handleMessage(client: any, payload: CreateOrderDto): string {
    
    this.ordersService.create(payload)
      .then((order) => client.emit('orders/create', order));

    return 'Order create, submited!';
  }
}
