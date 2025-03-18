import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsOptional,
  IsInt,
  IsArray,
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
    description: 'Array of items in the cart',
    required: false,
  })
  @IsOptional()
  @IsArray()
  items?: CartItemDto[];

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
    description: 'Coupon details applied to the cart',
    type: () => CouponDto,
    required: false,
  })
  @IsOptional()
  appliedCoupon?: CouponDto;

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

class CartItemDto {
  @ApiProperty({
    description: 'Unique identifier for the cart item',
    example: 'ck8jsdf70e9b0s2a6w1v',
  })
  @IsString()
  productId: string;

  @ApiProperty({
    description: 'Quantity of the product in the cart',
    example: 2,
  })
  @IsInt()
  @IsPositive()
  quantity: number;

  @ApiProperty({
    description: 'Price of a single unit of the product',
    example: 50.0,
  })
  @IsNumber()
  @IsPositive()
  price: number;
}

class CouponDto {
  @ApiProperty({
    description: 'Unique identifier for the coupon',
    example: 1,
  })
  @IsInt()
  id: number;

  @ApiProperty({
    description: 'Coupon code, e.g., "SUMMER2025"',
    example: 'SUMMER2025',
  })
  @IsString()
  code: string;

  @ApiProperty({
    description: 'Discount value for the coupon',
    example: 20.0,
  })
  @IsNumber()
  discount: number;
}
