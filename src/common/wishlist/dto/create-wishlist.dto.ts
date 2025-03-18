import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreateWishlistDto {
  @ApiProperty({
    description: 'Unique identifier for the user owning the wishlist',
    example: 'ck8jsdf70e9b0s2a6w1v',
  })
  @IsString()
  userId: string;

  @ApiProperty({
    description: 'Array of items in the wishlist',
    example: [
      { productId: 'ck8jsdf70e9b0s2a6w1v', variantId: 1 },
      { productId: 'ck8jsdf70e9b0s2a6w2v', variantId: 2 },
    ],
    required: false,
  })
  @IsOptional()
  items?: { productId: string; variantId?: number }[];

  @ApiProperty({
    description: 'The creation date of the wishlist',
    example: '2025-03-18T00:00:00.000Z',
    required: false,
  })
  @IsOptional()
  createdAt?: Date;

  @ApiProperty({
    description: 'The last updated date of the wishlist',
    example: '2025-03-18T00:00:00.000Z',
    required: false,
  })
  @IsOptional()
  updatedAt?: Date;
}
