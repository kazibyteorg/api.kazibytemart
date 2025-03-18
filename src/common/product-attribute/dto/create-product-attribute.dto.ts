import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateProductAttributeDto {
  @ApiProperty({
    description: 'Unique identifier for the product attribute',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'ID of the product associated with this attribute',
    example: 'ck8jsdf70e9b0s2a6w1v',
  })
  @IsString()
  @IsNotEmpty()
  productId: string;

  @ApiProperty({
    description: 'Name of the attribute (e.g., "Color", "Size", "Material")',
    example: 'Color',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Value of the attribute (e.g., "Red", "XL", "Cotton")',
    example: 'Red',
  })
  @IsString()
  @IsNotEmpty()
  value: string;

  @ApiProperty({
    description: 'Date and time when the product attribute was created',
    example: '2025-03-18T12:00:00Z',
    default: new Date().toISOString(),
  })
  @IsString()
  createdAt: string;

  @ApiProperty({
    description: 'Date and time when the product attribute was last updated',
    example: '2025-03-18T12:00:00Z',
  })
  @IsString()
  updatedAt: string;
}
