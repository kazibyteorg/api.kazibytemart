import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsPositive, IsNumber } from 'class-validator';

export class CreateOrderedItemDto {
  @ApiProperty({
    description: 'The name of the ordered item',
    example: 'Product ABC',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The quantity of the ordered item',
    example: 2,
  })
  @IsInt()
  @IsPositive()
  quantity: number;

  @ApiProperty({
    description: 'The price of the ordered item',
    example: 29.99,
  })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({
    description: 'The description of the ordered item',
    example: 'A detailed description of Product ABC',
  })
  @IsString()
  description: string;
}
