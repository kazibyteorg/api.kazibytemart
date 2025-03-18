import { Module } from '@nestjs/common';
import { ProductCouponService } from './product-coupon.service';
import { ProductCouponController } from './product-coupon.controller';

@Module({
  controllers: [ProductCouponController],
  providers: [ProductCouponService],
})
export class ProductCouponModule {}
