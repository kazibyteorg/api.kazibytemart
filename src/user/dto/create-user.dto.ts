import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsBoolean,
  IsOptional,
  IsEmail,
  IsDate,
  IsNumber,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: '123456', description: 'Auth User ID' })
  @IsString()
  authUserId: string;

  @ApiProperty({ example: 'John Doe', description: 'Full name' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'user@example.com', description: 'Email address' })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '+1234567890',
    description: 'Phone number',
    required: false,
  })
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @ApiProperty({ example: true, description: 'User active status' })
  @IsBoolean()
  isActive?: boolean = true;

  @ApiProperty({ example: false, description: 'User deleted status' })
  @IsBoolean()
  isDeleted?: boolean = false;

  @ApiProperty({
    example: 'John',
    description: 'Given (first) name',
    required: false,
  })
  @IsOptional()
  @IsString()
  givenName?: string;

  @ApiProperty({
    example: 'Doe',
    description: 'Family (last) name',
    required: false,
  })
  @IsOptional()
  @IsString()
  familyName?: string;

  @ApiProperty({
    example: 'Middle',
    description: 'Additional (middle) name',
    required: false,
  })
  @IsOptional()
  @IsString()
  additionalName?: string;

  @ApiProperty({
    example: '2024-03-18T00:00:00.000Z',
    description: 'Birth date',
    required: false,
  })
  @IsOptional()
  @IsDate()
  birthDate?: Date;

  @ApiProperty({
    example: 'New York, USA',
    description: 'Birth place',
    required: false,
  })
  @IsOptional()
  @IsString()
  birthPlace?: string;

  @ApiProperty({
    example: 'American',
    description: 'Nationality',
    required: false,
  })
  @IsOptional()
  @IsString()
  nationality?: string;

  @ApiProperty({ example: 'Male', description: 'Gender', required: false })
  @IsOptional()
  @IsString()
  gender?: string;

  @ApiProperty({
    example: 'Software Engineer',
    description: 'Job title',
    required: false,
  })
  @IsOptional()
  @IsString()
  jobTitle?: string;

  @ApiProperty({
    example: 'Tech Company',
    description: 'Works for',
    required: false,
  })
  @IsOptional()
  @IsString()
  worksFor?: string;

  @ApiProperty({ example: 'Coding', description: 'Skills', required: false })
  @IsOptional()
  @IsString()
  skills?: string;

  @ApiProperty({
    example: 'English, Spanish',
    description: 'Languages known',
    required: false,
  })
  @IsOptional()
  @IsString()
  knowsLanguage?: string;

  @ApiProperty({
    example: 'https://example.com/profile.jpg',
    description: 'Profile image URL',
    required: false,
  })
  @IsOptional()
  @IsString()
  image?: string;

  @ApiProperty({
    example: 'Personal bio',
    description: 'User description',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: 'https://example.com',
    description: 'Personal website URL',
    required: false,
  })
  @IsOptional()
  @IsString()
  url?: string;

  @ApiProperty({ example: 100000, description: 'Net worth', required: false })
  @IsOptional()
  @IsNumber()
  netWorth?: number;
}
