import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsBoolean,
  IsOptional,
  IsNumber,
  IsInt,
  Min,
  IsDateString,
  IsNotEmpty,
} from 'class-validator';

export class CreateCouponDto {
  @ApiProperty({
    description: 'Unique identifier for the coupon',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Unique code for the coupon (e.g., "SUMMER2025")',
    example: 'SUMMER2025',
  })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({
    description: 'Description of the coupon (optional)',
    example: 'Summer 2025 Sale - 20% off',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Discount value, either an amount or percentage',
    example: 20,
  })
  @IsNumber()
  @Min(0)
  discount: number;

  @ApiProperty({
    description: 'Whether the discount is a percentage or a fixed amount',
    example: true,
  })
  @IsBoolean()
  isPercentage: boolean;

  @ApiProperty({
    description: 'Minimum purchase amount required to use the coupon',
    example: 100,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  minPurchase?: number;

  @ApiProperty({
    description:
      'Maximum discount allowed for percentage coupons (e.g., maximum of $50 for a 20% discount)',
    example: 50,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  maxDiscount?: number;

  @ApiProperty({
    description: 'Start date of the coupon validity',
    example: '2025-06-01T00:00:00Z',
  })
  @IsDateString()
  startDate: string;

  @ApiProperty({
    description: 'Expiration date of the coupon',
    example: '2025-06-30T23:59:59Z',
  })
  @IsDateString()
  expiration: string;

  @ApiProperty({
    description: 'The total number of times the coupon can be used',
    example: 100,
    required: false,
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  usageLimit?: number;

  @ApiProperty({
    description: 'The number of times each user can use this coupon',
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  perUserLimit?: number;

  @ApiProperty({
    description: 'Whether the coupon is active or not',
    example: true,
  })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({
    description: 'Date and time when the coupon was created',
    example: '2025-03-18T12:00:00Z',
    default: new Date().toISOString(),
  })
  @IsString()
  createdAt: string;

  @ApiProperty({
    description: 'Date and time when the coupon was last updated',
    example: '2025-03-18T12:00:00Z',
  })
  @IsString()
  updatedAt: string;
}
