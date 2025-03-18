import { PartialType } from '@nestjs/swagger';
import { CreateProductCouponDto } from './create-product-coupon.dto';

export class UpdateProductCouponDto extends PartialType(
  CreateProductCouponDto,
) {}
