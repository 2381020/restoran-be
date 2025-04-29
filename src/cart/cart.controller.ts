// src/cart/cart.controller.ts
import { UseGuards, Request, Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './create-cart.dto';
import { UpdateCartDto } from './update-cart.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async create(@Request() req, @Body() createCartDto: CreateCartDto) {
    console.log('createCartDto:', createCartDto);
    const userId = req.user.id;
    const cart = await this.cartService.create({ ...createCartDto, userId });
    return { message: 'Item berhasil ditambahkan ke keranjang', data: cart };
  }

  @Get()
  async findByUser(@Request() req) {
    const userId = req.user.id;
    const carts = await this.cartService.findByUser(userId);
    return { message: 'Daftar keranjang', data: carts };
  }

  @Patch()
  async updateQuantity(@Request() req, @Body() updateCartDto: UpdateCartDto) {
    const userId = req.user.id;
    const updated = await this.cartService.updateQuantity({ ...updateCartDto, userId });
    return { message: 'Quantity berhasil diperbarui', data: updated };
  }

  @Delete(':menuId')
  async remove(@Request() req, @Param('menuId') menuId: number) {
    const userId = req.user.id;
    await this.cartService.remove(userId, menuId);
    return { message: 'Item berhasil dihapus dari keranjang' };
  }

  @Delete('clear/all')
  async clearCart(@Request() req) {
    const userId = req.user.id;
    await this.cartService.clearCart(userId);
    return { message: 'Semua item di keranjang berhasil dihapus' };
  }
}
