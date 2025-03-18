import { Test, TestingModule } from '@nestjs/testing';
import { ProductCouponController } from './product-coupon.controller';
import { ProductCouponService } from './product-coupon.service';

describe('ProductCouponController', () => {
  let controller: ProductCouponController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductCouponController],
      providers: [ProductCouponService],
    }).compile();

    controller = module.get<ProductCouponController>(ProductCouponController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
