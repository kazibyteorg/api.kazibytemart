import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsDate } from 'class-validator';

export class CreateAddressDto {
  @ApiProperty({
    example: '123456',
    description: 'User ID associated with the address',
  })
  @IsString()
  userId: string;

  @ApiProperty({
    example: 'United States',
    description: 'Country',
    required: false,
  })
  @IsOptional()
  @IsString()
  addressCountry?: string;

  @ApiProperty({
    example: 'New York',
    description: 'Locality (City)',
    required: false,
  })
  @IsOptional()
  @IsString()
  addressLocality?: string;

  @ApiProperty({
    example: 'New York',
    description: 'Region (State/Province)',
    required: false,
  })
  @IsOptional()
  @IsString()
  addressRegion?: string;

  @ApiProperty({
    example: 'PO Box 1234',
    description: 'Post office box number',
    required: false,
  })
  @IsOptional()
  @IsString()
  postOfficeBoxNumber?: string;

  @ApiProperty({
    example: '10001',
    description: 'Postal code',
    required: false,
  })
  @IsOptional()
  @IsString()
  postalCode?: string;

  @ApiProperty({
    example: '123 Main St',
    description: 'Street address',
    required: false,
  })
  @IsOptional()
  @IsString()
  streetAddress?: string;

  @ApiProperty({
    example: 'English, Spanish',
    description: 'Available language',
    required: false,
  })
  @IsOptional()
  @IsString()
  availableLanguage?: string;

  @ApiProperty({
    example: 'info@example.com',
    description: 'Email address',
    required: false,
  })
  @IsOptional()
  @IsString()
  email?: string;

  @ApiProperty({
    example: '+1-800-555-1234',
    description: 'Telephone number',
    required: false,
  })
  @IsOptional()
  @IsString()
  telephone?: string;

  @ApiProperty({
    example: 'https://example.com/profile.jpg',
    description: 'Image URL',
    required: false,
  })
  @IsOptional()
  @IsString()
  image?: string;

  @ApiProperty({
    example: 'Home Address',
    description: 'Name of the address',
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    example: 'Primary home address',
    description: 'Description',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: 'https://example.com',
    description: 'Address URL',
    required: false,
  })
  @IsOptional()
  @IsString()
  url?: string;

  @ApiProperty({
    example: '2024-03-18T00:00:00.000Z',
    description: 'Creation timestamp',
    required: false,
  })
  @IsOptional()
  @IsDate()
  createdAt?: Date;
}
