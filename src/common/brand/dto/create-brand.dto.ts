import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsNotEmpty,
  IsUrl,
} from 'class-validator';

export class CreateBrandDto {
  @ApiProperty({
    description: 'Unique identifier for the brand',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Name of the brand',
    example: 'Apple',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'SEO-friendly URL slug for the brand',
    example: 'apple',
  })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({
    description: 'Description of the brand',
    example:
      'A technology company that designs and manufactures smartphones, computers, and other consumer electronics.',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Logo URL for the brand',
    example: 'https://example.com/logo.jpg',
  })
  @IsString()
  @IsNotEmpty()
  logo: string;

  @ApiProperty({
    description: 'Website URL for the brand',
    example: 'https://www.apple.com',
    required: false,
  })
  @IsOptional()
  @IsUrl()
  website?: string;

  @ApiProperty({
    description: 'Indicates if the brand is active',
    example: true,
  })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({
    description: 'Date and time when the brand was created',
    example: '2025-03-18T12:00:00Z',
    default: new Date().toISOString(),
  })
  @IsString()
  createdAt: string;

  @ApiProperty({
    description: 'Date and time when the brand was last updated',
    example: '2025-03-18T12:00:00Z',
  })
  @IsString()
  updatedAt: string;
}
