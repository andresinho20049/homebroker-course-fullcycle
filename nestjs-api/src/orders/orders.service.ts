import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderSchema, OrderStatus } from './entities/order.entity';
import { Model } from 'mongoose';

@Injectable()
export class OrdersService {

  constructor(@InjectModel(Order.name) private orderSchema: Model<Order>) { }

  create(createOrderDto: CreateOrderDto) {
    return this.orderSchema.create({
      status: OrderStatus.PENDING,
      ...createOrderDto
    });
  }

  findAll(filter: { wallet: string; }) {
    return this.orderSchema.find(filter).populate([
      'asset'
    ]);
  }

  findOne(id: string) {
    return this.orderSchema.findById(id);
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: string) {
    return `This action removes a #${id} order`;
  }
}
