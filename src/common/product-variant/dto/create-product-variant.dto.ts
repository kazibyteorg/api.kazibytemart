import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsInt,
  IsArray,
  IsNumber,
  IsNotEmpty,
  IsJSON,
  Min,
} from 'class-validator';

export class CreateProductVariantDto {
  @ApiProperty({
    description: 'Unique identifier for the product variant',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'ID of the product associated with the variant',
    example: 'ck8jsdf70e9b0s2a6w1v',
  })
  @IsString()
  @IsNotEmpty()
  productId: string;

  @ApiProperty({
    description: 'Unique SKU (Stock Keeping Unit) for the product variant',
    example: 'ABC123XYZ',
  })
  @IsString()
  @IsNotEmpty()
  sku: string;

  @ApiProperty({
    description: 'Name of the product variant (e.g., "Red, Large")',
    example: 'Red, Large',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Price of the product variant',
    example: 199.99,
  })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({
    description: 'Available stock for the product variant',
    example: 50,
  })
  @IsInt()
  @Min(0)
  stock: number;

  @ApiProperty({
    description: 'Array of image URLs for the product variant',
    example: [
      'https://example.com/image1.jpg',
      'https://example.com/image2.jpg',
    ],
  })
  @IsArray()
  @IsString({ each: true })
  images: string[];

  @ApiProperty({
    description:
      'JSON object containing options for the product variant (e.g., color, size)',
    example: '{"color": "red", "size": "L"}',
  })
  @IsJSON()
  options: object;

  @ApiProperty({
    description: 'Date and time when the product variant was created',
    example: '2025-03-18T12:00:00Z',
    default: new Date().toISOString(),
  })
  @IsString()
  createdAt: string;

  @ApiProperty({
    description: 'Date and time when the product variant was last updated',
    example: '2025-03-18T12:00:00Z',
  })
  @IsString()
  updatedAt: string;
}
