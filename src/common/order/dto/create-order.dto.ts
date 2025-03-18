import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsEnum,
  IsOptional,
  IsDateString,
} from 'class-validator';
import { OrderStatus, PaymentStatus } from '@prisma/client'; // Assuming you have this enum

export class CreateOrderDto {
  @ApiProperty({
    description: 'Unique order number for the order',
    example: 'ORD-123456',
  })
  @IsString()
  orderNumber: string;

  @ApiProperty({
    description: 'Unique identifier for the user placing the order',
    example: 'ck8jsdf70e9b0s2a6w1v',
  })
  @IsString()
  userId: string;

  @ApiProperty({
    description: 'Unique identifier for the shipping address',
    example: 'ck8jsdf70e9b0s2a6w1v',
  })
  @IsString()
  shippingAddressId: string;

  @ApiProperty({
    description: 'Unique identifier for the billing address',
    example: 'ck8jsdf70e9b0s2a6w1v',
  })
  @IsString()
  billingAddressId: string;

  @ApiProperty({
    description: 'Subtotal amount for the order',
    example: 100.0,
  })
  @IsNumber()
  subtotal: number;

  @ApiProperty({
    description: 'Tax amount for the order',
    example: 10.0,
  })
  @IsNumber()
  tax: number;

  @ApiProperty({
    description: 'Shipping fee for the order',
    example: 5.0,
  })
  @IsNumber()
  shippingFee: number;

  @ApiProperty({
    description: 'Discount applied to the order',
    example: 10.0,
  })
  @IsNumber()
  discount: number;

  @ApiProperty({
    description:
      'Unique identifier for the coupon applied to the order (optional)',
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  couponId?: number;

  @ApiProperty({
    description:
      'Grand total of the order after all calculations (subtotal, tax, shipping, discount)',
    example: 105.0,
  })
  @IsNumber()
  grandTotal: number;

  @ApiProperty({
    description: 'Order status',
    enum: OrderStatus,
    example: OrderStatus.PENDING,
  })
  @IsEnum(OrderStatus)
  orderStatus: OrderStatus;

  @ApiProperty({
    description: 'Payment status of the order',
    enum: PaymentStatus,
    example: PaymentStatus.PENDING,
  })
  @IsEnum(PaymentStatus)
  paymentStatus: PaymentStatus;

  @ApiProperty({
    description: 'Payment method used for the order',
    example: 'credit_card',
  })
  @IsString()
  paymentMethod: string;

  @ApiProperty({
    description: 'Payment intent ID (optional, for payment gateway reference)',
    example: 'pi_1234567890',
    required: false,
  })
  @IsOptional()
  @IsString()
  paymentIntentId?: string;

  @ApiProperty({
    description: 'Additional notes related to the order',
    example: 'Please deliver between 2 PM and 4 PM',
    required: false,
  })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({
    description: 'Order creation date',
    example: '2025-03-18T00:00:00.000Z',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  createdAt?: string;

  @ApiProperty({
    description: 'Order update date',
    example: '2025-03-18T00:00:00.000Z',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  updatedAt?: string;
}
