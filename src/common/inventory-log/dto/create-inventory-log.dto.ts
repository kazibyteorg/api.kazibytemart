import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsInt,
  IsOptional,
  IsNotEmpty,
  Min,
  Max,
} from 'class-validator';

export class CreateInventoryLogDto {
  @ApiProperty({
    description: 'Unique identifier for the inventory log entry',
    example: 'ck8jsdf70e9b0s2a6w1v',
  })
  id: string;

  @ApiProperty({
    description: 'ID of the product associated with the inventory log',
    example: 'ck8jsdf70e9b0s2a6w1v',
  })
  @IsString()
  @IsNotEmpty()
  productId: string;

  @ApiProperty({
    description:
      'Quantity of stock being updated (can be positive for stock in or negative for stock out)',
    example: 10,
  })
  @IsInt()
  @Min(-1000)
  @Max(1000)
  quantity: number;

  @ApiProperty({
    description:
      'Reason for the inventory change (e.g., "purchase", "sale", "return", "adjustment")',
    example: 'purchase',
  })
  @IsString()
  @IsNotEmpty()
  reason: string;

  @ApiProperty({
    description:
      'Reference ID for the action (e.g., Order ID, Purchase ID) (optional)',
    example: 'ORD12345',
    required: false,
  })
  @IsOptional()
  @IsString()
  reference?: string;

  @ApiProperty({
    description: 'Additional notes regarding the inventory change (optional)',
    example: 'Stock replenished after recent sale',
    required: false,
  })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({
    description: 'Date and time when the inventory log entry was created',
    example: '2025-03-18T12:00:00Z',
    default: new Date().toISOString(),
  })
  @IsString()
  createdAt: string;

  @ApiProperty({
    description:
      'User ID of the person who performed the action (e.g., the one who updated the inventory)',
    example: 'user123',
  })
  @IsString()
  @IsNotEmpty()
  createdBy: string;
}
