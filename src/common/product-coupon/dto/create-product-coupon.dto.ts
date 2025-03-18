import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateProductCouponDto {
  @ApiProperty({
    description: 'Unique identifier for the coupon',
    example: 1,
  })
  @IsInt()
  couponId: number;

  @ApiProperty({
    description: 'Unique identifier for the product',
    example: 'ck8jsdf70e9b0s2a6w1v',
  })
  @IsString()
  productId: string;
}
