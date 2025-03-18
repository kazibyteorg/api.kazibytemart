import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsInt,
  Min,
} from 'class-validator';

export class CreateOrderedItemDto {
  @ApiProperty({
    description: 'ID of the order item',
    example: 'cuid()',
  })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    description: 'ID of the order associated with this order item',
    example: 'cuid()',
  })
  @IsString()
  @IsNotEmpty()
  orderId: string;

  @ApiProperty({
    description: 'ID of the product associated with this order item',
    example: 'cuid()',
  })
  @IsString()
  @IsNotEmpty()
  productId: string;

  @ApiProperty({
    description: 'Name of the product in the order item',
    example: 'Apple iPhone 13',
  })
  @IsString()
  @IsNotEmpty()
  productName: string;

  @ApiProperty({
    description: 'Name of the product variant (if any)',
    example: '128GB, Black',
    required: false,
  })
  @IsOptional()
  @IsString()
  variantName?: string;

  @ApiProperty({
    description: 'Product SKU (Stock Keeping Unit)',
    example: 'IP13-128GB-BK',
  })
  @IsString()
  @IsNotEmpty()
  sku: string;

  @ApiProperty({
    description: 'Price of the product in the order item',
    example: 799.99,
  })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({
    description: 'Quantity of the product in the order item',
    example: 1,
  })
  @IsInt()
  @Min(1)
  quantity: number;

  @ApiProperty({
    description: 'Discount applied to the order item (if any)',
    example: 10.0,
    default: 0,
  })
  @IsNumber()
  @Min(0)
  discount: number;

  @ApiProperty({
    description: 'Tax applied to the order item',
    example: 5.0,
    default: 0,
  })
  @IsNumber()
  @Min(0)
  tax: number;
}
