import { Controller, Get, Post, Body } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController { // Ensure that CartController is being exported
  constructor(private readonly cartService: CartService) {}

  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @Post()
  create(@Body() data: any) {
    return this.cartService.create(data);
  }
}
