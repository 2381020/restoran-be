// src/cart/create-cart.dto.ts
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCartDto {

  @IsNumber()
  @IsNotEmpty()
  menuId: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}
