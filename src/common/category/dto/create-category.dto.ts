import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'Unique identifier for the category',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Name of the category',
    example: 'Electronics',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'SEO-friendly URL slug for the category',
    example: 'electronics',
  })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({
    description: 'Description of the category',
    example: 'All kinds of electronic gadgets and devices.',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Image URL for the category',
    example: 'https://example.com/category-image.jpg',
    required: false,
  })
  @IsOptional()
  @IsString()
  image?: string;

  @ApiProperty({
    description: 'Indicates if the category is active',
    example: true,
  })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({
    description: 'Date and time when the category was created',
    example: '2025-03-18T12:00:00Z',
    default: new Date().toISOString(),
  })
  @IsString()
  createdAt: string;

  @ApiProperty({
    description: 'Date and time when the category was last updated',
    example: '2025-03-18T12:00:00Z',
  })
  @IsString()
  updatedAt: string;
}
