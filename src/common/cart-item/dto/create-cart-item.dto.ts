import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
} from 'class-validator';

export class CreateCartItemDto {
  @ApiProperty({
    description: 'Unique identifier for the cart item',
    example: 'ck8jsdf70e9b0s2a6w1v',
  })
  @IsString()
  cartId: string;

  @ApiProperty({
    description: 'Unique identifier for the product in the cart item',
    example: 'ck8jsdf70e9b0s2a6w1v',
  })
  @IsString()
  productId: string;

  @ApiProperty({
    description: 'Unique identifier for the variant of the product',
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsInt()
  variantId?: number;

  @ApiProperty({
    description: 'Quantity of the product in the cart item',
    example: 2,
  })
  @IsInt()
  @IsPositive()
  quantity: number;

  @ApiProperty({
    description: 'Price of the product at the time it was added to the cart',
    example: 50.0,
  })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({
    description: 'Total price for this cart item (quantity * price)',
    example: 100.0,
  })
  @IsNumber()
  @IsPositive()
  total: number;
}
