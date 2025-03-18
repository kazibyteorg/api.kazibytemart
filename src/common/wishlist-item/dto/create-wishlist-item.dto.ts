import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsOptional } from 'class-validator';

export class CreateWishlistItemDto {
  @ApiProperty({
    description: 'Unique identifier for the wishlist that the item belongs to',
    example: 'ck8jsdf70e9b0s2a6w1v',
  })
  @IsString()
  wishlistId: string;

  @ApiProperty({
    description: 'Unique identifier for the product in the wishlist item',
    example: 'ck8jsdf70e9b0s2a6w1v',
  })
  @IsString()
  productId: string;

  @ApiProperty({
    description: 'The date when the product was added to the wishlist',
    example: '2025-03-18T00:00:00.000Z',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  addedAt?: string;
}
