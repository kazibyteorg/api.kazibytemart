import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsInt,
  IsArray,
  IsBoolean,
  IsDateString,
  IsNumber,
  Min,
  Max,
  IsNotEmpty,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'Unique identifier for the product',
    example: 'cuid-generated-id',
  })
  @IsString()
  id: string;

  @ApiProperty({
    description: 'Name of the product',
    example: 'Smartphone',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Unique stock keeping unit identifier',
    example: 'sku12345',
  })
  @IsString()
  @IsNotEmpty()
  sku: string;

  @ApiProperty({
    description: 'Title of the product',
    example: 'Latest Smartphone Model',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'SEO-friendly URL slug for the product',
    example: 'latest-smartphone-model',
  })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({
    description: 'Cover image URL for the product',
    example: 'https://example.com/cover.jpg',
    required: false,
  })
  @IsOptional()
  @IsString()
  imgCover?: string;

  @ApiProperty({
    description: 'List of image URLs associated with the product',
    example: [
      'https://example.com/image1.jpg',
      'https://example.com/image2.jpg',
    ],
  })
  @IsArray()
  @IsString({ each: true })
  images: string[];

  @ApiProperty({
    description: 'Product description',
    example: 'This is the latest model of a smartphone.',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Short description of the product',
    example: 'Latest smartphone with great features',
    required: false,
  })
  @IsOptional()
  @IsString()
  shortDescription?: string;

  @ApiProperty({
    description: 'Price of the product',
    example: 599.99,
  })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({
    description: 'Color of the product',
    example: 'Black',
    required: false,
  })
  @IsOptional()
  @IsString()
  color?: string;

  @ApiProperty({
    description: 'Price after discount (if any)',
    example: 499.99,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  priceAfterDiscount?: number;

  @ApiProperty({
    description: 'Quantity available in stock',
    example: 100,
  })
  @IsInt()
  @Min(0)
  quantity: number;

  @ApiProperty({
    description: 'Total number of units sold',
    example: 50,
  })
  @IsInt()
  @Min(0)
  sold: number;

  @ApiProperty({
    description: 'ID of the product category',
    example: 1,
  })
  @IsInt()
  categoryId: number;

  @ApiProperty({
    description: 'ID of the product subcategory',
    example: 1,
  })
  @IsInt()
  subcategoryId: number;

  @ApiProperty({
    description: 'ID of the product brand',
    example: 1,
  })
  @IsInt()
  brandId: number;

  @ApiProperty({
    description: 'Indicates if the product is featured',
    example: true,
  })
  @IsBoolean()
  featured: boolean;

  @ApiProperty({
    description: 'Indicates if the product is new',
    example: true,
  })
  @IsBoolean()
  isNew: boolean;

  @ApiProperty({
    description: 'Indicates if the product is a best seller',
    example: false,
  })
  @IsBoolean()
  isBestSeller: boolean;

  @ApiProperty({
    description: 'Indicates if the product is active',
    example: true,
  })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({
    description: 'Weight of the product (in kg)',
    example: 0.5,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  weight?: number;

  @ApiProperty({
    description: 'Dimensions of the product (LxWxH in cm)',
    example: '10x5x2',
    required: false,
  })
  @IsOptional()
  @IsString()
  dimensions?: string;

  @ApiProperty({
    description: 'List of tags associated with the product',
    example: ['smartphone', 'latest', 'technology'],
  })
  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @ApiProperty({
    description: 'SEO title for the product page',
    example: 'Buy Latest Smartphone - Best Prices',
    required: false,
  })
  @IsOptional()
  @IsString()
  metaTitle?: string;

  @ApiProperty({
    description: 'SEO description for the product page',
    example:
      'Latest smartphone model with advanced features and excellent performance.',
    required: false,
  })
  @IsOptional()
  @IsString()
  metaDescription?: string;

  @ApiProperty({
    description: 'Average rating of the product',
    example: 4.5,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  ratingAvg?: number;

  @ApiProperty({
    description: 'Number of ratings the product has received',
    example: 100,
  })
  @IsInt()
  @Min(0)
  ratingCount: number;

  @ApiProperty({
    description: 'Release date of the product',
    example: '2025-03-18T12:00:00Z',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  releaseDate?: string;

  @ApiProperty({
    description: 'Date and time when the product was created',
    example: '2025-03-18T12:00:00Z',
    default: new Date().toISOString(),
  })
  @IsDateString()
  createdAt: string;

  @ApiProperty({
    description: 'Date and time when the product was last updated',
    example: '2025-03-18T12:00:00Z',
  })
  @IsDateString()
  updatedAt: string;
}
