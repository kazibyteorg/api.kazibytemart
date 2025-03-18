import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsInt,
  IsOptional,
  IsBoolean,
  IsNotEmpty,
  Min,
  Max,
} from 'class-validator';

export class CreateReviewDto {
  @ApiProperty({
    description: 'Unique identifier for the review',
    example: 'ck8jsdf70e9b0s2a6w1v',
  })
  id: string;

  @ApiProperty({
    description: 'Rating given in the review (from 1 to 5)',
    example: 5,
  })
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @ApiProperty({
    description: 'Title of the review (optional)',
    example: 'Excellent product!',
    required: false,
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({
    description: 'Comment or feedback provided in the review',
    example: 'The product is fantastic! Highly recommended.',
  })
  @IsString()
  @IsNotEmpty()
  comment: string;

  @ApiProperty({
    description: 'ID of the product being reviewed',
    example: 'ck8jsdf70e9b0s2a6w1v',
  })
  @IsString()
  @IsNotEmpty()
  productId: string;

  @ApiProperty({
    description: 'ID of the user submitting the review',
    example: 'user123',
  })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({
    description:
      'Indicates if the review is verified (i.e., the user actually purchased the product)',
    example: false,
  })
  @IsBoolean()
  isVerified: boolean;

  @ApiProperty({
    description:
      'Indicates if the review is published and visible to other users',
    example: true,
  })
  @IsBoolean()
  isPublished: boolean;

  @ApiProperty({
    description: 'Date and time when the review was created',
    example: '2025-03-18T12:00:00Z',
    default: new Date().toISOString(),
  })
  @IsString()
  createdAt: string;

  @ApiProperty({
    description: 'Date and time when the review was last updated',
    example: '2025-03-18T12:00:00Z',
  })
  @IsString()
  updatedAt: string;
}
