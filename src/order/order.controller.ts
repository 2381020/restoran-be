// src/order/order.controller.ts
import { UseGuards, Request, Controller, Post, Body, Param, Get } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './create-order.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(@Request() req, @Body() createOrderDto: CreateOrderDto) {
    const userId = req.user.id;
    return this.orderService.createOrder({ ...createOrderDto, userId });
  }

  @Get()
  async findOrdersByUser(@Request() req) {
    const userId = req.user.id;
    return this.orderService.findOrdersByUser(userId);
  }
}
