import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsDate } from 'class-validator';

export class CreatePaymentMethodDto {
  @ApiProperty({
    example: '123456',
    description: 'User ID associated with the payment method',
  })
  @IsString()
  userId: string;

  @ApiProperty({
    example: 'Credit Card',
    description: 'Type of payment method',
  })
  @IsString()
  paymentMethodType: string;

  @ApiProperty({
    example: 'MasterCard',
    description: 'Additional type',
    required: false,
  })
  @IsOptional()
  @IsString()
  additionalType?: string;

  @ApiProperty({
    example: 'Personal Card',
    description: 'Alternate name',
    required: false,
  })
  @IsOptional()
  @IsString()
  alternateName?: string;

  @ApiProperty({
    example: 'Primary payment method',
    description: 'Description',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: 'Card ending in 1234',
    description: 'Disambiguating description',
    required: false,
  })
  @IsOptional()
  @IsString()
  disambiguatingDescription?: string;

  @ApiProperty({
    example: 'PM123456',
    description: 'Unique identifier',
    required: false,
  })
  @IsOptional()
  @IsString()
  identifier?: string;

  @ApiProperty({
    example: 'https://example.com/image.png',
    description: 'Image URL',
    required: false,
  })
  @IsOptional()
  @IsString()
  image?: string;

  @ApiProperty({
    example: 'https://example.com',
    description: 'Main entity of page URL',
    required: false,
  })
  @IsOptional()
  @IsString()
  mainEntityOfPage?: string;

  @ApiProperty({
    example: 'Visa Card',
    description: 'Name of the payment method',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'https://example.com/action',
    description: 'Potential action URL',
    required: false,
  })
  @IsOptional()
  @IsString()
  potentialAction?: string;

  @ApiProperty({
    example: 'https://same-as-example.com',
    description: 'Same as URL',
    required: false,
  })
  @IsOptional()
  @IsString()
  sameAs?: string;

  @ApiProperty({
    example: 'https://example.com/subject',
    description: 'Subject of URL',
    required: false,
  })
  @IsOptional()
  @IsString()
  subjectOf?: string;

  @ApiProperty({
    example: 'https://example.com',
    description: 'Payment method URL',
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
