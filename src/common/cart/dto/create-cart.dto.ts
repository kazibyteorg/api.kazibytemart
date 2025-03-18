import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsOptional,
  IsInt,
  IsPositive,
} from 'class-validator';

export class CreateCartDto {
  @ApiProperty({
    description: 'Unique identifier for the cart',
    example: 'ck8jsdf70e9b0s2a6w1v',
  })
  @IsString()
  userId: string;

  @ApiProperty({
    description: 'Total price of the items in the cart before any discounts',
    example: 150.0,
  })
  @IsNumber()
  @IsPositive()
  totalPrice: number;

  @ApiProperty({
    description: 'Total price after applying any discounts',
    example: 120.0,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  totalPriceAfterDiscount?: number;

  @ApiProperty({
    description: 'Applied coupon ID, if any',
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsInt()
  appliedCouponId?: number;

  @ApiProperty({
    description: 'Discount amount applied to the cart, if any',
    example: 30.0,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  discount?: number;

  @ApiProperty({
    description: 'Creation date of the cart',
    example: '2025-03-18T12:00:00Z',
    default: new Date().toISOString(),
  })
  @IsString()
  createdAt: string;

  @ApiProperty({
    description: 'Date when the cart was last updated',
    example: '2025-03-18T12:00:00Z',
  })
  @IsString()
  updatedAt: string;
}
