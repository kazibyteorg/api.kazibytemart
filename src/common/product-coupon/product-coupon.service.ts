import { Injectable } from '@nestjs/common';
import { CreateProductCouponDto } from './dto/create-product-coupon.dto';
import { UpdateProductCouponDto } from './dto/update-product-coupon.dto';

@Injectable()
export class ProductCouponService {
  create(createProductCouponDto: CreateProductCouponDto) {
    return 'This action adds a new productCoupon';
  }

  findAll() {
    return `This action returns all productCoupon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productCoupon`;
  }

  update(id: number, updateProductCouponDto: UpdateProductCouponDto) {
    return `This action updates a #${id} productCoupon`;
  }

  remove(id: number) {
    return `This action removes a #${id} productCoupon`;
  }
}
