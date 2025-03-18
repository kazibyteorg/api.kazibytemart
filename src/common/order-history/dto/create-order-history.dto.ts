import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsOptional,
} from 'class-validator';

export class CreateOrderHistoryDto {
  @ApiProperty({
    description: 'ID of the order history record',
    example: 'cuid()',
  })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    description: 'Order ID associated with the history record',
    example: 'cuid()',
  })
  @IsString()
  @IsNotEmpty()
  orderId: string;

  @ApiProperty({
    description: 'Status of the order at the specific time',
    example: 'shipped',
  })
  @IsString()
  @IsNotEmpty()
  orderStatus: string;

  @ApiProperty({
    description: 'Date when the order history was created',
    example: '2023-01-01T00:00:00.000Z',
  })
  @IsDateString()
  createdAt: string;

  @ApiProperty({
    description: 'Date when the order history was last updated',
    example: '2023-01-02T00:00:00.000Z',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  updatedAt?: string;
}
