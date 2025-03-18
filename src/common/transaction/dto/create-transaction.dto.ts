import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsDateString,
} from 'class-validator';

export class CreateTransactionDto {
  @ApiProperty({
    description: 'The accepted offer for the transaction',
    example: 'Offer for product XYZ',
  })
  @IsString()
  acceptedOffer: string;

  @ApiProperty({
    description: 'The billing address associated with the transaction',
    example: '123 Main St, City, Country',
  })
  @IsString()
  billingAddress: string;

  @ApiProperty({
    description: 'Optional broker ID associated with the transaction',
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  brokerId?: number;

  @ApiProperty({
    description: 'Confirmation number for the transaction',
    example: 'CONF123456',
  })
  @IsString()
  confirmationNumber: string;

  @ApiProperty({
    description: 'The ID of the customer making the transaction',
    example: 1,
  })
  @IsNumber()
  customerId: number;

  @ApiProperty({
    description: 'Optional discount applied to the transaction',
    example: 10.0,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  discount?: number;

  @ApiProperty({
    description: 'Optional discount code used in the transaction',
    example: 'DISCOUNT10',
    required: false,
  })
  @IsOptional()
  @IsString()
  discountCode?: string;

  @ApiProperty({
    description: 'Optional discount currency for the transaction',
    example: 'USD',
    required: false,
  })
  @IsOptional()
  @IsString()
  discountCurrency?: string;

  @ApiProperty({
    description: 'Indicates if the transaction is a gift',
    example: true,
  })
  @IsBoolean()
  isGift: boolean;

  @ApiProperty({
    description: 'The order date of the transaction',
    example: '2025-03-18T00:00:00.000Z',
  })
  @IsDateString()
  orderDate: string;

  @ApiProperty({
    description: 'Optional order delivery ID for the transaction',
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  orderDeliveryId?: number;

  @ApiProperty({
    description: 'Order number associated with the transaction',
    example: 'ORD-123456',
  })
  @IsString()
  orderNumber: string;

  @ApiProperty({
    description: 'Order status of the transaction',
    example: 'PENDING',
  })
  @IsString()
  orderStatus: string;

  @ApiProperty({
    description: 'ID of the ordered item',
    example: 1,
  })
  @IsNumber()
  orderedItemId: number;

  @ApiProperty({
    description: 'Payment due date for the transaction',
    example: '2025-03-25T00:00:00.000Z',
  })
  @IsDateString()
  paymentDueDate: string;

  @ApiProperty({
    description: 'Payment method used for the transaction',
  })
  paymentMethod: string;

  @ApiProperty({
    description: 'Optional payment method ID (e.g., for gateways)',
    example: 'pm_123456',
    required: false,
  })
  @IsOptional()
  @IsString()
  paymentMethodId?: string;

  @ApiProperty({
    description: 'Optional payment URL for the transaction',
    example: 'https://paymentgateway.com/confirm',
    required: false,
  })
  @IsOptional()
  @IsString()
  paymentUrl?: string;

  @ApiProperty({
    description: 'ID of the seller involved in the transaction',
    example: 1,
  })
  @IsNumber()
  sellerId: number;

  @ApiProperty({
    description: 'Transaction creation date',
    example: '2025-03-18T00:00:00.000Z',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  createdAt?: string;

  @ApiProperty({
    description: 'Transaction update date',
    example: '2025-03-18T00:00:00.000Z',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  updatedAt?: string;
}
