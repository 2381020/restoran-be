import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController { // Ensure that OrderController is being exported
  constructor(private readonly orderService: OrderService) {}

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Post()
  create(@Body() data: any) {
    return this.orderService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }
}
