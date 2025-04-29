import { IsString, IsNumber, IsPositive, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMenuDto {
  @ApiProperty({ example: 'Nasi Goreng' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 50000 })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({ example: 'Nasi goreng spesial dengan telur dan ayam' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 'https://aslimasako.com/storage/page/new-title-14082023-084547.jpg' })
  @IsString()
  @IsNotEmpty()
  imageUrl: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsPositive()
  restaurantId: number;
}
